import { FC } from "react";
import pkg from "../../../package.json";

export const FaqView: FC = ({}) => {
  const question = [
  ];
  return (
    <section id="faq" className="py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="hs-accordion-group space-y-4">
            {question.map((question, index) => (
              <div
                key={index}
                className={`hs-accordion bg-default-950/40   overflow-hidden rounded-lg border border-white/10 backdrop-blur-3xl`}
                id={question.id}
              >
                <button
                  className="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-white transition-all"
                  aria-controls={`faq-accordion-${index + 1}`}
                >
                  <h5 className="flex text-base font-semibold">
                    <i
                      data-lucide="help-circle"
                      className="me-3 h-5 w-5 stroke-white align-middle"
                    ></i>
                    {question.question}
                  </h5>
                  <i
                    data-lucide="chevron-up"
                    className="hs-accordion-active:-rotate-180 h-4 w-4 transition-all duration-500"
                  ></i>
                </button>
                <div
                  id={`faq-accordion-${index + 1}`}
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby={question.id}
                >
                  <div className="px-6 pb-4 pt-0">
                    <p className="text-default-300 mb-2 text-sm font-medium">
                      {question.answer}
                    </p>
                    <p className="text-default-300 text-sm font-medium">
                      Have you ever wanted to become Blockchain Developer ? .
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
