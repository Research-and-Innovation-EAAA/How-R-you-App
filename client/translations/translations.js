angular.module('leukemiapp').config(config);

function config($translateProvider) {

    $translateProvider.translations('en', {
        JANUARY: 'January',
        FEBRUARY: 'February',
        MARCH: 'March',
        APRIL: 'April',
        MAI: 'May',
        JUNE: 'June',
        JULY: 'July',
        AUGUST: 'August',
        SEPTEMBER: 'September',
        OCTOBER: 'October',
        NOVEMBER: 'November',
        DECEMBER: 'December',
        monthsList: 'January_February_March_April_May_June_July_August_September_October_November_December',

        SUNDAY: 'Sunday',
        MONDAY: 'Monday',
        TUESDAY: 'Tuesday',
        WEDNESDAY: 'Wednesday',
        THURSDAY: 'Thurday',
        FRIDAY: 'Friday',
        SATURDAY: 'Saturday',
        weekdaysList: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday',
        weekdaysShortList: 'Su_Mo_Tu_We_Th_Fr_Sa',

        reminders: {
            reminders: 'Reminders',
            bloodsamples: 'Blood collection',
            highdoses: 'High doses'
        },

        notes: {
            notes: 'Notes:',
            placeholderLoggedIn: 'Click here to type a note',
            placeholderLoggedOut: 'Log in to create notes'
        },

        sidemenu: {
            treatments: 'Treatments',

            leukemia: 'Leukemia',
            l_standard: 'Standard Intensity',
            l_intermediate: 'Intermediate Intensity',
            l_intermediate_cns3: 'Intermediate Intensity + CNS3',
            l_high: 'High Intensity',

            arthritis: 'Arthritis'
        },

        settings: {
            modules: 'Modules',
            selectModules: 'Choose modules to be shown active on the front page',
            done: 'Done',
            cancel: 'Cancel'
        },

        medicine: {
            medicine: 'Medicine',

            //question 1
            tablet6MP: 'Tablet 6 MP',
            tabletMTX: 'Tablet MTX',
            mgDay: 'mg/day',
            mgWeek: 'mg/week',

            //frontside
            sixmp: '6 MP',
            mtx: 'MTX',
            mgDaily: 'mg / daily',
            mgWeekly: 'mg / weekly'
        },

        bloodsamples: {
            bloodsamples: 'Blood samples',
            leukocytes: 'Leukocytes',
            neutrophiles: 'Neutrophiles',
            crp: 'CRP',

            //frontside
            thrombocytes: 'Thrombocytes',
            thrombocytes_measure: '10^9 L',
            hemoglobin: 'Hemoglobin',
            hemoglobin_measure: 'mmol / L',
            alat: 'ALAT',
            alat_measure: 'U / L'
        },

        pain: {
            pain: 'Pain',
            morphine: 'Morfine',
            type: 'Type',
            intensity: 'Intensity',

            //question 1
            howMuchMorphine: 'How much morphine was given?',
            administrationType: 'Administration type:',
            oral: 'Tablet',
            intravenous: 'Intravenous',
            dose: 'Dose:',
            mg: 'mg',
            mgDay: 'mg/day',
            mgHour: 'mg/hour',

            //question 2
            whereIsPain: 'Where is the pain?',
            stomach: 'Stomach',
            legs: 'Legs',
            arms: 'Arms',
            head: 'Head',
            other: 'Other',

            //TODO translate question 3↓
            //question 3
            changeScale: 'Change scale',
            faceExpression: 'Face expression',
            activity: 'Activity',
            cry: 'Crying',
            comfort: 'Trøstbarhed',
            faceExpression0: 'Upåvirket/Afslappet',
            faceExpression1: 'Bekymret,indadvendt',
            faceExpression2: 'Hyppigt til konstant dirren omkring munden eller sammenbidt',
            legs0: 'Normal position eller afslappet',
            legs1: 'Urolig, spændt',
            legs2: 'Trækker benene op under sig, sparker',
            activity0: 'Normal stilling eller ligger stille, bevæger sig frit',
            activity1: 'Vrider sig, kan ikke finde ro',
            activity2: '"Går i bro", stiv eller kaster sig rundt',
            cry0: 'Græder ikke (Vågen eller sovende)',
            cry1: 'Klynker, klager sig af og til',
            cry2: 'Græder uafbrudt, skriger eller klager sig hyppigt',
            comfort0: 'Tilfreds, afslappet',
            comfort1: 'Kan beroliges ved berøring, ved at blive talt til og kan afledes fra smerten',
            comfort2: 'Vanskelig at trøste eller utrøstelig',
            smiley0: 'Man kan gøre fuldstændig, som man plejer uden at tænke på, at det gør ondt.',
            smiley2: 'Man kan gøre, som man plejer, men af og til må man standse op, fordi det gør ondt.',
            smiley4: 'Man har mest lyst til at sidde stille og få læst en historie eller se fjernsyn, fordi det gør ondt.',
            smiley6: 'Man tænker på, at det gør ondt hele tiden.',
            smiley8: 'Man har så ondt, at man har lyst til at græde, fordi det gør ondt.',
            smiley10: 'Man har så ondt, at man slet ikke kan holde det ud.',

            //frontside
            painType: 'Type of pain',
            painIntensity: 'Strength'
        },

        mucositis: {
            mucositis: 'Mucositis',
            mouthSores: 'Oral sores',
            nausea: 'Nausea',

            // TODO translate question 1↓
            //question 1
            painQ0: 'Ingen',
            painQ1: 'Let smerte',
            painQ2: 'Moderat smerte',
            painQ3: 'Kraftige smerter med behov for morfin',
            painQ4: 'Kraftige smerter og behov for store mængder morfin',
            soresAndRedness: 'Sores and redness',
            soresQ0: 'Ingen',
            soresQ1: 'Rødme (ingen sår)',
            soresQ2: 'Enkelte eller flere mindre sår',
            soresQ3: 'Udtalt rødme, store eller mange sår',
            soresQ4: 'Størstedelen af munden er påvirket af rødme eller sår',
            foodIntakeInfluence: 'Influence on food intake',
            foodIntakeQ0: 'Ingen',
            foodIntakeQ1: 'Spiser næsten normalt',
            foodIntakeQ2: 'Spiser enkelte typer af fast føde',
            foodIntakeQ3: 'Drikker og spiser flydende',
            foodIntakeQ4: 'Drikker minimalt og har behov for iv, væske, sondemad eller TPN',

            //frontside
            pain: 'Pain',
            soresRedness: 'Sores/Redness',
            foodIntake: 'Food intake',
            pain0: 'Ingen smerter', // TODO translate ↓
            pain1: 'Lette smerter',
            pain2: 'Moderate smerter',
            pain3: 'Kraftige smerter',
            pain4: 'Uudholdlige smerter',
            sores0: 'Ingen sår',
            sores1: 'Ingen sår, let rødmen',
            sores2: 'Enkelte mindre sår',
            sores3: 'Mange sår',
            sores4: 'Udtalt rødmen + mange store sår',
            foodIntake0: 'Ingen påvirkning',
            foodIntake1: 'Spiser næsten normalt',
            foodIntake2: 'Spiser lidt fast føde',
            foodIntake3: 'Spiser flydende føde',
            foodIntake4: 'Behov for sondemad'
        },

        arthritis: {
            arthritis: 'Arthritis pain',
            pain: 'Pain',

            //frontside
            intensity: 'Intensity'
        },

        wizard: {
            cancel: 'Cancel',
            previous: 'Previous',
            next: 'Next',
            update: 'Update',
            save: 'Save',
            time: 'Time',

            existingRecordTitle: 'Update record',
            existingRecord: 'There already exists a registration with this timestamp. Do you wish to update it?',
            invalidInputTitle: 'Error',
            invalidInput: 'One or more fields are not filled in properly!',
            saved: 'Registration saved!',
            updated: 'Registration updated!',
            failed: 'Failed to save registration',
            saveRegistrationLoggedOut: 'Log in to save the registration',

            // question templates
            pain: 'Pain'
        },

        graphData: {
            from: 'From:',
            till: 'Till:',

            noData: 'No data available for this period.',
            table: 'Table',
            graph: 'Graph',

            //datetimepicker
            date: 'Date',
            today: 'Today',
            close: 'Close',
            choose: 'Pick',
            timestamp: 'Time',

            //editing records
            update: 'Update',
            delete: 'Delete',
            cancel: 'Cancel',
            edit: 'Edit registration'
        }
    });

    $translateProvider.translations('da_DK', {
        JANUARY: 'Januar',
        FEBRUARY: 'Februar',
        MARCH: 'Marts',
        APRIL: 'April',
        MAI: 'Maj',
        JUNE: 'Juni',
        JULY: 'Juli',
        AUGUST: 'August',
        SEPTEMBER: 'September',
        OCTOBER: 'Oktober',
        NOVEMBER: 'November',
        DECEMBER: 'December',
        monthsList: 'Januar_Februar_Marts_April_Maj_Juni_Juli_August_September_Oktober_November_December',

        SUNDAY: 'Søndag',
        MONDAY: 'Mandag',
        TUESDAY: 'Tirsdag',
        WEDNESDAY: 'Onsdag',
        THURSDAY: 'Torsdag',
        FRIDAY: 'Fredag',
        SATURDAY: 'Lørdag',
        weekdaysList: 'Søndag_Mandag_Tirsdag_Onsdag_Torsdag_Fredag_Lørdag',
        weekdaysShortList: 'Sø_Ma_Ti_On_To_Fr_Lø',

        reminders: {
            reminders: 'Påmindelse',
            bloodsamples: 'Blodprøver',
            highdoses: 'Højdosis'
        },

        notes: {
            notes: 'Noter:',
            placeholderLoggedIn: 'Tryk for at indtaste tekst',
            placeholderLoggedOut: 'Logge ind for at oprette noter'
        },

        sidemenu: {
            treatments: 'Behandlinger',

            leukemia: 'Leukæmi',
            l_standard: 'Standard Intensiv',
            l_intermediate: 'Intermediær Intensiv',
            l_intermediate_cns3: 'Intermediær Intensiv + CNS3',
            l_high: 'Høj Intensiv',

            arthritis: 'Gigt'
        },

        settings: {
            modules: 'Moduler',
            selectModules: 'Vælg moduler, der skal vises på forsiden',
            done: 'Gem',
            cancel: 'Annuller'
        },

        medicine: {
            medicine: 'Medicin',

            //question 1
            tablet6MP: 'Tablet 6 MP',
            tabletMTX: 'Tablet MTX',
            mgDay: 'mg/dag',
            mgWeek: 'mg/uge',

            //frontside
            sixmp: '6 MP',
            mtx: 'MTX',
            mgDaily: 'mg / daglig',
            mgWeekly: 'mg / ugentlig'
        },

        bloodsamples: {
            bloodsamples: 'Blodprøver',
            leukocytes: 'Leukocytter',
            neutrophiles: 'Neutrofile',
            crp: 'CRP',

            //frontside
            thrombocytes: 'Thrombocytter',
            thrombocytes_measure: '10^9 L',
            hemoglobin: 'Hæmoglobin',
            hemoglobin_measure: 'mmol / L',
            alat: 'ALAT',
            alat_measure: 'U / L'
        },

        pain: {
            pain: 'Smerte',
            morphine: 'Morfin',
            type: 'Type',
            intensity: 'Styrke',

            //question 1
            howMuchMorphine: 'Hvor meget morfin er givet?',
            administrationType: 'Administration type:',
            oral: 'Tablet',
            intravenous: 'Intravenøs',
            dose: 'Dosis:',
            mg: 'mg',
            mgDay: 'mg/døgn',
            mgHour: 'mg/time',

            //question 2
            whereIsPain: 'Hvor er smerten?',
            stomach: 'Mave',
            legs: 'Ben',
            arms: 'Arme',
            head: 'Hoved',
            other: 'Andet',

            //question 3
            changeScale: 'Skift skala',
            faceExpression: 'Ansigtsudtryk',
            activity: 'Aktivitet',
            cry: 'Gråd',
            comfort: 'Trøstbarhed',
            faceExpression0: 'Upåvirket/Afslappet',
            faceExpression1: 'Bekymret,indadvendt',
            faceExpression2: 'Hyppigt til konstant dirren omkring munden eller sammenbidt',
            legs0: 'Normal position eller afslappet',
            legs1: 'Urolig, spændt',
            legs2: 'Trækker benene op under sig, sparker',
            activity0: 'Normal stilling eller ligger stille, bevæger sig frit',
            activity1: 'Vrider sig, kan ikke finde ro',
            activity2: '"Går i bro", stiv eller kaster sig rundt',
            cry0: 'Græder ikke (Vågen eller sovende)',
            cry1: 'Klynker, klager sig af og til',
            cry2: 'Græder uafbrudt, skriger eller klager sig hyppigt',
            comfort0: 'Tilfreds, afslappet',
            comfort1: 'Kan beroliges ved berøring, ved at blive talt til og kan afledes fra smerten',
            comfort2: 'Vanskelig at trøste eller utrøstelig',
            smiley0: 'Man kan gøre fuldstændig, som man plejer uden at tænke på, at det gør ondt.',
            smiley2: 'Man kan gøre, som man plejer, men af og til må man standse op, fordi det gør ondt.',
            smiley4: 'Man har mest lyst til at sidde stille og få læst en historie eller se fjernsyn, fordi det gør ondt.',
            smiley6: 'Man tænker på, at det gør ondt hele tiden.',
            smiley8: 'Man har så ondt, at man har lyst til at græde, fordi det gør ondt.',
            smiley10: 'Man har så ondt, at man slet ikke kan holde det ud.',

            //frontside
            painType: 'Smerte typen',
            painIntensity: 'Intensitet'
        },

        mucositis: {
            mucositis: 'Mucositis',
            mouthSores: 'Mundsår',
            nausea: 'Kvalme',

            //question 1
            painQ0: 'Ingen',
            painQ1: 'Let smerte',
            painQ2: 'Moderat smerte',
            painQ3: 'Kraftige smerter med behov for morfin',
            painQ4: 'Kraftige smerter og behov for store mængder morfin',
            soresAndRedness: 'Sår og rødme',
            soresQ0: 'Ingen',
            soresQ1: 'Rødme (ingen sår)',
            soresQ2: 'Enkelte eller flere mindre sår',
            soresQ3: 'Udtalt rødme, store eller mange sår',
            soresQ4: 'Størstedelen af munden er påvirket af rødme eller sår',
            foodIntakeInfluence: 'Påvirkning af fødeindtag',
            foodIntakeQ0: 'Ingen',
            foodIntakeQ1: 'Spiser næsten normalt',
            foodIntakeQ2: 'Spiser enkelte typer af fast føde',
            foodIntakeQ3: 'Drikker og spiser flydende',
            foodIntakeQ4: 'Drikker minimalt og har behov for iv, væske, sondemad eller TPN',

            //frontside
            pain: 'Smerte',
            soresRedness: 'Sår/Rødme',
            foodIntake: 'Fødeindtag',
            pain0: 'Ingen smerter',
            pain1: 'Lette smerter',
            pain2: 'Moderate smerter',
            pain3: 'Kraftige smerter',
            pain4: 'Uudholdlige smerter',
            sores0: 'Ingen sår',
            sores1: 'Ingen sår, let rødmen',
            sores2: 'Enkelte mindre sår',
            sores3: 'Mange sår',
            sores4: 'Udtalt rødmen + mange store sår',
            foodIntake0: 'Ingen påvirkning',
            foodIntake1: 'Spiser næsten normalt',
            foodIntake2: 'Spiser lidt fast føde',
            foodIntake3: 'Spiser flydende føde',
            foodIntake4: 'Behov for sondemad'
        },

        arthritis: {
            arthritis: 'Gigt Smerte',
            pain: 'Smerte',

            //frontside
            intensity: 'Intensitet'
        },

        wizard: {
            cancel: 'Fortryd',
            previous: 'Forrige',
            next: 'Næste',
            update: 'Opdater',
            save: 'Gem',
            time: 'Tid',

            existingRecordTitle: 'Opdater registrering',
            existingRecord: 'Der findes allerede en registrering på dette tidspunkt! Vil du rette den?',
            invalidInputTitle: 'Fejl',
            invalidInput: 'Et eller flere felter er enten ikke udfyldt, eller ikke udfyldt korrekt!',
            saved: 'Registrering gemt!',
            updated: 'Registrering opdateret!',
            failed: 'Kunne ikke gemme registreringen',
            saveRegistrationLoggedOut: 'Log ind for at spare registrering',

            // question templates
            pain: 'Smerte'
        },

        graphData: {
            from: 'Fra:',
            till: 'Til:',

            noData: 'Ingen data tilgængelige for denne periode.',
            table: 'Tabel',
            graph: 'Graf',

            //datetimepicker
            date: 'Dato',
            today: 'I dag',
            close: 'Luk',
            choose: 'Vælg',
            timestamp: 'Tidspunkt',

            //editing records
            update: 'Rediger',
            delete: 'Slet',
            cancel: 'Annuller',
            edit: 'Ændre registrering'
        }

    });

    //$translateProvider.determinePreferredLanguage(); // select lang using device settings
    $translateProvider.preferredLanguage('da_DK');
    $translateProvider.useSanitizeValueStrategy('escape'); // security setting
    $translateProvider.fallbackLanguage(['en']);

}