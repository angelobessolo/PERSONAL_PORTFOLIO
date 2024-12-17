import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, ActivationEnd, NavigationEnd, Router, RouterModule } from '@angular/router';
import { Breadcrumb } from '../../interfaces/breadcrumb-interfaces';
import { filter, map, Subscription } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-bread-crumb',
  standalone: true,
  imports: [
    RouterModule,
    MatIconModule,
    CommonModule,
    TranslateModule
  ],
  templateUrl: './bread-crumb.component.html',
  styleUrl: './bread-crumb.component.css'
})
export class BreadCrumbComponent {
  private translate = inject(TranslateService);
  
  public titulo: string = '';
  public icon: string = '';
  public tituloSubs$: Subscription | null = null;
  public breadcrumbs: Breadcrumb[] = [];
  showBreadCrumb: boolean = true;
  eventAction = output<any>(); 

  constructor(private router: Router, private route: ActivatedRoute, private cdref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.reload();
    if  (this.breadcrumbs.length === 0) {
      this.breadcrumbs = this.createBreadcrumbs(this.router.routerState.root);
    }
    
  }

  ngOnDestroy(): void {
    if (this.tituloSubs$) {
      this.tituloSubs$.unsubscribe();
    }
  }

  getArgumentosRuta() {
    return this.router.events
      .pipe(
        // Filtra solo los eventos de tipo ActivationEnd
        filter((event): event is ActivationEnd => event instanceof ActivationEnd),
        // Filtra solo los eventos donde firstChild es null (último en la cadena)
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        // Mapea el evento para devolver los datos del snapshot
        map((event: ActivationEnd) => event.snapshot.data)
      );
  }

  createBreadcrumbs(route: ActivatedRoute, url: string = '', icon: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const data = child.snapshot.data;
      // Si tienes un valor 'titulo' en los datos de la ruta

      (data['titulo'] === 'Inicio') ? this.showBreadCrumb = false : this.showBreadCrumb = true;

      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      breadcrumbs.push({ 
        label: data['titulo'], 
        path: url,
        icon: data['icon'],
      });

      breadcrumbs[0] = {
        label: 'Inicio',
        path:'home/main',
        icon: 'home',
      }

      return this.createBreadcrumbs(child, url, data['icon'], breadcrumbs);
    }

    return breadcrumbs;
  }

  reRirectPath(item: any) {
    (item === 'home/main') ? this.showBreadCrumb = false : this.showBreadCrumb = true;
    // localStorage.setItem('submodules', JSON.stringify(item.submodules));
    this.router.navigateByUrl(`${item}`).then(() => {
      // Asegura que los breadcrumbs se actualicen después de la navegación
      this.breadcrumbs = this.createBreadcrumbs(this.router.routerState.root);
    });

    this.eventAction.emit(item);
  }

  reload(){
    this.tituloSubs$ = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd), // Usar NavigationEnd
        map(() => this.route.snapshot.firstChild?.data), // Obtener los datos de la ruta activa
        filter(data => !!data && data['titulo']) // Verificar que exista un título en los datos de la ruta
      )
      .subscribe(data => {
        this.titulo = data!['titulo'];
        this.icon = data!['icon'];
        this.breadcrumbs = this.createBreadcrumbs(this.router.routerState.root);
        this.cdref.detectChanges(); // Forzar la detección de cambios
      });
  }
}
