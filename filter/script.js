
var value = ""
var SelectedFilters = []
var countryObject

var editMode = false
var SelectedArrayName = ""


const continentAfricaBox = document.querySelector("[africa]")
const continentAsiaBox = document.querySelector("[asia]")
const continentEuropeBox = document.querySelector("[europe]")
const continentNorthAmericaBox = document.querySelector("[northamerica]")
const continentSouthAmericaBox = document.querySelector("[southamerica]")
const continentOceaniaBox = document.querySelector("[oceania]")

const parentAfricaBox = document.querySelector("[parent-africa]")
const parentAsiaBox = document.querySelector("[parent-asia]")
const parentEuropeBox = document.querySelector("[parent-europe]")
const parentNorthAmericaBox = document.querySelector("[parent-northamerica]")
const parentSouthAmericaBox = document.querySelector("[parent-southamerica]")
const parentOceaniaBox = document.querySelector("[parent-oceania]")


const dataBox = document.querySelector("[data-body]")
const InputBox = document.querySelector("[data-input]")
const filterListBox = document.querySelector("[filterlist]")
const filterBox = document.querySelector("[filterbox]")
const countryTemplate = document.querySelector("[country-template]")
const countryInputBox = document.querySelector("[country-input]")
const countryPopup = document.querySelector("[country-popup]")
const countryPopupContent = document.querySelector("[popup-content]")
var expositionTextBox


filterListBox.innerHTML = addTreeChild(filterList, SelectedFilters, false)

var result
InputBox.addEventListener("input", e => {
  value = e.target.value
  value = value.toLowerCase()
  result = structuredClone(filterList)
  createMapResult(result)
  filterListBox.innerHTML = addTreeChild(result, SelectedFilters, false)
})

var countrySearch = ""

populateCountries()

countryInputBox.addEventListener("input", e => {

  countrySearch = e.target.value
  countrySearch = countrySearch.toLowerCase()
  populateCountries()
})


if (editMode) {

  var extraInputs = ""
  extraInputs += '<br><input type="text" style="font-size: 1.5rem;" addbox-text><br><br><input type="button" style="margin-right: 20px;" value="Add Map" onclick="addFilterElement(true)"><input type="button" value="Add Array Item" onclick="addFilterElement(false)"><br>'
  extraInputs += '<p style="color: white;" selectedarray></p>'
  extraInputs += '<br><br><input type="button" value="Print arrays" onclick="printText()">'
  extraInputs += '<br><br><br><input type="text" style="font-size: 1.5rem;" country-addbox><br><br><input type="button" style="margin-right: 20px;" value="Add Country" onclick="addCountry()">'
  filterBox.innerHTML += extraInputs
  var selectedArraytext = document.querySelector("[selectedarray]")
  var newElementInputBox = document.querySelector("[addbox-text]")
  var countryAddBox = document.querySelector("[country-addbox]")

}

function printText() {

  var firstWindow = window.open("", "")
  firstWindow.document.write("<p> filter <br>" + createTextFromMap(filterList) + "</p>")

  var secondWindow = window.open("", "")
  secondWindow.document.write("<p> countries <br>" + createCountryText() + "</p>")
}

function checkCountryFilters(country){

  let hasFilter = true

  SelectedFilters.forEach(filter => {

    let filterHierarchy = filter.split("_")
    filterHierarchy.splice(0, 1)

    let filterParent = ""
    filterHierarchy.forEach(filterPiece => {
      
      if (filterHierarchy.indexOf(filterPiece) != filterHierarchy.length - 1) {
        filterParent += "_" + filterPiece
      }
    });

    if (!country.filters.has(filterParent)) {
      hasFilter = false
    }
    else if (!(country.filters.get(filterParent).includes(filterHierarchy[filterHierarchy.length - 1]))) {
      hasFilter = false
    }
  });

  return hasFilter
}

function checkMapValue(inputvariable) {

  if (inputvariable instanceof Array) {

    var doesArrayHaveValue = false
    inputvariable.forEach(element => {
      if (element instanceof Map || element instanceof Array) {
        if (checkMapValue(element)) {
          doesArrayHaveValue = true
        }
      }

      else if (element.includes(value)) {
        doesArrayHaveValue = true
      }
    });

    return doesArrayHaveValue
  }
  if (inputvariable instanceof Map) {

    var valueArray = Array.from(inputvariable.values())
    var hasMapValue = false
    valueArray.forEach(element => {
      if (element instanceof Map || element instanceof Array) {
        if (checkMapValue(element)) {
        hasMapValue = true
        }
      }

      else if (element.includes(value)) {
        hasMapValue = true
      }
    });
    

    return hasMapValue
  }
  else {

    return false
  }
}

function addTreeChild(CurrentItem, filterArray, isPopup, PreviousName = "") {
  
  var CombinedText = ""
  var ItemList
  var hasChildren = false
  var isArray = false
  if (CurrentItem instanceof Map) {
    
    ItemList = Array.from(CurrentItem.keys())
    hasChildren = true
    isArray = true
  }
  else if (CurrentItem instanceof Array) {
    ItemList = CurrentItem
    isArray = true
  }

  var CurrentName
  
  if (isArray) {
    ItemList.forEach(element => {

      CurrentName = PreviousName + "_" + element

      if (hasChildren) {
        var openTag = ""

        if (value != "") {
          openTag = " open"
        }

        CombinedText += '<ul><li><details' + openTag + "><summary>" + element + "</summary>" + (editMode ? '<input type="button" value="X" onclick="removeElement' + "('" + CurrentName + "')" + '">' : "") + " \n"
        
        CombinedText += addTreeChild(CurrentItem.get(element), filterArray, isPopup, CurrentName)

        CombinedText += "</details></li></ul> \n"
        
      }
      else {
       CombinedText += '<li><label for="' + (isPopup ? 'Country' : '') + CurrentName + '"><input type="checkbox" onclick="' + (editMode ? 'countryFilterChanged' : 'filterChanged') + "('" + CurrentName + "')" + '"' + ' id="' + (isPopup ? 'Country' : '') + CurrentName + '"' + (filterArray.includes(CurrentName) ? " checked" : "") + '>' + element + "</label>" + (editMode ? '<input type="button" value="X" onclick="removeElement' + "('" + CurrentName + "')" + '">' : "") + "</li> \n"
      }
    });

    if (editMode) {
      CombinedText += '<li><label><input type="button" value="select element" onclick="selectArrayElement' + "('" + PreviousName + "')" + '"></label></li>'
    }
  }
  else {
    CurrentName = PreviousName + "_" + CurrentItem

    CombinedText += '<li><label for="' + (isPopup ? 'Country' : '') + CurrentName + '"><input type="checkbox" onclick="' + (editMode ? 'countryFilterChanged' : 'filterChanged') + "('" + CurrentName + "')" + '"' + ' id="' + (isPopup ? 'Country' : '') + CurrentName + '"' + (filterArray.includes(CurrentName) ? " checked" : "") + '>' + CurrentItem + "</label>" + (editMode ? '<input type="button" value="X" onclick="removeElement' + "('" + CurrentName + "')" + '">' : "") + "</li> \n"
  }

  return CombinedText
}

function createMapResult(MapReference) {

  var MapCopy = MapReference

  var MapKeys = Array.from(MapCopy.keys())
  
  MapKeys.forEach(Key => {

    var ValueCopy = MapCopy.get(Key)
    
    if (Key.toLowerCase().includes(value)) {
      HasInput = true
    }

    else if (ValueCopy instanceof Map) {
      
      createMapResult(ValueCopy)
      
      if (ValueCopy.size == 0) {
        MapCopy.delete(Key)
      }
    }

    else if (ValueCopy instanceof Array) {
      
      const newArray = ValueCopy.filter(item => item.toLowerCase().includes(value))
      ValueCopy = newArray

      MapCopy.set(Key, ValueCopy)

      if (ValueCopy.length == 0) {
        MapCopy.delete(Key)
      }
    }

  });
}

function filterChanged(ButtonId) {

  if (SelectedFilters.includes(ButtonId)) {
    SelectedFilters.splice(SelectedFilters.indexOf(ButtonId), 1)
  }
  else {
    SelectedFilters.push(ButtonId)
  }

  InputBox.focus()

  populateCountries()

}

function createTextFromMap(inputMap) {

  var currentText = "new Map(["
  var currentArray = Array.from(inputMap.keys())

  currentArray.forEach(element => {

    currentText += '<br> ["' + element + '", '
    valueReference = inputMap.get(element)
    if (valueReference instanceof Map) {
      currentText += createTextFromMap(valueReference)
    }
    else if (valueReference instanceof Array) {

      currentText += "["
      valueReference.forEach(arrayElement => {
        currentText += '"' + arrayElement + '"'

        if (!(valueReference.indexOf(arrayElement) == valueReference.length - 1)) {
          currentText += ", "
        }
      });
      // end of array
      currentText += "]"
    }
    else {
      currentText += '"' + valueReference + '"'
    }
    // end of map key value pair
    currentText += "]"

    if (!(currentArray.indexOf(element) == currentArray.length - 1)) {
      currentText += ", "
    }
  });

  currentText += "])"

  return currentText
}

function selectArrayElement(textId) {

  selectedArraytext.innerHTML = textId
  SelectedArrayName = textId
}

function addFilterElement(isMap) {

  var ElementName = newElementInputBox.value
  var filterPath = SelectedArrayName.split("_")
  filterPath.splice(0, 1)

  if (isMap) {

    if (filterPath.length == 0) {
      filterList.set(ElementName, new Map([]))
    }

    else {

      let currentKey = null
      let previousKey
      filterPath.forEach(pathKey => {

        previousKey = currentKey
        if (currentKey == null) {
          currentKey = filterList.get(pathKey)
        }
        else {
          currentKey = currentKey.get(pathKey)
        }
        
      });
      
      if (currentKey instanceof Map) {
        currentKey.set(ElementName, new Map([]))
      }

      else if (currentKey instanceof Array) {

        if (previousKey == null) {
          filterList.set(filterPath[filterPath.length - 1], new Map([[ElementName, new Map([])]]))
        }
        else {
          previousKey.set(filterPath[filterPath.length - 1], new Map([[ElementName, new Map([])]]))
        }
      }
    }

  }

  else {

    if (filterPath.length != 0) {

      let currentKey = null
      let previousKey
      filterPath.forEach(pathKey => {

        previousKey = currentKey
        if (currentKey == null) {
          currentKey = filterList.get(pathKey)
        }
        else {
          currentKey = currentKey.get(pathKey)
        }
      });

      if (currentKey instanceof Array) {
        currentKey.push(ElementName)
      }

      else if (currentKey instanceof Map) {

        if (previousKey == null) {
          filterList.set(filterPath[filterPath.length - 1], [ElementName])
        }

        else {
          previousKey.set(filterPath[filterPath.length - 1], [ElementName])
        }
        
      }
    }
  }
}

function removeElement(RemoveId) {

  var removePath = RemoveId.split("_")
  removePath.splice(0, 1)

  var currentPathElement = null

  removePath.forEach(pathStep => {

    if (removePath.indexOf(pathStep) != removePath.length - 1) {
      if (currentPathElement == null) {
        currentPathElement = filterList.get(pathStep)
      }
      else {
        currentPathElement = currentPathElement.get(pathStep)
      }
    }
    
  });

  if (currentPathElement instanceof Array) {

    currentPathElement.splice(currentPathElement.indexOf(removePath[removePath.length - 1]), 1)
  }

  else if (currentPathElement instanceof Map) {
    
    currentPathElement.delete(removePath[removePath.length - 1])
    
    
  }

  else if (currentPathElement == null) {
    filterList.delete(removePath[removePath.length - 1])
  }
}

function populateCountries() {

  continentAfricaBox.innerHTML = ""
  continentAsiaBox.innerHTML = ""
  continentEuropeBox.innerHTML = ""
  continentNorthAmericaBox.innerHTML = ""
  continentSouthAmericaBox.innerHTML = ""
  continentOceaniaBox.innerHTML = ""

  let countriesToShow = countries.filter(checkCountryFilters)
  let countryCounter = 0

  countriesToShow.forEach(countryToShow => {
    
    const countryBox = countryTemplate.content.cloneNode(true).children[0]
    const countryVisibleName = countryBox.querySelector("[country-name]")
    countryVisibleName.textContent = countryToShow.name

    const countryNameLabel = countryBox.querySelector("[country-link]")
    countryNameLabel.setAttribute('onclick', 'openCountryPopup' + "('" + countryToShow.name + "')")
    
    countryBox.innerHTML += '<img src="' + countryToShow.imageExposition.get("flag") + '" alt="">'

    let combinedTexToAdd = ""
    let expositionIncluded = []

    SelectedFilters.forEach(filter => {

      let filterHierarchy = filter.split("_")
      filterHierarchy.splice(0, 1)
  
      let filterParent = ""
      filterHierarchy.forEach(filterPiece => {
        
        if (filterHierarchy.indexOf(filterPiece) != filterHierarchy.length - 1) {
          filterParent += "_" + filterPiece
        }
      });

      let textMessages
      // compare betweeen countries
      if (countryToShow.textExpostition.has(filterParent) && checkExpositions(countriesToShow, filterParent, false)) {

        textMessages = countryToShow.textExpostition.get(filterParent)
        
        if (textMessages instanceof Array) {

          textMessages.forEach(message => {
            
            combinedTexToAdd += '<div class="countrydescription">' + message + '</div>'
          });
        }

        else {
          combinedTexToAdd += '<div class="countrydescription">' + textMessages + '</div>'
        }
        
        expositionIncluded.push(filterParent)
      }
  
      // country specific/region based attributes
      if (countryToShow.textExpostition.has(filterParent + "_" + filterHierarchy[filterHierarchy.length - 1])) {

        textMessages = countryToShow.textExpostition.get(filterParent + "_" + filterHierarchy[filterHierarchy.length - 1])

        if (textMessages instanceof Array) {

          textMessages.forEach(message => {
            
            combinedTexToAdd += '<div class="countrydescription">' + message + '</div>'
          });
        }

        else {
          combinedTexToAdd += '<div class="countrydescription">' + textMessages + '</div>'
        }
        
        expositionIncluded.push(filterParent + "_" + filterHierarchy[filterHierarchy.length - 1])
      }

      let imageMessages
      // compare betweeen countries
      if (countryToShow.imageExposition.has(filterParent) && checkExpositions(countriesToShow, filterParent, true)) {

        imageMessages = countryToShow.imageExposition.get(filterParent)

        if (imageMessages instanceof Array) {

          combinedTexToAdd += '<div>' + filterParent

          imageMessages.forEach(message => {
            
            combinedTexToAdd += '<img src="' + message + '" alt="">'
          });

          combinedTexToAdd += '</div>'
        }
        
        else {
          combinedTexToAdd += '<div>' + filterParent + '<img src="' + imageMessages + '" alt=""></div>'
        }
        
      }

      // country specific/region based attributes
      if (countryToShow.imageExposition.has(filterParent + "_" + filterHierarchy[filterHierarchy.length - 1])) {

        imageMessages = countryToShow.imageExposition.get(filterParent + "_" + filterHierarchy[filterHierarchy.length - 1])

        if (imageMessages instanceof Array) {

          combinedTexToAdd += '<div>' + filterParent + "_" + filterHierarchy[filterHierarchy.length - 1]

          imageMessages.forEach(message => {
            
            combinedTexToAdd += '<img src="' + message + '" alt="">'
          });

          combinedTexToAdd += '</div>'
        }

        else {
          combinedTexToAdd += '<div>' + filterParent + "_" + filterHierarchy[filterHierarchy.length - 1] + '<img src="' + imageMessages + '" alt=""></div>'
        }
      }
      
    });

    let textWithSearch = hasTextInExposition(countryToShow, countrySearch, expositionIncluded)
    let temporaryText = ""
      
    textWithSearch.forEach(TextToAdd => {
      
      if (TextToAdd != "") {
        temporaryText += '<div class="countrydescription">' + TextToAdd + '</div>'
      }
    });

    countryBox.innerHTML += temporaryText + combinedTexToAdd

    if (countryToShow.name.toLowerCase().includes(countrySearch) || textWithSearch.length > 0) {
      if (countryToShow.filters.get("_Continent").includes("Africa")) {
        continentAfricaBox.append(countryBox)
      }
      else if (countryToShow.filters.get("_Continent").includes("Asia")) {
        continentAsiaBox.append(countryBox)
      }
      else if (countryToShow.filters.get("_Continent").includes("Europe")) {
        continentEuropeBox.append(countryBox)
      }
      else if (countryToShow.filters.get("_Continent").includes("North America")) {
        continentNorthAmericaBox.append(countryBox)
      }
      else if (countryToShow.filters.get("_Continent").includes("South America")) {
        continentSouthAmericaBox.append(countryBox)
      }
      else if (countryToShow.filters.get("_Continent").includes("Oceania")) {
        continentOceaniaBox.append(countryBox)
      }

      countryCounter++
    }
    
  });


  parentAfricaBox.classList.toggle("hide", continentAfricaBox.innerHTML == "")
  parentAsiaBox.classList.toggle("hide", continentAsiaBox.innerHTML == "")
  parentEuropeBox.classList.toggle("hide", continentEuropeBox.innerHTML == "")
  parentNorthAmericaBox.classList.toggle("hide", continentNorthAmericaBox.innerHTML == "")
  parentSouthAmericaBox.classList.toggle("hide", continentSouthAmericaBox.innerHTML == "")
  parentOceaniaBox.classList.toggle("hide", continentOceaniaBox.innerHTML == "")
  
  console.log(countryCounter + " Countries")
}

function checkExpositions(fullArray, elementToTest, isImage) {

  let isMatching =  false
  fullArray.forEach(CountryToTest => {
    
    if (isImage) {

      if (CountryToTest.imageExposition.has(elementToTest)) {
        isMatching = true
      }
    }
    else {

      if (CountryToTest.textExpostition.has(elementToTest)) {
        isMatching = true
      }
    }
    
  });

  return isMatching
}

function hasTextInExposition(country, textToSearch, alreadyIncluded) {

  let keyArray = Array.from(country.textExpostition.keys())
  let textToInclude = []

  if (textToSearch != "") {

    keyArray.forEach(expositionKey => {
    
      let expositionValue = country.textExpostition.get(expositionKey)
      

      if (expositionValue instanceof Array) {

        expositionValue.forEach(arrayElement => {
  
          if (arrayElement.toLowerCase().includes(textToSearch)) {

            if (alreadyIncluded.includes(expositionKey)) {
              textToInclude.push("")
            }
            else {
              textToInclude.push(arrayElement)
            }
            
          }
        });
      }
  
      else if (expositionValue.toLowerCase().includes(textToSearch)) {

        if (alreadyIncluded.includes(expositionKey)) {
          textToInclude.push("")
        }
        else {
          textToInclude.push(expositionValue)
        }
        
      }
      
    });
  }
  

  return textToInclude
}

function openCountryPopup(countryName) {

  let PopupText = ""

  countryObject = countries.find(o => o.name == countryName)
  PopupText += '<div class="name">' + countryObject.name + '</div>'

  PopupText += '<img src="' + countryObject.imageExposition.get("flag") + '" alt="">'
  
  if (editMode) {

    PopupText += '<div class="filter-tree-list">' + addTreeChild(filterList, makeFilterArray(countryObject.filters), true) + '</div>'

    PopupText += '<div><textarea type="text" style="font-size: 1.5rem; height: 200px; resize: none;" add-exposition></textarea>'
    PopupText += '<br><br><input type="button" style="margin-right: 20px;" value="Add Text Exposition" onclick="addExposition(true, false)"><input type="button" style="margin-right: 20px;" value="Add Text Array" onclick="addExposition(true, true)">'
    PopupText += '<br><br><input type="button" style="margin-right: 20px;" value="Add Image Exposition" onclick="addExposition(false, false)"><input type="button" style="margin-right: 20px;" value="Add Image Array" onclick="addExposition(false, true)">'
    PopupText += '<br><br><br><br><input type="text" style="font-size: 1.5rem;" custom-element><br><br><input type="button" style="margin-right: 20px;" value="Select Custom Element" onclick="selectCustomElement()"></div>'
  }


  
  countryPopupContent.innerHTML = PopupText

  if (editMode) {
    expositionTextBox = document.querySelector("[add-exposition]")
    customElementTextBox = document.querySelector("[custom-element]")
  }
  countryPopup.classList.add("show")
}

function closePopup () {

  countryPopup.classList.remove("show")
}

function makeFilterArray(OriginalMap) {

  let OutputArray = []
  let OriginalMapKeys = Array.from(OriginalMap.keys())

  OriginalMapKeys.forEach(OriginalKey => {

    let originalValueArray = OriginalMap.get(OriginalKey)
    
    if (originalValueArray instanceof Array) {

      originalValueArray.forEach(OriginalValue => {
        
        OutputArray.push(OriginalKey + "_" + OriginalValue)
      });
    }

    else {
      OutputArray.push(OriginalKey + "_" + originalValueArray)
    }
    
  });

  return OutputArray
}

function countryFilterChanged(filterId) {

  let filterNames = filterId.split("_")
  filterNames.splice(0, 1)
  let parentFilter = ""

  filterNames.forEach(element => {
    
    if (filterNames.indexOf(element) != filterNames.length - 1) {
      parentFilter += "_" + element
    }
  });

  if (countryObject.filters.has(parentFilter)) {

    let countryFilters = countryObject.filters.get(parentFilter)

    if (countryFilters.includes(filterNames[filterNames.length - 1])) {
      countryFilters.splice(countryFilters.indexOf(filterNames[filterNames.length - 1]), 1)
    }
    else {
      countryFilters.push(filterNames[filterNames.length - 1])
    }

    countryObject.filters.set(parentFilter, countryFilters)
  }
  
  else {
    countryObject.filters.set(parentFilter, [filterNames[filterNames.length - 1]])
  }
}

function createCountryText() {

  let countryObjectText = '[ \n'

  countries.forEach(element => {

    countryObjectText += '{ \n'
    countryObjectText += '"name" : "' + element.name + '", \n'
    countryObjectText += '"filters" : ' + createTextFromMap(element.filters) + ', \n'
    countryObjectText += '"imageExposition" : ' + createTextFromMap(element.imageExposition) + ', \n'
    countryObjectText += '"textExpostition" : ' + createTextFromMap(element.textExpostition) + '\n'

    if (countries.indexOf(element) != countries.length - 1) {
      countryObjectText += '}, \n'
    }
    else {
      countryObjectText += '} \n'
    }

  });

  countryObjectText += "]"

  return countryObjectText
}

function addCountry() {

  let countryNameTemp = countryAddBox.value
  countries.push({
    "name" : countryNameTemp,
    "filters" : new Map([["_Continent", ["Africa"]]]),
    "imageExposition" : new Map([]),
    "textExpostition" : new Map([])
  })
}

function addExposition(isTextExposition, isArrayElement) {

  let arrayReference
  if (isTextExposition) {

    if (isArrayElement) {

      arrayReference = []
      if (countryObject.textExpostition.has(SelectedArrayName)) {

        arrayReference = countryObject.textExpostition.get(SelectedArrayName) 
      }

      arrayReference.push(expositionTextBox.value)
      countryObject.textExpostition.set(SelectedArrayName, arrayReference)
    }
    else { // is not array in text
      countryObject.textExpostition.set(SelectedArrayName, expositionTextBox.value)
    }
  }
  
  else { // is image exposition

    if (isArrayElement) {

      arrayReference = []
      if (countryObject.imageExposition.has(SelectedArrayName)) {

        arrayReference = countryObject.imageExposition.get(SelectedArrayName) 
      }

      arrayReference.push(expositionTextBox.value)
      countryObject.imageExposition.set(SelectedArrayName, arrayReference)
    }
    else { // is not array in image
      countryObject.imageExposition.set(SelectedArrayName, expositionTextBox.value)
    }
  }
}

function selectCustomElement() {

  selectedArraytext.innerHTML = customElementTextBox.value
  SelectedArrayName = customElementTextBox.value
}