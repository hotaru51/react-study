const suisei = {
  name: 'Suisei Hoshimachi',
  age: 18
}

// テンプレート文字列
console.log(`名前: ${suisei.name}, 年齢: ${suisei.age}`)

// アロー関数のreturn省略
const func1 = (s1, s2) => `${s1}${s2}`

console.log(func1('あじ', 'まる'))

// ()で囲むと改行も可能
const func2 = (name, age) => (
  {
    name: name,
    age: age
  }
)

console.log(func2('Miko Sakura', 18))

// 分割代入
const subaru = {
  firstName: 'Subaru',
  lastName: 'Oozora'
}

const {firstName, lastName} = subaru
console.log(`${lastName} ${firstName}`)

// 一部だけ取り出しも可能
const greeting = {
  miko: 'にゃっはろー',
  mio: 'こんばんみおーん'
}

const {miko} = greeting
console.log(miko)

// 変数名を変えつつ取り出しも可能
const {mio: mioGreeting} = greeting
console.log(mioGreeting)

// 配列の分割代入
const smok = ['Subaru', 'Mio', 'Okayu', 'Korone']
const [s, m] = smok
console.log(`${s}, ${m}`)

// 引数のデフォルト値
const func3 = (name = 'すいちゃん') => {
  console.log(`推し -> ${name}`)
}

func3()
func3('みこち')

// 代入分割のデフォルト値
const location = {
  otonokizaka: 'Tokyo',
  uranohoshi: 'Numazu',
  hasunosora: 'Ishikawa'
}

const {uranohoshi = 'Shizuoka'} = location
const {nijigasaki = 'Odaiba'} = location
console.log(uranohoshi)
console.log(nijigasaki)

// スプレッド構文
console.log(smok)
console.log(...smok)

const okakoro = ['おか', 'ころ']
const func4 = (n1, n2) => `${n1}${n2}てぇてぇ`
console.log(func4(...okakoro))

smok.shift()
const gamers = ['Fubuki', ...smok] // 配列のコピーにも使える
console.log(...gamers)

// オブジェクトの省略記法
const ne = 'ねねち'
const po = 'ポルカ'
const la = 'ラミィ'
const bo = 'ぼたん'
const nepolabo = { ne, po, la, bo }
console.log(nepolabo)
