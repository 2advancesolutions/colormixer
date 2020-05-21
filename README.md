# colormixer
Code Test eWorld Enterprise Solution
Demo URL give a few secs for init load
http://colormix.s3-website-us-west-1.amazonaws.com/index.html

The Color Mixer
Background
The usage of HTML, JavaScript and CSS are undoubtedly ubiquitously across the modern internet. One of the major attributes used across all three formats is the hexadecimal string representation of color.

More info on Web Colors

Exercise
Retrieve two starting colors from the remote server using the provided links. Given these two colors, run these through the color decoder function to produce the secret color. The goal of this exercise is to get the average of these two colors along with the inverse of that color.

You may use anything built into the JavaScript programming language, such as base conversion, but you can also do it manually.

The secret color is produced in two steps:

Average the two starting colors rounding down.
Each color channel byte should be calculated independently of one another.
For a hex string of
#123456
R 12
G 34
B 56
Invert the resulting color from step one.
Each color channel byte or hex character should be calculated independently.
For hex string of
#012345 // produces #FEDCBA
Remote API
URL: Replace :email with your email address.
https://ew-color-mixer.herokuapp.com/colors/:email
Model:
    "color1": "#808000",
    "color2": "#A0522D"
Examples
decode("#FA8072", "#B0E0E6") // produces "#2A4F53"
decode("#40E0D0", "#9370DB") // produces "#96572A"
Resources
The Fetch API
