import React from "react";
import { NavBar } from "../../components/Navbar/Navbar";
import { ButtonHome } from "../../components/ButtonHome/ButtonHome";

export const AvisoLegal = () => {
  return (
    <>
      <NavBar />
      <div className="mx-auto max-w-96 lg:text-center">
        <h1 className="text-base text-center font-semibold leading-7 text-indigo-600">
          AVISO LEGAL
        </h1>
        <p className="mt-2 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
          Información sobre los derechos y contenidos
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          MarcTV+ es un proveedor de servicios de Internet que ofrece una
          plataforma que solo muestra enlaces a contenidos audiovisuales
          ubicados en servidores de terceros y proveidos y / o transmitidos por
          terceros. Nadie puede responsabilizar a MarcTV+ de alojar contenido
          con copyright ya que nosotros no alojamos ningun contenido con
          derechos de autor ni tampoco transmitimos ningun contenido
          audiovisual. Por favor: Averigue bien en que sitio web estan realmente
          alojados sus archivos, o contenido audiovisual; antes de culpar a
          MarcTV+ de infrigir derechos de autor. Los enlaces que figuran en esta
          web han sido encontrados en diferentes webs de streaming online
          (ustream.tv , justin.tv, yukons.net, mips.tv, dinozap.tv, castalba.tv
          sawlive.tv, entre otros...) y desconocemos si los mismos tienen
          contratos de cesión de derechos sobre estos partidos o eventos de pago
          para reproducirlos, alojarlos o permitir verlos. Todas las marcas aquí
          mencionadas y logos están registrados por sus legítimos propietarios y
          solamente se emplean en referencia a las mismas y con un fin de cita o
          comentario. No nos hacemos responsables del uso indebido que puedes
          hacer del contenido de nuestra página. Todo el contenido ha sido
          exclusivamente sacado de sitios públicos de Internet, por lo que este
          material es considerado de libre distribución. En ningún artículo
          legal se menciona la prohibición de material libre por lo que esta
          página no infringe en ningún caso la ley. Si alguien tiene alguna duda
          o problema al respecto, no dude en ponerse en contacto con nosotros.
          En ningún caso o circunstancia se podrá responsabilizar directamente o
          indirectamente al propietario ni a los colaboradores de MarcTV+ del
          ilícito uso de la información contenida en marcTV+.io. Así mismo
          tampoco se nos podrá responsabilizar directamente o indirectamente de
          incorrecto uso o mala interpretación que se haga de la información y
          servicios incluidos. Igualmente quedara fuera de nuestra
          responsabilidad el material al que usted pueda acceder desde nuestros
          enlaces{" "}
        </p>
      </div>
      <ButtonHome />
    </>
  );
};
