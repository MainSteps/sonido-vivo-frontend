export const EMPRESA = {
  nombre: "Sonido Vivo",
  lema: "Instrumentos para crear tu propio sonido",
  descripcion: "Tienda musical ficticia creada como proyecto académico de Desarrollo Full Stack II.",
  nosotros: [
    "Sonido Vivo nace como una tienda digital pensada para acercar instrumentos y accesorios a estudiantes, bandas emergentes y personas aficionadas a la música.",
    "Nuestro catálogo reúne productos simulados con información clara para practicar navegación, diseño adaptable y compras mediante un carrito local."
  ]
};

export const PRODUCTOS = [
  {
    id: "SV-GUI-001",
    nombre: "Guitarra eléctrica Aurora",
    categoria: "Guitarras",
    precio: 329990,
    stock: 8,
    imagen: "assets/images/producto-guitarra.svg",
    descripcion: "Guitarra de cuerpo sólido con configuración HSS y selector de cinco posiciones. Una opción versátil para practicar y tocar en vivo."
  },
  {
    id: "SV-BAJ-002",
    nombre: "Bajo eléctrico Pulse",
    categoria: "Bajos",
    precio: 289990,
    stock: 5,
    imagen: "assets/images/producto-bajo.svg",
    descripcion: "Bajo de cuatro cuerdas con controles de volumen y tono. Ofrece una construcción cómoda para ensayos prolongados."
  },
  {
    id: "SV-TEC-003",
    nombre: "Teclado Nova 61",
    categoria: "Teclados",
    precio: 249990,
    stock: 10,
    imagen: "assets/images/producto-teclado.svg",
    descripcion: "Teclado de 61 teclas sensibles a la velocidad, sonidos integrados y conexión USB para comenzar a producir música."
  },
  {
    id: "SV-AUD-004",
    nombre: "Micrófono Stage Dynamic",
    categoria: "Audio",
    precio: 69990,
    stock: 16,
    imagen: "assets/images/producto-microfono.svg",
    descripcion: "Micrófono dinámico cardioide para voces, diseñado para reducir el ruido ambiente durante ensayos y presentaciones."
  },
  {
    id: "SV-AUD-005",
    nombre: "Audífonos Studio One",
    categoria: "Audio",
    precio: 89990,
    stock: 12,
    imagen: "assets/images/producto-audifonos.svg",
    descripcion: "Audífonos cerrados con almohadillas suaves y respuesta equilibrada para monitoreo, edición y práctica silenciosa."
  },
  {
    id: "SV-ACC-006",
    nombre: "Pedal Eco Delay",
    categoria: "Accesorios",
    precio: 74990,
    stock: 7,
    imagen: "assets/images/producto-pedal.svg",
    descripcion: "Pedal de delay compacto con controles de tiempo, repetición y mezcla para explorar nuevas texturas sonoras."
  }
];

export const ARTICULOS = [
  {
    id: "preparar-primer-ensayo",
    titulo: "Cómo preparar tu primer ensayo",
    resumen: "Una lista sencilla para aprovechar el tiempo, cuidar los instrumentos y mantener el volumen bajo control.",
    imagen: "assets/images/blog-ensayo.svg",
    contenido: [
      "Antes de comenzar, acuerden qué canciones practicarán y compartan sus estructuras. Llegar con una meta común evita ocupar el ensayo completo tomando decisiones.",
      "Revisen cables, afinación y niveles de volumen. Cada integrante debe escucharse sin tapar al resto. Hagan pausas breves y anoten qué parte necesita otra sesión."
    ]
  },
  {
    id: "cuidar-instrumentos",
    titulo: "Cuidados básicos para tus instrumentos",
    resumen: "Hábitos simples de limpieza y almacenamiento que ayudan a conservar instrumentos y accesorios.",
    imagen: "assets/images/blog-cuidados.svg",
    contenido: [
      "Guarda cada instrumento en un lugar seco, lejos de cambios bruscos de temperatura. Después de tocar, limpia las superficies con un paño suave y seco.",
      "Enrolla los cables sin forzarlos, retira las pilas de equipos que no usarás por mucho tiempo y revisa periódicamente conectores y piezas móviles."
    ]
  }
];
