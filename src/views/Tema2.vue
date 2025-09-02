<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Corresponsabilidad y empoderamiento comunitario

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(style="background-color:#E0F6E1")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-01.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 El ejercicio pleno de los derechos en salud y ambiente no puede entenderse sin el cumplimiento de deberes ciudadanos. La corresponsabilidad reconoce que todas las personas, familias, comunidades, instituciones y sectores sociales comparten la tarea de proteger el bienestar colectivo y cuidar los ecosistemas que lo hacen posible. Esta visión fortalece el empoderamiento comunitario, entendido como la capacidad de la población para organizarse, incidir y transformar su realidad territorial.

    p.mb-4(data-aos="fade-left") En la práctica, la corresponsabilidad se expresa en distintos niveles:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.col-12
        .row.justify-content-center.mb-4
          .col-lg-7.col-12.mb-md-0.order-lg-1.order-2
            LineaTiempoD.color-acento-botones.especial(data-aos="fade-down")
              span(numero="A" titulo="A nivel individual") 
                ul.lista-ul.mb-0
                  li.mb-0
                    i.lista-ul__vineta
                    | Adoptar hábitos de vida saludables (alimentación equilibrada, actividad física, autocuidado).

                  li.mb-0 
                    i.lista-ul__vineta
                    | Evitar prácticas que contaminen o degraden el entorno (manejo adecuado de residuos, uso racional del agua y la energía, protección de la biodiversidad).

                  li.mb-0 
                    i.lista-ul__vineta
                    | Informarse sobre los riesgos del entorno y contribuir a prevenirlos.

              span(numero="B" titulo="A nivel comunitario") 
                ul.lista-ul.mb-0
                  li.mb-0
                    i.lista-ul__vineta
                    | Organizarse para ejercer control social sobre la gestión pública y el cumplimiento de la normatividad sanitaria y ambiental.

                  li.mb-0 
                    i.lista-ul__vineta
                    | Participar en reuniones, jornadas ambientales y campañas educativas.

                  li.mb-0 
                    i.lista-ul__vineta
                    | Cuidar los bienes colectivos como parques, zonas verdes o redes de acueducto.
                  
                  li.mb-0 
                    i.lista-ul__vineta
                    | Promover valores de solidaridad, respeto y cuidado mutuo.
                    
              span(numero="C" titulo="A nivel institucional") 
                ul.lista-ul.mb-0
                  li.mb-0
                    i.lista-ul__vineta
                    | Las entidades del Estado deben garantizar el ejercicio de derechos mediante políticas, servicios y acciones de vigilancia y control.

                  li.mb-0 
                    i.lista-ul__vineta
                    | Sectores como salud, ambiente, educación y desarrollo tienen la obligación de trabajar de manera intersectorial frente a los problemas que afectan simultáneamente la salud y el entorno

          .col-lg-5.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-up")
            figure
              img(src='@/assets/curso/temas/tema2/img-02.png', alt='Imagen decorativa')

    p.mb-4(data-aos="fade-left") Para que esta corresponsabilidad se convierta en práctica cotidiana, es necesario impulsar estrategias de socialización y educación comunitaria que permitan a la población conocer y apropiarse de sus derechos y deberes. Algunas de las más efectivas incluyen:

    .row.justify-content-center.mb-0
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        .tarjeta.tarjeta--BGC02.p-3.mb-4
          .col.mb-0
            ul.lista-ul--color.mt-2
              li.d-flex.align-items-start.mb-0
                i.fas.fa-leaf
                | Talleres y encuentros comunitarios con metodologías participativas.

              li.d-flex.align-items-start.mb-0
                i.fas.fa-leaf
                | Cartillas y guías didácticas con lenguaje sencillo y atractivo.

              li.d-flex.align-items-start.mb-0
                i.fas.fa-leaf
                | Campañas educativas intersectoriales en escuelas, barrios y veredas.

              li.d-flex.align-items-start.mb-0
                i.fas.fa-leaf
                | Herramientas creativas como teatro, murales, radionovelas o títeres.

              li.d-flex.align-items-start.mb-0
                i.fas.fa-leaf
                | Redes sociales comunitarias y grupos de WhatsApp para convocar y compartir buenas prácticas.
              
              li.d-flex.align-items-start.mb-0
                i.fas.fa-leaf
                | Escuelas de formación ciudadana para fortalecer el liderazgo y la incidencia social.
        
        p.mb-4 Este enfoque debe ser territorial, diferencial y accesible, es decir, ajustado a las problemáticas locales, respetuoso de la diversidad cultural, étnica, de género y generacional, y disponible en formatos adecuados para todos.

        .tarjeta.p-3.mb-3(style="background-color:#E0F6E1; border-radius:none !important")
          .row.justify-content-center
            .col-auto.order-lg-1.order-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema2/img-04.svg', alt='Imagen decorativa')
            .col-lg-10.col-12.mb-0.order-lg-2.order-2.mb-lg-0
              p.mb-0 En suma, la corresponsabilidad no es solo un deber ético, sino una apuesta política y social hacia una gobernanza comunitaria de la salud y el ambiente, donde Estado, comunidad y sector privado asumen compromisos compartidos para avanzar hacia la justicia social, la equidad y el desarrollo sostenible.

      .col-lg-3.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img-03.png' alt="Imagen decorativa")

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Principios de corresponsabilidad en salud ambiental

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p La corresponsabilidad en salud ambiental se sustenta en principios que orientan la acción conjunta de ciudadanía, instituciones y sectores sociales en favor del bienestar colectivo y la sostenibilidad de los territorios. No se trata solo de compartir tareas, sino de construir relaciones de cooperación, confianza, empoderamiento y reconocimiento mutuo, que fortalezcan una verdadera gobernanza participativa.
        .tarjeta.bg-color-2.p-4.mb-4
          p.mb-0 Estos principios son claves para que las políticas públicas se hagan efectivas, para garantizar el derecho a la salud y a un ambiente sano, y para avanzar hacia territorios más equitativos y sostenibles. Sin embargo, para que su aplicación responda a las realidades sociales y ambientales de cada territorio, es necesario incorporar enfoques orientadores que permitan guiar las acciones de manera integral, inclusiva y coherente con las necesidades colectivas.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img-05.png' alt="Imagen decorativa")

    .row.justify-content-center(data-aos="fade-down-right")
      .col-lg-4.col-12.mb-3.d-lg-flex.d-none
        figure
          img(src='@/assets/curso/temas/tema2/img-06.png', alt='Imagen decorativa')
      .col-lg-8.col-12.mb-3
        AcordionA.mb-4(tipo="b" clase-tarjeta="tarjeta tarjeta--C01")(data-aos="fade-left")
          .row(titulo="Enfoque de derechos")
            .col-lg-9.order-lg-1.order-2
              p.mb-0 Reconoce la salud y el ambiente como derechos fundamentales (arts. 49 y 79 de la Constitución). Implica que las personas son sujetos activos, con capacidad de exigir, participar y decidir sobre políticas y acciones que afectan su vida y su entorno. A la vez, obliga al Estado a garantizar acceso a servicios de salud, agua potable, saneamiento, espacios públicos saludables y educación ambiental.
            .col-lg-3.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img-07.svg', alt="Imagen decorativa")
          
          .row(titulo="Equidad")
            .col-lg-9.order-lg-1.order-2
              p.mb-0 La corresponsabilidad debe reconocer que no todas las personas ni territorios parten de las mismas condiciones. Por ello, exige acciones diferenciadas que reduzcan desigualdades y eliminen barreras, priorizando a grupos en situación de vulnerabilidad (niñez, comunidades rurales, pueblos étnicos, mujeres cabeza de hogar, víctimas del conflicto, entre otros). Supone justicia ambiental, inclusión y redistribución equitativa de recursos y oportunidades.
            .col-lg-3.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img-08.svg', alt="Imagen decorativa")

          .row(titulo="Participación ciudadana")
            .col-lg-9.order-lg-1.order-2
              p.mb-0 La corresponsabilidad requiere comunidades activas, informadas y con poder real de decisión. La participación no debe limitarse a la consulta, sino permitir incidir en la planeación, ejecución, seguimiento y evaluación de acciones en salud ambiental, fortaleciendo la vigilancia de riesgos y la construcción de soluciones desde los saberes locales.
            .col-lg-3.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img-09.svg', alt="Imagen decorativa")
                
    p.mb-4(data-aos="fade-left") La corresponsabilidad se traduce en un reparto equilibrado de roles y compromisos, de acuerdo con las capacidades y competencias de cada actor:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.col-12
        .row.justify-content-center.mb-4
          .col-lg-7.col-12.mb-md-0.order-lg-1.order-2
            LineaTiempoD.color-acento-botones.especial
              span(numero="A" titulo="Institucional") 
                ul.lista-ul.mb-0
                  li.mb-0
                    i.lista-ul__vineta
                    | Formular políticas públicas integrales con enfoque de determinantes.

                  li.mb-0 
                    i.lista-ul__vineta
                    | Garantizar servicios básicos ambientales y sanitarios de calidad.

                  li.mb-0 
                    i.lista-ul__vineta
                    | Fortalecer mecanismos de participación y control social.

                  li.mb-0 
                    i.lista-ul__vineta
                    | Promover educación y comunicación en salud ambiental.

                  li.mb-0 
                    i.lista-ul__vineta
                    | Establecer alianzas intersectoriales y territoriales sostenibles.

              span(numero="B" titulo="Comunitario") 
                ul.lista-ul.mb-0
                  li.mb-0
                    i.lista-ul__vineta
                    | Participar en espacios de concertación y veeduría.

                  li.mb-0 
                    i.lista-ul__vineta
                    | Organizar acciones colectivas para el cuidado del entorno.

                  li.mb-0 
                    i.lista-ul__vineta
                    | Movilizar y educar a otros actores de la comunidad.

                  li.mb-0 
                    i.lista-ul__vineta
                    | Ser voceros activos frente a las instituciones locales.
                    
              span(numero="C" titulo="Familiar e individual") 
                ul.lista-ul.mb-0
                  li.mb-0
                    i.lista-ul__vineta
                    | Practicar hábitos de cuidado personal y ambiental.

                  li.mb-0 
                    i.lista-ul__vineta
                    | Transmitir conocimientos sobre salud ambiental a niños y adolescentes.

                  li.mb-0 
                    i.lista-ul__vineta
                    | Evitar prácticas que deterioren el entorno (quema de residuos, contaminación de fuentes hídricas o acumulación de criaderos).

                  li.mb-0 
                    i.lista-ul__vineta
                    | Mantener el hogar como un entorno saludable.

          .col-lg-5.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-up")
            figure
              img(src='@/assets/curso/temas/tema2/img-10.png', alt='Imagen decorativa')

    .row.align-items-center.mb-5.style___box_1.m-0(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/tema2/img-11.png', alt='').m-auto
      .col-xl
        .col-1.d-none.d-lg-block.mb-3
          figure
            img(src='@/assets/curso/temas/tema2/img-12.svg' alt="Imagen decorativa")
        p.mb-0 Estos principios son claves para que las políticas públicas se hagan efectivas, garanticen el derecho a la salud y a un ambiente sano, y fortalezcan la construcción de territorios más equitativos y sostenibles. Para lograrlo, es necesario incorporar enfoques orientadores que permitan reconocer la diversidad de contextos, necesidades y actores sociales. Dichos enfoques aseguran que la formulación e implementación de las políticas no solo sean normativas, sino también inclusivas, participativas y coherentes con la realidad de las comunidades.

    p.mb-4(data-aos="fade-left") Algunos ejemplos de enfoques orientadores son:

    .row.justify-content-center
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="fade-left")
        .tarjeta.BGIMG01.h-100.p-4(style="background-color:#CCD9F8")
          .row.mb-3
            .col-lg-3.col-5
              img(src='@/assets/curso/temas/tema2/img-13.svg' alt="Imagen decorativa")
          p.mb-0 Enfoque de derechos que reconoce la salud y el ambiente sano como derechos fundamentales.
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="fade-right")
        .tarjeta.BGIMG01.h-100.p-4(style="background-color:#CCD9F8")
          .row.mb-3
            .col-lg-3.col-5
              img(src='@/assets/curso/temas/tema2/img-14.svg' alt="Imagen decorativa")
          p.mb-0 Enfoque diferencial que atiende las particularidades de grupos poblacionales según edad, género, etnia o condición de vulnerabilidad.
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="fade-left")
        .tarjeta.BGIMG01.h-100.p-4(style="background-color:#CCD9F8")
          .row.mb-3
            .col-lg-3.col-5
              img(src='@/assets/curso/temas/tema2/img-15.svg' alt="Imagen decorativa")
          p.mb-0 Enfoque territorial que considera las características ambientales, culturales y sociales de cada territorio.
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="fade-right")
        .tarjeta.BGIMG01.h-100.p-4(style="background-color:#CCD9F8")
          .row.mb-3
            .col-lg-3.col-5
              img(src='@/assets/curso/temas/tema2/img-16.svg' alt="Imagen decorativa")
          p.mb-0 Enfoque participativo que promueve la intervención activa de la ciudadanía en la vigilancia y control de la gestión pública.

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Identificación de actores involucrados

    .bg-c2.px-md-5.px-4.mb-4
      .row.justify-content-center.mb-4
        .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
          .row.mb-2
            p.mb-4 La corresponsabilidad en salud ambiental se construye a partir de la acción coordinada de múltiples actores sociales, comunitarios e institucionales, cada uno con competencias y responsabilidades que se complementan para garantizar la gestión de entornos saludables. Identificar estos actores y promover su articulación es esencial para que los procesos sean efectivos, legítimos y sostenibles, especialmente en territorios con condiciones de vulnerabilidad o riesgo sanitario.
            .col-auto.d-none.d-lg-block.order-lg-1.order-2.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/icono.svg' alt="Imagen decorativa")
            .col-lg-10.col-12.mb-3.order-lg-2.order-2.mb-lg-0
              p La comunidad no solo es beneficiaria, sino protagonista en la identificación de problemas, la formulación de soluciones y la vigilancia de compromisos institucionales. Cuando se organiza, adquiere capacidad de gestión local y se convierte en garante de sus propios derechos. Entre sus expresiones más relevantes se encuentran:
          .tarjeta.tarjeta--BGC02.p-3.mb-4
            .col.mb-0
              ul.lista-ul--color.mt-2
                li.d-flex.align-items-start.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Juntas de Acción Comunal (JAC): canalizan necesidades colectivas y apoyan campañas de salud ambiental.

                li.d-flex.align-items-start.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Comités de Participación Comunitaria en Salud (COPACOS): inciden en decisiones locales y en la dimensión ambiental del Plan de Intervenciones Colectivas (PIC).

                li.d-flex.align-items-start.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Líderes sociales y comunitarios: movilizan procesos desde el enfoque étnico, cultural, ambiental o religioso.

                li.d-flex.align-items-start.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Redes de jóvenes, mujeres, cuidadores y promotores ambientales: promueven educación, agricultura urbana, reciclaje y control de vectores.

        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema2/img-17.png' alt="Imagen decorativa")

    p.mb-4(data-aos="fade-left") Sus funciones principales incluyen identificar problemas del entorno, sensibilizar a la comunidad, vigilar compromisos institucionales e impulsar proyectos colectivos. Para que estas acciones sean efectivas, es necesario el concurso de diversos actores con responsabilidades diferenciadas pero complementarias:

    TabsC.color-acento-botones.mb-5(data-aos="flip-up")
      .py-3.py-md-4(titulo="Autoridades locales y sector salud")
        .row.justify-content-center.p-4
          .col-lg-5.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema2/img-19.png', alt='Imagen decorativa')
          .col-lg-7.order-lg-2.order-2
            p Los gobiernos locales (alcaldías y juntas administradoras locales) son responsables de integrar la dimensión ambiental en la planeación del desarrollo territorial, garantizando saneamiento básico, espacio público saludable y acceso a servicios sociales. El sector salud, a través de secretarías y Empresas Sociales del Estado (ESE), debe liderar el Plan de Intervenciones Colectivas (PIC), realizar vigilancia sanitaria, gestionar riesgos ambientales y fortalecer la participación comunitaria.

      .py-3.py-md-4(titulo="Instituciones educativas y ambientales")
        .row.justify-content-center.p-4
          .col-lg-5.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema2/img-18.png', alt='Imagen decorativa')
          .col-lg-7.order-lg-2.order-2
            p Las instituciones educativas como escuelas, universidades y centros de formación como el SENA, son clave para formar ciudadanía ambientalmente responsable mediante Proyectos Ambientales Escolares (PRAE), liderazgos estudiantiles e investigaciones locales. En el sector ambiental se encuentran secretarías, Corporaciones Autónomas Regionales (CAR) y oficinas de gestión del riesgo, las cuales aportan regulación, control, educación comunitaria y respuesta a emergencias ambientales.
      
      .py-3.py-md-4(titulo="Organizaciones sociales y no gubernamentales")
        .row.justify-content-center.p-4
          .col-lg-5.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema2/img-20.png', alt='Imagen decorativa')
          .col-lg-7.order-lg-2.order-2
            p Las ONG, cooperativas y otras entidades sociales complementan la acción institucional al aportar metodologías participativas, recursos técnicos y capacidad de gestión, fortaleciendo el tejido comunitario y la innovación social.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center.tarjeta.tarjeta--BG08(style="background-color:#CCD9F8")(data-aos="fade-down")
          .col-lg-9.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3.px-4
            .row.justify-content-center
              p En conjunto, todos estos actores cumplen roles estratégicos y complementarios. La corresponsabilidad en salud ambiental se hace posible cuando cada uno aporta desde sus competencias, generando alianzas para la construcción de entornos más saludables, equitativos y sostenibles.
          .col-lg-3.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3.px-0
            figure
              img(src='@/assets/curso/temas/tema2/img-21.svg' alt="Imagen decorativa")
    
    Separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Coordinación de acciones compartidas con la comunidad

    .row.align-items-center.mb-4
      .col-xl
        p.mb-4(data-aos="fade-left") La coordinación de acciones compartidas es un pilar fundamental de la corresponsabilidad en salud ambiental. Parte del reconocimiento de que ningún actor puede, por sí solo, garantizar entornos saludables o enfrentar los múltiples desafíos ambientales y sanitarios que afectan a los territorios. Por ello, resulta indispensable articular esfuerzos, capacidades, recursos y saberes de la comunidad, el sector público, las organizaciones sociales, las instituciones educativas y el sector privado.
        .row.align-items-center.m-0.style___box_2.mb-4(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/tema2/img-23.svg', alt='' style="max-width: 400px")
          .col-xl
            p.mb-0 Más que una acción operativa, la coordinación constituye una estrategia política y pedagógica que busca construir soluciones inclusivas, sostenibles y adaptadas a las realidades locales. Esto exige diálogo, confianza, planificación participativa y compromiso ético entre todos los actores.
        .row  
          .col-auto.d-none.d-lg-block(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema1/icono.svg' alt="Imagen decorativa")
          .col.mb-3
            p Coordinar acciones implica pasar de una lógica vertical, donde las instituciones actúan y la comunidad solo recibe, a una lógica horizontal basada en la colaboración y la corresponsabilidad. En este proceso, se combinan el conocimiento técnico e institucional con el saber local y la experiencia vivida por las comunidades.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/tema2/img-22.png', alt='' style="max-width: 500px").m-auto

    p.mb-4(data-aos="fade-left") Los pasos centrales de esta construcción colaborativa son:

    .row.justify-content-center
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="fade-left")
        .tarjeta.BGIMG01.h-100.p-4(style="background-color:#CCD9F8")
          .row.mb-3
            .col-lg-3.col-5
              img(src='@/assets/curso/temas/tema2/img-24.svg' alt="Imagen decorativa")
          p.mb-0 Diagnosticar colectivamente los problemas del entorno (basureros a cielo abierto, vectores, contaminación del agua, etc.).
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="fade-right")
        .tarjeta.BGIMG01.h-100.p-4(style="background-color:#CCD9F8")
          .row.mb-3
            .col-lg-3.col-5
              img(src='@/assets/curso/temas/tema2/img-25.svg' alt="Imagen decorativa")
          p.mb-0 Definir soluciones viables y adaptadas al contexto territorial.
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="fade-left")
        .tarjeta.BGIMG01.h-100.p-4(style="background-color:#CCD9F8")
          .row.mb-3
            .col-lg-3.col-5
              img(src='@/assets/curso/temas/tema2/img-26.svg' alt="Imagen decorativa")
          p.mb-0 Asignar roles y responsabilidades claras de forma equitativa.
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="fade-right")
        .tarjeta.BGIMG01.h-100.p-4(style="background-color:#CCD9F8")
          .row.mb-3
            .col-lg-3.col-5
              img(src='@/assets/curso/temas/tema2/img-27.svg' alt="Imagen decorativa")
          p.mb-0 Tomar decisiones en consenso, respetando la diversidad cultural, étnica, generacional y territorial.

    p.mb-4(data-aos="fade-left") Existen metodologías participativas que fortalecen la coordinación de actores y la planificación compartida:
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-12.col-12
        .cajon.cajon--C01.p-2.mb-4
          .row.justify-content-center.align-items-center
            .col-4.d-none.d-lg-block.order-lg-2.order-2.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema2/img-33.svg' alt="Imagen decorativa")
            .col-lg-8.col-12.mb-3.order-lg-1.order-2.mb-lg-0.p-4
              ul.lista-ul--color.mt-2
                li.d-flex.align-items-start.mb-0
                  i.fas.fa-leaf
                  p.mb-0 #[b Mapas parlantes o sociales:] la comunidad dibuja su territorio, identificando riesgos y recursos.

                li.d-flex.align-items-start.mb-0
                  i.fas.fa-leaf
                  p.mb-0 #[b Matriz de actores:] relaciona instituciones, líderes y organizaciones con los apoyos que pueden brindar.

                li.d-flex.align-items-start.mb-0
                  i.fas.fa-leaf
                  p.mb-0 #[b Árbol de problemas y soluciones:] analiza causas, efectos y posibles respuestas.

                li.d-flex.align-items-start.mb-0
                  i.fas.fa-leaf
                  p.mb-0 #[b Cronogramas comunitarios:] establecen actividades, fechas y responsables de manera consensuada.

                li.d-flex.align-items-start.mb-0
                  i.fas.fa-leaf
                  p.mb-0 #[b Acuerdos de corresponsabilidad:] pactos que definen compromisos, tiempos e indicadores de seguimiento.
                
                li.d-flex.align-items-start.mb-0
                  i.fas.fa-leaf
                  p.mb-0 #[b Mesas intersectoriales de trabajo:] espacios de diálogo entre salud, ambiente, educación, comunidad y ONG.

    .row.mb-4
      .col-1.d-none.d-lg-block
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/icono.svg' alt="Imagen decorativa")
      .col-11
        p.mb-0(data-aos="fade-right") Después de conocer los principales actores, derechos y deberes relacionados con la protección ambiental, es fundamental reflexionar sobre cómo estos principios se aplican en situaciones reales. Para ello, se presenta a continuación un caso práctico que permite analizar y comprender de manera concreta la importancia de la responsabilidad ciudadana y la gestión institucional en la preservación del entorno.

    .row.justify-content-center.mb-4  
      .col-lg-10.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b.d-flex.align-items-center.p-3.rounded
          .tarjeta-avatar-b__img.me-0.d-flex.justify-content-center.align-items-center(style="width:60px; height:60px; border-radius:50%")
            .col-lg-8
              img(src='@/assets/curso/temas/tema2/img-28.svg' alt="Imagen decorativa")(style= "width: 100%")
          .tarjeta.tarjeta--C02.py-3
            .p-3
              p.mb-0 En el barrio Villa Esperanza (Cundinamarca), un basurero a cielo abierto fue transformado en zona verde mediante un proceso coordinado entre la comunidad, la alcaldía, la ESE local y la Secretaría de Ambiente. Se realizaron labores de limpieza, arborización y señalización, y se firmó un pacto de corresponsabilidad para el mantenimiento. La comunidad asumió turnos de vigilancia y organizó jornadas de reciclaje, demostrando que la acción compartida genera resultados tangibles y sostenibles.

    p.mb-0(data-aos="fade-left") La coordinación de acciones compartidas en salud ambiental no se limita a sumar esfuerzos: implica construir confianza, co-crear soluciones y consolidar una cultura de colaboración en la que cada actor reconoce y valora su rol en el cuidado del entorno. Solo así es posible generar transformaciones duraderas que fortalezcan la salud y la sostenibilidad de los territorios.

    Separador

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Fomento del empoderamiento ciudadano en la gestión ambiental

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        .row
          .col-auto.d-none.d-lg-block.order-lg-1.order-2.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema2/img-30.svg' alt="Imagen decorativa")
          .col-lg-10.col-12.mb-3.order-lg-2.order-2.mb-lg-0
            p El empoderamiento comunitario es un proceso mediante el cual las personas, familias y organizaciones sociales desarrollan la capacidad de influir, incidir y transformar las condiciones que afectan su salud y entorno. Supone avanzar de la dependencia institucional hacia la autonomía, el liderazgo y la acción colectiva, de modo que las comunidades dejen de ser receptoras pasivas de soluciones y se conviertan en protagonistas de su propio desarrollo.
        .tarjeta.bg-color-2.p-4.mb-4
          p.mb-0 Más que una estrategia técnica, el empoderamiento es una apuesta por la justicia social y ambiental, porque fortalece la equidad, la autodeterminación y la sostenibilidad territorial. En contextos de vulnerabilidad ambiental, pobreza o exclusión, este enfoque es fundamental para reducir brechas y garantizar condiciones de vida dignas.
        .row  
          .col-auto.d-none.d-lg-block(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema1/icono.svg' alt="Imagen decorativa")
          .col.mb-3
            p El liderazgo comunitario constituye la columna vertebral del empoderamiento. No se limita a figuras visibles, sino que se expresa en agentes cotidianos de cambio: jóvenes, mujeres, adultos mayores, promotores ambientales, docentes, líderes étnicos, recicladores y cuidadores.
      .col-lg-3.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img-29.png' alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon--C02.p-2.mb-4
          .row.justify-content-center.align-items-center
            .col-4.d-none.d-lg-block.order-lg-2.order-2.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema2/img-34.svg' alt="Imagen decorativa")
            .col-lg-7.col-12.mb-3.order-lg-1.order-2.mb-lg-0.p-4
              p.mb-4 Características principales del liderazgo comunitario en salud ambiental:
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  | Compromiso ético con el territorio y su gente.

                li.mb-0
                  i.lista-ul__vineta
                  | Conocimiento profundo del contexto local.

                li.mb-0
                  i.lista-ul__vineta
                  | Escucha y diálogo con diversos actores.

                li.mb-0
                  i.lista-ul__vineta
                  | Capacidad para motivar, convocar y orientar acciones colectivas.

                li.mb-0
                  i.lista-ul__vineta
                  | Habilidad para convertir necesidades en propuestas concretas.
                
    p.mb-4(data-aos="flip-up") Empoderar significa también dotar a la comunidad de herramientas para que pueda participar y liderar procesos de salud ambiental de manera autónoma y sostenible. Esto abarca no solo formación técnica, sino también construcción de ciudadanía activa y corresponsable.

    .row.justify-content-center.mb-2(data-aos="flip-up")
      .col-xl-6.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-4
            figure
              img(src="@/assets/curso/temas/tema2/img-35.svg", alt="alt").img90.m-auto
          h4.titulo-1.text-center A. Capacidades a desarrollar
          ul.lista-ul.mb-0
            li.mb-0
              i.lista-ul__vineta
              | Análisis de problemáticas ambientales con enfoque social y de derechos.

            li.mb-0
              i.lista-ul__vineta
              | Conocimiento de normatividad en salud ambiental y participación ciudadana.
            
            li.mb-0
              i.lista-ul__vineta
              | Formulación de proyectos y planes de acción comunitarios.
            
            li.mb-0
              i.lista-ul__vineta
              | Manejo de herramientas de gestión (cronogramas, presupuestos y diagnósticos).

            li.mb-0
              i.lista-ul__vineta
              | Evaluación y seguimiento social de intervenciones.
      
      .col-xl-6.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-4
            figure
              img(src="@/assets/curso/temas/tema2/img-36.svg", alt="alt").img90.m-auto
          h4.titulo-1.text-center B. Mecanismos de fortalecimiento
          ul.lista-ul.mb-0
            li.mb-0
              i.lista-ul__vineta
              | Escuelas de formación ciudadana en salud y ambiente.

            li.mb-0
              i.lista-ul__vineta
              | Tutorías comunitarias realizadas por aprendices del SENA.
            
            li.mb-0
              i.lista-ul__vineta
              | Redes de promotores ambientales locales.

            li.mb-0
              i.lista-ul__vineta
              | Procesos de autogestión con acompañamiento técnico.

    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p La transformación comunitaria necesita procesos comunicativos potentes, incluyentes y creativos, que vayan más allá de la simple difusión de información. La comunicación, en este enfoque, es pedagógica y política, crea conciencia, convoca a la acción y fortalece la identidad territorial.
        p Para lograr este impacto, es necesario contar con estrategias concretas y claves de motivación que orienten la acción colectiva. Estas permiten que la comunicación se convierta en un motor real de transformación comunitaria, facilitando la participación activa, el compromiso y la sostenibilidad de los procesos.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img-31.png' alt="Imagen decorativa")

    .row.justify-content-center.mb-2(data-aos="flip-up")
      .col-xl-6.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-4
            figure
              img(src="@/assets/curso/temas/tema2/img-37.svg", alt="alt").img90.m-auto
          h4.titulo-1.text-center A. Estrategias efectivas
          ul.lista-ul.mb-0
            li.mb-0
              i.lista-ul__vineta
              | Comunicación popular: teatro comunitario, murales, emisoras locales, ferias del saber.

            li.mb-0
              i.lista-ul__vineta
              | Redes sociales comunitarias: WhatsApp, Facebook, YouTube o TikTok para mensajes breves y directos.
            
            li.mb-0
              i.lista-ul__vineta
              | Narrativas de cambio: historias de líderes, podcast barrial y crónicas comunitarias.
            
            li.mb-0
              i.lista-ul__vineta
              | Campañas participativas diseñadas con la comunidad o en alianza con aprendices del SENA.
      
      .col-xl-6.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-4
            figure
              img(src="@/assets/curso/temas/tema2/img-38.svg", alt="alt").img90.m-auto
          h4.titulo-1.text-center B. Claves de motivación
          ul.lista-ul.mb-0
            li.mb-0
              i.lista-ul__vineta
              | Vincular cada acción ambiental con beneficios visibles y tangibles.

            li.mb-0
              i.lista-ul__vineta
              | Reconocer públicamente los aportes comunitarios.
            
            li.mb-0
              i.lista-ul__vineta
              | Crear espacios de participación lúdicos, diversos e intergeneracionales.

            li.mb-0
              i.lista-ul__vineta
              | Transformar cada intervención técnica en una oportunidad educativa.

    .row.mb-4
      .col-1.d-none.d-lg-block
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/icono.svg' alt="Imagen decorativa")
      .col-11
        p.mb-0(data-aos="fade-right") Estas reflexiones encuentran su mayor sentido cuando se aterrizan en experiencias concretas que muestran cómo la comunicación comunitaria impulsa cambios reales. Un ejemplo territorial de empoderamiento permite representar de manera práctica cómo las estrategias y claves se traducen en acciones que fortalecen la identidad, generan participación activa y consolidan procesos de transformación social.

    .row.justify-content-center.mb-4  
      .col-lg-10.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b.d-flex.align-items-center.p-3.rounded
          .tarjeta-avatar-b__img.me-0.d-flex.justify-content-center.align-items-center(style="width:60px; height:60px; border-radius:50%")
            .col-lg-8
              img(src='@/assets/curso/temas/tema2/img-32.svg' alt="Imagen decorativa")(style= "width: 100%")
          .tarjeta.tarjeta--C02.py-3
            .p-3
              p.mb-0 #[b Red de mujeres rurales gestoras de agua limpia - Cauca:] en veredas del Cauca, mujeres cabeza de hogar organizaron comités para garantizar acceso al agua segura ante la ausencia institucional. Con apoyo de un centro de formación del SENA, fortalecieron sus capacidades en análisis de calidad de agua, diseño de filtros caseros, reforestación de microcuencas y exigibilidad del derecho al agua. Actualmente, integran mesas de concertación ambiental y lideran procesos formativos en otras comunidades.



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
