
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
    let randomIndex = Math.floor(Math.random() * scales[scale_type].length);
    let randomNote = scales[scale_type][randomIndex];

    let result = document.getElementById("result");
    result.innerHTML = randomNote;
}





