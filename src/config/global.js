export default {
  global: {
    componenteFormativo:
      'Ejecución participativa en salud ambiental y seguridad sanitaria',
    descripcionCurso:
      'Este componente se centra en la aplicación práctica de estrategias participativas que promueven la salud ambiental y la seguridad sanitaria. Se orienta al desarrollo de acciones comunitarias, la gestión responsable de riesgos y la implementación de prácticas sostenibles para fortalecer la protección de la salud colectiva.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Participación comunitaria en salud ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Mecanismos de participación social en salud',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Comités de participación comunitaria y su conformación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Veedurías ciudadanas en salud ambiental y sanitaria',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Derechos y deberes en salud de los actores comunitarios',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Corresponsabilidad y empoderamiento comunitario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Principios de corresponsabilidad en salud ambiental',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Identificación de actores involucrados',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Coordinación de acciones compartidas con la comunidad',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Fomento del empoderamiento ciudadano en la gestión ambiental',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Ejecución, seguimiento y ajuste del plan de acción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Seguimiento a las actividades programadas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Gestión de recursos humanos, técnicos y financieros',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Resolución de conflictos en la implementación del plan',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Ajuste de estrategias según resultados y contingencias',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_03_22230061_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.1. Mecanismos de participación social en salud',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Mecanismos de participación [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=c3tlmvG1nwU',
    },
    {
      tema: '2. Corresponsabilidad y empoderamiento comunitario',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Orientar comunidades [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=pCwSNA8CJcA',
    },
    {
      tema: '3.3. Resolución de conflictos en la implementación del plan',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Conflictos en la comunicación y sus soluciones [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=A_qgEONAKhc',
    },
  ],
  glosario: [
    {
      termino: 'Actores comunitarios',
      significado:
        'personas o grupos que participan activamente en la identificación de problemas, toma de decisiones y ejecución de acciones de salud ambiental en su territorio.',
    },
    {
      termino: 'Autonomía',
      significado:
        'capacidad de la comunidad o individuos para tomar decisiones y actuar de manera independiente en la gestión de su entorno y salud.',
    },
    {
      termino: 'Capacitación comunitaria',
      significado:
        'proceso de formación que fortalece conocimientos, habilidades y competencias para la gestión ambiental y sanitaria.',
    },
    {
      termino: 'Corresponsabilidad',
      significado:
        'distribución equilibrada de roles, obligaciones y compromisos entre instituciones, comunidad y familias para la gestión de la salud ambiental.',
    },
    {
      termino: 'Empoderamiento ciudadano',
      significado:
        'proceso mediante el cual las personas adquieren poder y capacidad para incidir en decisiones y transformar su entorno.',
    },
    {
      termino: 'Equidad',
      significado:
        'reconocimiento de las diferencias sociales y territoriales, priorizando acciones para quienes tienen mayor vulnerabilidad.',
    },
    {
      termino: 'Gestión de recursos',
      significado:
        'administración eficiente de recursos humanos, técnicos y financieros para garantizar la ejecución de los planes de acción.',
    },
    {
      termino: 'Indicadores de seguimiento',
      significado:
        'herramientas que permiten medir avances, resultados y efectividad de las acciones implementadas.',
    },
    {
      termino: 'Liderazgo comunitario',
      significado:
        'capacidad de ciertas personas para movilizar, motivar y coordinar acciones colectivas en beneficio de la comunidad.',
    },
    {
      termino: 'Participación ciudadana',
      significado:
        'involucramiento activo de la comunidad en la planificación, ejecución, monitoreo y evaluación de acciones ambientales y sanitarias.',
    },
    {
      termino: 'Plan de acción',
      significado:
        'conjunto de actividades programadas con objetivos, responsables, recursos y cronograma para mejorar la salud ambiental y sanitaria.',
    },
    {
      termino: 'Resolución de conflictos',
      significado:
        'estrategias y mecanismos para enfrentar, mediar y transformar tensiones surgidas durante la implementación del plan.',
    },
    {
      termino: 'Salud ambiental',
      significado:
        'condición de bienestar físico, mental y social de la población relacionada con la calidad del entorno y la prevención de riesgos ambientales.',
    },
    {
      termino: 'Seguridad sanitaria',
      significado:
        'conjunto de acciones y medidas que garantizan la protección de la salud de la comunidad frente a riesgos biológicos, químicos o físicos.',
    },
    {
      termino: 'Veeduría ciudadana',
      significado:
        'mecanismo de control social donde la comunidad vigila y evalúa la implementación de políticas y acciones en salud ambiental y seguridad sanitaria.',
    },
  ],
  referencias: [
    {
      referencia:
        'Función Pública. (1991). Constitución Política de Colombia 1991.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125',
    },
    {
      referencia:
        'Función Pública. (1993). Ley 100 de 1993: Por la cual se crea el sistema de seguridad social integral y se dictan otras disposiciones.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=5248',
    },
    {
      referencia:
        'Función Pública. (2015). Ley estatutaria 1751 de 2015: Por medio de la cual se regula el derecho fundamental a la salud y se dictan otras disposiciones.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=60733',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2017). Resolución 2063 de 2017: Adopta la política de participación social en salud (PPSS).',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%202063%20de%202017.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2022). Plan decenal de salud pública 2022-2031: Salud para la paz, la vida y la equidad.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Christian Llano Villegas',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
