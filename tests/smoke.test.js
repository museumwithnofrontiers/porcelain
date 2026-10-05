import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'porcelain',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Porcelain',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: 'f88a365b-0b19-5fa2-8be0-31a30d035b7c',
      project: 'Discover Baroque Art',
      className: 'mwnf-chip--DBA',
    },
    noticeItem: '3d81aec6-b59f-5b48-b482-d6cde0cf5bda',
    dynasty: {
      item: 'cfa923e7-7677-5dde-b481-034397401b10',
      name: 'Ottomans',
    },
    timeline: {
      code: 'tr',
      id: 'tur',
      country: 'Türkiye',
    },
    partner: {
      id: '95483cda-d367-5af3-ad0e-2779b97409cb',
      name: 'Dar al-Athar al-Islamiyyah',
      city: 'Kuwait City',
      country: 'Kuwait',
      objects: 1,
    },
  },
})
