# Guía de Animaciones - BS Customs

## 🎬 Descripción General

Se han añadido animaciones suaves y profesionales de **fade-in** a todos los componentes principales del sitio. Las animaciones se activan cuando cada sección entra en el viewport del usuario, creando una experiencia fluida y sofisticada.

---

## 📦 Componentes Animados

### 1. **Hero** (`app/components/Hero.tsx`)
- **Badge**: Fade-in arriba
- **Título**: Fade-in arriba con delay
- **Subtítulo**: Fade-in arriba con delay mayor
- **Botones CTA**: Fade-in arriba con delay aún mayor
- **Stats**: Fade-in arriba
- **Imagen derecha**: Slide-in desde la derecha

### 2. **Services** (`app/components/Services.tsx`)
- **Título de sección**: Fade-in arriba
- **Servicios (grid)**: Alternancia de slide-in izquierda/derecha con delays escalonados

### 3. **About** (`app/components/About.tsx`)
- **Imagen**: Slide-in desde la izquierda
- **Contenido**: Slide-in desde la derecha
- **Cards de valores**: Fade-in arriba con delays escalonados

### 4. **Contact** (`app/components/Contact.tsx`)
- **Título de sección**: Fade-in arriba
- **Formulario**: Slide-in desde la izquierda
- **Card de información**: Slide-in desde la derecha

---

## 🛠️ Cómo Usar

### Hook de Detección de Viewport

Todos los componentes usan el hook personalizado `useInView`:

```typescript
import { useInView } from '@/app/hooks/useInView';

export default function MiComponente() {
  const { ref, isInView } = useInView({ margin: '0px 0px -100px 0px' });
  
  return (
    <section ref={ref}>
      <div className={isInView ? 'animate-fade-in-up' : 'opacity-0'}>
        Contenido
      </div>
    </section>
  );
}
```

### Clases de Animación Disponibles

| Clase | Efecto |
|-------|--------|
| `animate-fade-in-up` | Fade-in suave hacia arriba (600ms) |
| `animate-fade-in` | Fade-in suave (600ms) |
| `animate-slide-in-left` | Slide-in desde la izquierda (600ms) |
| `animate-slide-in-right` | Slide-in desde la derecha (600ms) |
| `animate-scale-in` | Scale-in suave (600ms) |

### Delays de Animación

Para animar múltiples elementos de forma escalonada:

```typescript
{items.map((item, index) => (
  <div
    key={index}
    className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {item}
  </div>
))}
```

O usar las clases de delay predefinidas:

```typescript
<div className={`${isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
  Elemento 1
</div>
<div className={`${isInView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
  Elemento 2
</div>
```

---

## 📝 Clases de Delay Disponibles

| Clase | Delay |
|-------|-------|
| `animation-delay-100` | 0.1s |
| `animation-delay-200` | 0.2s |
| `animation-delay-300` | 0.3s |
| `animation-delay-400` | 0.4s |
| `animation-delay-500` | 0.5s |

---

## ⚙️ Personalización

### Modificar Duración de Animaciones

En `app/globals.css`, edita la duración:

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards; /* Cambiar 0.6s a la duración deseada */
}
```

### Añadir Nueva Animación

1. Añade el `@keyframes` en `globals.css`:

```css
@keyframes slideInBottom {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

2. Añade la clase utility:

```css
.animate-slide-in-bottom {
  animation: slideInBottom 0.6s ease-out forwards;
}
```

3. Úsala en tus componentes:

```typescript
<div className={isInView ? 'animate-slide-in-bottom' : 'opacity-0'}>
  Contenido
</div>
```

---

## 🎨 Características Técnicas

- **Intersection Observer API**: Detecta automáticamente cuándo un elemento entra en el viewport
- **Ease-out timing**: Suavidad profesional y natural
- **No requiere librerías externas**: Utiliza CSS nativo y React hooks
- **Rendimiento optimizado**: Solo anima elementos visibles
- **Responsive**: Funciona perfectamente en todos los dispositivos

---

## 🚀 Sugerencias Adicionales

### Animaciones al Hover

Combina animaciones de entrada con efectos hover:

```typescript
<div className={`transition-all duration-300 hover:scale-105 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
  Contenido interactivo
</div>
```

### Animaciones en Cadena

Usa múltiples delays para crear secuencias sofisticadas:

```typescript
{[1, 2, 3].map((i) => (
  <div
    key={i}
    className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
    style={{ animationDelay: `${i * 0.15}s` }}
  >
    Elemento {i}
  </div>
))}
```

---

## 📱 Testing en Dispositivos

Las animaciones están optimizadas para:
- ✅ Desktop
- ✅ Tablet
- ✅ Mobile

Todas mantienen fluidez y no afectan el rendimiento.

---

## 🔗 Archivos Modificados

- `app/hooks/useInView.ts` - Hook para detectar visibilidad
- `app/globals.css` - Definiciones de keyframes y utilidades
- `app/components/Hero.tsx` - Animaciones aplicadas
- `app/components/Services.tsx` - Animaciones aplicadas
- `app/components/About.tsx` - Animaciones aplicadas
- `app/components/Contact.tsx` - Animaciones aplicadas

---

## 💡 Notas

- Las animaciones se reproducen una sola vez al entrar en viewport (Intersection Observer desactiva después)
- La estética minimalista se mantiene con movimientos sutiles (24px máximo)
- Todas las animaciones son accesibles y respetuosas con `prefers-reduced-motion`

