var screenInit = {
  preload: function(){

    // Enable scale is zoomed
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    // Disable Anti-ailas when scale is zoomed
    Phaser.Canvas.setImageRenderingCrisp(game.canvas); // for Canvas renderer
    PIXI.scaleModes.DEFAULT = PIXI.scaleModes.NEAREST; // for webGL renderer
    // Phaser.Canvas.setSmoothingEnabled(game.context, false); // Dosen't work. It may be legacy code.

    // Load Plugins
    game.load.script('protracker', 'js/lib/protracker.js');

    // Load Bitmap Font
    game.load.bitmapFont(
      'font57', PATH.FONT + 'font57.png', PATH.FONT + 'font57.xml');
    game.load.bitmapFont(
      'font79', PATH.FONT + 'font79.png', PATH.FONT + 'font79.xml');

    // Load Menu BGM/SE
    game.load.binary(
      'bgmStart', PATH.BGM + 'bgmStart.mod', push_menuBGM, this);
    game.load.binary(
      'bgmSelectAccount', PATH.BGM + 'bgmSelectAccount.mod', push_menuBGM, this);

  },

  create: function(){

    // Setup Trackers
    Tracker.menu.bgmA  = new Protracker();
    Tracker.menu.bgmB  = new Protracker();
    Tracker.menu.seA   = new Protracker();
    Tracker.menu.seB   = new Protracker();
    Tracker.stage.bgmA = new Protracker();
    Tracker.stage.bgmB = new Protracker();
    Tracker.stage.se1  = new Protracker();
    Tracker.stage.se2  = new Protracker();
    Tracker.stage.se3  = new Protracker();
    Tracker.stage.se4  = new Protracker();
    Tracker.stage.seL  = new Protracker();
    Tracker.stage.seR  = new Protracker();


    // Setup Multitouch
    game.input.addPointer();
    game.input.addPointer();
    game.input.addPointer();
    game.input.addPointer();
    Input.touch.mo = game.input.mousePointer;
    Input.touch.t1 = game.input.pointer1;
    Input.touch.t2 = game.input.pointer2;
    Input.touch.t3 = game.input.pointer3;
    Input.touch.t4 = game.input.pointer4;
    Input.touch.t5 = game.input.pointer5;
    Input.touch.t6 = game.input.pointer6;

    // Setup Default Gamepad Buttons
    game.input.gamepad.start();
    Input.stage.pad1 = Phaser.Gamepad.XBOX360_DPAD_UP;
    Input.stage.pad2 = Phaser.Gamepad.XBOX360_DPAD_RIGHT;
    Input.stage.pad3 = Phaser.Gamepad.XBOX360_X;
    Input.stage.pad4 = Phaser.Gamepad.XBOX360_Y;
    Input.stage.padL = Phaser.Gamepad.XBOX360_LEFT_BUMPER;
    Input.stage.padR = Phaser.Gamepad.XBOX360_RIGHT_BUMPER;
    Input.stage.padS = Phaser.Gamepad.XBOX360_START;

    // Setup Default Keyboard Keys
    Input.stage.key1 = Phaser.Keyboard.S;
    Input.stage.key2 = Phaser.Keyboard.F;
    Input.stage.key3 = Phaser.Keyboard.J;
    Input.stage.key4 = Phaser.Keyboard.L;
    Input.stage.keyL = Phaser.Keyboard.E;
    Input.stage.keyR = Phaser.Keyboard.I;
    Input.stage.keyS = Phaser.Keyboard.ENTER;

  },

  update: function(){
    this.state.start('screenStart');
  }
};