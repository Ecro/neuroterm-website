export function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Connect',
      description: 'Open NeuroTerm, select your COM port',
    },
    {
      number: '2',
      title: 'Select',
      description: 'Highlight the error log in terminal',
    },
    {
      number: '3',
      title: 'Ask AI',
      description: 'Click the button or press shortcut',
    },
    {
      number: '4',
      title: 'Get Answer',
      description: 'Root cause + suggested fix',
    },
  ];

  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
            From error to answer in seconds
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/10 to-transparent" />
              )}

              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-4">
                <span className="text-lg font-semibold text-emerald-400">{step.number}</span>
              </div>

              <h3 className="text-base font-medium text-white mb-1">
                {step.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
