function selectedProduct(select){
  featureselector.style.visibility = "visible";
  // console.log(select);
  // featureSelect.options[featureSelect.options.length] = [];

  // Remove all Options in Features
  // $("#feature-select").empty();
  removeOptions(document.getElementById("feature-select"));

  setFeatures(select.value);
  // console.log(select.value);
}

function selectedFeature(select){

  var selectedFeature = select.value;

  if (selectedFeature == "New Feature") {
    newfeature.style.display = "block";
  } else {
    newfeature.style.display = "none";
  }
  console.log(selectedFeature);

}


function setFeatures(selProduct) {
  var selectedProductForFeatures = selProduct;
  var features = productFeatureDictionary[selectedProductForFeatures];

  var featureSelect = document.getElementById('feature-select');

  // var option = document.createElement("option");
  // option.text = "Choose Feature";
  // option.value = "Choose Feature";
  // option.disabled = true;
  // featureSelect.appendChild(option);

  featureSelect.appendChild(new Option('N/A', 'N/A'));
  featureSelect.appendChild(new Option('New Feature', 'New Feature'));

  for (var feature in features) {
    if (features.hasOwnProperty(feature)) {
        featureSelect.appendChild(new Option(features[feature], features[feature]));
        // featureSelect.options.add( new Option(features[feature],features[feature]) )
    }
  }

}

function removeOptions(selectbox)
{
    var i;
    // Gr Eq to 1 to save 0 (Choose a Feature)
    for(i = selectbox.options.length - 1 ; i >= 1 ; i--)
    {
        selectbox.remove(i);
    }
}
