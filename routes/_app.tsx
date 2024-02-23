import { type AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts"

export default function App({ Component }: AppProps) {
  return (
    <>

      <head>
      <link rel="stylesheet" href= "/styles.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"/>


      </head>
   
        <Component />
        

   
    </>
  )
}
