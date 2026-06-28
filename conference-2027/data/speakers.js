/* =============================================================================
 * speakers.js — Keynote and invited speakers.
 *
 * Fields:
 *   name         full name
 *   keynote      true = shown with a "Keynote" badge and sorted first
 *   affiliation_en/pl  institution / role in each language
 *   photo        path to an image in assets/img/ (e.g. "assets/img/jane.jpg").
 *                Leave "" to show initials instead of a photo.
 *   bio_en/pl    biography shown in the pop-up when the card is clicked
 *
 * To add a speaker: copy one { ... } block, paste it, and edit the fields.
 * All entries below are placeholders.
 * ===========================================================================*/

const CONF_SPEAKERS = [
  {
    name: "TODO Keynote Speaker One",
    keynote: true,
    affiliation_en: "TODO University",
    affiliation_pl: "TODO Uniwersytet",
    photo: "",
    bio_en: "TODO: A short biography (3–5 sentences). Describe the speaker's field, key work, and the focus of their keynote.",
    bio_pl: "TODO: Krótki biogram (3–5 zdań). Opisz dziedzinę, najważniejsze prace i temat wykładu plenarnego."
  },
  {
    name: "TODO Keynote Speaker Two",
    keynote: true,
    affiliation_en: "TODO University",
    affiliation_pl: "TODO Uniwersytet",
    photo: "",
    bio_en: "TODO: A short biography.",
    bio_pl: "TODO: Krótki biogram."
  },
  {
    name: "TODO Invited Speaker",
    keynote: false,
    affiliation_en: "TODO Institution",
    affiliation_pl: "TODO Instytucja",
    photo: "",
    bio_en: "TODO: A short biography.",
    bio_pl: "TODO: Krótki biogram."
  }
];
