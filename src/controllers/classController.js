import ClassListData from '@/data/classList.json'

import Class5Themes from '@/data/5classThemes.json'
import Class6Themes from '@/data/6classThemes.json'
import Class7Themes from '@/data/7classThemes.json'
import Class8Themes from '@/data/8classThemes.json'
import Class9Themes from '@/data/9classThemes.json'
import Class10Themes from '@/data/10classThemes.json'

import Class5Controller from '@/controllers/classes/class5Controller'
import Class6Controller from '@/controllers/classes/class6Controller'
import Class7Controller from '@/controllers/classes/class7Controller'
import Class8Controller from '@/controllers/classes/class8Controller'
import Class9Controller from '@/controllers/classes/class9Controller'
import Class10Controller from '@/controllers/classes/class10Controller'

export default class ClassController {
  constructor () {
    this.classList = []
    this.classListObj = {}
  }

  get themesDict () {
    return {
      '5klass': { themes: Class5Themes, examples: Class5Controller.dict },
      '6klass': { themes: Class6Themes, examples: Class6Controller.dict },
      '7klass': { themes: Class7Themes, examples: Class7Controller.dict },
      '8klass': { themes: Class8Themes, examples: Class8Controller.dict },
      '9klass': { themes: Class9Themes, examples: Class9Controller.dict },
      '10klass': { themes: Class10Themes, examples: Class10Controller.dict }
    }
  }

  uploadClassList () {
    const classListRaw = ClassListData;
    
    this.classList = []
    this.classListObj = {}

    Object.keys(classListRaw).forEach(id => {
      this.classList.push({ id, label: classListRaw[id].label})

      this.classListObj[id] = { id, label: classListRaw[id].label, themes: {}}
      
      if (this.themesDict[id] && this.themesDict[id].themes)  
        this.classListObj[id].themes = this.themesDict[id].themes.reduce((acc, themeData, idx) => {
          acc[idx] = { id: idx, ...themeData}
          return acc
        }, {})
      
      if (this.themesDict[id] && this.themesDict[id].examples)
        this.classListObj[id].examples = this.themesDict[id].examples.reduce((acc, examplesData, idx) => {
          acc[idx] = { id: idx, ...examplesData}
          return acc
        }, {})
    })    
  }

  getClassItem (id) {
    return this.classListObj[id]
  }

  getThemes (classId) {
    return this.getClassItem(classId).themes
  }

  getThemeItem (classId, themeId) {
    return this.getThemes(classId)[themeId]
  }

  getExamples  (classId) {
    return this.getClassItem(classId).examples
  }

  getExamplesItem (classId, themeId) {
    return this.getExamples(classId)[themeId]
  }
}