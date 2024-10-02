document.addEventListener('DOMContentLoaded', () => {
    const workoutPlans = [
        {
            name: 'Full Body Workout',
            description: 'A comprehensive workout targeting all major muscle groups.',
            details: `
                <h3>Chest</h3>
                <ul>
                    <li>Bench Press - <a href="https://www.wikihow.com/bench-press" target="_blank">Learn how to do it</a></li>
                    <li>Incline Dumbbell Press - <a href="https://www.wikihow.com/incline-dumbbell-press" target="_blank">Learn how to do it</a></li>
                    <li>Chest Fly - <a href="https://www.wikihow.com/chest-fly" target="_blank">Learn how to do it</a></li>
                    <li>Push-Ups - <a href="https://www.wikihow.com/push-ups" target="_blank">Learn how to do it</a></li>
                    <li>Chest Dips - <a href="https://www.wikihow.com/chest-dips" target="_blank">Learn how to do it</a></li>
                    <li>Cable Crossovers - <a href="https://www.wikihow.com/cable-crossovers" target="_blank">Learn how to do it</a></li>
                </ul>
                <h3>Back</h3>
                <ul>
                    <li>Pull-Ups - <a href="https://www.wikihow.com/pull-ups" target="_blank">Learn how to do it</a></li>
                    <li>Deadlifts - <a href="https://www.wikihow.com/deadlifts" target="_blank">Learn how to do it</a></li>
                    <li>Lat Pulldowns - <a href="https://www.wikihow.com/lat-pulldowns" target="_blank">Learn how to do it</a></li>
                    <li>Seated Row - <a href="https://www.wikihow.com/seated-row" target="_blank">Learn how to do it</a></li>
                    <li>Single Arm Dumbbell Row - <a href="https://www.wikihow.com/single-arm-dumbbell-row" target="_blank">Learn how to do it</a></li>
                    <li>Face Pulls - <a href="https://www.wikihow.com/face-pulls" target="_blank">Learn how to do it</a></li>
                </ul>
                <h3>Legs</h3>
                <ul>
                    <li>Squats - <a href="https://www.wikihow.com/squats" target="_blank">Learn how to do it</a></li>
                    <li>Lunges - <a href="https://www.wikihow.com/lunges" target="_blank">Learn how to do it</a></li>
                    <li>Leg Press - <a href="https://www.wikihow.com/leg-press" target="_blank">Learn how to do it</a></li>
                    <li>Leg Curls - <a href="https://www.wikihow.com/leg-curls" target="_blank">Learn how to do it</a></li>
                    <li>Calf Raises - <a href="https://www.wikihow.com/calf-raises" target="_blank">Learn how to do it</a></li>
                    <li>Leg Extensions - <a href="https://www.wikihow.com/leg-extensions" target="_blank">Learn how to do it</a></li>
                </ul>
                <h3>Shoulders</h3>
                <ul>
                    <li>Shoulder Press - <a href="https://www.wikihow.com/shoulder-press" target="_blank">Learn how to do it</a></li>
                    <li>Lateral Raises - <a href="https://www.wikihow.com/lateral-raises" target="_blank">Learn how to do it</a></li>
                    <li>Front Raises - <a href="https://www.wikihow.com/front-raises" target="_blank">Learn how to do it</a></li>
                    <li>Reverse Fly - <a href="https://www.wikihow.com/reverse-fly" target="_blank">Learn how to do it</a></li>
                    <li>Arnold Press - <a href="https://www.wikihow.com/arnold-press" target="_blank">Learn how to do it</a></li>
                    <li>Upright Row - <a href="https://www.wikihow.com/upright-row" target="_blank">Learn how to do it</a></li>
                </ul>
                <h3>Arms</h3>
                <ul>
                    <li>Bicep Curls - <a href="https://www.wikihow.com/bicep-curls" target="_blank">Learn how to do it</a></li>
                    <li>Tricep Dips - <a href="https://www.wikihow.com/tricep-dips" target="_blank">Learn how to do it</a></li>
                    <li>Hammer Curls - <a href="https://www.wikihow.com/hammer-curls" target="_blank">Learn how to do it</a></li>
                    <li>Tricep Pushdowns - <a href="https://www.wikihow.com/tricep-pushdowns" target="_blank">Learn how to do it</a></li>
                    <li>Concentration Curls - <a href="https://www.wikihow.com/concentration-curls" target="_blank">Learn how to do it</a></li>
                    <li>Skull Crushers - <a href="https://www.wikihow.com/skull-crushers" target="_blank">Learn how to do it</a></li>
                </ul>
                <h3>Core</h3>
                <ul>
                    <li>Planks - <a href="https://www.wikihow.com/planks" target="_blank">Learn how to do it</a></li>
                    <li>Russian Twists - <a href="https://www.wikihow.com/russian-twists" target="_blank">Learn how to do it</a></li>
                    <li>Leg Raises - <a href="https://www.wikihow.com/leg-raises" target="_blank">Learn how to do it</a></li>
                    <li>Bicycle Crunches - <a href="https://www.wikihow.com/bicycle-crunches" target="_blank">Learn how to do it</a></li>
                    <li>Mountain Climbers - <a href="https://www.wikihow.com/mountain-climbers" target="_blank">Learn how to do it</a></li>
                    <li>Hanging Leg Raises - <a href="https://www.wikihow.com/hanging-leg-raises" target="_blank">Learn how to do it</a></li>
                </ul>
            `
        },
        {
            name: 'Upper Body Workout',
            description: 'Focuses on the muscles of the upper body.',
            details: `
                <h3>Chest</h3>
                <ul>
                    <li>Bench Press - <a href="https://www.wikihow.com/bench-press" target="_blank">Learn how to do it</a></li>
                    <li>Incline Dumbbell Press - <a href="https://www.wikihow.com/incline-dumbbell-press" target="_blank">Learn how to do it</a></li>
                    <li>Chest Fly - <a href="https://www.wikihow.com/chest-fly" target="_blank">Learn how to do it</a></li>
                    <li>Push-Ups - <a href="https://www.wikihow.com/push-ups" target="_blank">Learn how to do it</a></li>
                    <li>Chest Dips - <a href="https://www.wikihow.com/chest-dips" target="_blank">Learn how to do it</a></li>
                    <li>Cable Crossovers - <a href="https://www.wikihow.com/cable-crossovers" target="_blank">Learn how to do it</a></li>
                </ul>
                <h3>Back</h3>
                <ul>
                    <li>Pull-Ups - <a href="https://www.wikihow.com/pull-ups" target="_blank">Learn how to do it</a></li>
                    <li>Deadlifts - <a href="https://www.wikihow.com/deadlifts" target="_blank">Learn how to do it</a></li>
                    <li>Lat Pulldowns - <a href="https://www.wikihow.com/lat-pulldowns" target="_blank">Learn how to do it</a></li>
                    <li>Seated Row - <a href="https://www.wikihow.com/seated-row" target="_blank">Learn how to do it</a></li>
                    <li>Single Arm Dumbbell Row - <a href="https://www.wikihow.com/single-arm-dumbbell-row" target="_blank">Learn how to do it</a></li>
                    <li>Face Pulls - <a href="https://www.wikihow.com/face-pulls" target="_blank">Learn how to do it</a></li>
                </ul>
                <h3>Shoulders</h3>
                <ul>
                    <li>Shoulder Press - <a href="https://www.wikihow.com/shoulder-press" target="_blank">Learn how to do it</a></li>
                    <li>Lateral Raises - <a href="https://www.wikihow.com/lateral-raises" target="_blank">Learn how to do it</a></li>
                    <li>Front Raises - <a href="https://www.wikihow.com/front-raises" target="_blank">Learn how to do it</a></li>
                    <li>Reverse Fly - <a href="https://www.wikihow.com/reverse-fly" target="_blank">Learn how to do it</a></li>
                    <li>Arnold Press - <a href="https://www.wikihow.com/arnold-press" target="_blank">Learn how to do it</a></li>
                    <li>Upright Row - <a href="https://www.wikihow.com/upright-row" target="_blank">Learn how to do it</a></li>
                </ul>
                <h3>Arms</h3>
                <ul>
                    <li>Bicep Curls - <a href="https://www.wikihow.com/bicep-curls" target="_blank">Learn how to do it</a></li>
                    <li>Tricep Dips - <a href="https://www.wikihow.com/tricep-dips" target="_blank">Learn how to do it</a></li>
                    <li>Hammer Curls - <a href="https://www.wikihow.com/hammer-curls" target="_blank">Learn how to do it</a></li>
                    <li>Tricep Pushdowns - <a href="https://www.wikihow.com/tricep-pushdowns" target="_blank">Learn how to do it</a></li>
                    <li>Concentration Curls - <a href="https://www.wikihow.com/concentration-curls" target="_blank">Learn how to do it</a></li>
                    <li>Skull Crushers - <a href="https://www.wikihow.com/skull-crushers" target="_blank">Learn how to do it</a></li>
                </ul>
            `
        },
        {
            name: 'Lower Body Workout',
            description: 'Targets the muscles of the lower body.',
            details: `
                <h3>Legs</h3>
                <ul>
                    <li>Squats - <a href="https://www.wikihow.com/squats" target="_blank">Learn how to do it</a></li>
                    <li>Lunges - <a href="https://www.wikihow.com/lunges" target="_blank">Learn how to do it</a></li>
                    <li>Leg Press - <a href="https://www.wikihow.com/leg-press" target="_blank">Learn how to do it</a></li>
                    <li>Leg Curls - <a href="https://www.wikihow.com/leg-curls" target="_blank">Learn how to do it</a></li>
                    <li>Calf Raises - <a href="https://www.wikihow.com/calf-raises" target="_blank">Learn how to do it</a></li>
                    <li>Leg Extensions - <a href="https://www.wikihow.com/leg-extensions" target="_blank">Learn how to do it</a></li>
                </ul>
                <h3>Glutes</h3>
                <ul>
                    <li>Hip Thrusts - <a href="https://www.wikihow.com/hip-thrusts" target="_blank">Learn how to do it</a></li>
                    <li>Glute Bridges - <a href="https://www.wikihow.com/glute-bridges" target="_blank">Learn how to do it</a></li>
                    <li>Bulgarian Split Squats - <a href="https://www.wikihow.com/bulgarian-split-squats" target="_blank">Learn how to do it</a></li>
                    <li>Step-Ups - <a href="https://www.wikihow.com/step-ups" target="_blank">Learn how to do it</a></li>
                    <li>Donkey Kicks - <a href="https://www.wikihow.com/donkey-kicks" target="_blank">Learn how to do it</a></li>
                    <li>Fire Hydrants - <a href="https://www.wikihow.com/fire-hydrants" target="_blank">Learn how to do it</a></li>
                </ul>
                <h3>Lower Back</h3>
                <ul>
                    <li>Deadlifts - <a href="https://www.wikihow.com/deadlifts" target="_blank">Learn how to do it</a></li>
                    <li>Good Mornings - <a href="https://www.wikihow.com/good-mornings" target="_blank">Learn how to do it</a></li>
                    <li>Back Extensions - <a href="https://www.wikihow.com/back-extensions" target="_blank">Learn how to do it</a></li>
                    <li>Supermans - <a href="https://www.wikihow.com/supermans" target="_blank">Learn how to do it</a></li>
                    <li>Bird Dogs - <a href="https://www.wikihow.com/bird-dogs" target="_blank">Learn how to do it</a></li>
                    <li>Hyperextensions - <a href="https://www.wikihow.com/hyperextensions" target="_blank">Learn how to do it</a></li>
                </ul>
            `
        },
        {
            name: 'High Intensity Interval Training (HIIT)',
            description: 'A high-intensity workout with short bursts of intense exercise followed by rest.',
            details: `
                <h3>Cardio</h3>
                <ul>
                    <li>Burpees - <a href="https://www.wikihow.com/burpees" target="_blank">Learn how to do it</a></li>
                    <li>High Knees - <a href="https://www.wikihow.com/high-knees" target="_blank">Learn how to do it</a></li>
                    <li>Sprints - <a href="https://www.wikihow.com/sprints" target="_blank">Learn how to do it</a></li>
                    <li>Jump Squats - <a href="https://www.wikihow.com/jump-squats" target="_blank">Learn how to do it</a></li>
                    <li>Mountain Climbers - <a href="https://www.wikihow.com/mountain-climbers" target="_blank">Learn how to do it</a></li>
                    <li>Jumping Jacks - <a href="https://www.wikihow.com/jumping-jacks" target="_blank">Learn how to do it</a></li>
                </ul>
                <h3>Strength</h3>
                <ul>
                    <li>Push-Ups - <a href="https://www.wikihow.com/push-ups" target="_blank">Learn how to do it</a></li>
                    <li>Squats - <a href="https://www.wikihow.com/squats" target="_blank">Learn how to do it</a></li>
                    <li>Planks - <a href="https://www.wikihow.com/planks" target="_blank">Learn how to do it</a></li>
                    <li>Lunges - <a href="https://www.wikihow.com/lunges" target="_blank">Learn how to do it</a></li>
                    <li>Tricep Dips - <a href="https://www.wikihow.com/tricep-dips" target="_blank">Learn how to do it</a></li>
                    <li>Bicycle Crunches - <a href="https://www.wikihow.com/bicycle-crunches" target="_blank">Learn how to do it</a></li>
                </ul>
            `
        },
        {
            name: 'Strength Training',
            description: 'Focuses on building muscle strength.',
            details: `
                <h3>Chest</h3>
                <ul>
                    <li>Bench Press - <a href="https://www.wikihow.com/bench-press" target="_blank">Learn how to do it</a></li>
                    <li>Incline Dumbbell Press - <a href="https://www.wikihow.com/incline-dumbbell-press" target="_blank">Learn how to do it</a></li>
                    <li>Chest Fly - <a href="https://www.wikihow.com/chest-fly" target="_blank">Learn how to do it</a></li>
                    <li>Push-Ups - <a href="https://www.wikihow.com/push-ups" target="_blank">Learn how to do it</a></li>
                   <li>Chest Dips - <a href="https://www.wikihow.com/chest-dips" target="_blank">Learn how to do it</a></li>
                  <li>Cable Crossovers - <a href="https://www.wikihow.com/cable-crossovers" target="_blank">Learn how to do it</a></li>
        </ul>
        <h3>Back</h3>
        <ul>
            <li>Pull-Ups - <a href="https://www.wikihow.com/pull-ups" target="_blank">Learn how to do it</a></li>
            <li>Deadlifts - <a href="https://www.wikihow.com/deadlifts" target="_blank">Learn how to do it</a></li>
            <li>Lat Pulldowns - <a href="https://www.wikihow.com/lat-pulldowns" target="_blank">Learn how to do it</a></li>
            <li>Seated Row - <a href="https://www.wikihow.com/seated-row" target="_blank">Learn how to do it</a></li>
            <li>Single Arm Dumbbell Row - <a href="https://www.wikihow.com/single-arm-dumbbell-row" target="_blank">Learn how to do it</a></li>
            <li>Face Pulls - <a href="https://www.wikihow.com/face-pulls" target="_blank">Learn how to do it</a></li>
        </ul>
        <h3>Legs</h3>
        <ul>
            <li>Squats - <a href="https://www.wikihow.com/squats" target="_blank">Learn how to do it</a></li>
            <li>Lunges - <a href="https://www.wikihow.com/lunges" target="_blank">Learn how to do it</a></li>
            <li>Leg Press - <a href="https://www.wikihow.com/leg-press" target="_blank">Learn how to do it</a></li>
            <li>Leg Curls - <a href="https://www.wikihow.com/leg-curls" target="_blank">Learn how to do it</a></li>
            <li>Calf Raises - <a href="https://www.wikihow.com/calf-raises" target="_blank">Learn how to do it</a></li>
            <li>Leg Extensions - <a href="https://www.wikihow.com/leg-extensions" target="_blank">Learn how to do it</a></li>
        </ul>
        <h3>Shoulders</h3>
        <ul>
            <li>Shoulder Press - <a href="https://www.wikihow.com/shoulder-press" target="_blank">Learn how to do it</a></li>
            <li>Lateral Raises - <a href="https://www.wikihow.com/lateral-raises" target="_blank">Learn how to do it</a></li>
            <li>Front Raises - <a href="https://www.wikihow.com/front-raises" target="_blank">Learn how to do it</a></li>
            <li>Reverse Fly - <a href="https://www.wikihow.com/reverse-fly" target="_blank">Learn how to do it</a></li>
            <li>Arnold Press - <a href="https://www.wikihow.com/arnold-press" target="_blank">Learn how to do it</a></li>
            <li>Upright Row - <a href="https://www.wikihow.com/upright-row" target="_blank">Learn how to do it</a></li>
        </ul>
        <h3>Arms</h3>
        <ul>
            <li>Bicep Curls - <a href="https://www.wikihow.com/bicep-curls" target="_blank">Learn how to do it</a></li>
            <li>Tricep Dips - <a href="https://www.wikihow.com/tricep-dips" target="_blank">Learn how to do it</a></li>
            <li>Hammer Curls - <a href="https://www.wikihow.com /hammer-curls" target="_blank">Learn how to do it</a></li>
            <li>Tricep Pushdowns - <a href="https://www.wikihow.com/tricep-pushdowns" target="_blank">Learn how to do it</a></li>
            <li>Concentration Curls - <a href="https://www.wikihow.com/concentration-curls" target="_blank">Learn how to do it</a></li>
            <li>Skull Crushers - <a href="https://www.wikihow.com/skull-crushers" target="_blank">Learn how to do it</a></li>
        </ul>
    `
},
{
    name: 'Circuit Training',
    description: 'A series of exercises performed in a circuit with minimal rest.',
    details: `
        <h3>Upper Body</h3>
        <ul>
            <li>Push-Ups - <a href="https://www.wikihow.com/push-ups" target="_blank">Learn how to do it</a></li>
            <li>Pull-Ups - <a href="https://www.wikihow.com/pull-ups" target="_blank">Learn how to do it</a></li>
            <li>Shoulder Press - <a href="https://www.wikihow.com/shoulder-press" target="_blank">Learn how to do it</a></li>
            <li>Bicep Curls - <a href="https://www.wikihow.com/bicep-curls" target="_blank">Learn how to do it</a></li>
            <li>Tricep Dips - <a href="https://www.wikihow.com/tricep-dips" target="_blank">Learn how to do it</a></li>
            <li>Chest Fly - <a href="https://www.wikihow.com/chest-fly" target="_blank">Learn how to do it</a></li>
        </ul>
        <h3>Lower Body</h3>
        <ul>
            <li>Squats - <a href="https://www.wikihow.com/squats" target="_blank">Learn how to do it</a></li>
            <li>Lunges - <a href="https://www.wikihow.com/lunges" target="_blank">Learn how to do it</a></li>
            <li>Leg Press - <a href="https://www.wikihow.com/leg-press" target="_blank">Learn how to do it</a></li>
            <li>Leg Curls - <a href="https://www.wikihow.com/leg-curls" target="_blank">Learn how to do it</a></li>
            <li>Calf Raises - <a href="https://www.wikihow.com/calf-raises" target="_blank">Learn how to do it</a></li>
            <li>Leg Extensions - <a href="https://www.wikihow.com/leg-extensions" target="_blank">Learn how to do it</a></li>
        </ul>
        <h3>Core</h3>
        <ul>
            <li>Planks - <a href="https://www.wikihow.com/planks" target="_blank">Learn how to do it</a></li>
            <li>Russian Twists - <a href="https://www.wikihow.com/russian-twists" target="_blank">Learn how to do it</a></li>
            <li>Leg Raises - <a href="https://www.wikihow.com/leg-raises" target="_blank">Learn how to do it</a></li>
            <li>Bicycle Crunches - <a href="https://www.wikihow.com/bicycle-crunches" target="_blank">Learn how to do it</a></li>
            <li>Mountain Climbers - <a href="https://www.wikihow.com/mountain-climbers" target="_blank">Learn how to do it</a></li>
            <li>Hanging Leg Raises - <a href="https://www.wikihow.com/hanging-leg-raises" target="_blank">Learn how to do it</a></li>
        </ul>
    `
},
{
    name: 'Functional Training',
    description: 'Exercises that mimic everyday movements.',
    details: `
        <h3>Full Body</h3>
        <ul>
            <li>Kettlebell Swings - <a href="https://www.wikihow.com/kettlebell-swings" target="_blank">Learn how to do it</a></li>
            <li>Medicine Ball Throws - <a href="https://www.wikihow.com/medicine-ball-throws" target="_blank">Learn how to do it</a></li>
            <li>Bodyweight Squats - <a href="https://www.wikihow.com/bodyweight-squats" target="_blank">Learn how to do it</a></li>
            <li>Push-Ups - <a href="https://www.wikihow.com/push-ups" target="_blank">Learn how to do it</a></li>
            <li>Pull-Ups - <a href="https://www.wikihow.com/pull-ups" target="_blank">Learn how to do it</a></li>
            <li>Planks - <a href="https://www.wikihow.com/planks" target="_blank">Learn how to do it</a></li>
        </ul>
    `
},
{
    name: 'Cardio Workout',
    description: 'Focuses on improving cardiovascular fitness.',
    details: `
        <h3>Cardio</h3>
        <ul>
            <li>Running - <a href="https://www.wikihow.com/running" target="_blank">Learn how to do it</a></li>
            <li>Cycling - <a href="https://www.wikihow.com/cycling" target="_blank">Learn how to do it</a></li>
            <li>Swimming - <a href="https://www.wikihow.com/swimming" target="_blank">Learn how to do it</a></li>
            <li>Jumping Rope - <a href="https://www.wikihow.com/jumping-rope" target="_blank">Learn how to do it</a></li>
            <li>Rowing - <a href="https://www.wikihow.com/rowing" target="_blank">Learn how to do it</a></li>
            <li>Elliptical - <a href="https://www.wikihow.com/elliptical" target="_blank">Learn how to do it</a></li>
        </ul>
    `
},
{
    name: 'Body Weight Workout',
    description: 'Uses body weight for resistance.',
    details: `
        <h3>Full Body</h3>
        <ul>
            <li>Push-Ups - <a href="https://www.wikihow.com/push-ups" target="_blank">Learn how to do it</a></li>
            <li>Pull-Ups - <a href="https://www.wikihow.com/pull-ups" target="_blank">Learn how to do it</a></li>
            <li>Squats - <a href="https://www.wikihow.com/squats" target="_blank">Learn how to do it</a></li>
            <li>Planks - <a href="https://www.wikihow.com/planks" target="_blank">Learn how to do it</a></li>
            <li>Lunges - <a href="https://www.wikihow.com/lunges" target="_blank">Learn how to do it</a></li>
            <li>Burpees - <a href="https://www.wikihow.com/burpees" target="_blank">Learn how to do it</a></li>
        </ul>
    `
},
{
    name: 'CrossFit Workout',
    description: 'A high-intensity workout combining various exercises.',
    details: `
        <h3>Full Body</h3>
        <ul>
            <li>Olympic Lifts - <a href="https://www.wikihow.com/olympic-lifts" target="_blank">Learn how to do it</a></li>
            <li>Kettlebell Swings - <a href="https://www.wikihow.com/kettlebell-swings" target="_blank">Learn how to do it</a></li>
            <li>Box Jumps - <a href="https://www.wikihow.com/box-jumps" target="_blank">Learn how to do it</a></li>
            <li>Burpees - <a href="https://www.wikihow.com/burpees" target="_blank">Learn how to do it</a></li>
            <li>Pull-Ups - <a href="https://www.wikihow.com/pull-ups" target="_blank">Learn how to do it</a></li>
            <li>Push-Ups - <a href="https://www.wikihow.com/push-ups" target="_blank">Learn how to do it</a></li>
        </ul>
    `
},
{
    name: 'Flexibility workout',
    description: 'Uses body weight for resistance.',
    details: `
        <h3>Full Body</h3>
        <ul>
            <li>Push-Ups - <a href="https://www.wikihow.com/push-ups " target="_blank">Learn how to do it</a></li>
            <li>Pull-Ups - <a href="https://www.wikihow.com/pull-ups" target="_blank">Learn how to do it</a></li>
            <li>Squats - <a href="https://www.wikihow.com/squats" target="_blank">Learn how to do it</a></li>
            <li>Planks - <a href="https://www.wikihow.com/planks" target="_blank">Learn how to do it</a></li>
            <li>Lunges - <a href="https://www.wikihow.com/lunges" target="_blank">Learn how to do it</a></li>
            <li>Burpees - <a href="https://www.wikihow.com/burpees" target="_blank">Learn how to do it</a></li>
        </ul>
    `
},
{
    name: 'Pilates routine',
    description: 'A high-intensity workout combining various exercises.',
    details: `
        <h3>Full Body</h3>
        <ul>
            <li>Olympic Lifts - <a href="https://www.wikihow.com/olympic-lifts" target="_blank">Learn how to do it</a></li>
            <li>Kettlebell Swings - <a href="https://www.wikihow.com/kettlebell-swings" target="_blank">Learn how to do it</a></li>
            <li>Box Jumps - <a href="https://www.wikihow.com/box-jumps" target="_blank">Learn how to do it</a></li>
            <li>Burpees - <a href="https://www.wikihow.com/burpees" target="_blank">Learn how to do it</a></li>
            <li>Pull-Ups - <a href="https://www.wikihow.com/pull-ups" target="_blank">Learn how to do it</a></li>
            <li>Push-Ups - <a href="https://www.wikihow.com/push-ups" target="_blank">Learn how to do it</a></li>
        </ul>
    `
}
    ];

    const workoutPlansContainer = document.getElementById('workout-plans');
    const workoutDetailsContainer = document.getElementById('workout-details');

    workoutPlans.forEach((plan, index) => {
        const planElement = document.createElement('div');
        planElement.classList.add('workout-item');
        planElement.innerHTML = `
            <h2>${plan.name}</h2>
            <p>${plan.description}</p>
            <button onclick="showDetails(${index})">View Details</button>
        `;
        workoutPlansContainer.appendChild(planElement);
    });

    window.showDetails = (index) => {
        const plan = workoutPlans[index];
        workoutDetailsContainer.innerHTML = `
            <h2>${plan.name}</h2>
            <div>${plan.details}</div>
            <button onclick="hideDetails()">Back to Plans</button>
        `;
        workoutPlansContainer.style.display = 'none';
        workoutDetailsContainer.style.display = 'block';
    };

    window.hideDetails = () => {
        workoutPlansContainer.style.display = 'flex';
        workoutDetailsContainer.style.display = 'none';
    };
});
