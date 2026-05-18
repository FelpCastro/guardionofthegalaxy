const steps = [
  {
    id: 1,
    title: 'Inscreva-se',
    description: 'Preencha seus dados e entre na comunidade',
    icon: (
      <svg
        xmlns="http://w3.org"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 !text-white"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" x2="19" y1="11" y2="17" />
        <line x1="16" x2="22" y1="14" y2="14" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Entre em um squad',
    description: 'Participe de um time com outros profissionais iniciantes',
    icon: (
      <svg
        xmlns="http://w3.org"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 !text-white"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Desenvolva projetos reais',
    description: 'Colabore no desenvolvimento de produtos digitais',
    icon: (
      <svg
        xmlns="http://w3.org"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 !text-white"
      >
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="12" x2="12" y1="17" y2="21" />
        <line x1="7" x2="17" y1="21" y2="21" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Ganhe experiência e visibilidade',
    description: 'Mostre seu trabalho e evolua no mercado',
    icon: (
      <svg
        xmlns="http://w3.org"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 !text-white"
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center justify-center px-4 py-16">
      <div className="flex flex-row items-center justify-center gap-3 mb-12 w-full">
        <div className="relative flex items-center justify-center w-6 h-6">
          <div className="absolute w-5 h-5 bg-fuchsia-500 rounded-full blur-md opacity-80"></div>
          <span className="text-fuchsia-300 font-bold text-2xl relative z-10 select-none">
            ✦
          </span>
        </div>
        <h1 className="text-xl md:text-2xl font-bold tracking-wide !text-white block font-sans">
          Como funciona
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-5xl w-full">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-start p-5 bg-purple-950/10 border-2 border-fuchsia-600/40 rounded-xl backdrop-blur-md hover:border-fuchsia-500 transition-all duration-300 min-h-[220px] w-full max-w-[220px]"
          >
            <div className="p-2.5 bg-[#c0007a] rounded-xl mb-4 shadow-md">
              {step.icon}
            </div>
            <h3 className="text-[14px] font-bold mb-2 !text-white tracking-wide text-left">
              {step.title}
            </h3>
            <p className="text-[11px] text-cyan-300/70 leading-relaxed font-normal text-left">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
