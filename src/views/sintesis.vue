<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 La participación comunitaria en salud ambiental y sanitaria se fundamenta en la corresponsabilidad y el empoderamiento de la comunidad, mediante mecanismos sociales, comités y veedurías que garantizan la incidencia en la identificación de problemas, la toma de decisiones y la vigilancia del cumplimiento institucional. Los actores involucrados, como instituciones, organizaciones sociales, familias y personas, coordinan acciones compartidas, fortalecen capacidades locales y promueven la autonomía, el liderazgo y la corresponsabilidad en la gestión ambiental. La ejecución de los planes de acción requiere seguimiento constante de las actividades, gestión eficiente de recursos humanos, técnicos y financieros, resolución de conflictos y ajuste flexible de estrategias frente a resultados, contingencias o cambios en el contexto, asegurando así la efectividad, sostenibilidad y legitimidad de las intervenciones en los territorios.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis se presenta la participación comunitaria en salud ambiental y sanitaria basada en la corresponsabilidad y el empoderamiento, donde la comunidad, las instituciones y las organizaciones sociales coordinan acciones compartidas, fortalecen capacidades locales y promueven autonomía y liderazgo. Además, se destaca la importancia del seguimiento de actividades, la gestión de recursos, la resolución de conflictos y la adaptación de estrategias para garantizar la efectividad y sostenibilidad de los planes de acción en los territorios.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
