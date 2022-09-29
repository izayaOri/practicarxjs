import { Observable, Observer } from "rxjs";;


const observer: Observer<any> = {
    next:       value => console.log('Siguiente [next]:', value ),
    error:      error => console.warn( 'error [obs]:', error ),
    complete:   () => console.info('completado [obs]:')
}

// const obs$ = Observable.create()
const obs$ = new Observable<string>( subscriber => {

    subscriber.next('Hola');
    subscriber.next('Mundo');

    subscriber.complete();

    subscriber.next('test');

});

obs$.subscribe( observer );

// obs$.subscribe( respuesta => { console.log( respuesta ) });
// obs$.subscribe( console.log );

// obs$.subscribe({
//     next:       valor => console.log('next', valor),
//     error:      error => console.warn('error', error),
//     complete:   () => console.info('Completado')
// })

