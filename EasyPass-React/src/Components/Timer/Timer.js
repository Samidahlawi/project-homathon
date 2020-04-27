import React, {Component} from 'react';


class Timer extends Component{

   
    constructor(){
        super()
        this.state = {
            startDate : new Date(),
            date: new Date(),
            show:true,
            words: ["ثان - second", "بما فيه الكفاية - enough", "سهل - plain", "فتاة - girl", "معتاد - usual", "الشباب - young", "جاهزة - ready", "فوق - above", "أبدا - ever", "أحمر - red", "قائمة - list", "على الرغم من - though", "إحساس - feel", "الحديث - talk", "طائر - bird", "قريبا - soon", "هيئة - body", "الكلب - dog", "عائلة - family", "مباشر - direct", "أربك - pose", "ترك - leave", "أغنية - song", "قياس - measure", "باب - door", "نتاج - product", "أسود - black", "قصير - short", "الأرقام - numeral", "الفئة - class", "الرياح - wind", "السؤال - question", "يحدث - happen", "كاملة - complete", "سفينة - ship", "منطقة - area", "نصف - half", "صخرة - rock", "النظام - order", "النار - fire", "الجنوب - south", "مشكلة - problem", "قطعة - piece", "قال - told", "عرف - knew", "تمر - pass", "منذ - since", "أعلى - top", "ككل - whole", "ملك - king", "شارع - street", "بوصة - inch", "مضاعفة - multiply", "لا شيء - nothing", "بالطبع - course", "إقامة - stay", "عجلة - wheel", "كامل - full", "قوة - force", "الأزرق - blue", "موضوع - object", "تقرر - decide", "سطح - surface", "عميق - deep", "ضوء القمر - moon", "الجزيرة - island", "القدم - foot", "نظام - system", "مشغول - busy", "اختبار - test", "سجل - record", "قارب - boat", "مشترك - common", "الذهب - gold", "ممكن - possible", "طائرة - plane", "بدلا - stead", "جاف - dry", "عجب - wonder", "الضحك - laugh", "ألف - thousand", "منذ - ago", "ركض - ran", "تحقق - check", "لعبة - game", "شكل - shape", "مساواة - equate", "حار - hot", "ملكة جمال - miss", "جلبت - brought", "حرارة - heat", "ثلج - snow", "إطار العجلة - tire", "جلب - bring", "نعم - yes", "بعيد - distant", "شغل - fill", "الشرق - east", "الطلاء - paint", "اللغة - language"],
            word:  0
        }
        
    }


   

    componentDidMount = () => {

        setInterval(() => {
            let copyState = {...this.state}
            copyState.date = new Date();
            copyState.show = !copyState.show;
            let seconds = copyState.date.getSeconds() 
            // (copyState.startDate.valueOf() + (1000*20)) < copyState.date.valueOf()
            if ( (seconds >=20  && seconds <= 23) ||  (seconds >=40  && seconds <= 43) || seconds === 60 ){
                copyState.word = copyState.words[copyState.date.getDay() + copyState.date.getMinutes()]
                copyState.startDate = new Date();
                this.setState(copyState)
            }else{
                this.setState(copyState)
            }
        }, 2000);

    }

    render(){
        return(
            <div className="timer">
                <h1>{this.state.show ? this.state.date.toLocaleTimeString([],{ hour: '2-digit', minute: '2-digit' }) :this.state.word ? this.state.word:this.state.words[new Date().getDay()]}</h1>
            </div>
        )
    }
}


export default Timer;