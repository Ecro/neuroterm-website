export function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Connect',
      description: 'Pick your port. One click.',
    },
    {
      number: '2',
      title: 'Ask',
      description: 'Type @ + what you want.',
    },
    {
      number: '3',
      title: 'Done',
      description: 'Insert. Execute. Debug.',
    },
  ];

  return (
    <section className="py-24 border-t border-white/8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
            From idea to command in seconds
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-px bg-gradient-to-r from-emerald-500/30 to-transparent" />
              )}

              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-emerald-500/50 bg-emerald-500/20 mb-4 group-hover:scale-110 group-hover:border-emerald-400 group-hover:shadow-lg group-hover:shadow-emerald-500/30 transition-all duration-300">
                <span className="text-xl font-bold text-emerald-400">{step.number}</span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                {step.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
