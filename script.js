
function getScale() {
    let scales = {
        majors: ["C Major", "G Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "Db Major", "Gb Major", "E Major", "A Major","B Major", "D Major"],
        natural: ["C Natural Minor","G Natural Minor", "F Natural Minor", "Bb Natural Minor",  "Eb Natural Minor", "Ab Natural Minor",  "Db Natural Minor",  "Gb Natural Minor",  "E Natural Minor",  "A Natural Minor", "B Natural Minor",  "D Natural Minor"],
        harmonic: ["C Harmonic Minor","G Harmonic Minor", "F Harmonic Minor", "Bb Harmonic Minor",  "Eb Harmonic Minor", "Ab Harmonic Minor",  "Db Harmonic Minor",  "Gb Harmonic Minor",  "E Harmonic Minor",  "A Harmonic Minor", "B Harmonic Minor",  "D Harmonic Minor"],
        melodic: ["C Melodic Minor","G Melodic Minor", "F Melodic Minor", "Bb Melodic Minor",  "Eb Melodic Minor", "Ab Melodic Minor",  "Db Melodic Minor",  "Gb Melodic Minor",  "E Melodic Minor",  "A Melodic Minor", "B Melodic Minor",  "D Melodic Minor"],
        pentatonic: ["C Pentatonic", "G Pentatonic", "F Pentatonic", "Bb Pentatonic", "Eb Pentatonic", "Ab Pentatonic", "Db Pentatonic", "Gb Pentatonic", "E Pentatonic", "A Pentatonic","B Pentatonic", "D Pentatonic"],
        octatonic: ["C Octatonic", "G Octatonic", "F Octatonic", "Bb Octatonic", "Eb Octatonic", "Ab Octatonic", "Db Octatonic", "Gb Octatonic", "E Octatonic", "A Octatonic","B Octatonic", "D Octatonic"],
        whole: ["C Whole Tone", "G Whole Tone", "F Whole Tone", "Bb Whole Tone", "Eb Whole Tone", "Ab Whole Tone", "Db Whole Tone", "Gb Whole Tone", "E Whole Tone", "A Whole Tone","B Whole Tone", "D Whole Tone"],
        seconds: ["C Major", "G Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "Db Major", "Gb Major", "E Major", "A Major","B Major", "D Major"],
        fourths: ["C Major", "G Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "Db Major", "Gb Major", "E Major", "A Major","B Major", "D Major"],
        blues: ["C Blues", "G Blues", "F Blues", "Bb Blues", "Eb Blues", "Ab Blues", "Db Blues", "Gb Blues", "E Blues", "A Blues","B Blues", "D Blues"],
        modes: ["C Dorian", "G Dorian", "F Dorian", "Bb Dorian", "Eb Dorian", "Ab Dorian", "Db Dorian", "Gb Dorian", "E Dorian", "A Dorian","B Dorian", "D Dorian",
                "C Phrygian", "G Phrygian", "F Phrygian", "Bb Phrygian", "Eb Phrygian", "Ab Phrygian", "Db Phrygian", "Gb Phrygian", "E Phrygian", "A Phrygian","B Phrygian", "D Phrygian",
                "C Lydian", "G Lydian", "F Lydian", "Bb Lydian", "Eb Lydian", "Ab Lydian", "Db Lydian", "Gb Lydian", "E Lydian", "A Lydian","B Lydian", "D Lydian",
                "C Mixolydian", "G Mixolydian", "F Mixolydian", "Bb Mixolydian", "Eb Mixolydian", "Ab Mixolydian", "Db Mixolydian", "Gb Mixolydian", "E Mixolydian", "A Mixolydian","B Mixolydian", "D Mixolydian", 
                "C Aeolian", "G Aeolian", "F Aeolian", "Bb Aeolian", "Eb Aeolian", "Ab Aeolian", "Db Aeolian", "Gb Aeolian", "E Aeolian", "A Aeolian","B Aeolian", "D Aeolian", 
                "C Locrian", "G Locrian", "F Locrian", "Bb Locrian", "Eb Locrian", "Ab Locrian", "Db Locrian", "Gb Locrian", "E Locrian", "A Locrian","B Locrian", "D Locrian",
                "C Ionian", "G Ionian", "F Ionian", "Bb Ionian", "Eb Ionian", "Ab Ionian", "Db Ionian", "Gb Ionian", "E Ionian", "A Ionian","B Ionian", "D Ionian"]
    
    }; 

    let scale_type = document.getElementById("scaleType").value;
    let link = document.getElementById("tutorial"); 

    //updating tutorial links
    if(scale_type == "natural"){
        link.href = "https://piano-music-theory.com/2016/06/01/minor-scales-natural-minor-scales/";
    }
    else if(scale_type == "majors"){
        link.href = "https://piano-music-theory.com/2016/05/31/major-scales/";
    }
    else if(scale_type == "harmonic"){
        link.href = "https://piano-music-theory.com/2016/06/01/minor-scales-harmonic-minor-and-melodic-minor-scales/";
    }
    else if(scale_type == "melodic"){
        link.href = "https://piano-music-theory.com/2021/08/14/melodic-minor-scales/";
    }
    else if(scale_type == "pentatonic"){
        link.href = "https://www.pianoscales.org/pentatonic.html#majorpenta";
    }
    else if(scale_type == "octatonic"){
        link.href = "https://www.youtube.com/watch?v=B-nOJd_sLWE";
    }
    else if(scale_type == "whole"){
        link.href = "https://www.pianoscales.org/whole-tone.html";
    }
    else if(scale_type == "seconds"){
        link.href = "https://www.amazon.com/Exercices-Journaliers-flute-Daily-Exercises/dp/B000QSFEMK/ref=asc_df_B000QSFEMK/?tag=hyprod-20&linkCode=df0&hvadid=652410035661&hvpos=&hvnetw=g&hvrand=15526563864293045659&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9011574&hvtargid=pla-2061551132848&psc=1&mcid=a157352b21503fd0b963864fe2197d78";
    }
    else if(scale_type == "fourths"){
        link.href = "https://www.amazon.com/Exercices-Journaliers-flute-Daily-Exercises/dp/B000QSFEMK/ref=asc_df_B000QSFEMK/?tag=hyprod-20&linkCode=df0&hvadid=652410035661&hvpos=&hvnetw=g&hvrand=15526563864293045659&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9011574&hvtargid=pla-2061551132848&psc=1&mcid=a157352b21503fd0b963864fe2197d78";
    }
    else if(scale_type == "blues"){
        link.href = "https://www.pianoscales.org/blues.html#majorblues";
    }
    else if(scale_type == "modes"){
        link.href = "https://pianowithjonny.com/piano-lessons/piano-musical-modes-the-complete-guide/";
    }
    

    let randomIndex = Math.floor(Math.random() * scales[scale_type].length);
    let randomNote = scales[scale_type][randomIndex];

    let result = document.getElementById("result");
    result.innerHTML = randomNote;
}





