'use client';

import { useState } from 'react';

interface ContactProps {
  translations?: {
    title?: string;
    subtitle?: string;
    cta?: string;
    form?: any;
    hoursTitle?: string;
    hours?: string;
    addressTitle?: string;
    address?: string;
    attentionTitle?: string;
    attention?: string;
  };
}

export default function Contact({ translations }: ContactProps) {
  const t = {
    title: translations?.title ?? 'Contacto profesional',
    subtitle:
      translations?.subtitle ??
      'Estamos listos para asistirlo en su operación de comercio exterior. Contáctenos por el canal que prefiera y le atenderemos a la brevedad.',
    cta: translations?.cta ?? 'Iniciar consulta',
    form: translations?.form ?? {},
    hoursTitle: translations?.hoursTitle,
    hours: translations?.hours,
    addressTitle: translations?.addressTitle,
    address: translations?.address,
    attentionTitle: translations?.attentionTitle,
    attention: translations?.attention,
  };

  const whatsappNumber = '541156629374';
  const phoneNumber = '+541156629374';
  const email = 'bscustoms12@gmail.com';

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hola BS Customs, quisiera consultar sobre servicios de importación/exportación.'
  )}`;
  const telHref = `tel:${phoneNumber}`;
  const baseMailHref = `mailto:${email}?subject=${encodeURIComponent('Consulta desde sitio web')}`;

  // Form state
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [submittedPreview, setSubmittedPreview] = useState<string | null>(null);

  const validate = () => {
    const e: { [k: string]: string } = {};
    if (!name.trim()) e.name = 'El nombre es obligatorio.';
    if (!emailInput.trim()) e.email = 'El correo es obligatorio.';
    if (!message.trim()) e.message = 'El mensaje es obligatorio.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    const bodyPreview = `Nombre: ${name}\nEmpresa: ${company}\nEmail: ${emailInput}\nTeléfono: ${phoneInput}\n\nMensaje:\n${message}`;
    setSubmittedPreview(bodyPreview);
  };

  const onCopy = async () => {
    if (!submittedPreview) return;
    try {
      await navigator.clipboard.writeText(submittedPreview);
      alert('Mensaje copiado al portapapeles.');
    } catch (err) {
      console.error(err);
    }
  };

  const mailtoWithBody = () => {
    if (!submittedPreview) return baseMailHref;
    return `${baseMailHref}&body=${encodeURIComponent(submittedPreview)}`;
  };

  return (
    <section id="contacto" className="relative py-24 lg:py-32 bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="w-16 h-1 bg-gradient-to-r from-[#7ab1e5] to-[#1760a2] mb-8" />
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">{t.subtitle}</p>
        </div>

        {/* Main Grid: Form + Info Card */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Left Column: Contact Options + Form */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Quick Contact Options */}
            <div className="space-y-4">
              <p className="text-sm text-gray-500">
                Respuesta inmediata por WhatsApp, o contáctenos por teléfono y email.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {/* WhatsApp - Primary CTA */}
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366] text-white text-sm font-medium rounded-lg hover:bg-[#20bd5a] transition-colors duration-200"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>

                {/* Phone */}
                <a
                  href={telHref}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span>{phoneNumber}</span>
                </a>

                {/* Email */}
                <a
                  href={baseMailHref}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span>{email}</span>
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400 uppercase tracking-wider">o complete el formulario</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Contact Form */}
            <form onSubmit={onSubmit} className="space-y-5 text-gray-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {t.form.nameLabel ?? 'Nombre'} <span className="text-red-400">*</span>
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.form.namePlaceholder ?? 'Nombre completo'}
                    className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7ab1e5]/50 focus:border-[#7ab1e5] transition-colors"
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {t.form.companyLabel ?? 'Empresa'}
                  </label>
                  <input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={t.form.companyPlaceholder ?? 'Empresa (opcional)'}
                    className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7ab1e5]/50 focus:border-[#7ab1e5] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {t.form.emailLabel ?? 'Email'} <span className="text-red-400">*</span>
                  </label>
                  <input
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder={t.form.emailPlaceholder ?? 'ejemplo@dominio.com'}
                    className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7ab1e5]/50 focus:border-[#7ab1e5] transition-colors"
                    type="email"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {t.form.phoneLabel ?? 'Teléfono'}
                  </label>
                  <input
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    placeholder={t.form.phonePlaceholder ?? '+54 11 1234 5678'}
                    className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7ab1e5]/50 focus:border-[#7ab1e5] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t.form.messageLabel ?? 'Mensaje'} <span className="text-red-400">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.form.messagePlaceholder ?? 'Describa brevemente su consulta...'}
                  rows={4}
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg bg-white placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#7ab1e5]/50 focus:border-[#7ab1e5] transition-colors"
                />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#1760a2] to-[#7ab1e5] text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md hover:from-[#145590] hover:to-[#6a9fd4] transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {t.form.submit ?? 'Previsualizar mensaje'}
                </button>
                <span className="text-xs text-gray-400">Vista previa antes de enviar</span>
              </div>
            </form>

            {/* Preview Panel */}
            {submittedPreview && (
              <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <h4 className="text-sm font-semibold text-gray-900">Vista previa del mensaje</h4>
                </div>
                <pre className="text-sm text-gray-600 whitespace-pre-wrap bg-white p-4 rounded-lg border border-gray-100">{submittedPreview}</pre>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={mailtoWithBody()}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white border border-gray-200 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    {t.form.openMail ?? 'Abrir en correo'}
                  </a>
                  <button
                    onClick={onCopy}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white border border-gray-200 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                    </svg>
                    {t.form.copy ?? 'Copiar'}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Info Card */}
          <div className="lg:col-span-2">
            <div className="sticky top-8 bg-gradient-to-br from-gray-50 to-gray-100/50 border border-gray-200/60 p-6 lg:p-8 rounded-2xl space-y-6">
              {/* Hours */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#1760a2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">{t.hoursTitle ?? 'Horario de atención'}</h4>
                </div>
                <p className="text-sm text-gray-600 ml-10">{t.hours ?? 'Lunes a Viernes — 9:00 a 18:00 (ART)'}</p>
              </div>

              <div className="h-px bg-gray-200" />

              {/* Address */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#1760a2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">{t.addressTitle ?? 'Dirección'}</h4>
                </div>
                <p className="text-sm text-gray-600 ml-10">{t.address ?? 'Ciudad Autónoma de Buenos Aires, Argentina'}</p>
              </div>

              <div className="h-px bg-gray-200" />

              {/* Response Time */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#1760a2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">{t.attentionTitle ?? 'Tiempo de respuesta'}</h4>
                </div>
                <p className="text-sm text-gray-600 ml-10">{t.attention ?? 'Menos de 24hs por email. Minutos por WhatsApp.'}</p>
              </div>

              {/* Quick WhatsApp CTA */}
              <div className="pt-2">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#25D366] text-white text-sm font-semibold rounded-xl hover:bg-[#20bd5a] transition-colors duration-200"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Iniciar chat ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
