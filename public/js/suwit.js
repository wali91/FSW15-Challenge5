// function gunting batu kertas
function getPilihanComp(){
    let comp = Math.random();
    if(comp < 0.34) return 'batu';
    if(comp >= 0.34 && comp > 0.56) return 'gunting';
    return 'kertas';
}

function getPilihanPlayer(){
    let play = Math.random();
    if(play < 0.34) return 'batu';
    if(play >= 0.34 && play > 0.59) return 'kertas';
    return 'gunting'
}

function getHasil(computer, player){
    if(player == computer) return 'SERI';
    if(player == 'batu') return (computer == 'gunting') ? 'PLAYER 1 MENANG' : 'COM KALAH'
    if(player == 'kertas') return (computer == 'gunting') ? 'PLAYER 1 KALAH' : 'COM MENANG'
    if(computer == 'batu') return (player == 'gunting') ? 'PLAYER 1 MENANG' : 'COM KALAH'
    if(computer == 'kertas') return (player == 'gunting') ? 'PLAYER 1 KALAH' : 'COM MENANG'
}
// end fungsi gunting batu kertas

//  DOM
const selections = document.querySelectorAll('.selection');
const selections1 = document.querySelectorAll('.selection2');
const refresh = document.getElementById('btn-refresh');
const resultInfo = document.querySelector('.informasi');
const resultGame = document.querySelector('.result');
 
let clickAble = true;

refresh.addEventListener('click', () =>{
    const playComp = getPilihanComp();
    const playPlayer = getPilihanPlayer();
    const result = getHasil(playComp,playPlayer)
    // console.log(result)
 selections.forEach((el) =>{
    const select1 = el
        if(clickAble && result === 'SERI')
        {
        select1.classList.add('active_batu_player')
        resultGame.classList.remove('text')
        resultGame.classList.add('draw')
        resultInfo.innerHTML = 'DRAW'
        resultInfo.classList.add('text2')
        resultInfo.classList.remove('informasi')
        }

        if(result !== 'SERI'){
        select1.classList.remove('active_batu_player')
        resultInfo.classList.remove('informasi')
        resultInfo.classList.remove('info')
        resultInfo.classList.remove('text2')
        resultGame.classList.remove('draw')
        }

        if(clickAble && result === 'PLAYER 1 MENANG')
        {
         select1.classList.add('active_player_win')
         resultGame.classList.add('player_info_win')
         resultInfo.innerHTML = result;
         resultGame.classList.add('text')
         resultGame.classList.remove('informasi')
         resultInfo.classList.remove('info')
        }

        if(result !== 'PLAYER 1 MENANG')
        {
        select1.classList.remove('active_player_win')
        resultGame.classList.remove('player_info_win')
        resultGame.classList.remove('text')
        resultInfo.classList.remove('vs')
        }

        if(clickAble && result === 'COM MENANG')
        {
        select1.classList.add('active_batu_com')
        resultGame.classList.add('com_info_win')
        resultInfo.innerHTML = result;
        resultGame.classList.add('text')
        resultInfo.classList.remove('info')
        resultInfo.classList.remove('informasi')
        } 

        if(result !== 'COM MENANG')
        {
        select1.classList.remove('active_batu_com')
        resultGame.classList.remove('com_info_win')
        resultInfo.classList.remove('text')
        resultInfo.classList.remove('informasi')
        resultInfo.classList.remove('info')
        }  
  })

 selections1.forEach((el) =>{
    const select2 = el
        if(clickAble && result === 'SERI')
        {    
        select2.classList.add('active_batu_com')
        resultInfo.classList.remove('info')
        resultGame.classList.remove('informasi')
        }

        if(result !== 'SERI')
        {
        select2.classList.remove('active_batu_com')
        resultInfo.classList.remove('info')
        resultInfo.classList.remove('informasi')
        }

        if(clickAble && result === 'PLAYER 1 MENANG')
        {
        select2.classList.add('active_com_win')
        resultGame.classList.add('com_info_win')
         resultInfo.innerHTML = result;
         resultGame.classList.add('text')
         resultGame.classList.remove('informasi')
         resultInfo.classList.remove('info')
        } 

        if(result !== 'PLAYER 1 MENANG')
        {
        select2.classList.remove('active_com_win')
        resultGame.classList.remove('com_info_win')
        resultGame.classList.remove('text')
        resultInfo.classList.remove('info')
        } 

        if(clickAble && result === 'COM MENANG')
        {
        select2.classList.add('active_player_win')
        resultGame.classList.add('com_info_win')
        resultInfo.innerHTML = result;
        resultGame.classList.add('text')
        resultInfo.classList.remove('info')
        resultInfo.classList.remove('informasi')
        } 

        if(result !== 'COM MENANG')
        {
        select2.classList.remove('active_player_win')
        resultGame.classList.remove('com_info_win')
        resultInfo.classList.remove('text')
        resultInfo.classList.remove('informasi')
        resultInfo.classList.remove('info')
        } 
  })
})