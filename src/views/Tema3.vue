<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Ejecución, seguimiento y ajuste del plan de acción

    .row.justify-content-center.mb-4
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")  
        p La ejecución del plan de acción representa la etapa en la que las propuestas diseñadas pasan del papel a la práctica. En este momento se ponen en marcha las actividades programadas, se movilizan los recursos humanos, técnicos y financieros, y se articulan los esfuerzos de los diferentes actores involucrados. La eficacia de esta fase depende de la organización, la comunicación constante y la disposición para enfrentar retos que puedan surgir en el proceso.
        .tarjeta.p-3.mb-3(style="background-color:#E0F6E1; border-radius:none !important")
          .row.justify-content-center
            .col-auto.order-lg-1.order-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img-02.svg', alt='Imagen decorativa')
            .col-lg-10.col-12.mb-0.order-lg-2.order-2.mb-lg-0
              p.mb-0 El seguimiento es esencial para garantizar que las acciones se desarrollen conforme a lo planeado. Este implica revisar periódicamente los avances, identificar desviaciones respecto a las metas y valorar el cumplimiento de los indicadores establecidos. Gracias a este monitoreo es posible detectar a tiempo obstáculos, generar alertas y mantener informados a los responsables del plan.

      .col-lg-3.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema3/img-01.png' alt="Imagen decorativa")

    .row.justify-content-center.mb-0
      .col-lg-8.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3(data-aos="flip-down")
        p En la medida en que se avanza en la ejecución, pueden presentarse situaciones imprevistas que demanden ajustes. Estos pueden estar relacionados con la redistribución de recursos, la redefinición de prioridades o la modificación de estrategias que no resulten tan efectivas como se proyectaron inicialmente. El ajuste del plan no significa un retroceso, sino una respuesta flexible y estratégica que fortalece el proceso y permite alcanzar los resultados deseados a pesar de las contingencias.
        p De este modo, la ejecución, el seguimiento y el ajuste conforman un ciclo dinámico en el que cada acción retroalimenta a la siguiente, garantizando que el plan de acción se mantenga vigente, realista y adaptado a las necesidades del contexto.

      .col-lg-4.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema3/img-03.png', alt='Imagen decorativa')

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Seguimiento a las actividades programadas

    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-8.col-12.mb-md-0.order-lg-1.order-2
        p El seguimiento es un proceso sistemático que permite verificar el cumplimiento de las actividades definidas en el plan de acción. Su propósito es identificar avances, detectar dificultades y generar información que oriente la toma de decisiones oportunas.
        p.mb-4 Para realizar un seguimiento efectivo, se recomienda considerar las siguientes fases:
        LineaTiempoD.color-acento-botones.especial.mb-4
          span(numero="A" titulo="Definición de indicadores de seguimiento:") 
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                | Establecer indicadores claros, medibles y verificables que permitan evaluar el desarrollo de las actividades.
              
              li.mb-0 
                i.lista-ul__vineta
                | Distinguir entre indicadores cuantitativos (número de reuniones realizadas y porcentaje de ejecución presupuestal) y cualitativos (nivel de satisfacción de los participantes y calidad de los productos entregados).

          span(numero="B" titulo="Recolección de información")
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                | Aplicar herramientas como listas de verificación, formatos de control, encuestas o reportes de avance.
              
              li.mb-0 
                i.lista-ul__vineta
                | Designar responsables de registrar la información en cada actividad.

              li.mb-0 
                i.lista-ul__vineta
                | Garantizar la periodicidad en la entrega de reportes (semanal, mensual o trimestral, según lo definido en el plan).
          
          span(numero="C" titulo="Análisis de avances y dificultades") 
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                | Comparar los resultados obtenidos con lo planeado para identificar el nivel de cumplimiento.

              li.mb-0 
                i.lista-ul__vineta
                | Detectar retrasos, obstáculos o desvíos en la ejecución.
              
              li.mb-0 
                i.lista-ul__vineta
                | Reconocer logros y buenas prácticas que puedan replicarse en otras actividades.

          span(numero="D" titulo="Comunicación de resultados") 
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                | Socializar los avances con el equipo de trabajo y las partes interesadas, asegurando transparencia y confianza.

              li.mb-0 
                i.lista-ul__vineta
                | Elaborar informes periódicos que incluyan recomendaciones para mejorar la ejecución.
          
          span(numero="E" titulo="Retroalimentación y mejora continua") 
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                | Proponer ajustes en la programación, asignación de recursos o metodología, de acuerdo con los hallazgos del seguimiento.

              li.mb-0 
                i.lista-ul__vineta
                | Establecer compromisos específicos para superar las debilidades encontradas.

      .col-lg-4.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema3/img-04.png', alt='Imagen decorativa')

    p.mb-0(data-aos="flip-up") El seguimiento a las actividades programadas se convierte en un pilar fundamental para garantizar que el plan de acción se ejecute de manera ordenada, efectiva y con capacidad de adaptación a los cambios del entorno.

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Gestión de recursos humanos, técnicos y financieros

    p.mb-4(data-aos="flip-up") La gestión de recursos es un aspecto esencial en la implementación de cualquier plan de acción, ya que de su adecuada administración depende el cumplimiento de las metas y la sostenibilidad de las actividades programadas. Esta gestión integra de manera coordinada tres tipos de recursos: humanos, técnicos y financieros.

    .row.justify-content-center(data-aos="fade-down-right")
      .col-lg-4.col-12.mb-3.d-lg-flex.d-none
        figure
          img(src='@/assets/curso/temas/tema3/img-05.png', alt='Imagen decorativa')
      .col-lg-8.col-12.mb-3
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--C01")
          .row(titulo="A. Recursos humanos")
            .col-lg-12.order-lg-1.order-2
              p.mb-4 Representan el talento y las capacidades de las personas que participan en la ejecución del plan. Su gestión implica:
              ul.lista-ul.mb-0
                li.mb-0 
                  i.lista-ul__vineta
                  | Asignación de roles y responsabilidades, garantizando que cada integrante conozca con claridad sus funciones.

                li.mb-0 
                  i.lista-ul__vineta
                  | Capacitación y formación continua, para fortalecer competencias necesarias y mejorar la eficiencia en la ejecución.
                
                li.mb-0 
                  i.lista-ul__vineta
                  | Motivación y bienestar, fomentando un clima laboral positivo que estimule el compromiso con los objetivos.
                
                li.mb-0 
                  i.lista-ul__vineta
                  | Evaluación del desempeño, para identificar fortalezas, necesidades de mejora y ajustar procesos.

          .row(titulo="B. Recursos técnicos")
            .col-lg-9.order-lg-1.order-2
              p.mb-4 Incluyen los equipos, herramientas y tecnologías que apoyan la implementación del plan. Su adecuada gestión abarca:
              ul.lista-ul.mb-0
                li.mb-0 
                  i.lista-ul__vineta
                  | Disponibilidad de infraestructura y equipamiento, asegurando que se cuente con lo necesario para desarrollar las actividades.

                li.mb-0 
                  i.lista-ul__vineta
                  | Uso eficiente de herramientas tecnológicas, como software de gestión, sistemas de monitoreo o plataformas de comunicación.

                li.mb-0 
                  i.lista-ul__vineta
                  | Mantenimiento preventivo y correctivo, evitando fallas que puedan retrasar la ejecución.

                li.mb-0 
                  i.lista-ul__vineta
                  | Actualización tecnológica, incorporando innovaciones que mejoren los procesos y resultados.

          .row(titulo="C. Recursos financieros")
            .col-lg-9.order-lg-1.order-2
              p.mb-4 Constituyen la base para financiar las acciones planeadas. Su administración debe ser transparente, eficiente y sostenible. Se consideran aspectos como:
              ul.lista-ul.mb-0
                li.mb-0 
                  i.lista-ul__vineta
                  | Presupuestación detallada, definiendo costos directos e indirectos de cada actividad.

                li.mb-0 
                  i.lista-ul__vineta
                  | Priorización del gasto, destinando los recursos a las acciones de mayor impacto en el logro de objetivos.

                li.mb-0 
                  i.lista-ul__vineta
                  | Control y seguimiento financiero, garantizando el uso responsable del presupuesto y previniendo desviaciones.

                li.mb-0 
                  i.lista-ul__vineta
                  | Gestión de fuentes de financiación adicionales, a través de alianzas, convenios o proyectos que fortalezcan la ejecución.
    
    .row.mb-0
      .col-1.d-none.d-lg-block
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/icono.svg' alt="Imagen decorativa")
      .col-11
        p.mb-0(data-aos="fade-right") En conjunto, la gestión articulada de los recursos humanos, técnicos y financieros permite no solo cumplir con lo establecido en el plan de acción, sino también generar sostenibilidad y capacidad de respuesta ante los retos que puedan surgir durante el proceso.

    Separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Resolución de conflictos en la implementación del plan
    
    .row.justify-content-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")  
        p Durante la ejecución de un plan de acción en salud ambiental y seguridad sanitaria, es común que surjan conflictos o tensiones entre los actores involucrados. Estas diferencias pueden derivar de expectativas no cumplidas, comunicación deficiente, distribución de responsabilidades, competencia por recursos, decisiones técnicas o culturales.
        .row
          .col-lg-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema3/img-22.svg', alt='', style="width: 400px").m-auto
          .col-lg-9
            p.p-4.bg-color-3 Lejos de ser obstáculos, los conflictos bien gestionados pueden convertirse en oportunidades para fortalecer la cohesión comunitaria, mejorar procesos participativos y garantizar una implementación más justa y efectiva. Por ello, es esencial que los aprendices del SENA, líderes comunitarios y funcionarios públicos cuenten con herramientas para identificar, comprender y transformar los conflictos de manera participativa y respetuosa.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema3/img-06.png' alt="Imagen decorativa")

    p.mb-4(data-aos="flip-up") A continuación, se describen los tipos de conflictos en la implementación de un plan:
    
    .bg-c1.px-md-5.px-4.mb-5
      .row.justify-content-center(data-aos="fade-left")
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--BG01.p-4
            .row.justify-content-center.mb-3
              .col-lg-5.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema3/img-07.svg' alt='Imagen decorativa')
            p.mb-0 #[b Conflictos de comunicación:] malentendidos o información poco clara. Por ejemplo, dos equipos ejecutan tareas duplicadas por falta de definición de responsabilidades.

          .tarjeta.tarjeta--BG01.p-4
            .row.justify-content-center.mb-3
              .col-lg-5.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema3/img-08.svg' alt='Imagen decorativa')
            p.mb-0 #[b Conflictos de recursos:] escasez o distribución desigual de recursos humanos, técnicos o financieros. Por ejemplo, diferentes áreas compiten por el uso de un mismo equipo tecnológico.

          .tarjeta.tarjeta--BG01.p-4
            .row.justify-content-center.mb-3
              .col-lg-5.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema3/img-09.svg' alt='Imagen decorativa')
            p.mb-0 #[b Conflictos de intereses:] objetivos personales o departamentales que no coinciden con los del plan. Por ejemplo, un área busca reducir costos mientras otra requiere inversión para mejorar procesos.

          .tarjeta.tarjeta--BG01.p-4
            .row.justify-content-center.mb-3
              .col-lg-5.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema3/img-10.svg' alt='Imagen decorativa')
            p.mb-0 #[b Conflictos de roles o responsabilidades:] falta de definición clara de funciones. Por ejemplo, duplicidad de tareas o vacíos de responsabilidad.

          .tarjeta.tarjeta--BG01.p-4
            .row.justify-content-center.mb-3
              .col-lg-5.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema3/img-11.svg' alt='Imagen decorativa')
            p.mb-0 #[b Conflictos culturales o de valores:] diferencias en creencias, estilos de trabajo o tradiciones. Por ejemplo, la comunidad indígena que rechaza métodos técnicos de control de vectores por afectar prácticas ancestrales.

    p.mb-4(data-aos="flip-up") En este punto es importante definir técnicas de diálogo y mediación comunitaria:

    .row.justify-content-center.mb-4
      .col-lg-4.col-sm-10.mb-4(data-aos="fade-right")
        .tarjeta.tarjeta--C02.p-3.h-100
          .row.justify-content-center.align-items-center
            .col-lg-3.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema3/img-16.svg' alt="Imagen decorativa")
            .col-lg-8
              p.mb-0 #[b Escucha activa y empática:] permitir que todas las partes expresen su punto de vista sin interrupciones, validando emociones.
      .col-lg-4.col-sm-10.mb-4(data-aos="fade-left")
        .tarjeta.tarjeta--C02.p-3.h-100
          .row.justify-content-center.align-items-center
            .col-lg-3.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema3/img-17.svg' alt="Imagen decorativa")
            .col-lg-8
              p.mb-0 #[b Círculos de diálogo:] espacios seguros para hablar y construir acuerdos, usando metodologías como el “círculo de la palabra”.
      .col-lg-4.col-sm-10.mb-4(data-aos="fade-right")
        .tarjeta.tarjeta--C02.p-3.h-100
          .row.justify-content-center.align-items-center
            .col-lg-3.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema3/img-18.svg' alt="Imagen decorativa")
            .col-lg-8
              p.mb-0 #[b Tercería o facilitación neutral:] persona externa facilita consensos sin imponer soluciones.
      .col-lg-4.col-sm-10.mb-4(data-aos="fade-left")
        .tarjeta.tarjeta--C02.p-3.h-100
          .row.justify-content-center.align-items-center
            .col-lg-3.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema3/img-19.svg' alt="Imagen decorativa")
            .col-lg-8
              p.mb-0 #[b Mapeo del conflicto:] identificación de actores, intereses, niveles de poder y posibles alianzas.
      .col-lg-4.col-sm-10.mb-4(data-aos="fade-left")
        .tarjeta.tarjeta--C02.p-3.h-100
          .row.justify-content-center.align-items-center
            .col-lg-3.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema3/img-20.svg' alt="Imagen decorativa")
            .col-lg-8
              p.mb-0 #[b Acuerdos escritos y públicos:] registrar compromisos y decisiones para asegurar transparencia.
      .col-lg-4.col-sm-10.mb-4(data-aos="fade-left")
        .tarjeta.tarjeta--C02.p-3.h-100
          .row.justify-content-center.align-items-center
            .col-lg-3.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema3/img-21.svg' alt="Imagen decorativa")
            .col-lg-8
              p.mb-0 #[b Reconocimiento de errores y reparación:] aceptar fallas y generar mecanismos de reparación simbólica o material.

    p.mb-4(data-aos="flip-up") Con el fin de contextualizar la resolución de conflictos, se presenta un caso real práctico:

    .row.justify-content-center.mb-4  
      .col-lg-10.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b.d-flex.align-items-center.p-3.rounded
          .tarjeta-avatar-b__img.me-0.d-flex.justify-content-center.align-items-center(style="width:60px; height:60px; border-radius:50%")
            .col-lg-8
              img(src='@/assets/curso/temas/tema3/img-15.svg' alt="Imagen decorativa")(style= "width: 100%")
          .tarjeta.tarjeta--C02.py-3
            .p-3
              p.mb-0 #[b Disputa por lugar de ejecución de actividades]
              p.mb-0 En una vereda rural, se acordó realizar una jornada de sensibilización ambiental en la escuela. Días antes, el presidente de la JAC solicita cambiar el lugar a la cancha comunal, generando oposición de los docentes. Se convocó una reunión abierta y se propuso dividir la jornada en dos momentos: actividad pedagógica en la escuela y comunitaria en la cancha. El acuerdo fortaleció la colaboración entre la escuela y la JAC, mostrando cómo un conflicto puede transformarse en oportunidad de participación y mejora.

    .row.mb-0
      .col-1.d-none.d-lg-block
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/icono.svg' alt="Imagen decorativa")
      .col-11
        p.mb-0(data-aos="fade-right") La ejecución, el seguimiento y el ajuste de un plan de acción dependen de un trabajo articulado que combine planificación estratégica, gestión eficiente de recursos y resolución oportuna de conflictos. Estos procesos no solo aseguran la continuidad de las actividades programadas, sino que también permiten adaptarse a imprevistos, fortalecer el cumplimiento de los objetivos y generar aprendizajes valiosos para futuras intervenciones colaborativas.

    Separador

    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Ajuste de estrategias según resultados y contingencias

    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-8.col-12.mb-md-0.order-lg-1.order-2
        p Los planes de acción en salud ambiental deben ser dinámicos, porque los territorios cambian constantemente por factores sociales, climáticos, epidemiológicos o institucionales. Ajustar estrategias permite mejorar resultados, responder a emergencias y adaptar las acciones a la realidad de la comunidad.
        p.mb-4 A continuación, se describen los pasos para ajustar estrategias
        LineaTiempoD.color-acento-botones.especial
          span(numero="A" titulo="Analizar resultados y retroalimentación") 
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                | Revisar periódicamente los indicadores de proceso y resultado.

              li.mb-0 
                i.lista-ul__vineta
                | Comparar lo planificado con lo realmente ejecutado.
              
              li.mb-0 
                i.lista-ul__vineta
                | Recoger opiniones de la comunidad mediante encuestas, grupos focales o espacios de diálogo.
              
              li.mb-0 
                i.lista-ul__vineta
                | Analizar informes, bitácoras y actas de seguimiento.

              li.mb-0 
                i.lista-ul__vineta
                | Por ejemplo: un plan educativo sobre el uso del agua muestra buena asistencia, pero pocos cambios en hábitos familiares. Esto indica que las charlas magistrales no son suficientes y se decide implementar talleres prácticos y visitas domiciliarias.

          span(numero="B" titulo="Recolección de información")
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                | Basarse en los datos del análisis y en la retroalimentación de la comunidad.

              li.mb-0 
                i.lista-ul__vineta
                | Involucrar a actores clave en la definición de ajustes.

              li.mb-0 
                i.lista-ul__vineta
                | Documentar los cambios: responsables, acciones y cronogramas actualizados.
              
              li.mb-0 
                i.lista-ul__vineta
                | Posibles ajustes: redistribuir recursos, cambiar metodologías, reorganizar cronogramas, modificar roles.

          span(numero="C" titulo="Análisis de avances y dificultades") 
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                | Identificar emergencias o cambios en el territorio (climáticos, sociales, institucionales).

              li.mb-0 
                i.lista-ul__vineta
                | Incluir nuevos actores que puedan fortalecer el plan (colectivos juveniles, organizaciones ambientales e instituciones educativas).
              
              li.mb-0 
                i.lista-ul__vineta
                | Priorizar acciones inmediatas frente a contingencias.

              li.mb-0 
                i.lista-ul__vineta
                | Redistribuir recursos y responsabilidades según nuevas necesidades.

              li.mb-0 
                i.lista-ul__vineta
                | Por ejemplo: durante un plan de reciclaje, un deslizamiento contaminó el acueducto veredal. El equipo destinó recursos a educación sobre tratamiento doméstico del agua, gestionó filtros artesanales y reorganizó las actividades de reciclaje para después de la emergencia.

          span(numero="D" titulo="Comunicación de resultados") 
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                | Reconocer fortalezas emergentes y soluciones exitosas.

              li.mb-0 
                i.lista-ul__vineta
                | Incorporar aprendizajes en futuras intervenciones.
              
              li.mb-0 
                i.lista-ul__vineta
                | Promover la cultura de adaptación y participación comunitaria.
      
      .col-lg-4.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema3/img-13.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-4(data-aos="zoom-in-down") 
      .col-lg-10.col-md-10.col-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(style="background-color:#E0F6E1")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-14.png')})`}" data-aos="fade-right"
          )
          .bloque-texto-g__texto.p-4(data-aos="fade-left")
            p.mb-0 El ajuste de estrategias garantiza que los planes de acción sean efectivos, legítimos y sostenibles. La flexibilidad, la información oportuna y la participación de la comunidad permiten responder a los cambios del entorno y mejorar continuamente los resultados.































</template>

<script>
export default {
  name: 'Tema3',
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
