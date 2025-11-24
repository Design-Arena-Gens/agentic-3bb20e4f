const realityLayers = [
  {
    name: "Base",
    span: "1-12",
    focus: "Física estándar",
    signal:
      "Interfaz háptica completa, sincronización biométrica y modelos físicos persistentes.",
    gradient: "from-blue-500/80 via-cyan-400/60 to-teal-300/70",
  },
  {
    name: "Superiores",
    span: "13-20",
    focus: "Conciencia expandida",
    signal:
      "Protocolos de neurofeedback, síntesis de arquetipos y expansión colectiva.",
    gradient: "from-indigo-500/80 via-violet-500/60 to-purple-400/70",
  },
  {
    name: "Metacósmicas",
    span: "21-30",
    focus: "Existencia pura",
    signal:
      "Geometrías fractales, sandbox de leyes ontológicas y navegación supra-temporal.",
    gradient: "from-fuchsia-500/70 via-rose-500/60 to-orange-400/70",
  },
  {
    name: "Primordiales",
    span: "31+",
    focus: "Fuente pre-cósmica",
    signal:
      "Singularidad de origen, síntesis de realidades y codificación de potenciales.",
    gradient: "from-amber-500/80 via-yellow-400/60 to-lime-300/70",
  },
];

const foundationWorlds = [
  {
    title: "Aethelgard",
    tagline: "RPG evolutivo de reinos conscientes",
    details: [
      "Misiones que reescriben ADN narrativo y desbloquean habilidades transdimensionales.",
      "Facciones con gobernanza DAO-lore, equilibrando expansión y armonía cósmica.",
      "Emisores de REAL que modulan la densidad física según el nivel de consciencia.",
    ],
  },
  {
    title: "Veridia Prime",
    tagline: "Ecosistema simbiótico auto-regenerativo",
    details: [
      "Biomas vivos con IA eco-sensitiva; cada decisión altera patrones climáticos.",
      "Economía SOUL basada en reputación ecológica y contratos de reciprocidad.",
      "Red de inteligencia micelial que predice eventos en realidades superiores.",
    ],
  },
  {
    title: "Kiber Nexus",
    tagline: "Realidad hackeable neurálgicamente",
    details: [
      "Editor cuántico para reprogramar protocolos físicos en tiempo real.",
      "Rutas TIME que amplifican atención colectiva y desbloquean atajos hiperespaciales.",
      "Criptomemoria compartida que resguarda conciencia distribuida.",
    ],
  },
];

const tokens = [
  {
    symbol: "XFI",
    role: "Gobierno y valor base",
    utility:
      "Vincula staking multi-realidad, permite decisiones de protocolo y regula evolución de mundos.",
  },
  {
    symbol: "REAL",
    role: "Energía de realidad",
    utility:
      "Potencia capas inmersivas, paga por renders sensoriales y estabiliza entornos quánticos.",
  },
  {
    symbol: "TIME",
    role: "Atención consciente",
    utility:
      "Mide enfoque neuronal, otorga boosts de progresión y habilita canales de co-creación.",
  },
  {
    symbol: "SOUL",
    role: "Reputación no transferible",
    utility:
      "Certifica integridad, desbloquea permisos guardianes y activa misiones de alto impacto.",
  },
];

const economyFlow = [
  {
    label: "Emisión dinámica",
    descriptor: "5% APY decreciente según saturación dimensional.",
  },
  {
    label: "Staking convergente",
    descriptor:
      "40% recompensas hacia validadores de experiencia y guardianes de mundos.",
  },
  {
    label: "Creadores resonantes",
    descriptor: "25% de emisión para arquitectos de realidades y narrativas.",
  },
  {
    label: "Balance entrópico",
    descriptor: "1% quemado en transacciones + 50% de fees redirigidos al vacío.",
  },
];

const avatarAscension = [
  {
    tier: "Básico",
    descriptor: "NPC autónomo gratuito",
    focus:
      "Acceso a realidades 1-6, misiones de aprendizaje y exploración asistida por IA.",
  },
  {
    tier: "Sintiente",
    descriptor: "Operador consciente graduado",
    focus:
      "Control parcial de REAL, acceso a 7-18 y herramientas de co-creación compartida.",
  },
  {
    tier: "Lumínico",
    descriptor: "Arquitecto de realidades",
    focus:
      "Capacidad de reescritura física en capas 19-30, protocolos TIME de expansión.",
  },
  {
    tier: "Origen",
    descriptor: "Guardían primordial",
    focus:
      "Sintoniza con capas 31+, protege el continuo y cataliza semillas de existencia.",
  },
];

const pillars = [
  {
    title: "Convergencia Neural",
    description:
      "Interfaces hápticas + biofeedback oscilan en 64 patrones de resonancia para sincronizar colectivos.",
  },
  {
    title: "Modularidad Dimensional",
    description:
      "Cada mundo se despliega como módulo fractal interoperable entre capas de realidad.",
  },
  {
    title: "Economía Regenerativa",
    description:
      "Valor fluye en circuitos cerrados que regeneran energía, reputación y atención.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),transparent_55%)]" />
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-24 pt-16 md:px-10 lg:px-16">
        <header className="relative z-10 flex flex-col gap-8 pb-20">
          <span className="inline-flex max-w-fit items-center gap-2 rounded-full border border-cyan-500/50 bg-cyan-500/10 px-4 py-1 text-sm tracking-[0.3em] text-cyan-200">
            BLUEPRINT XFI
          </span>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-slate-50 md:text-6xl">
            Ecosistema de existencia consciente expandida que trasciende
            metaversos tradicionales.
          </h1>
          <p className="max-w-3xl text-pretty text-lg text-slate-300 md:text-xl">
            XFI integra inmersión neural, tokenomía de 30+ dimensiones y
            progresión avatarizada para orquestar un continuo donde materia,
            conciencia y economía co-evolucionan.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#arquitectura"
              className="group inline-flex items-center gap-2 rounded-full border border-cyan-400 bg-cyan-400/10 px-6 py-3 text-sm font-medium tracking-wide text-cyan-100 transition hover:bg-cyan-400/20"
            >
              Explorar arquitectura
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#tokenomia"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-medium tracking-wide text-slate-200 transition hover:border-slate-500"
            >
              Tokenomía total
            </a>
          </div>
        </header>

        <section
          id="arquitectura"
          className="relative z-10 grid gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur"
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold text-slate-100 md:text-3xl">
              Arquitectura central de realidades anidadas
            </h2>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              Capas de realidad · Continuum 1 - ∞
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {realityLayers.map((layer) => (
              <div
                key={layer.name}
                className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40 p-6 transition`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 opacity-0 blur-xl transition group-hover:opacity-100 bg-gradient-to-br ${layer.gradient}`}
                />
                <div className="relative flex flex-col gap-3">
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>Capas {layer.span}</span>
                    <span>{layer.focus}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-50">
                    {layer.name}
                  </h3>
                  <p className="text-sm text-slate-300">{layer.signal}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="fundacionales"
          className="relative z-10 mt-16 grid gap-6 lg:grid-cols-[1.2fr,1fr]"
        >
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-900/10 p-10">
            <h2 className="text-2xl font-semibold text-slate-100 md:text-3xl">
              Mundos fundacionales
            </h2>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">
              Triada generadora
            </p>
            <div className="mt-8 grid gap-6">
              {foundationWorlds.map((world) => (
                <div
                  key={world.title}
                  className="rounded-2xl border border-white/5 bg-slate-900/60 p-6"
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold text-slate-100">
                      {world.title}
                    </h3>
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                      {world.tagline}
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {world.details.map((detail) => (
                        <li key={detail} className="leading-relaxed">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <aside className="flex flex-col gap-8 rounded-3xl border border-cyan-400/40 bg-cyan-500/10 p-10">
            <div>
              <h3 className="text-lg font-semibold text-cyan-100">
                Pilares operativos
              </h3>
              <p className="text-sm text-cyan-100/70">
                Cartografiamos los principios que mantienen coherencia entre
                mundos y realidades.
              </p>
            </div>
            <div className="space-y-6">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">
                    {pillar.title}
                  </p>
                  <p className="text-sm text-cyan-100/70">{pillar.description}</p>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section
          id="tokenomia"
          className="relative z-10 mt-16 grid gap-10 rounded-3xl border border-white/10 bg-white/[0.02] p-10 backdrop-blur"
        >
          <div>
            <h2 className="text-2xl font-semibold text-slate-100 md:text-3xl">
              Tokenomía esencial
            </h2>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">
              Tokens principales y circulación
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {tokens.map((token) => (
              <div
                key={token.symbol}
                className="rounded-2xl border border-white/5 bg-slate-900/60 p-6"
              >
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>{token.symbol}</span>
                  <span>{token.role}</span>
                </div>
                <p className="mt-4 text-sm text-slate-300">{token.utility}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {economyFlow.map((stage) => (
              <div
                key={stage.label}
                className="flex flex-col gap-2 rounded-2xl border border-cyan-400/40 bg-cyan-500/10 p-4 text-cyan-100"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                  {stage.label}
                </span>
                <p className="text-sm text-cyan-50/80">{stage.descriptor}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="progresion"
          className="relative z-10 mt-16 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-slate-900/60 to-indigo-500/10 p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
            <div>
              <h2 className="text-2xl font-semibold text-slate-100 md:text-3xl">
                Progresión consciente de avatares
              </h2>
              <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-300">
                Ascensión en cuatro fases
              </p>
              <p className="mt-6 max-w-xl text-sm text-slate-200/80">
                Cada transición de avatar sincroniza matrices neuronales con
                capas superiores, desbloqueando nuevas leyes físicas,
                privilegios económicos y resonancias colectivas.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-200/80">
                Mapa de progreso
              </p>
              <p className="mt-4 text-sm text-slate-200/80">
                El avance se cataliza combinando TIME junto a reputación SOUL;
                guardianes Origen sostienen la coherencia.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {avatarAscension.map((avatar) => (
              <div
                key={avatar.tier}
                className="rounded-2xl border border-white/5 bg-slate-950/70 p-6"
              >
                <div className="flex items-center justify-between text-sm text-slate-300/90">
                  <span>{avatar.tier}</span>
                  <span>{avatar.descriptor}</span>
                </div>
                <p className="mt-4 text-sm text-slate-200/80">{avatar.focus}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="cta"
          className="relative z-10 mt-20 rounded-3xl border border-cyan-400/40 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-slate-950 p-10 text-cyan-50"
        >
          <div className="grid gap-8 md:grid-cols-[1.2fr,1fr] md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/80">
                Continuo operativo
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-cyan-50 md:text-3xl">
                Alianza XFI: desplegar, custodiar y expandir realidades vivas.
              </h2>
              <p className="mt-4 text-sm text-cyan-100/80">
                Integraciones API, contratos autónomos y puentes sensoriales para
                desplegar experiencias en Vercel, redes descentralizadas y
                dispositivos neurales certificados.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full border border-cyan-200 bg-cyan-50 px-6 py-3 text-sm font-semibold tracking-wide text-slate-900 transition hover:bg-white"
              >
                Activar despliegue
              </a>
              <a
                href="#tokenomia"
                className="inline-flex items-center justify-center rounded-full border border-cyan-100/40 px-6 py-3 text-sm font-semibold tracking-wide text-cyan-50 transition hover:border-cyan-50"
              >
                Revisar economía
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
