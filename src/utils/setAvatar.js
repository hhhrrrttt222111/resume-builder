import one from '../assets/images/png/avatars/one.png'
import two from '../assets/images/png/avatars/two.png'
import three from '../assets/images/png/avatars/three.png'
import four from '../assets/images/png/avatars/four.png'
import five from '../assets/images/png/avatars/five.png'
import six from '../assets/images/png/avatars/six.png'
import seven from '../assets/images/png/avatars/seven.png'
import eight from '../assets/images/png/avatars/eight.png'
import nine from '../assets/images/png/avatars/nine.png'
import ten from '../assets/images/png/avatars/ten.png'


const imgArr = [one, two, three, four, five, six, seven, eight, nine, ten]
var img = imgArr[Math.floor(Math.random() * imgArr.length)];


export default img