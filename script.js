function add() {
  const SP = document.getElementById("SP").value;
  const SPP = document.getElementById("SPP").value;
  const result = (+SP) + (+SPP);
  document.getElementById("add").textContent = result;
}

function report() {
  const tMiss = document.getElementById("tMiss").value;
  const date = document.getElementById("date").value;
  const mix = document.getElementById("mix").value;
  const smalls = document.getElementById("smalls").value;
  const SP = document.getElementById("SP").value;
  const SPP = document.getElementById("SPP").value;
  const PPD = document.getElementById("PPD").value;
  const SPnSPP = document.getElementById("SPnSPP").value;
  const topTime = document.getElementById("topTime").value;
  const topTimeM = document.getElementById("topTimeM").value; 
  const topTimeMx = document.getElementById("topTimeMx").value;
  const topTimeS = document.getElementById("topTimeS").value;
  const topTimeSP = document.getElementById("topTimeSP").value;
  const topTimeSPP = document.getElementById("topTimeSPP").value;
  
  const mixCent = Math.round(( mix / tMiss ) * 100);
  const smallsCent = Math.round(( smalls / tMiss ) * 100);
  const SPCent = Math.round(( SP / tMiss ) * 100);
  const SPPCent = Math.round(( SPP / tMiss ) * 100);
  const PPDCent = Math.round(( PPD / tMiss ) * 100);
  const SPnSPPCent = Math.round(( SPnSPP / tMiss ) * 100);
  const topTimeMCent = Math.round(( topTimeM / tMiss ) * 100);
  
  const topTimeMxCent = Math.round(( topTimeMx / topTimeM ) * 100);
  const topTimeSCent = Math.round(( topTimeS / topTimeM ) * 100);
  const topTimeSPCent = Math.round(( topTimeSP / topTimeM ) * 100);
  const topTimeSPPCent = Math.round(( topTimeSPP / topTimeM ) * 100);
  
  
  document.getElementById("reportText").textContent = "Singles missed  " 
  + tMiss + " for " + date + ". (" + mixCent + "%) " + mix + " in Mix. (" 
  + smallsCent + "%) " + smalls + " in Smalls. (" + SPCent + "%) " + SP + 
  " in Smartpac. (" + SPPCent + "%) " + SPP + " in Smartpac Poly. (" + PPDCent + "%) " 
  + PPD + " misses were Picking Picked at Destination. (" + SPnSPPCent + "%) " 
  + SPnSPP + " misses in Smartpac and Smartpac Poly combined. Biggest missed CPT time was " 
  + topTime + " with (" + topTimeMCent + "%) " + topTimeM + ". (" 
  + topTimeMxCent + "%) " + topTimeMx + " in Mix. (" + topTimeSCent + "%) " 
  + topTimeS + " in Smalls. (" + topTimeSPCent + "%) " + topTimeSP + " in Smartpac. (" 
  + topTimeSPPCent + "%) " + topTimeSPP + " in Smartpac Poly.";

}
