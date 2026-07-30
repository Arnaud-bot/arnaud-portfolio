import type { CaseStudy } from "@/types/content";
import type { Locale } from "@/lib/i18n/config";

/**
 * Contenu placeholder — à remplacer par de vrais projets avant publication.
 * Les crochets [ ] signalent les champs à compléter.
 */
const caseStudiesByLocale: Record<Locale, CaseStudy[]> = {
  fr: [
    {
      slug: "case-study-un",
      title: "[Titre du projet]",
      client: "[Nom du client / secteur]",
      category: "UX Audit · UI Redesign",
      summary:
        "[Résumé en une phrase du problème business résolu et du résultat obtenu.]",
      problem:
        "[Décris le problème initial : quelle friction business ou UX empêchait le produit d'avancer.]",
      research:
        "[Décris la méthode de recherche : entretiens utilisateurs, analytics, audit concurrentiel...]",
      analysis: "[Décris les insights clés qui ont émergé de la recherche.]",
      designDecisions:
        "[Explique les décisions de design prises et pourquoi, avec justification UX.]",
      development:
        "[Décris les choix techniques et les contraintes rencontrées pendant le développement.]",
      results:
        "[Résultats mesurés après lancement — à compléter avec de vraies métriques.]",
      lessonsLearned:
        "[Ce que ce projet t'a appris, ce que tu referais différemment.]",
    },
    {
      slug: "case-study-deux",
      title: "[Titre du projet]",
      client: "[Nom du client / secteur]",
      category: "Web Development",
      summary:
        "[Résumé en une phrase du problème business résolu et du résultat obtenu.]",
      problem: "[À compléter.]",
      research: "[À compléter.]",
      analysis: "[À compléter.]",
      designDecisions: "[À compléter.]",
      development: "[À compléter.]",
      results: "[À compléter.]",
      lessonsLearned: "[À compléter.]",
    },
    {
      slug: "case-study-trois",
      title: "[Titre du projet]",
      client: "[Nom du client / secteur]",
      category: "Mobile Development",
      summary:
        "[Résumé en une phrase du problème business résolu et du résultat obtenu.]",
      problem: "[À compléter.]",
      research: "[À compléter.]",
      analysis: "[À compléter.]",
      designDecisions: "[À compléter.]",
      development: "[À compléter.]",
      results: "[À compléter.]",
      lessonsLearned: "[À compléter.]",
    },
  ],
  en: [
    {
      slug: "case-study-un",
      title: "[Project title]",
      client: "[Client name / industry]",
      category: "UX Audit · UI Redesign",
      summary:
        "[One-sentence summary of the business problem solved and the result achieved.]",
      problem:
        "[Describe the initial problem: what business or UX friction was holding the product back.]",
      research:
        "[Describe the research method: user interviews, analytics, competitive audit...]",
      analysis: "[Describe the key insights that emerged from the research.]",
      designDecisions:
        "[Explain the design decisions made and why, with UX justification.]",
      development:
        "[Describe the technical choices and constraints faced during development.]",
      results: "[Measured results after launch — fill in with real metrics.]",
      lessonsLearned:
        "[What this project taught you, what you'd do differently.]",
    },
    {
      slug: "case-study-deux",
      title: "[Project title]",
      client: "[Client name / industry]",
      category: "Web Development",
      summary:
        "[One-sentence summary of the business problem solved and the result achieved.]",
      problem: "[To complete.]",
      research: "[To complete.]",
      analysis: "[To complete.]",
      designDecisions: "[To complete.]",
      development: "[To complete.]",
      results: "[To complete.]",
      lessonsLearned: "[To complete.]",
    },
    {
      slug: "case-study-trois",
      title: "[Project title]",
      client: "[Client name / industry]",
      category: "Mobile Development",
      summary:
        "[One-sentence summary of the business problem solved and the result achieved.]",
      problem: "[To complete.]",
      research: "[To complete.]",
      analysis: "[To complete.]",
      designDecisions: "[To complete.]",
      development: "[To complete.]",
      results: "[To complete.]",
      lessonsLearned: "[To complete.]",
    },
  ],
  ar: [
    {
      slug: "case-study-un",
      title: "[عنوان المشروع]",
      client: "[اسم العميل / القطاع]",
      category: "تدقيق تجربة المستخدم · إعادة تصميم الواجهة",
      summary: "[ملخص بجملة واحدة للمشكلة التجارية التي تم حلها والنتيجة المحققة.]",
      problem:
        "[صف المشكلة الأولية: ما هو الاحتكاك التجاري أو المتعلق بتجربة المستخدم الذي كان يعيق تقدّم المنتج.]",
      research:
        "[صف منهجية البحث: مقابلات المستخدمين، التحليلات، تحليل المنافسين...]",
      analysis: "[صف أهم الاستنتاجات التي ظهرت من البحث.]",
      designDecisions: "[اشرح قرارات التصميم المتخذة ولماذا، مع التبرير من منظور تجربة المستخدم.]",
      development: "[صف الخيارات التقنية والقيود التي واجهتها أثناء التطوير.]",
      results: "[النتائج المقاسة بعد الإطلاق — أكملها بمقاييس حقيقية.]",
      lessonsLearned: "[ما تعلمته من هذا المشروع، وما كنت ستفعله بشكل مختلف.]",
    },
    {
      slug: "case-study-deux",
      title: "[عنوان المشروع]",
      client: "[اسم العميل / القطاع]",
      category: "تطوير الويب",
      summary: "[ملخص بجملة واحدة للمشكلة التجارية التي تم حلها والنتيجة المحققة.]",
      problem: "[أكمل هذا القسم.]",
      research: "[أكمل هذا القسم.]",
      analysis: "[أكمل هذا القسم.]",
      designDecisions: "[أكمل هذا القسم.]",
      development: "[أكمل هذا القسم.]",
      results: "[أكمل هذا القسم.]",
      lessonsLearned: "[أكمل هذا القسم.]",
    },
    {
      slug: "case-study-trois",
      title: "[عنوان المشروع]",
      client: "[اسم العميل / القطاع]",
      category: "تطوير تطبيقات الجوّال",
      summary: "[ملخص بجملة واحدة للمشكلة التجارية التي تم حلها والنتيجة المحققة.]",
      problem: "[أكمل هذا القسم.]",
      research: "[أكمل هذا القسم.]",
      analysis: "[أكمل هذا القسم.]",
      designDecisions: "[أكمل هذا القسم.]",
      development: "[أكمل هذا القسم.]",
      results: "[أكمل هذا القسم.]",
      lessonsLearned: "[أكمل هذا القسم.]",
    },
  ],
};

export function getCaseStudies(locale: Locale): CaseStudy[] {
  return caseStudiesByLocale[locale];
}
