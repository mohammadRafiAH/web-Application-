function toggleMenu(){
    let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
  }

  let Normal = document.querySelector('.Normal');  
  let byOtherFranchise = document.querySelector('.BY-other-Franchise');
  let byAdAgency = document.querySelector('.By-ad-Agency');

  let normalDynamicColumn = document.querySelector('.Normal-dynamic-column');
  let otherFranchiseDynamicColumn = document.querySelector('.OtherFranchise-dynamic-column');
  let agencyDynamicColumn = document.querySelector('.Agency-dynamic-column');
  l

  Normal.addEventListener('click', function(){
    Normal.add(normalDynamicColumn);
    normalDynamicColumn.classList.style.display="block";
  });
  byOtherFranchise.addEventListener('click', function(){
    byOtherFranchise.add(otherFranchiseDynamicColumn)
    otherFranchiseDynamicColumn.classList.style.display="block";
  });
  byAdAgency.addEventListener('click', function(){
    byAdAgency.add(agencyDynamicColumn);
    agencyDynamicColumn.classList.style.display="block";

  });




  /*