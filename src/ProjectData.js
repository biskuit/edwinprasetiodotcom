export const PROJECT_DATA = [
    {
        "title": "FROG",
        "img": require('./static/img/projects/frog.jpg'),
        "type": "S",
        "when": "September 2013 - Spring 2015",
        "summary": `
            A research project with UW CSE Change group. I designed and implemented FROG, an android app that can flash atmega328p via bluetooth.
        `,
        "desc": `
            This project is part of my research work in University of Washington's Change group. I work in foneAstra group, a group that develops a remote sensing module based on an Atmega328p microcontroller. My task in this project is to design and develop an Android application that can program AVR Atmega328p MCU over bluetooth connection. This application will be used later as part of the ODK sensor framework as a software tool to program foneAstra module. The source code is available upon request.
        `,
        "components": [
            "Java",
            "C/C++",
            "Eclipse",
            "avrdude",
            "Arduino IDE",
            "Atmega328p",
            "STK500 programmer",
            "Bluetooth RN-42",
            "Nexus 7",
        ]
    },
    {
        "title": "ProtoDuino",
        "img": require('./static/img/projects/protoduino.jpg'),
        "type": "S",
        "when": "Fall 2014",
        "summary": `
            This personal project of mine is basically building a progamming platform for ATmega328p MCU so that i don't have to use the big STK500 board for flashing new AVR chip.
        `,
        "desc": `
            I built this ProtoDuino board due to my frustation with the mess that STK500 board has done to my table every time i'm flashing a new Atmega328p chip. I know.. I know.. STK500 board is a powerfull tool to program an AVR chip. But it's footprint is kinda big whenever i put it on my table. Also, it's very troublesome to have the PSU and USB-to-Serial cables hanging around on my table. So here it is, a simple, swappable, Atmega328p programmer board that works well with Adafruit's AVR ISP programmer. I also added a power supply unit on the board as well as an led connection for debugging purposes. Hence, this board is basically a simple version of Arduino.
        `,
        "components": [
            "Atmega328p",
            "Small Protoboard",
            "LM7805",
            "2 LEDs",
            "MCU Socket",
            "1N4007 Diode",
            "2 220 ohm resistors",
            "2 0.1 uF capacitors",
            "2 10 uF capacitors",
            "16 MHz Crystal",
            "DC Jack Connector",
            "Sliding Switch",
            "Push Button",
            "Adafruit 6-pin AVR ISP Breadboard Adapter Mini Kit",
        ]
    },
    {
        "title": "svSPICE",
        "img": require('./static/img/projects/svspice.png'),
        "type": "S",
        "when": "Spring 2014",
        "summary": `
            A project the develops the famous SPICE circuit simulator program using System Verilog. This simplified version of SPICE supports basic electrical components (capacitor, voltage source, resistor, etc), and both DC and TRAN circuit analysis.
        `,
        "desc": `
            This project is part of my EE537 final project. Given an idea from professor Richard Shi from University of Washington, I developed a simplified version of SPICE circuit simulator using System Verilog. The reason we use the language is because the high possibility of having fast hardware validation process since System Verilog is a language that's very close to the hardware. In addition, System Verilog is a very powerful language because it allows the user to write verilog code as well as develop an object oriented program.

            I use the Modified Nodal Analysis topology to build the circuit's linear system model and use LU decomposition to solve the linear system.Current version of this svSPICE supports Resistor, Capacitor, Inductor, Current Source, Voltage Source, VCVS, VCCS, CCCS, CCVS, and Diode. Moreover, it can perform both DC and Transient analysis. If you would like to see the source code, please contact me at the given contact information.
        `,
        "components": [
            "System Verilog",
            "ncverilog",
        ]
    },
    {
        "title": "swiftSPICE",
        "img": require('./static/img/projects/swiftspice.png'),
        "type": "S",
        "when": "Spring 2014",
        "summary": `
            An ME599H Project that developed a SPICE circuit simulator and utilize NVIDIA GPU to improve the computation latency.
        `,
        "desc": `
            The main idea of this project is to build a simple version of SPICE circuit simulator and use NVIDIA GPU to improve the program performance. In order to perform NVIDIA GPU programming, i use the NVIDIA CUDA library that helps me to program the GPU in short time. The cuSparse library (part of the NVIDIA CUDA) is the main library that i use in this project. The topology of this SPICE program is very similar with my svSPICE project. However, instead of using System Verilog, i used C++ language to program it.

            Current version of this swiftSPICE supports Resistor,Current Source and DC analysis. If you would like to see the source code, please contact me at the given contact information.
        `,
        "components": [
            "NVIDIA GeForce GT 650M",
            "C++",
            "NVIDIA Nsight",
            "NVIDIA cuSparse Libary",
        ]
    },
    {
        "title": "Join Test Action Group - JTAG",
        "img": require('./static/img/projects/jtag.png'),
        "type": "J",
        "when": "Spring 2014",
        "summary": `
            An EE 526 project that built a JTAG hardware by using Verilog and Cadence synthesis tool.
        `,
        "desc": `
            The main objective of this project is to build a software tool where the user can configure and generate a JTAG hardware and a padframe (both schematic and layout) automatically. In the first step, the user can specify the size of boundary scan registers, user registers, ID registers, or Instruction registers. Then, using the provided tool, they can generate the JTAG Verilog netlist and import it into Candence. At the end, they can use the netlist and Candence auto layout generation tool to generate the JTAG module layout. In addition, we also built a script that can generate a padframe layout with a configurable size.

            The project is using a combination of Verilog, Pyhton, SKILL, and Cadence synthesis tool to develop the tool. The source code of this project is available upon request.
        `,
        "components": [
            "Verilog",
            "Cadence",
            "Python",
        ]
    },
    {
        "title": "Ulticrater 3D Printer",
        "img": require('./static/img/projects/3d_printer.jpg'),
        "type": "P",
        "when": "Spring 2014",
        "summary": `
            As a side project during Spring break, I assembled an Ulticrater, a 3D printer kit made by University of Washington Open Fabrication Club.
        `,
        "desc": `
            This is a side project that I do during the Spring break. I am building the Ulticrater, an alpha version of 3D Printer kit that was
            designed by a University of Washington Open Frabrication Club member, Mark Hanson. The kit is utilizing a milk jug as its main frame,
            which helps reducing the total cost of the printer ($400). Currently, this project is still under development and hopefully will be done before the Spring Quarter ends.
        `,
        "components": []
    },
    {
        "title": "64 Bit Adder",
        "img": require('./static/img/projects/64bit_adder.png'),
        "type": "S",
        "when": "Winter 2014",
        "summary": `
            This is my EE 525 project. We designed a 64 bit adder based on Kogge Stone topology.
        `,
        "desc": `
            The project objective is to build a fast adder circuit with OLog(n) runtime. A Carry Look Ahead adder with Kogge Stone topology is used because it gives the best computation time compared to other topology that we explored (Brent Kung and Ripple Carry Adder).
        `,
        "components": [
            "HSPICE",
            "Cadence",
            "Cscope",
        ]
    },
    {
        "title": "256 Bit Static Random Access Memory - SRAM",
        "img": require('./static/img/projects/sram.png'),
        "type": "S",
        "when": "Winter 2014",
        "summary": `
            Another EE 525 project. We designed a 256-Bits SRAM which includes 6T cell, row decoder, column decoder, and sense amplifier.
        `,
        "desc": `
            The project's goal is to build a 256-Bits SRAM. The SRAM contains a 6 transistors based keepper cell, a row decoder, a column decoder, and a sense amplifier. The SRAM layout is folded into two in order to get a square-ish ration. In addition, the row and column decoder function is for selecting the appropriate memory section that the user wants to write/read. Last but not least, the sense amplifier is implemented for improving the memory reading latency.
        `,
        "components": [
            "HSPICE",
            "Cadence",
            "Cscope",
        ]
    },
    {
        "title": "Two Stages Fully Differential Amplifier",
        "img": require('./static/img/projects/differential_amplifier.png'),
        "type": "A",
        "when": "Winter 2014",
        "summary": `
            In my EE 473 final project, I designed a telescopic and common source based fully differential amplifier.
        `,
        "desc": `
            The objective of this analog circuit design project is to build a fully differential amplifier with a gain >90dB. The telescopic amplifier is chosen as the first stage of the amplifier because of its high gain. The second stage of the amplifier is using the common source topology. This second stage functions as a gain booster as well as a voltage swing compensator for the first stage. In addition, a miller capacitor and nulling resistor compensation techniques is used in order to adjust the phase margin of the amplifier to be >60 deg.
        `,
        "components": [
            "HSPICE",
            "Cadence",
        ]
    },
    {
        "title": "Pseudo Random Generator",
        "img": require('./static/img/projects/random_number_generator.png'),
        "type": "P",
        "when": "Fall 2013",
        "summary": `
            This is part of EE 476 final project, designing an LSFR based random number generator hardware (both schematic and layout) using Cadence.
        `,
        "desc": `
            In this final project for EE 476 (VLSI I) class, we designed and built a 6 bits pseudorandom generator circuit using the Linear Feedback Shift Register (LFSR) topology. By using cadence, we developed the schematic as well as the layout for the circuit. The design then was simulated using HSPICE to check if it meets the given criteria.
        `,
        "components": [
            "HSPICE",
            "Cadence",
        ]
    },
    {
        "title": "64 Bit Multiplier",
        "img": require('./static/img/projects/64bit_multiplier.png'),
        "type": "M",
        "when": "Winter 2014",
        "summary": `
            This is an EE 525 final project. A 64-Bits Multiplier was designed by using Modified Booth Encoding and Carry Save adder topologies.
        `,
        "desc": `
            The goal of the project is to design a fast 64-Bits Multiplier Circuit. We implemented a Modified Booth Encoding circuit to decrease the number of partial product by a factor of two. Moreover, a combination of carry save adder and carry look ahead adder (with Kogge-Stone Topology) is used to sum the partial products and generate the final multiplication product.
        `,
        "components": [
            "HSPICE",
            "Cadence",
            "Cscope",
        ]
    },
    {
        "title": "Graphic Equalizer",
        "img": require('./static/img/projects/graphic_equalizer.jpg'),
        "type": "G",
        "when": "Fall 2013",
        "summary": `
            An analog circuit design project. We built a 7-band, graphic equalizer by using a Butterworth signal filter topology.
        `,
        "desc": `
            One of the analog capstone project. We used the multi feedback filter circuit design to implement a 6th order butterworth bandpass filter. We managed to achieve Q > 7 with an attenuation > 20dB at the next adjacent frequency.
        `,
        "components": [
            "NE5532P",
            "Oscilloscope",
            "Function Generator",
            "Multisim",
            "NI LabView",
        ]
    },
    {
        "title": "Automated Fish Feeder",
        "img": require('./static/img/projects/fish_feeder.jpg'),
        "type": "F",
        "when": "Summer 2013",
        "summary": `
            I created a cloud based fish feeder that allows me to feed my fish from anywhere around the world.
        `,
        "desc": `
            This is one of my recent personal project that enables user to feed their pet fish from anywhere, either using their smartphone or from a browser. I am using a simultaneous HTTP post request techniques to keep the connection between the database and the MCU open all the time. With this, no port forwarding is required!
        `,
        "components": [
            "Mbed-ARM-Cortex-M3-LPC1768ARM",
            "Stepper Motor",
            "C++",
            "MySQL",
            "Javascript",
            "CSS",
            "HTML",
        ]
    },
    {
        "title": "Notch Filter",
        "img": require('./static/img/projects/notch_filter.png'),
        "type": "N",
        "when": "Fall 2013",
        "summary": `
            This is my EE 433 final capstone project. Our objective is to build a notch filter with in-situ filter calibration.
        `,
        "desc": `
            The objective of this analog capstone project is to build a notch filter with a built-in filter calibrator. The Tow Thomas Biquad circuit is chosen to implement the notch filter with Q = 20 and notch frequency attenuation ~50dB. The atmega328p is handling the filter calibration, selecting the appropriate capacitance value from capacitor bank circuit for tuning the filter's notch frequency. The circuit was simulated using multisim software and the design performance was checked using LabView program.
        `,
        "components": [
            "Atmega328p",
            "NE5532P",
            "NTE4066B",
            "CA3083",
            "Full Bridge Rectifier",
            "LabView",
            "Multisim",
        ]
    },
    {
        "title": "Digital Alarm Clock",
        "img": require('./static/img/projects/digital_alarm_clock.jpg'),
        "type": "D",
        "when": "Winter 2013",
        "summary": `
            I built this personal alarm clock which is based on AVR MCU, combined with a temperature sensor, a buzzer, and an led flash light.
        `,
        "desc": `
            This is another personal project of mine. I tried to build a cheap digital alarm clock to help waking me up during winter quarter. The clock features a temperature sensor, a bright white LED, a buzzer, and a digital led display. I chose atmega328p as the brain of the clock. The clock will have 4 menus: clock display, alarm setting, temperature display, and off display; and all these menu can be selected using the two buttons on the clock.
        `,
        "components": [
            "Atmega328p",
            "STK500",
            "Buzzer",
            "4 Segment LED Display",
            "Temperature Sensor - TMP102",
            "avrdude",
        ]
    },
    {
        "title": "Dietary Data Recorder",
        "img": require('./static/img/projects/dietary_data_recorder.jpg'),
        "type": "D",
        "when": "Fall 2010 - Spring 2011",
        "summary": `
            A portable 3D scanner research project during my undergrad year. I implemented a laser grid projector module that can talk to an Android phone via Bluetooth
        `,
        "desc": `
            The project is part of University of Washington's SEAL research work. My work in this research is to help developing a small laser grid projector module that flash the grid every time it receives a command from an android smartphone via bluetooth.
        `,
        "components": [
            "RN-42 Bluetooth Module",
            "Soldering",
            "Putty",
            "Eagle PCB CAD",
        ]
    },
    {
        "title": "Room Surveillance",
        "img": require('./static/img/projects/room_surveillance.jpg'),
        "type": "R",
        "when": "Winter 2013",
        "summary": `
            The best way to learn is by doing something. Playing with MSP430 for the first time, i built a system that logs how many times a person sneaking into your room.
        `,
        "desc": `
            I was imagined to have a simple surveillance system in my room which can tell me how many intruders has entered my private area. So i built this simple "audience logger" (bad naming huh?) that simply logs how many people enters your room. Just put the logger anywhere in your bedroom near the entrance door. Whenever a person enters your room the PIR sensor will sense a human presence (or the IR radiated from our body) and send the signal to MSP430. The MCU will then count how many people has been detected and display the number on the LED display.
        `,
        "components": [
            "MSP430 Launchpad",
            "Human Motion PIR Sensor",
            "1 segment LED number display",
            "mspgcc4",
        ]
    },
    {
        "title": "Drone Dance Revolution Game",
        "img": require('./static/img/projects/drone_dance_revolution_game.jpg'),
        "type": "D",
        "when": "Spring 2011",
        "summary": `
            Need a dance partner? We built this system just for you! A capstone project that utilizing Parrot Ar Drone and MS Kinect as a dancing game.
        `,
        "desc": `
            This is a capstone project in my undergrad senior year. We built a dancing game with a drone as a dancing partner. The kinect helps capturing the user gesture and send the data to the PC. The PC will process the data and based on this, will tell the drone to do some dance movement (This happens really fast btw!). The Chumby plays an important roles here as it provides the wireless network for all the game components, so they can send data through UDP protocol seamlessly. We also hacked the chumby so it will only run our game user interface and stop its original applications.
        `,
        "components": [
            "Microsoft Kinect",
            "Parrot Ar Drone",
            "Chumby One - 454MHz Arm Processor based Alarm Clock",
            "mspgcc4",
            "C++",
            "C#",
            "Microsoft Visual Studio",
            "Linux Shell Scripting",
            "ActionScript",
        ]
    },
    {
        "title": "Balloons Catcher Arcade Game",
        "img": require('./static/img/projects/balloons_catcher.jpg'),
        "type": "B",
        "when": "Winter 2010",
        "summary": `
            An gaming module that uses an Altera FPGA DE1 board as its brain, buttons, 8x8 led matrix, and lots of shift registers!
        `,
        "desc": `
            For EE 271 final project, we built a 'catching balloons' game by using an FPGA and an led matrix. The game is using a shift register implementation (lots of them) as well as boolean logic gates
        `,
        "components": [
            "Altera FPGA DE1 board",
            "8x8 LED matrix",
            "Verilog HDL",
        ]
    },
    {
        "title": "Line Follower Robot",
        "img": require('./static/img/projects/line_follower_robot.jpg'),
        "type": "L",
        "when": "Summer 2010",
        "summary": `
            My first embedded systems project! Using an Arduino module, and self made color sensor, i made this old RC car finding its path again
        `,
        "desc": `
            My first embedded project! I built a simple line follower robot by using an old rc car, controlled by an Arduino. The way it works is like this: At the bottom of the RC car, we put two color sensors to sense the left and the right sight. The Arduino get the sensor data from them and use the information to keep the car following a path made by a black tape
        `,
        "components": [
            "Old RC Car",
            "Arduino Uno",
            "IR Transmitter/Transceiver (for color sensor)",
            "Darlington Transistor",
            "Arduino IDE",
        ]
    },
];
