<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/introduccion/img-01.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.tarjeta.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/temas/introduccion/icono.svg", style="max-width: 190px").mx-auto
            .col-lg
              p.mb-0 La ejecución participativa en salud ambiental y seguridad sanitaria busca promover la corresponsabilidad de la comunidad y las instituciones en la gestión de entornos saludables. Su propósito es fortalecer la prevención de riesgos y el cuidado colectivo mediante acciones coordinadas y sostenibles. Se desarrolla a través de la implementación de estrategias participativas, la aplicación de normativas vigentes y la integración de buenas prácticas que favorecen el bienestar individual y comunitario. Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
