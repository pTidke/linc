"use client";

import HeroHeader from "@/components/hero8-header";
import Footer from "@/components/footer";

const journalArticles = [
  {
    text: `Baek, F., Sohn, J., <strong>Bae, J.</strong>, Kim, D., and Lee, S. (2025). “Physical, Cognitive, and Emotional Responses and their Inter-Related Effects on Human-Robot Team Performance in Construction.” Journal of Construction Engineering and Management (Accepted)`,
    doi: null,
  },
  {
    text: `<strong>Bae, J.</strong>, Choi, B., Krupka, E., & Lee, S. (2025). “Harnessing Project Identity and Safety Norms to Promote Construction Workers’ Safety Behavior: Field Intervention Study.” Journal of Construction Engineering and Management, 151(3), 04024208.`,
    doi: "10.1061/JCEMD4.COENG-14923",
  },
  {
    text: `Lee, G., <strong>Bae, J.</strong>, and Lee, S. (2024). “Wearable heart rate sensing and critical power-based whole-body fatigue monitoring in the field.” Applied Ergonomics, Elsevier.`,
    doi: "10.1016/j.apergo.2024.104358",
  },
  {
    text: `<strong>Bae, J.</strong> and Han, S. (2021). “Vision-based inspection approach using a projector-camera system for off-site quality control: experimental investigation on operational conditions.” Journal of Computing in Civil Engineering, ASCE, 35(5), 04021012.`,
    doi: "10.1061/9780784485910.066",
  },
  {
    text: `Kim, B., Kim, C., Han, S., <strong>Bae, J.</strong>, and Jung, J. (2019). “Is it a good time to develop commercial photovoltaic systems on farmland? An American-style option with crop price risk.” Renewable and Sustainable Energy Reviews, Elsevier, 125, 109827.`,
    doi: "10.3390/su13147846",
  },
  {
    text: `<strong>Bae, J.</strong>, Han, S., and Kim, B. (2018). “An understanding of domestic construction clients’ tender behavior.” Korean Journal of Construction Engineering and Management, 19(1), 74-79.`,
    doi: "10.6106/KJCEM.2018.19.1.074",
  },
];

const conferencePapers = [
  {
    text: `<strong>Bae, J.</strong>, Lee, G., and Lee, S. (2024). “Ear-EEG-based stress assessment for construction workers: a comparison with high-density scalp-EEG.” 2024 ICCEPM, Sapporo, Hokkaido.`,
    doi: "10.6106/ICCEPM.2024.0343",
  },
  {
    text: `Baek, F., <strong>Bae, J.</strong>, Ahn, C., and Lee, S. (2024). “The effects of a co-worker's cognitive response on human-robot team productivity in construction.” 2024 ICCEPM, Sapporo.`,
    doi: "10.6106/ICCEPM.2024.1049",
  },
  {
    text: `Lee, G., <strong>Bae, J.</strong>, and Lee, S. (2022). “Paired electrodes- and constraint independent components analysis- based denoising to alleviate motion artifacts in EEG collected at construction sites.” European Conference on Computing in Construction, Rhodes, Greece.`,
    doi: "10.35490/EC3.2022.186",
  },
  {
    text: `<strong>Bae, J.</strong>, and Han, S. (2019). “Segmentation approach to detection of discrepancy between as-built and as-planned structure images on a construction site.” ASCE I3CE, Atlanta, Georgia, USA.`,
    doi: "10.1061/9780784482438.023",
  },
  {
    text: `<strong>Bae, J.</strong>, Han, S., and Kim, B. (2017). “An understanding of bidding rigging of domestic construction industry using tender ratio.” KICEM Annual Conference, Seoul, Korea. [Outstanding Paper Award]`,
    doi: null,
  },
];

const Patent = [
  {
    text: `<strong>Bae, J.</strong>, Lee, G., and Lee, S. (2025). "Whole-body physical fatigue monitoring with heart rate." US Patent #US20250127410A1.`,
    doi: null,
  },
];

export default function PublicationsPage() {
  return (
    <div id="publications" className="min-h-screen flex flex-col">
      <HeroHeader />
      <main className="flex-1 bg-background py-28 mt-4 px-14 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#BA0C2F] mb-12 text-center font-[Poppins]">
          Publications
        </h1>

        {/* Journal Articles */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-[Poppins]">
            Refereed Journal Articles
          </h2>
          <ul className="space-y-5 text-sm text-justify leading-relaxed text-gray-800 list-disc list-inside">
            {journalArticles.map((entry, idx) => (
              <li key={idx}>
                <span dangerouslySetInnerHTML={{ __html: entry.text }} />
                {entry.doi && (
                  <>
                    {" "}
                    (
                    <a
                      href={`https://doi.org/${entry.doi}`}
                      className="text-[#BA0C2F] underline hover:text-[#90001f]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DOI: {entry.doi}
                    </a>
                    )
                  </>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Conference Papers */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-[Poppins]">
            Refereed Conference Proceedings
          </h2>
          <ul className="space-y-5 text-sm text-justify leading-relaxed text-gray-800 list-disc list-inside">
            {conferencePapers.map((entry, idx) => (
              <li key={idx}>
                <span dangerouslySetInnerHTML={{ __html: entry.text }} />
                {entry.doi && (
                  <>
                    {" "}
                    (
                    <a
                      href={`https://doi.org/${entry.doi}`}
                      className="text-[#BA0C2F] underline hover:text-[#90001f]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DOI: {entry.doi}
                    </a>
                    )
                  </>
                )}
              </li>
            ))}
          </ul>
        </section>

      {/* Patent*/}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-[Poppins]">
            Patent
          </h2>
          <ul className="space-y-5 text-sm text-justify leading-relaxed text-gray-800 list-disc list-inside">
            {Patent.map((entry, idx) => (
              <li key={idx}>
                <span dangerouslySetInnerHTML={{ __html: entry.text }} />
                {entry.doi && (
                  <>
                    {" "}
                    (
                    <a
                      href={`https://doi.org/${entry.doi}`}
                      className="text-[#BA0C2F] underline hover:text-[#90001f]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DOI: {entry.doi}
                    </a>
                    )
                  </>
                )}
              </li>
            ))}
          </ul>
        </section>



      </main>
      <Footer />
    </div>
  );
}
