# AppPedidosFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Modularización

```
ng generate module modulos/seguridad --routing
ng generate module modulos/administracion --routing
ng generate module modulos/pedidos --routing
```

## Componentes

```
ng generate component modulos/seguridad/login
ng generate component modulos/seguridad/cambiarPassword
ng generate component modulos/seguridad/recuperarPassword
ng generate component modulos/seguridad/cerrar-session

ng generate component modulos/administracion/personas/create
ng generate component modulos/administracion/personas/edit
ng generate component modulos/administracion/personas/delete
ng generate component modulos/administracion/personas/find

ng generate component modulos/administracion/productos/create-product
ng generate component modulos/administracion/productos/edit-product
ng generate component modulos/administracion/productos/delete-product
ng generate component modulos/administracion/productos/find-product

ng generate component modulos/pedidos/assign
```

## Plantilla

```
ng generate component plantilla/navBar
ng generate component plantilla/footer
ng generate component plantilla/header
ng generate component plantilla/index
```

## Routing

El routing se hace por modulo y en el modulo principal se asocian las demas rutas de los demas modulo utilizando estrategia lazy loading