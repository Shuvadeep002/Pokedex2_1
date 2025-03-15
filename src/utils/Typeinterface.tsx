import { ViewStyle } from "react-native";

export interface Pokemon {
  name?: string;
  url?: string;
  pokemon?:PokemonType
}

export interface PokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface CheckBoxProps {
  text?: any;
  size?: number;
  isChecked?: boolean;
  onPress?: (x?: boolean) => void;
  style?: ViewStyle;
  fillColor?: string;
  fontSize?: number;
}


export interface PokemonDetailsType {
  abilities?: Ability[]
  base_experience?: number
  cries?: Cries
  forms?: Form[]
  game_indices?: Index[]
  height?: number
  held_items?: any[]
  id?: number
  is_default?: boolean
  location_area_encounters?: string
  moves?: Mfe[]
  name?: string
  order?: number
  past_abilities?: any[]
  past_types?: any[]
  species?: Species
  sprites?: Sprites
  stats?: Stat[]
  types?: Types[]
  weight?: number
}

export interface PokemonTypeData {
  damage_relations: DamageRelations
  game_indices: Index[]
  generation: Generation2
  id: number
  move_damage_class: any
  moves: Mfe[]
  name: string
  names: Name[]
  past_damage_relations: any[]
  pokemon: PokemonType[]
  sprites: Sprites
}

export interface DamageRelations {
  double_damage_from: DoubleDamageFrom[]
  double_damage_to: DoubleDamageTo[]
  half_damage_from: HalfDamageFrom[]
  half_damage_to: HalfDamageTo[]
  no_damage_from: NoDamageFrom[]
  no_damage_to: any[]
}

export interface DoubleDamageFrom {
  name: string
  url: string
}

export interface DoubleDamageTo {
  name: string
  url: string
}

export interface HalfDamageFrom {
  name: string
  url: string
}

export interface HalfDamageTo {
  name: string
  url: string
}

export interface NoDamageFrom {
  name: string
  url: string
}

export interface Index {
  game_index: number
  generation: Generation
}

export interface Generation {
  name: string
  url: string
}

export interface Generation2 {
  name: string
  url: string
}

export interface Mfe {
  name: string
  url: string
}

export interface Name {
  language: Language
  name: string
}

export interface Language {
  name: string
  url: string
}

export interface PokemonType {
  pokemon?: Pokemon2
  slot?: number
}

export interface Pokemon2 {
  name: string
  url: string
}

export interface Sprites {
  "generation-iii": GenerationIii
  "generation-iv": GenerationIv
  "generation-ix": GenerationIx
  "generation-v": GenerationV
  "generation-vi": GenerationVi
  "generation-vii": GenerationVii
  "generation-viii": GenerationViii
}

export interface GenerationIii {
  colosseum: Colosseum
  emerald: Emerald
  "firered-leafgreen": FireredLeafgreen
  "ruby-saphire": RubySaphire
  xd: Xd
}

export interface Colosseum {
  name_icon: any
}

export interface Emerald {
  name_icon: any
}

export interface FireredLeafgreen {
  name_icon: any
}

export interface RubySaphire {
  name_icon: any
}

export interface Xd {
  name_icon: any
}

export interface GenerationIv {
  "diamond-pearl": DiamondPearl
  "heartgold-soulsilver": HeartgoldSoulsilver
  platinum: Platinum
}

export interface DiamondPearl {
  name_icon: any
}

export interface HeartgoldSoulsilver {
  name_icon: any
}

export interface Platinum {
  name_icon: any
}

export interface GenerationIx {
  "scarlet-violet": ScarletViolet
}

export interface ScarletViolet {
  name_icon: string
}

export interface GenerationV {
  "black-2-white-2": Black2White2
  "black-white": BlackWhite
}

export interface Black2White2 {
  name_icon: any
}

export interface BlackWhite {
  name_icon: any
}

export interface GenerationVi {
  "omega-ruby-alpha-sapphire": OmegaRubyAlphaSapphire
  "x-y": XY
}

export interface OmegaRubyAlphaSapphire {
  name_icon: string
}

export interface XY {
  name_icon: string
}

export interface GenerationVii {
  "lets-go-pikachu-lets-go-eevee": LetsGoPikachuLetsGoEevee
  "sun-moon": SunMoon
  "ultra-sun-ultra-moon": UltraSunUltraMoon
}

export interface LetsGoPikachuLetsGoEevee {
  name_icon: string
}

export interface SunMoon {
  name_icon: string
}

export interface UltraSunUltraMoon {
  name_icon: string
}

export interface GenerationViii {
  "brilliant-diamond-and-shining-pearl": BrilliantDiamondAndShiningPearl
  "legends-arceus": LegendsArceus
  "sword-shield": SwordShield
}

export interface BrilliantDiamondAndShiningPearl {
  name_icon: string
}

export interface LegendsArceus {
  name_icon: string
}

export interface SwordShield {
  name_icon: string
}


export interface Ability {
  ability: Ability2
  is_hidden: boolean
  slot: number
}

export interface Ability2 {
  name: string
  url: string
}

export interface Cries {
  latest: string
  legacy: string
}

export interface Form {
  name: string
  url: string
}

export interface Index {
  game_index: number
  version: Version
}

export interface Version {
  name: string
  url: string
}

export interface Mfe {
  move: Move
  version_group_details: VersionGroupDetail[]
}

export interface Move {
  name: string
  url: string
}

export interface VersionGroupDetail {
  level_learned_at: number
  move_learn_method: MoveLearnMethod
  order?: number
  version_group: VersionGroup
}

export interface MoveLearnMethod {
  name: string
  url: string
}

export interface VersionGroup {
  name: string
  url: string
}

export interface Species {
  name: string
  url: string
}

export interface Sprites {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
  other: Other
  versions: Versions
}

export interface Other {
  dream_world: DreamWorld
  home: Home
  "official-artwork": OfficialArtwork
  showdown: Showdown
}

export interface DreamWorld {
  front_default: string
  front_female: any
}

export interface Home {
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface OfficialArtwork {
  front_default: string
  front_shiny: string
}

export interface Showdown {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface Versions {
  "generation-i": GenerationI
  "generation-ii": GenerationIi
  "generation-iii": GenerationIii
  "generation-iv": GenerationIv
  "generation-v": GenerationV
  "generation-vi": GenerationVi
  "generation-vii": GenerationVii
  "generation-viii": GenerationViii
}

export interface GenerationI {
  "red-blue": RedBlue
  yellow: Yellow
}

export interface RedBlue {
  back_default: string
  back_gray: string
  back_transparent: string
  front_default: string
  front_gray: string
  front_transparent: string
}

export interface Yellow {
  back_default: string
  back_gray: string
  back_transparent: string
  front_default: string
  front_gray: string
  front_transparent: string
}

export interface GenerationIi {
  crystal: Crystal
  gold: Gold
  silver: Silver
}

export interface Crystal {
  back_default: string
  back_shiny: string
  back_shiny_transparent: string
  back_transparent: string
  front_default: string
  front_shiny: string
  front_shiny_transparent: string
  front_transparent: string
}

export interface Gold {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
  front_transparent: string
}

export interface Silver {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
  front_transparent: string
}

export interface GenerationIii {
  emerald: Emerald
  "firered-leafgreen": FireredLeafgreen
  "ruby-sapphire": RubySapphire
}

export interface Emerald {
  front_default: string
  front_shiny: string
}

export interface FireredLeafgreen {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
}

export interface RubySapphire {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
}

export interface GenerationIv {
  "diamond-pearl": DiamondPearl
  "heartgold-soulsilver": HeartgoldSoulsilver
  platinum: Platinum
}

export interface DiamondPearl {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface HeartgoldSoulsilver {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface Platinum {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface GenerationV {
  "black-white": BlackWhite
}

export interface BlackWhite {
  animated: Animated
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface Animated {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface GenerationVi {
  "omegaruby-alphasapphire": OmegarubyAlphasapphire
  "x-y": XY
}

export interface OmegarubyAlphasapphire {
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface XY {
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface GenerationVii {
  icons: Icons
  "ultra-sun-ultra-moon": UltraSunUltraMoon
}

export interface Icons {
  front_default: string
  front_female: any
}

export interface UltraSunUltraMoon {
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface GenerationViii {
  icons: Icons2
}

export interface Icons2 {
  front_default: string
  front_female: any
}

export interface Stat {
  base_stat: number
  effort: number
  stat: Stat2
}

export interface Stat2 {
  name: string
  url: string
}

export interface Types {
  slot: number
  type: Type2
}

export interface Type2 {
  name: string
  url: string
}

