const Koa = require( 'koa' )
const app = new Koa()


const middleware1 = async ( ctx, next ) => {
  console.log( 1 )
  next()
  console.log( '1"' )
}
const middleware3 = async ( ctx, next ) => {
  console.log( 3 )
  next()
  console.log( '3"' )
}
const middleware2 = async ( ctx, next ) => {
  console.log( 2 )
  next()
  console.log( '2"' )
}

app.use( middleware2 )
app.use( middleware1 )
app.use( middleware3 )

app.listen( 3001 )
