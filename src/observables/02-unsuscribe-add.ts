import { Observable, Observer } from 'rxjs';;


const observer: Observer<any> = {
    next:       value => console.log('[next]:', value ),
    error:      error => console.warn( 'error:', error ),
    complete:   () => console.info('completado:')
}



const intervalo$ = new Observable<number>( suscriber => {

    let count: number = 0;

    const interval = setInterval( () => {
        count++;
        suscriber.next( count );
        console.log(count);
    }, 1000 );

    setTimeout(() => {
        suscriber.complete();
    }, 2500);

    return () => {
        clearInterval( interval );
        console.log('Intérvalo destruido');
    }

});

const suscription1 = intervalo$.subscribe( observer );
const suscription2 = intervalo$.subscribe( observer );
const suscription3 = intervalo$.subscribe( observer );

suscription1.add( suscription2 );
suscription1.add( suscription3 );

setTimeout(() => {
    suscription1.unsubscribe();
    // suscription2.unsubscribe();
    // suscription3.unsubscribe();

    console.log('Completado timeout');
}, 3000);