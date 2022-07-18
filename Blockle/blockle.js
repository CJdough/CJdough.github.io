let guesscount = 0;
let arraynum = random(0,898); //898
let endgame = 0;
let win = 0;
let sharehint = [];


function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function hint(mode, choicee)
{
    var icon = 0;
    var TEXTid = 0;
    var IMGid = 0;
    if (mode == 0) {
        icon = "Blockle/None.png";
        sharehint[guesscount-1] = "⬛";
    }
    if (mode == 1) {
        icon = "Blockle/Some.png";
        sharehint[guesscount-1] = "🟨";
    }
    if (mode == 2) {
        icon = "Blockle/All.png";
        sharehint[guesscount-1] = "🟩";
        endgame = 1;
        setTimeout(() => end(mode), 1500);
    }
    if (guesscount == 1) {
        TEXTid = "TEXTg1";
        IMGid = "IMGg1";
    }
    if (guesscount == 2) {
        TEXTid = "TEXTg2";
        IMGid = "IMGg2";
    }
    if (guesscount == 3) {
        TEXTid = "TEXTg3";
        IMGid = "IMGg3";
    }
    if (guesscount == 4) {
        TEXTid = "TEXTg4";
        IMGid = "IMGg4";
    }
    if (guesscount == 5) {
        TEXTid = "TEXTg5";
        IMGid = "IMGg5";
    }
    if (guesscount == 6) {
        TEXTid = "TEXTg6";
        IMGid = "IMGg6";
    }
    if (guesscount == 7) {
        TEXTid = "TEXTg7";
        IMGid = "IMGg7";
    }
    if (guesscount == 8) {
        TEXTid = "TEXTg8";
        IMGid = "IMGg8";
    }
    if (guesscount == 9) {
        TEXTid = "TEXTg9";
        IMGid = "IMGg9";
    }
    if (guesscount == 10) {
        TEXTid = "TEXTg10";
        IMGid = "IMGg10";
        if (mode != 2) {
            endgame = 1;
            setTimeout(() => end(mode), 1500);
        }
    }
    document.getElementById(IMGid).src = icon;
    document.getElementById(TEXTid).innerHTML = choicee;
    document.getElementById(IMGid).classList.add("slide");
    document.getElementById(TEXTid).classList.add("slide");
}

function check(choice)
{
    var block = ids[arraynum];
    console.log(block);
    var real = 0;
    if (ids.includes(choice)) {
        real = 1;
        guesscount++;
    }
    if (real == 1) {
        document.getElementById("guesser").value = "";
        if (block == choice) {
            hint(2, choice);
        } else {
            let some = 0;
            var choicearray = choice.split('_');
            var blockarray = block.split('_');
            for (i = 0; i <= choicearray.length-1; i++) {
                for (j = 0; j <= blockarray.length-1; j++) {
                    if (choicearray[i] == blockarray[j]) {
                        some = 1;
                    }
                }
            }
            if (some == 1) {
                hint(1, choice);
            } else {
                hint(0, choice);
            }
        }
    } else {

    }
}

function getchoice() {
    found = document.getElementById("guesser").value;
    check(found);
}

function end(mode) {
    var block = ids[arraynum];
    statstext = document.getElementById("wintext");
    if (mode == 2) {
        statstext.innerHTML = "You got the block in " + guesscount + " guesses!";
        document.getElementById("winuioverlay").dataset.reveal = "1";
        document.getElementById("winui").dataset.reveal = "1";
        win = 1;
    } else {
        statstext.innerHTML = "Better luck next time... (Block: " + block + " )";
        document.getElementById("winuioverlay").dataset.reveal = "1";
        document.getElementById("winui").dataset.reveal = "1";
    }
}
function closestats() {
    document.getElementById("winuioverlay").dataset.reveal = "0";
    document.getElementById("winui").dataset.reveal = "0";
}
function play() {
    document.getElementById("tutorialuioverlay").dataset.reveal = "0";
    document.getElementById("tutorialui").dataset.reveal = "0";
}
function share() {
    var outof = "X";
    if ((guesscount < 10) && (win == 1)) {
        outof = guesscount;
    }
    let sharetxt = "Blockle " + outof + "/10\n";
    for (i = 0; i < sharehint.length; i++) {
        sharetxt = sharetxt + "\n" + sharehint[i];
    }
    sharetxt = sharetxt + "\nhttps://cjdough.github.io/blockle";
    navigator.clipboard.writeText(sharetxt);
}

let ids = [
    "air",
    "stone",
    "granite",
    "polished_granite",
    "diorite",
    "polished_diorite",
    "andesite",
    "polished_andesite",
    "grass_block",
    "dirt",
    "coarse_dirt",
    "podzol",
    "cobblestone",
    "oak_planks",
    "spruce_planks",
    "birch_planks",
    "jungle_planks",
    "acacia_planks",
    "dark_oak_planks",
    "oak_sapling",
    "spruce_sapling",
    "birch_sapling",
    "jungle_sapling",
    "acacia_sapling",
    "dark_oak_sapling",
    "bedrock",
    "water",
    "lava",
    "sand",
    "red_sand",
    "gravel",
    "gold_ore",
    "deepslate_gold_ore",
    "iron_ore",
    "deepslate_iron_ore",
    "coal_ore",
    "deepslate_coal_ore",
    "nether_gold_ore",
    "oak_log",
    "spruce_log",
    "birch_log",
    "jungle_log",
    "acacia_log",
    "dark_oak_log",
    "stripped_spruce_log",
    "stripped_birch_log",
    "stripped_jungle_log",
    "stripped_acacia_log",
    "stripped_dark_oak_log",
    "stripped_oak_log",
    "oak_wood",
    "spruce_wood",
    "birch_wood",
    "jungle_wood",
    "acacia_wood",
    "dark_oak_wood",
    "stripped_oak_wood",
    "stripped_spruce_wood",
    "stripped_birch_wood",
    "stripped_jungle_wood",
    "stripped_acacia_wood",
    "stripped_dark_oak_wood",
    "oak_leaves",
    "spruce_leaves",
    "birch_leaves",
    "jungle_leaves",
    "acacia_leaves",
    "dark_oak_leaves",
    "azalea_leaves",
    "flowering_azalea_leaves",
    "sponge",
    "wet_sponge",
    "glass",
    "lapis_ore",
    "deepslate_lapis_ore",
    "lapis_block",
    "dispenser",
    "sandstone",
    "chiseled_sandstone",
    "cut_sandstone",
    "note_block",
    "white_bed",
    "orange_bed",
    "magenta_bed",
    "light_blue_bed",
    "yellow_bed",
    "lime_bed",
    "pink_bed",
    "gray_bed",
    "light_gray_bed",
    "cyan_bed",
    "purple_bed",
    "blue_bed",
    "brown_bed",
    "green_bed",
    "red_bed",
    "black_bed",
    "powered_rail",
    "detector_rail",
    "sticky_piston",
    "cobweb",
    "grass",
    "fern",
    "dead_bush",
    "seagrass",
    "tall_seagrass",
    "piston",
    "piston_head",
    "white_wool",
    "orange_wool",
    "magenta_wool",
    "light_blue_wool",
    "yellow_wool",
    "lime_wool",
    "pink_wool",
    "gray_wool",
    "light_gray_wool",
    "cyan_wool",
    "purple_wool",
    "blue_wool",
    "brown_wool",
    "green_wool",
    "red_wool",
    "black_wool",
    "moving_piston",
    "dandelion",
    "poppy",
    "blue_orchid",
    "allium",
    "azure_bluet",
    "red_tulip",
    "orange_tulip",
    "white_tulip",
    "pink_tulip",
    "oxeye_daisy",
    "cornflower",
    "wither_rose",
    "lily_of_the_valley",
    "brown_mushroom",
    "red_mushroom",
    "gold_block",
    "iron_block",
    "bricks",
    "tnt",
    "bookshelf",
    "mossy_cobblestone",
    "obsidian",
    "torch",
    "fire",
    "soul_fire",
    "spawner",
    "oak_stairs",
    "chest",
    "redstone_wire",
    "diamond_ore",
    "deepslate_diamond_ore",
    "diamond_block",
    "crafting_table",
    "wheat",
    "farmland",
    "furnace",
    "oak_sign",
    "spruce_sign",
    "birch_sign",
    "acacia_sign",
    "jungle_sign",
    "dark_oak_sign",
    "oak_door",
    "ladder",
    "rail",
    "cobblestone_stairs",
    "lever",
    "stone_pressure_plate",
    "iron_door",
    "oak_pressure_plate",
    "spruce_pressure_plate",
    "birch_pressure_plate",
    "jungle_pressure_plate",
    "acacia_pressure_plate",
    "dark_oak_pressure_plate",
    "redstone_ore",
    "deepslate_redstone_ore",
    "redstone_torch",
    "stone_button",
    "snow",
    "ice",
    "snow_block",
    "cactus",
    "clay",
    "sugar_cane",
    "jukebox",
    "oak_fence",
    "pumpkin",
    "netherrack",
    "soul_sand",
    "soul_soil",
    "basalt",
    "polished_basalt",
    "soul_torch",
    "glowstone",
    "nether_portal",
    "carved_pumpkin",
    "jack_o_lantern",
    "cake",
    "repeater",
    "white_stained_glass",
    "orange_stained_glass",
    "magenta_stained_glass",
    "light_blue_stained_glass",
    "yellow_stained_glass",
    "lime_stained_glass",
    "pink_stained_glass",
    "gray_stained_glass",
    "light_gray_stained_glass",
    "cyan_stained_glass",
    "purple_stained_glass",
    "blue_stained_glass",
    "brown_stained_glass",
    "green_stained_glass",
    "red_stained_glass",
    "black_stained_glass",
    "oak_trapdoor",
    "spruce_trapdoor",
    "birch_trapdoor",
    "jungle_trapdoor",
    "acacia_trapdoor",
    "dark_oak_trapdoor",
    "stone_bricks",
    "mossy_stone_bricks",
    "cracked_stone_bricks",
    "chiseled_stone_bricks",
    "infested_stone",
    "infested_cobblestone",
    "infested_stone_bricks",
    "infested_mossy_stone_bricks",
    "infested_cracked_stone_bricks",
    "infested_chiseled_stone_bricks",
    "brown_mushroom_block",
    "red_mushroom_block",
    "mushroom_stem",
    "iron_bars",
    "chain",
    "glass_pane",
    "melon",
    "attached_pumpkin_stem",
    "attached_melon_stem",
    "pumpkin_stem",
    "melon_stem",
    "vine",
    "glow_lichen",
    "oak_fence_gate",
    "brick_stairs",
    "stone_brick_stairs",
    "mycelium",
    "lily_pad",
    "nether_bricks",
    "nether_brick_fence",
    "nether_brick_stairs",
    "nether_wart",
    "enchanting_table",
    "brewing_stand",
    "cauldron",
    "water_cauldron",
    "lava_cauldron",
    "powder_snow_cauldron",
    "end_portal",
    "end_portal_frame",
    "end_stone",
    "dragon_egg",
    "redstone_lamp",
    "cocoa",
    "sandstone_stairs",
    "emerald_ore",
    "deepslate_emerald_ore",
    "ender_chest",
    "tripwire_hook",
    "tripwire",
    "emerald_block",
    "spruce_stairs",
    "birch_stairs",
    "jungle_stairs",
    "command_block",
    "beacon",
    "cobblestone_wall",
    "mossy_cobblestone_wall",
    "flower_pot",
    "potted_oak_sapling",
    "potted_spruce_sapling",
    "potted_birch_sapling",
    "potted_jungle_sapling",
    "potted_acacia_sapling",
    "potted_dark_oak_sapling",
    "potted_fern",
    "potted_dandelion",
    "potted_poppy",
    "potted_blue_orchid",
    "potted_allium",
    "potted_azure_bluet",
    "potted_red_tulip",
    "potted_orange_tulip",
    "potted_white_tulip",
    "potted_pink_tulip",
    "potted_oxeye_daisy",
    "potted_cornflower",
    "potted_lily_of_the_valley",
    "potted_wither_rose",
    "potted_red_mushroom",
    "potted_brown_mushroom",
    "potted_dead_bush",
    "potted_cactus",
    "carrots",
    "potatoes",
    "oak_button",
    "spruce_button",
    "birch_button",
    "jungle_button",
    "acacia_button",
    "dark_oak_button",
    "skeleton_skull",
    "wither_skeleton_skull",
    "zombie_head",
    "player_head",
    "creeper_head",
    "dragon_head",
    "anvil",
    "chipped_anvil",
    "damaged_anvil",
    "trapped_chest",
    "light_weighted_pressure_plate",
    "heavy_weighted_pressure_plate",
    "comparator",
    "daylight_detector",
    "redstone_block",
    "nether_quartz_ore",
    "hopper",
    "quartz_block",
    "chiseled_quartz_block",
    "quartz_pillar",
    "quartz_stairs",
    "activator_rail",
    "dropper",
    "white_terracotta",
    "orange_terracotta",
    "magenta_terracotta",
    "light_blue_terracotta",
    "yellow_terracotta",
    "lime_terracotta",
    "pink_terracotta",
    "gray_terracotta",
    "light_gray_terracotta",
    "cyan_terracotta",
    "purple_terracotta",
    "blue_terracotta",
    "brown_terracotta",
    "green_terracotta",
    "red_terracotta",
    "black_terracotta",
    "white_stained_glass_pane",
    "orange_stained_glass_pane",
    "magenta_stained_glass_pane",
    "light_blue_stained_glass_pane",
    "yellow_stained_glass_pane",
    "lime_stained_glass_pane",
    "pink_stained_glass_pane",
    "gray_stained_glass_pane",
    "light_gray_stained_glass_pane",
    "cyan_stained_glass_pane",
    "purple_stained_glass_pane",
    "blue_stained_glass_pane",
    "brown_stained_glass_pane",
    "green_stained_glass_pane",
    "red_stained_glass_pane",
    "black_stained_glass_pane",
    "acacia_stairs",
    "dark_oak_stairs",
    "slime_block",
    "barrier",
    "light",
    "iron_trapdoor",
    "prismarine",
    "prismarine_bricks",
    "dark_prismarine",
    "prismarine_stairs",
    "prismarine_brick_stairs",
    "dark_prismarine_stairs",
    "prismarine_slab",
    "prismarine_brick_slab",
    "dark_prismarine_slab",
    "sea_lantern",
    "hay_block",
    "white_carpet",
    "orange_carpet",
    "magenta_carpet",
    "light_blue_carpet",
    "yellow_carpet",
    "lime_carpet",
    "pink_carpet",
    "gray_carpet",
    "light_gray_carpet",
    "cyan_carpet",
    "purple_carpet",
    "blue_carpet",
    "brown_carpet",
    "green_carpet",
    "red_carpet",
    "black_carpet",
    "terracotta",
    "coal_block",
    "packed_ice",
    "sunflower",
    "lilac",
    "rose_bush",
    "peony",
    "tall_grass",
    "large_fern",
    "white_banner",
    "orange_banner",
    "magenta_banner",
    "light_blue_banner",
    "yellow_banner",
    "lime_banner",
    "pink_banner",
    "gray_banner",
    "light_gray_banner",
    "cyan_banner",
    "purple_banner",
    "blue_banner",
    "brown_banner",
    "green_banner",
    "red_banner",
    "black_banner",
    "red_sandstone",
    "chiseled_red_sandstone",
    "cut_red_sandstone",
    "red_sandstone_stairs",
    "oak_slab",
    "spruce_slab",
    "birch_slab",
    "jungle_slab",
    "acacia_slab",
    "dark_oak_slab",
    "stone_slab",
    "smooth_stone_slab",
    "sandstone_slab",
    "cut_sandstone_slab",
    "petrified_oak_slab",
    "cobblestone_slab",
    "brick_slab",
    "stone_brick_slab",
    "nether_brick_slab",
    "quartz_slab",
    "red_sandstone_slab",
    "cut_red_sandstone_slab",
    "purpur_slab",
    "smooth_stone",
    "smooth_sandstone",
    "smooth_quartz",
    "smooth_red_sandstone",
    "spruce_fence_gate",
    "birch_fence_gate",
    "jungle_fence_gate",
    "acacia_fence_gate",
    "dark_oak_fence_gate",
    "spruce_fence",
    "birch_fence",
    "jungle_fence",
    "acacia_fence",
    "dark_oak_fence",
    "spruce_door",
    "birch_door",
    "jungle_door",
    "acacia_door",
    "dark_oak_door",
    "end_rod",
    "chorus_plant",
    "chorus_flower",
    "purpur_block",
    "purpur_pillar",
    "purpur_stairs",
    "end_stone_bricks",
    "beetroots",
    "dirt_path",
    "end_gateway",
    "repeating_command_block",
    "chain_command_block",
    "frosted_ice",
    "magma_block",
    "nether_wart_block",
    "red_nether_bricks",
    "bone_block",
    "structure_void",
    "observer",
    "shulker_box",
    "white_shulker_box",
    "orange_shulker_box",
    "magenta_shulker_box",
    "light_blue_shulker_box",
    "yellow_shulker_box",
    "lime_shulker_box",
    "pink_shulker_box",
    "gray_shulker_box",
    "light_gray_shulker_box",
    "cyan_shulker_box",
    "purple_shulker_box",
    "blue_shulker_box",
    "brown_shulker_box",
    "green_shulker_box",
    "red_shulker_box",
    "black_shulker_box",
    "white_glazed_terracotta",
    "orange_glazed_terracotta",
    "magenta_glazed_terracotta",
    "light_blue_glazed_terracotta",
    "yellow_glazed_terracotta",
    "lime_glazed_terracotta",
    "pink_glazed_terracotta",
    "gray_glazed_terracotta",
    "light_gray_glazed_terracotta",
    "cyan_glazed_terracotta",
    "purple_glazed_terracotta",
    "blue_glazed_terracotta",
    "brown_glazed_terracotta",
    "green_glazed_terracotta",
    "red_glazed_terracotta",
    "black_glazed_terracotta",
    "white_concrete",
    "orange_concrete",
    "magenta_concrete",
    "light_blue_concrete",
    "yellow_concrete",
    "lime_concrete",
    "pink_concrete",
    "gray_concrete",
    "light_gray_concrete",
    "cyan_concrete",
    "purple_concrete",
    "blue_concrete",
    "brown_concrete",
    "green_concrete",
    "red_concrete",
    "black_concrete",
    "white_concrete_powder",
    "orange_concrete_powder",
    "magenta_concrete_powder",
    "light_blue_concrete_powder",
    "yellow_concrete_powder",
    "lime_concrete_powder",
    "pink_concrete_powder",
    "gray_concrete_powder",
    "light_gray_concrete_powder",
    "cyan_concrete_powder",
    "purple_concrete_powder",
    "blue_concrete_powder",
    "brown_concrete_powder",
    "green_concrete_powder",
    "red_concrete_powder",
    "black_concrete_powder",
    "kelp",
    "kelp_plant",
    "dried_kelp_block",
    "turtle_egg",
    "dead_tube_coral_block",
    "dead_brain_coral_block",
    "dead_bubble_coral_block",
    "dead_fire_coral_block",
    "dead_horn_coral_block",
    "tube_coral_block",
    "brain_coral_block",
    "bubble_coral_block",
    "fire_coral_block",
    "horn_coral_block",
    "dead_tube_coral",
    "dead_brain_coral",
    "dead_bubble_coral",
    "dead_fire_coral",
    "dead_horn_coral",
    "tube_coral",
    "brain_coral",
    "bubble_coral",
    "fire_coral",
    "horn_coral",
    "dead_tube_coral_fan",
    "dead_brain_coral_fan",
    "dead_bubble_coral_fan",
    "dead_fire_coral_fan",
    "dead_horn_coral_fan",
    "tube_coral_fan",
    "brain_coral_fan",
    "bubble_coral_fan",
    "fire_coral_fan",
    "horn_coral_fan",
    "sea_pickle",
    "blue_ice",
    "conduit",
    "bamboo_sapling",
    "bamboo",
    "potted_bamboo",
    "void_air",
    "cave_air",
    "bubble_column",
    "polished_granite_stairs",
    "smooth_red_sandstone_stairs",
    "mossy_stone_brick_stairs",
    "polished_diorite_stairs",
    "mossy_cobblestone_stairs",
    "end_stone_brick_stairs",
    "stone_stairs",
    "smooth_sandstone_stairs",
    "smooth_quartz_stairs",
    "granite_stairs",
    "andesite_stairs",
    "red_nether_brick_stairs",
    "polished_andesite_stairs",
    "diorite_stairs",
    "polished_granite_slab",
    "smooth_red_sandstone_slab",
    "mossy_stone_brick_slab",
    "polished_diorite_slab",
    "mossy_cobblestone_slab",
    "end_stone_brick_slab",
    "smooth_sandstone_slab",
    "smooth_quartz_slab",
    "granite_slab",
    "andesite_slab",
    "red_nether_brick_slab",
    "polished_andesite_slab",
    "diorite_slab",
    "brick_wall",
    "prismarine_wall",
    "red_sandstone_wall",
    "mossy_stone_brick_wall",
    "granite_wall",
    "stone_brick_wall",
    "nether_brick_wall",
    "andesite_wall",
    "red_nether_brick_wall",
    "sandstone_wall",
    "end_stone_brick_wall",
    "diorite_wall",
    "scaffolding",
    "loom",
    "barrel",
    "smoker",
    "blast_furnace",
    "cartography_table",
    "fletching_table",
    "grindstone",
    "lectern",
    "smithing_table",
    "stonecutter",
    "bell",
    "lantern",
    "soul_lantern",
    "campfire",
    "soul_campfire",
    "sweet_berry_bush",
    "warped_stem",
    "stripped_warped_stem",
    "warped_hyphae",
    "stripped_warped_hyphae",
    "warped_nylium",
    "warped_fungus",
    "warped_wart_block",
    "warped_roots",
    "nether_sprouts",
    "crimson_stem",
    "stripped_crimson_stem",
    "crimson_hyphae",
    "stripped_crimson_hyphae",
    "crimson_nylium",
    "crimson_fungus",
    "shroomlight",
    "weeping_vines",
    "weeping_vines_plant",
    "twisting_vines",
    "twisting_vines_plant",
    "crimson_roots",
    "crimson_planks",
    "warped_planks",
    "crimson_slab",
    "warped_slab",
    "crimson_pressure_plate",
    "warped_pressure_plate",
    "crimson_fence",
    "warped_fence",
    "crimson_trapdoor",
    "warped_trapdoor",
    "crimson_fence_gate",
    "warped_fence_gate",
    "crimson_stairs",
    "warped_stairs",
    "crimson_button",
    "warped_button",
    "crimson_door",
    "warped_door",
    "crimson_sign",
    "warped_sign",
    "structure_block",
    "jigsaw",
    "composter",
    "target",
    "bee_nest",
    "beehive",
    "honey_block",
    "honeycomb_block",
    "netherite_block",
    "ancient_debris",
    "crying_obsidian",
    "respawn_anchor",
    "potted_crimson_fungus",
    "potted_warped_fungus",
    "potted_crimson_roots",
    "potted_warped_roots",
    "lodestone",
    "blackstone",
    "blackstone_stairs",
    "blackstone_wall",
    "blackstone_slab",
    "polished_blackstone",
    "polished_blackstone_bricks",
    "cracked_polished_blackstone_bricks",
    "chiseled_polished_blackstone",
    "polished_blackstone_brick_slab",
    "polished_blackstone_brick_stairs",
    "polished_blackstone_brick_wall",
    "gilded_blackstone",
    "polished_blackstone_stairs",
    "polished_blackstone_slab",
    "polished_blackstone_pressure_plate",
    "polished_blackstone_button",
    "polished_blackstone_wall",
    "chiseled_nether_bricks",
    "cracked_nether_bricks",
    "quartz_bricks",
    "candle",
    "white_candle",
    "orange_candle",
    "magenta_candle",
    "light_blue_candle",
    "yellow_candle",
    "lime_candle",
    "pink_candle",
    "gray_candle",
    "light_gray_candle",
    "cyan_candle",
    "purple_candle",
    "blue_candle",
    "brown_candle",
    "green_candle",
    "red_candle",
    "black_candle",
    "candle_cake",
    "white_candle_cake",
    "orange_candle_cake",
    "magenta_candle_cake",
    "light_blue_candle_cake",
    "yellow_candle_cake",
    "lime_candle_cake",
    "pink_candle_cake",
    "gray_candle_cake",
    "light_gray_candle_cake",
    "cyan_candle_cake",
    "purple_candle_cake",
    "blue_candle_cake",
    "brown_candle_cake",
    "green_candle_cake",
    "red_candle_cake",
    "black_candle_cake",
    "amethyst_block",
    "budding_amethyst",
    "amethyst_cluster",
    "large_amethyst_bud",
    "medium_amethyst_bud",
    "small_amethyst_bud",
    "tuff",
    "calcite",
    "tinted_glass",
    "powder_snow",
    "sculk_sensor",
    "oxidized_copper",
    "weathered_copper",
    "exposed_copper",
    "copper_block",
    "copper_ore",
    "deepslate_copper_ore",
    "oxidized_cut_copper",
    "weathered_cut_copper",
    "exposed_cut_copper",
    "cut_copper",
    "oxidized_cut_copper_stairs",
    "weathered_cut_copper_stairs",
    "exposed_cut_copper_stairs",
    "cut_copper_stairs",
    "oxidized_cut_copper_slab",
    "weathered_cut_copper_slab",
    "exposed_cut_copper_slab",
    "cut_copper_slab",
    "waxed_copper_block",
    "waxed_weathered_copper",
    "waxed_exposed_copper",
    "waxed_oxidized_copper",
    "waxed_oxidized_cut_copper",
    "waxed_weathered_cut_copper",
    "waxed_exposed_cut_copper",
    "waxed_cut_copper",
    "waxed_oxidized_cut_copper_stairs",
    "waxed_weathered_cut_copper_stairs",
    "waxed_exposed_cut_copper_stairs",
    "waxed_cut_copper_stairs",
    "waxed_oxidized_cut_copper_slab",
    "waxed_weathered_cut_copper_slab",
    "waxed_exposed_cut_copper_slab",
    "waxed_cut_copper_slab",
    "lightning_rod",
    "pointed_dripstone",
    "dripstone_block",
    "cave_vines",
    "cave_vines_plant",
    "spore_blossom",
    "azalea",
    "flowering_azalea",
    "moss_carpet",
    "moss_block",
    "big_dripleaf",
    "big_dripleaf_stem",
    "small_dripleaf",
    "hanging_roots",
    "rooted_dirt",
    "deepslate",
    "cobbled_deepslate",
    "cobbled_deepslate_stairs",
    "cobbled_deepslate_slab",
    "cobbled_deepslate_wall",
    "polished_deepslate",
    "polished_deepslate_stairs",
    "polished_deepslate_slab",
    "polished_deepslate_wall",
    "deepslate_tiles",
    "deepslate_tile_stairs",
    "deepslate_tile_slab",
    "deepslate_tile_wall",
    "deepslate_bricks",
    "deepslate_brick_stairs",
    "deepslate_brick_slab",
    "deepslate_brick_wall",
    "chiseled_deepslate",
    "cracked_deepslate_bricks",
    "cracked_deepslate_tiles",
    "infested_deepslate",
    "smooth_basalt",
    "raw_iron_block",
    "raw_copper_block",
    "raw_gold_block",
    "potted_azalea_bush",
    "potted_flowering_azalea_bush",
];
