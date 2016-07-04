window.addEventListener('load', function() {   
    navigator.requestMIDIAccess({
        sysex: false
    })
    .then(onMIDIInit, onMIDISystemError );
});

const C5 = 60;
const E5 = 64;
const G5 = 67;
const C6 = 72;

const NOTE_ON = 0x90;
const FULL_VELOCITY = 0x7f;


function onMIDIInit( midiAccess ) {
    for (var output of midiAccess.outputs.values()) {

        const now = window.performance.now();
        const later = now + 1000;

        output.send([NOTE_ON, C5, FULL_VELOCITY], now);
        output.send([NOTE_ON, E5, FULL_VELOCITY], now);
        output.send([NOTE_ON, G5, FULL_VELOCITY], now);

        output.send([NOTE_ON, C6, FULL_VELOCITY], later);
    }
}

function onMIDISystemError() {
    console.log('Error!')
}

