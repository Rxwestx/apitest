import "../styles/style.css";
import { getPokemonData } from './modules/HttpRequest';
import { extractData, showData } from './modules/PokemonData';

const getInputName = (e) => {
    const form =new FormData(e.target);
    const pokeName = form.get("pokeName").toLowerCase();
    return pokeName;
}

const submitHandler = async (e) => {
    e.preventDefault();
    const inputName = getInputName(e);
    const pokemonData = await getPokemonData(inputName);
    const extractedData = extractData(pokemonData);
    showData(extractedData);
}

document.querySelector("#js-form").addEventListener("submit",(e) => submitHandler(e));

// ランダムボタンのハンドラー関数
const randomHandler = async () => {
    // 1〜1000のランダムなIDを生成
    const randomId = Math.floor(Math.random() * 1000) + 1;
//     // APIからデータを取得（既存の関数を流用）
    const pokemonData = await getPokemonData(randomId.toString());  // IDを文字列に変換
    if (pokemonData) {  // データがある場合のみ処理
        const extractedData = extractData(pokemonData);
        showData(extractedData);
    }
}

 // ランダムボタンにイベントリスナーを追加
document.querySelector("[data-button]").addEventListener("click", randomHandler);