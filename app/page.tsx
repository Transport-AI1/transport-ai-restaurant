
"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  UtensilsCrossed,
  X,
} from "lucide-react";

const dishes = [
  {
    category: "PARA EMPEZAR",
    name: "Burrata & tomate de temporada",
    description: "Burrata cremosa, tomates dulces, albahaca fresca y aceite de oliva.",
    price: "16 €",
    image:
      "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "DE LA TIERRA",
    name: "Risotto de setas",
    description: "Arroz cremoso, setas salteadas, parmesano y un toque de trufa.",
    price: "19 €",
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "NUESTRO FAVORITO",
    name: "Salmón a la brasa",
    description: "Salmón dorado, verduras de temporada y salsa cítrica de la casa.",
    price: "24 €",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=85",
  },
];

const menuItems = {
  Entrantes: [
    ["Burrata con tomate", "16 €"],
    ["Croquetas cremosas de temporada", "14 €"],
    ["Ensalada mediterránea", "13 €"],
    ["Pan artesano con aceite", "5 €"],
  ],
  Principales: [
    ["Risotto de setas y parmesano", "19 €"],
    ["Salmón a la brasa", "24 €"],
    ["Pasta fresca de la casa", "18 €"],
    ["Entrecot con patatas rústicas", "28 €"],
  ],
  Postres: [
    ["Tarta cremosa de queso", "8 €"],
    ["Tiramisú casero", "8 €"],
    ["Fruta fresca de temporada", "7 €"],
  ],
};

type MenuCategory = keyof typeof menuItems;

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [menuCategory, setMenuCategory] =
    useState<MenuCategory>("Entrantes");
  const [reservationSent, setReservationSent] = useState(false);

  return (
    <main className="min-h-screen bg-[#f6f4ed] text-[#20271f]">
      <div className="bg-[#283c2d] px-4 py-2 text-center text-[10px] tracking-[0.2em] text-[#e9eadf] sm:text-xs">
        COCINA MEDITERRÁNEA · PRODUCTO DE TEMPORADA · UNA EXPERIENCIA PARA DISFRUTAR
      </div>

      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f6f4ed]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#283c2d] text-[#f6f4ed]">
              <UtensilsCrossed size={19} />
            </span>
            <span>
              <span className="block text-lg font-semibold tracking-tight">
                TRANSPORT AI
              </span>
              <span className="block text-[9px] tracking-[0.28em] text-[#65705f]">
                RESTAURANT · DEMO
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-xs font-medium md:flex">
            <a href="#concepto" className="transition hover:text-[#71805b]">
              Nuestra esencia
            </a>
            <a href="#carta" className="transition hover:text-[#71805b]">
              La carta
            </a>
            <a href="#experiencia" className="transition hover:text-[#71805b]">
              El espacio
            </a>
            <a
              href="#reservas"
              className="bg-[#283c2d] px-5 py-3 text-white transition hover:bg-[#405b42]"
            >
              Reservar mesa ↗
            </a>
          </nav>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="p-2 md:hidden"
            aria-label={mobileMenu ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenu && (
          <nav className="flex flex-col gap-4 border-t border-black/10 px-6 py-5 text-sm md:hidden">
            <a onClick={() => setMobileMenu(false)} href="#concepto">Nuestra esencia</a>
            <a onClick={() => setMobileMenu(false)} href="#carta">La carta</a>
            <a onClick={() => setMobileMenu(false)} href="#experiencia">El espacio</a>
            <a onClick={() => setMobileMenu(false)} href="#reservas">Reservar mesa</a>
          </nav>
        )}
      </header>

      <section id="inicio" className="relative isolate overflow-hidden bg-[#20271f] text-white">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2200&q=90')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#171d17]/95 via-[#171d17]/70 to-[#171d17]/25" />

        <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 lg:min-h-[740px] lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-2xl">
            <div className="mb-7 flex items-center gap-3 text-[10px] tracking-[0.25em] text-[#d5d9c5] sm:text-xs">
              <span className="h-px w-9 bg-[#b6bd93]" />
              UNA NUEVA FORMA DE DISFRUTAR
            </div>

            <h1 className="font-serif text-5xl font-normal leading-[1.08] tracking-tight sm:text-7xl lg:text-[86px]">
              El placer de
              <br />
              comer <span className="italic text-[#c7d0aa]">sin prisa.</span>
            </h1>

            <p className="mt-7 max-w-lg text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              Cocina mediterránea, ingredientes de temporada y momentos que
              merecen quedarse un poco más. Bienvenido a nuestra mesa.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#carta"
                className="inline-flex items-center justify-center gap-3 bg-[#dce1c8] px-6 py-4 text-xs font-semibold text-[#263326] transition hover:bg-white"
              >
                DESCUBRIR LA CARTA <ArrowRight size={16} />
              </a>
              <a
                href="#concepto"
                className="inline-flex items-center justify-center gap-3 border border-white/40 px-6 py-4 text-xs font-semibold text-white transition hover:bg-white/10"
              >
                NUESTRA HISTORIA
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-[10px] tracking-widest text-white/70">
              <span className="flex items-center gap-2">
                <Sparkles size={14} /> PRODUCTO DE TEMPORADA
              </span>
              <span className="flex items-center gap-2">
                <UtensilsCrossed size={14} /> COCINA MEDITERRÁNEA
              </span>
            </div>
          </div>

          <div className="hidden justify-end lg:flex">
            <div className="max-w-[280px] border border-white/30 bg-black/20 p-6 backdrop-blur-sm">
              <p className="text-[10px] tracking-[0.22em] text-[#dce1c8]">
                NUESTRA FILOSOFÍA
              </p>
              <p className="mt-5 font-serif text-3xl leading-snug">
                Lo sencillo, cuando se hace bien, es extraordinario.
              </p>
              <div className="mt-7 h-px w-12 bg-[#c7d0aa]" />
              <p className="mt-4 text-xs leading-6 text-white/70">
                Ingredientes honestos. Recetas cuidadas. Una mesa abierta para
                compartir.
              </p>
            </div>
          </div>
        </div>

        <a
          href="#concepto"
          className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[9px] tracking-[0.2em] text-white/70"
        >
          DESCUBRE
          <ArrowDown size={16} />
        </a>
      </section>

      <section id="concepto" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85"
            alt="Ambiente cálido de un restaurante mediterráneo"
            className="h-[380px] w-full object-cover sm:h-[500px]"
          />
          <div className="absolute -bottom-5 -right-2 bg-[#dce1c8] p-5 sm:-right-5 sm:p-7">
            <p className="font-serif text-3xl italic">De nuestra mesa</p>
            <p className="mt-1 text-[10px] tracking-widest">A LA TUYA</p>
          </div>
        </div>

        <div className="pt-4 lg:pt-0">
          <p className="text-[10px] font-semibold tracking-[0.25em] text-[#71805b]">
            NUESTRA ESENCIA
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
            La cocina que conecta con lo que importa.
          </h2>
          <p className="mt-6 text-sm leading-7 text-[#62675b]">
            Creemos que comer bien va mucho más allá de sentarse a la mesa. Es
            elegir buenos ingredientes, respetar los sabores y disfrutar de
            una conversación que se alarga sin mirar el reloj.
          </p>
          <p className="mt-4 text-sm leading-7 text-[#62675b]">
            Nuestra propuesta se inspira en la cocina mediterránea: recetas
            reconocibles, productos de temporada y una mirada actual que deja
            que cada ingrediente hable por sí mismo.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-5 border-t border-black/10 pt-6">
            <div>
              <p className="font-serif text-2xl">Temporada</p>
              <p className="mt-2 text-xs leading-5 text-[#74796e]">
                Ingredientes seleccionados según el momento.
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl">Cercanía</p>
              <p className="mt-2 text-xs leading-5 text-[#74796e]">
                Una experiencia cálida y sin complicaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="carta" className="bg-[#eae9df] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.25em] text-[#71805b]">
                SABORES QUE NOS DEFINEN
              </p>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
                Nuestra selección
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#62675b]">
                Una muestra de nuestra propuesta gastronómica. Productos
                reconocibles, elaboraciones cuidadas y sabores para compartir.
              </p>
            </div>
            <span className="text-xs tracking-widest text-[#62675b]">
              CARTA DE DEMOSTRACIÓN
            </span>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {dishes.map((dish, index) => (
              <article key={dish.name} className="group">
                <div className="relative overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-[270px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[320px]"
                  />
                  <span className="absolute left-4 top-4 bg-[#f6f4ed] px-3 py-2 text-[9px] font-semibold tracking-widest">
                    {dish.category}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-black/15 py-5">
                  <div>
                    <h3 className="font-serif text-2xl">{dish.name}</h3>
                    <p className="mt-2 text-xs leading-6 text-[#62675b]">
                      {dish.description}
                    </p>
                  </div>
                  <span className="pt-1 text-sm font-semibold">{dish.price}</span>
                </div>
                <p className="mt-3 text-[10px] text-[#818477]">
                  {String(index + 1).padStart(2, "0")} / SELECCIÓN DE LA CASA
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#carta-completa"
              className="inline-flex items-center gap-3 border border-[#283c2d] px-7 py-4 text-xs font-semibold transition hover:bg-[#283c2d] hover:text-white"
            >
              VER CARTA COMPLETA <ArrowRight size={16} />
            </a>
          </div>

          <div id="carta-completa" className="mx-auto mt-16 max-w-4xl scroll-mt-28 border-t border-black/15 pt-10">
            <div className="flex flex-wrap justify-center gap-2">
              {(Object.keys(menuItems) as MenuCategory[]).map((category) => (
                <button
                  key={category}
                  onClick={() => setMenuCategory(category)}
                  className={`px-5 py-3 text-xs transition ${
                    menuCategory === category
                      ? "bg-[#283c2d] text-white"
                      : "border border-black/15 hover:bg-white/60"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="mt-8 grid gap-x-12 sm:grid-cols-2">
              {menuItems[menuCategory].map(([name, price]) => (
                <div
                  key={name}
                  className="flex items-start justify-between gap-4 border-b border-black/10 py-5"
                >
                  <span className="text-sm">{name}</span>
                  <span className="text-sm font-semibold">{price}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-[10px] leading-5 text-[#818477]">
              Precios e información gastronómica ficticios, incluidos únicamente
              con fines demostrativos.
            </p>
          </div>
        </div>
      </section>

      <section id="experiencia" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-[10px] font-semibold tracking-[0.25em] text-[#71805b]">
            UN ESPACIO PARA COMPARTIR
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
            Quédate por la comida. Vuelve por cómo te sientes.
          </h2>
          <p className="mt-6 text-sm leading-7 text-[#62675b]">
            Imagina una mesa bien puesta, luz cálida, una copa para brindar y
            platos preparados para disfrutar sin prisas. Ese es el espíritu
            que inspira nuestro restaurante.
          </p>

          <div className="mt-8 space-y-5">
            {[
              ["01", "Comidas para disfrutar", "Una propuesta pensada para encuentros cotidianos y ocasiones especiales."],
              ["02", "Sabores mediterráneos", "Recetas que priorizan el producto y el equilibrio."],
              ["03", "Momentos compartidos", "Un ambiente acogedor para venir en pareja, con amigos o en familia."],
            ].map(([number, title, description]) => (
              <div key={number} className="flex gap-4 border-b border-black/10 pb-5">
                <span className="pt-1 text-xs text-[#71805b]">{number}</span>
                <div>
                  <h3 className="text-sm font-semibold">{title}</h3>
                  <p className="mt-2 text-xs leading-6 text-[#74796e]">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=85"
            alt="Interior de restaurante con iluminación cálida"
            className="h-[250px] w-full object-cover sm:h-[350px]"
          />
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=85"
            alt="Mesa preparada en un restaurante"
            className="mt-10 h-[250px] w-full object-cover sm:h-[350px]"
          />
          <div className="col-span-2 bg-[#283c2d] p-6 text-white sm:p-8">
            <p className="font-serif text-2xl italic">
              “La mejor parte de cualquier día puede ser sentarse a la mesa.”
            </p>
            <p className="mt-3 text-[9px] tracking-[0.2em] text-[#dce1c8]">
              EL ESPÍRITU DE TRANSPORT AI RESTAURANT
            </p>
          </div>
        </div>
      </section>

      <section id="reservas" className="bg-[#283c2d] px-5 py-20 text-white sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.25em] text-[#dce1c8]">
              TU MESA TE ESPERA
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">
              Hagamos un hueco para disfrutar.
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-white/70">
              ¿Una comida especial, una cena entre amigos o simplemente ganas
              de comer bien? Envíanos tu solicitud de reserva.
            </p>

            <div className="mt-9 space-y-5 text-sm">
              <div className="flex items-start gap-4">
                <Clock3 className="mt-1 h-5 w-5 text-[#dce1c8]" />
                <div>
                  <p className="font-semibold">Horario de ejemplo</p>
                  <p className="mt-1 text-xs leading-6 text-white/65">
                    Martes a domingo · 13:00–16:00 y 20:00–23:00
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-[#dce1c8]" />
                <div>
                  <p className="font-semibold">Ubicación de demostración</p>
                  <p className="mt-1 text-xs leading-6 text-white/65">
                    Dirección ficticia · Madrid, España
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 text-[#dce1c8]" />
                <div>
                  <p className="font-semibold">Contacto</p>
                  <p className="mt-1 text-xs leading-6 text-white/65">
                    Los datos de contacto se configurarían para el restaurante real.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f6f4ed] p-6 text-[#20271f] sm:p-9">
            {reservationSent ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#dce1c8]">
                  <Check size={26} />
                </span>
                <h3 className="mt-6 font-serif text-3xl">
                  Solicitud preparada
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-6 text-[#62675b]">
                  Esta es una demostración visual. No se ha enviado ninguna
                  reserva real. En un proyecto definitivo se conectaría el
                  formulario al sistema del restaurante.
                </p>
                <button
                  onClick={() => setReservationSent(false)}
                  className="mt-7 border border-[#283c2d] px-5 py-3 text-xs font-semibold hover:bg-[#283c2d] hover:text-white"
                >
                  Volver al formulario
                </button>
              </div>
            ) : (
              <>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-[#71805b]">
                  RESERVAS
                </p>
                <h3 className="mt-3 font-serif text-3xl">
                  Solicita tu mesa
                </h3>
                <p className="mt-3 text-xs leading-6 text-[#74796e]">
                  Rellena los datos para ver cómo funcionaría el formulario.
                  No se confirma una reserva real.
                </p>

                <form
                  className="mt-7 space-y-5"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setReservationSent(true);
                  }}
                >
                  <div>
                    <label htmlFor="name" className="mb-2 block text-xs font-medium">
                      Nombre
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="Tu nombre"
                      className="w-full border border-black/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#71805b]"
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="mb-2 block text-xs font-medium">
                        Correo electrónico
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="tu@email.com"
                        className="w-full border border-black/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#71805b]"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-xs font-medium">
                        Teléfono
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="Tu teléfono"
                        className="w-full border border-black/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#71805b]"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="date" className="mb-2 block text-xs font-medium">
                        Fecha
                      </label>
                      <input
                        id="date"
                        name="date"
                        type="date"
                        required
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-[#71805b]"
                      />
                    </div>
                    <div>
                      <label htmlFor="guests" className="mb-2 block text-xs font-medium">
                        Comensales
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        defaultValue="2 personas"
                        className="w-full border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-[#71805b]"
                      >
                        <option>1 persona</option>
                        <option>2 personas</option>
                        <option>3 personas</option>
                        <option>4 personas</option>
                        <option>5 personas</option>
                        <option>6 personas</option>
                        <option>7 o más personas</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="mb-2 block text-xs font-medium">
                      Comentarios (opcional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      placeholder="¿Alguna petición especial?"
                      className="w-full resize-y border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-[#71805b]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-3 bg-[#283c2d] px-5 py-4 text-xs font-semibold text-white transition hover:bg-[#405b42]"
                  >
                    PROBAR SOLICITUD DE RESERVA
                    <ArrowRight size={16} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-[#1c241d] px-5 py-10 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-center">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dce1c8] text-[#283c2d]">
              <UtensilsCrossed size={19} />
            </span>
            <span>
              <span className="block text-sm font-semibold tracking-widest">
                TRANSPORT AI
              </span>
              <span className="mt-1 block text-[9px] tracking-[0.2em] text-white/55">
                RESTAURANT · DEMOSTRACIÓN
              </span>
            </span>
          </a>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/65">
            <a href="#concepto" className="hover:text-white">Nuestra esencia</a>
            <a href="#carta" className="hover:text-white">La carta</a>
            <a href="#reservas" className="hover:text-white">Reservas</a>
          </div>

          <a
            href="https://transport-ai-web.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-[#dce1c8] hover:text-white"
          >
            Desarrollado por Transport AI <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-5 text-[10px] leading-5 text-white/45">
          <p>
            Sitio web conceptual creado por Transport AI para fines de demostración.
            El restaurante, la ubicación, los horarios, los platos y los precios
            son ficticios. El formulario no envía reservas reales.
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Transport AI Restaurant · Demo conceptual.
          </p>
        </div>
      </footer>
    </main>
  );
}
