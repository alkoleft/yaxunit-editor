import { SymbolType, TypeDefinition, PredefinedType } from "../../scope/Scope"
import GlobalScope from "../../scope/globalScope"

const definition = [
    {
        "name": "WindowsШрифты",
        "name_en": "WindowsFonts",
        "description": "Определяет набор шрифтов, предоставляемых операционной системой Windows. Значения этого набора имеют тип",
        "values": [
            {
                "name": "ANSIШрифтМоноширинный",
                "name_en": "ANSIFixedFont",
                "description": "Шрифт ANSI моноширинный."
            },
            {
                "name": "ANSIШрифтПропорциональный",
                "name_en": "ANSIVariableFont",
                "description": "Шрифт ANSI пропорциональный."
            },
            {
                "name": "OEMШрифтМоноширинный",
                "name_en": "OEMFixedFont",
                "description": "Шрифт OEM моноширинный."
            },
            {
                "name": "СистемныйШрифт",
                "name_en": "SystemFont",
                "description": "Системный шрифт."
            },
            {
                "name": "ШрифтДиалоговИМеню",
                "name_en": "DefaultGUIFont",
                "description": "Шрифт диалогов и меню."
            }
        ]
    },
    {
        "name": "WebЦвета",
        "name_en": "WebColors",
        "description": "Определяет набор цветов используемых при создании веб-страниц. Значения этого набора имеют тип",
        "values": [
            {
                "name": "Аквамарин",
                "name_en": "Aquamarine",
                "description": "Аквамарин."
            },
            {
                "name": "АкварельноСиний",
                "name_en": "AliceBlue",
                "description": "Акварельно-синий."
            },
            {
                "name": "АнтикБелый",
                "name_en": "AntiqueWhite",
                "description": "Белый антик."
            },
            {
                "name": "Бежевый",
                "name_en": "Beige",
                "description": "Бежевый."
            },
            {
                "name": "Белоснежный",
                "name_en": "Snow",
                "description": "Белоснежный."
            },
            {
                "name": "Белый",
                "name_en": "White",
                "description": "Белый."
            },
            {
                "name": "Бирюзовый",
                "name_en": "Turquoise",
                "description": "Бирюзовый."
            },
            {
                "name": "БледноБирюзовый",
                "name_en": "PaleTurquoise",
                "description": "Бледно-бирюзовый."
            },
            {
                "name": "БледноЗеленый",
                "name_en": "PaleGreen",
                "description": "Бледно-зеленый."
            },
            {
                "name": "БледноЗолотистый",
                "name_en": "PaleGoldenrod",
                "description": "Бледно-золотистый."
            },
            {
                "name": "БледноКрасноФиолетовый",
                "name_en": "PaleVioletRed",
                "description": "Бледно-красно-фиолетовый."
            },
            {
                "name": "БледноЛиловый",
                "name_en": "Lavender",
                "description": "Бледно-лиловый."
            },
            {
                "name": "БледноМиндальный",
                "name_en": "BlanchedAlmond",
                "description": "Бледно-миндальный."
            },
            {
                "name": "БледноСиреневый",
                "name_en": "Thistle",
                "description": "Бледно-сиреневый."
            },
            {
                "name": "Васильковый",
                "name_en": "CornFlowerBlue",
                "description": "Васильковый."
            },
            {
                "name": "ВесеннеЗеленый",
                "name_en": "SpringGreen",
                "description": "Весенне-зеленый."
            },
            {
                "name": "Голубой",
                "name_en": "LightBlue",
                "description": "Голубой."
            },
            {
                "name": "ГолубойСКраснымОттенком",
                "name_en": "LavenderBlush",
                "description": "Голубой с красным оттенком."
            },
            {
                "name": "ГолубойСоСтальнымОттенком",
                "name_en": "LightSteelBlue",
                "description": "Голубой со стальным оттенком."
            },
            {
                "name": "ГрифельноСерый",
                "name_en": "SlateGray",
                "description": "Грифельно-серый."
            },
            {
                "name": "ГрифельноСиний",
                "name_en": "SlateBlue",
                "description": "Грифельно-синий."
            },
            {
                "name": "Древесный",
                "name_en": "BurlyWood",
                "description": "Древесный."
            },
            {
                "name": "ДымчатоБелый",
                "name_en": "WhiteSmoke",
                "description": "Дымчато-белый."
            },
            {
                "name": "ЖелтоЗеленый",
                "name_en": "YellowGreen",
                "description": "Желто-зеленый."
            },
            {
                "name": "Желтый",
                "name_en": "Yellow",
                "description": "Желтый."
            },
            {
                "name": "ЗамшаСветлый",
                "name_en": "Moccasin",
                "description": "Замша светлый."
            },
            {
                "name": "ЗеленаяЛужайка",
                "name_en": "LawnGreen",
                "description": "Зеленая лужайка."
            },
            {
                "name": "ЗеленоватоЖелтый",
                "name_en": "Chartreuse",
                "description": "Зеленовато-желтый."
            },
            {
                "name": "ЗеленоватоЛимонный",
                "name_en": "Lime",
                "description": "Зеленовато-лимонный."
            },
            {
                "name": "ЗеленоЖелтый",
                "name_en": "GreenYellow",
                "description": "Зелено-желтый."
            },
            {
                "name": "Зеленый",
                "name_en": "Green",
                "description": "Зеленый."
            },
            {
                "name": "ЗеленыйЛес",
                "name_en": "ForestGreen",
                "description": "Зеленый лес."
            },
            {
                "name": "Золотистый",
                "name_en": "Goldenrod",
                "description": "Золотистый."
            },
            {
                "name": "Золотой",
                "name_en": "Gold",
                "description": "Золотой."
            },
            {
                "name": "Индиго",
                "name_en": "Indigo",
                "description": "Индиго."
            },
            {
                "name": "Киноварь",
                "name_en": "IndianRed",
                "description": "Киноварь."
            },
            {
                "name": "Кирпичный",
                "name_en": "FireBrick",
                "description": "Кирпичный."
            },
            {
                "name": "КожаноКоричневый",
                "name_en": "SaddleBrown",
                "description": "Кожано-коричневый."
            },
            {
                "name": "Коралловый",
                "name_en": "Coral",
                "description": "Коралловый."
            },
            {
                "name": "Коричневый",
                "name_en": "Brown",
                "description": "Коричневый."
            },
            {
                "name": "КоролевскиГолубой",
                "name_en": "RoyalBlue",
                "description": "Королевски-голубой."
            },
            {
                "name": "КрасноФиолетовый",
                "name_en": "VioletRed",
                "description": "Красно-фиолетовый."
            },
            {
                "name": "Красный",
                "name_en": "Red",
                "description": "Красный."
            },
            {
                "name": "Кремовый",
                "name_en": "Cream",
                "description": "Кремовый."
            },
            {
                "name": "Лазурный",
                "name_en": "Azure",
                "description": "Лазурный."
            },
            {
                "name": "ЛимонноЗеленый",
                "name_en": "LimeGreen",
                "description": "Лимонно-зеленый."
            },
            {
                "name": "Лимонный",
                "name_en": "LemonChiffon",
                "description": "Лимонный."
            },
            {
                "name": "Лосось",
                "name_en": "Salmon",
                "description": "Лосось."
            },
            {
                "name": "ЛососьСветлый",
                "name_en": "LightSalmon",
                "description": "Лосось светлый."
            },
            {
                "name": "ЛососьТемный",
                "name_en": "DarkSalmon",
                "description": "Лосось темный."
            },
            {
                "name": "Льняной",
                "name_en": "Linen",
                "description": "Льняной."
            },
            {
                "name": "Малиновый",
                "name_en": "Crimson",
                "description": "Малиновый."
            },
            {
                "name": "МятныйКрем",
                "name_en": "MintCream",
                "description": "Мятный крем."
            },
            {
                "name": "НавахоБелый",
                "name_en": "NavajoWhite",
                "description": "Белый навахо."
            },
            {
                "name": "НасыщенноНебесноГолубой",
                "name_en": "DeepSkyBlue",
                "description": "Насыщенно-небесно-голубой."
            },
            {
                "name": "НасыщенноРозовый",
                "name_en": "DeepPink",
                "description": "Насыщенно-розовый."
            },
            {
                "name": "НебесноГолубой",
                "name_en": "SkyBlue",
                "description": "Небесно-голубой."
            },
            {
                "name": "НейтральноАквамариновый",
                "name_en": "MediumAquaMarine",
                "description": "Нейтрально-аквамариновый."
            },
            {
                "name": "НейтральноБирюзовый",
                "name_en": "MediumTurquoise",
                "description": "Нейтрально-бирюзовый."
            },
            {
                "name": "НейтральноВесеннеЗеленый",
                "name_en": "MediumSpringGreen",
                "description": "Нейтрально-весенне-зеленый."
            },
            {
                "name": "НейтральноГрифельноСиний",
                "name_en": "MediumSlateBlue",
                "description": "Нейтрально-грифельно-синий."
            },
            {
                "name": "НейтральноЗеленый",
                "name_en": "MediumGreen",
                "description": "Нейтрально-зеленый."
            },
            {
                "name": "НейтральноКоричневый",
                "name_en": "Peru",
                "description": "Нейтрально-коричневый."
            },
            {
                "name": "НейтральноПурпурный",
                "name_en": "MediumPurple",
                "description": "Нейтрально-пурпурный."
            },
            {
                "name": "НейтральноСерый",
                "name_en": "MediumGray",
                "description": "Нейтрально-серый."
            },
            {
                "name": "НейтральноСиний",
                "name_en": "MediumBlue",
                "description": "Нейтрально-синий."
            },
            {
                "name": "НейтральноФиолетовоКрасный",
                "name_en": "MediumVioletRed",
                "description": "Нейтрально-фиолетово-красный."
            },
            {
                "name": "Оливковый",
                "name_en": "Olive",
                "description": "Оливковый."
            },
            {
                "name": "ОранжевоКрасный",
                "name_en": "OrangeRed",
                "description": "Оранжево-красный."
            },
            {
                "name": "Оранжевый",
                "name_en": "Orange",
                "description": "Оранжевый."
            },
            {
                "name": "Орхидея",
                "name_en": "Orchid",
                "description": "Орхидея."
            },
            {
                "name": "ОрхидеяНейтральный",
                "name_en": "MediumOrchid",
                "description": "Орхидея нейтральный."
            },
            {
                "name": "ОрхидеяТемный",
                "name_en": "DarkOrchid",
                "description": "Орхидея темный."
            },
            {
                "name": "Охра",
                "name_en": "Sienna",
                "description": "Охра."
            },
            {
                "name": "Перламутровый",
                "name_en": "SeaShell",
                "description": "Перламутровый."
            },
            {
                "name": "Персиковый",
                "name_en": "PeachPuff",
                "description": "Персиковый."
            },
            {
                "name": "ПесочноКоричневый",
                "name_en": "SandyBrown",
                "description": "Песочно-коричневый."
            },
            {
                "name": "ПолночноСиний",
                "name_en": "MidnightBlue",
                "description": "Полночно-синий."
            },
            {
                "name": "ПризрачноБелый",
                "name_en": "GhostWhite",
                "description": "Призрачно-белый."
            },
            {
                "name": "Пурпурный",
                "name_en": "Purple",
                "description": "Пурпурный."
            },
            {
                "name": "Пшеничный",
                "name_en": "Wheat",
                "description": "Пшеничный."
            },
            {
                "name": "РозовоКоричневый",
                "name_en": "RosyBrown",
                "description": "Розово-коричневый."
            },
            {
                "name": "Розовый",
                "name_en": "Pink",
                "description": "Розовый."
            },
            {
                "name": "Роса",
                "name_en": "HoneyDew",
                "description": "Роса."
            },
            {
                "name": "РыжеватоКоричневый",
                "name_en": "Tan",
                "description": "Рыжевато-коричневый."
            },
            {
                "name": "СветлоГрифельноСерый",
                "name_en": "LightSlateGray",
                "description": "Светло-грифельно-серый."
            },
            {
                "name": "СветлоГрифельноСиний",
                "name_en": "LightSlateBlue",
                "description": "Светло-грифельно-синий."
            },
            {
                "name": "СветлоЖелтый",
                "name_en": "LightYellow",
                "description": "Светло-желтый."
            },
            {
                "name": "СветлоЖелтыйЗолотистый",
                "name_en": "LightGoldenRodYellow",
                "description": "Светло-желтый золотистый."
            },
            {
                "name": "СветлоЗеленый",
                "name_en": "LightGreen",
                "description": "Светло-зеленый."
            },
            {
                "name": "СветлоЗолотистый",
                "name_en": "LightGoldenRod",
                "description": "Светло-золотистый."
            },
            {
                "name": "СветлоКоралловый",
                "name_en": "LightCoral",
                "description": "Светло-коралловый."
            },
            {
                "name": "СветлоКоричневый",
                "name_en": "Bisque",
                "description": "Светло-коричневый."
            },
            {
                "name": "СветлоНебесноГолубой",
                "name_en": "LightSkyBlue",
                "description": "Светло-небесно-голубой."
            },
            {
                "name": "СветлоРозовый",
                "name_en": "LightPink",
                "description": "Светло-розовый."
            },
            {
                "name": "СветлоСерый",
                "name_en": "LightGray",
                "description": "Светло-серый."
            },
            {
                "name": "СеребристоСерый",
                "name_en": "Gainsboro",
                "description": "Серебристо-серый."
            },
            {
                "name": "Серебряный",
                "name_en": "Silver",
                "description": "Серебряный."
            },
            {
                "name": "СероСиний",
                "name_en": "CadetBlue",
                "description": "Серо-синий."
            },
            {
                "name": "Серый",
                "name_en": "Gray",
                "description": "Серый."
            },
            {
                "name": "СинеСерый",
                "name_en": "DodgerBlue",
                "description": "Сине-серый."
            },
            {
                "name": "СинеФиолетовый",
                "name_en": "BlueViolet",
                "description": "Сине-фиолетовый."
            },
            {
                "name": "Синий",
                "name_en": "Blue",
                "description": "Синий."
            },
            {
                "name": "СинийСоСтальнымОттенком",
                "name_en": "SteelBlue",
                "description": "Синий со стальным оттенком."
            },
            {
                "name": "СинийСПороховымОттенком",
                "name_en": "PowderBlue",
                "description": "Синий с пороховым оттенком."
            },
            {
                "name": "Сливовый",
                "name_en": "Plum",
                "description": "Сливовый."
            },
            {
                "name": "СлоноваяКость",
                "name_en": "Ivory",
                "description": "Слоновая кость."
            },
            {
                "name": "СтароеКружево",
                "name_en": "OldLace",
                "description": "Старое кружево."
            },
            {
                "name": "ТемноБирюзовый",
                "name_en": "DarkTurquoise",
                "description": "Темно-бирюзовый."
            },
            {
                "name": "ТемноБордовый",
                "name_en": "Maroon",
                "description": "Темно-бордовый."
            },
            {
                "name": "ТемноГрифельноСерый",
                "name_en": "DarkSlateGray",
                "description": "Темно-грифельно-серый."
            },
            {
                "name": "ТемноГрифельноСиний",
                "name_en": "DarkSlateBlue",
                "description": "Темно-грифельно-синий."
            },
            {
                "name": "ТемноЗеленый",
                "name_en": "DarkGreen",
                "description": "Темно-зеленый."
            },
            {
                "name": "ТемноЗолотистый",
                "name_en": "DarkGoldenRod",
                "description": "Темно-золотистый."
            },
            {
                "name": "ТемноКрасный",
                "name_en": "DarkRed",
                "description": "Темно-красный."
            },
            {
                "name": "ТемноОливковоЗеленый",
                "name_en": "DarkOliveGreen",
                "description": "Темно-оливково-зеленый."
            },
            {
                "name": "ТемноОранжевый",
                "name_en": "DarkOrange",
                "description": "Темно-оранжевый."
            },
            {
                "name": "ТемноСерый",
                "name_en": "DarkGray",
                "description": "Темно-серый."
            },
            {
                "name": "ТемноСиний",
                "name_en": "DarkBlue",
                "description": "Темно-синий."
            },
            {
                "name": "ТемноФиолетовый",
                "name_en": "DarkViolet",
                "description": "Темно-фиолетовый."
            },
            {
                "name": "ТеплоРозовый",
                "name_en": "HotPink",
                "description": "Тепло-розовый."
            },
            {
                "name": "Томатный",
                "name_en": "Tomato",
                "description": "Томатный."
            },
            {
                "name": "ТопленоеМолоко",
                "name_en": "PapayaWhip",
                "description": "Топленое молоко."
            },
            {
                "name": "ТусклоОливковый",
                "name_en": "Olivedrab",
                "description": "Тускло-оливковый."
            },
            {
                "name": "ТусклоРозовый",
                "name_en": "MistyRose",
                "description": "Тускло-розовый."
            },
            {
                "name": "ТусклоСерый",
                "name_en": "DimGray",
                "description": "Тускло-серый."
            },
            {
                "name": "Ультрамарин",
                "name_en": "Navy",
                "description": "Ультрамарин."
            },
            {
                "name": "Фиолетовый",
                "name_en": "Violet",
                "description": "Фиолетовый."
            },
            {
                "name": "Фуксин",
                "name_en": "Magenta",
                "description": "Фуксин."
            },
            {
                "name": "ФуксинТемный",
                "name_en": "DarkMagenta",
                "description": "Фуксин темный."
            },
            {
                "name": "Фуксия",
                "name_en": "Fuchsia",
                "description": "Фуксия."
            },
            {
                "name": "Хаки",
                "name_en": "Khaki",
                "description": "Хаки."
            },
            {
                "name": "ХакиТемный",
                "name_en": "DarkKhaki",
                "description": "Хаки темный."
            },
            {
                "name": "ЦветМорскойВолны",
                "name_en": "Seagreen",
                "description": "Цвет морской волны."
            },
            {
                "name": "ЦветМорскойВолныНейтральный",
                "name_en": "MediumSeaGreen",
                "description": "Цвет морской волны нейтральный."
            },
            {
                "name": "ЦветМорскойВолныСветлый",
                "name_en": "LightSeaGreen",
                "description": "Цвет морской волны светлый."
            },
            {
                "name": "ЦветМорскойВолныТемный",
                "name_en": "DarkSeaGreen",
                "description": "Цвет морской волны темный."
            },
            {
                "name": "ЦветокБелый",
                "name_en": "FloralWhite",
                "description": "Цветок белый."
            },
            {
                "name": "Циан",
                "name_en": "Cyan",
                "description": "Циан."
            },
            {
                "name": "ЦианАкварельный",
                "name_en": "Aqua",
                "description": "Циан акварельный."
            },
            {
                "name": "ЦианНейтральный",
                "name_en": "Teal",
                "description": "Циан нейтральный."
            },
            {
                "name": "ЦианСветлый",
                "name_en": "LightCyan",
                "description": "Циан светлый."
            },
            {
                "name": "ЦианТемный",
                "name_en": "DarkCyan",
                "description": "Циан темный."
            },
            {
                "name": "Черный",
                "name_en": "Black",
                "description": "Черный."
            },
            {
                "name": "ШелковыйОттенок",
                "name_en": "CornSilk",
                "description": "Шелковый оттенок."
            },
            {
                "name": "Шоколадный",
                "name_en": "Chocolate",
                "description": "Шоколадный."
            }
        ]
    },
    {
        "name": "ЦветаСтиля",
        "name_en": "StyleColors",
        "description": "Определяет набор цветов используемых в стиле. Значения этого набора имеют тип",
        "values": [
            {
                "name": "АльтернативныйЦветФонаПоля",
                "name_en": "FieldAlternativeBackColor",
                "description": "Альтернативный цвет фона поля."
            },
            {
                "name": "ЦветАктивности",
                "name_en": "ActivityColor",
                "description": "Содержит цвет элементов, отображающих состояние активности."
            },
            {
                "name": "ЦветАкцента",
                "name_en": "AccentColor",
                "description": "Содержит цвет акцентирования."
            },
            {
                "name": "ЦветВажного",
                "name_en": "ImportantColor",
                "description": "Содержит цвет важных элементов (цвет фона кнопки по умолчанию)."
            },
            {
                "name": "ЦветДополнительнойНавигации",
                "name_en": "AuxiliaryNavigationColor",
                "description": "Содержит цвет элементов дополнительной навигации."
            },
            {
                "name": "ЦветЛинииОтчета",
                "name_en": "ReportLineColor",
                "description": "Содержит цвет, используемый для отображения линии отчета."
            },
            {
                "name": "ЦветНавигации",
                "name_en": "NavigationColor",
                "description": "Содержит цвет элементов навигации."
            },
            {
                "name": "ЦветОсобогоТекста",
                "name_en": "SpecialTextColor",
                "description": "Содержит цвет особого текста."
            },
            {
                "name": "ЦветОтрицательногоЧисла",
                "name_en": "NegativeTextColor",
                "description": "Содержит цвет отрицательных чисел."
            },
            {
                "name": "ЦветРамки",
                "name_en": "BorderColor",
                "description": "Содержит цвет рамки."
            },
            {
                "name": "ЦветРамкиКнопки",
                "name_en": "ButtonBorderColor",
                "description": "Содержит цвет рамки кнопок."
            },
            {
                "name": "ЦветТекстаВыделенияПоля",
                "name_en": "FieldSelectedTextColor",
                "description": "Содержит цвет текста выделения поля."
            },
            {
                "name": "ЦветТекстаКнопки",
                "name_en": "ButtonTextColor",
                "description": "Содержит цвет текста кнопки."
            },
            {
                "name": "ЦветТекстаПодвалаТаблицы",
                "name_en": "TableFooterTextColor",
                "description": "Содержит цвет текста подвала таблицы."
            },
            {
                "name": "ЦветТекстаПодсказки",
                "name_en": "ToolTipTextColor",
                "description": "Содержит цвет текста подсказок."
            },
            {
                "name": "ЦветТекстаПоля",
                "name_en": "FieldTextColor",
                "description": "Содержит цвет текста поля."
            },
            {
                "name": "ЦветТекстаФормы",
                "name_en": "FormTextColor",
                "description": "Содержит цвет текста формы."
            },
            {
                "name": "ЦветТекстаШапкиТаблицы",
                "name_en": "TableHeaderTextColor",
                "description": "Содержит цвет текста шапки таблицы."
            },
            {
                "name": "ЦветФонаВыделенияПоля",
                "name_en": "FieldSelectionBackColor",
                "description": "Содержит цвет фона выделения поля."
            },
            {
                "name": "ЦветФонаГруппировкиОтчета1",
                "name_en": "ReportGroup1BackColor",
                "description": "Содержит цвет, используемый для оформления фона группировки отчета 1-го уровня."
            },
            {
                "name": "ЦветФонаГруппировкиОтчета2",
                "name_en": "ReportGroup2BackColor",
                "description": "Содержит цвет используемый для оформления группировки отчета 2-го уровня."
            },
            {
                "name": "ЦветФонаКнопки",
                "name_en": "ButtonBackColor",
                "description": "Содержит цвет фона кнопок."
            },
            {
                "name": "ЦветФонаПодвалаТаблицы",
                "name_en": "TableFooterBackColor",
                "description": "Содержит цвет фона подвала таблицы."
            },
            {
                "name": "ЦветФонаПодсказки",
                "name_en": "ToolTipBackColor",
                "description": "Содержит цвет фона подсказки."
            },
            {
                "name": "ЦветФонаПоля",
                "name_en": "FieldBackColor",
                "description": "Содержит цвет фона поля."
            },
            {
                "name": "ЦветФонаФормы",
                "name_en": "FormBackColor",
                "description": "Содержит цвет фона форм."
            },
            {
                "name": "ЦветФонаШапкиОтчета",
                "name_en": "ReportHeaderBackColor",
                "description": "Содержит цвет, используемый для оформления фона шапки отчета."
            },
            {
                "name": "ЦветФонаШапкиТаблицы",
                "name_en": "TableHeaderBackColor",
                "description": "Содержит цвет фона шапки таблиц."
            }
        ]
    },
    {
        "name": "РамкиСтиля",
        "name_en": "StyleBorders",
        "description": "Определяет набор рамок, используемых в стиле. Значения этого набора имеют тип",
        "values": [
            {
                "name": "РамкаЭлементаУправления",
                "name_en": "ControlBorder",
                "description": "Рамка элементов управления."
            }
        ]
    },
    {
        "name": "WindowsЦвета",
        "name_en": "WindowsColors",
        "description": "Определяет набор цветов, предоставляемых операционной системой Windows. Значения этого набора имеют тип",
        "values": [
            {
                "name": "ГраницаАктивногоОкна",
                "name_en": "ActiveBorder",
                "description": "Цвет границы активного окна."
            },
            {
                "name": "ГраницаНеактивногоОкна",
                "name_en": "InactiveBorder",
                "description": "Цвет границы неактивного окна."
            },
            {
                "name": "ЗаголовокАктивногоОкна",
                "name_en": "ActiveTitleBar",
                "description": "Цвет заголовка активного окна."
            },
            {
                "name": "ЗаголовокНеактивногоОкна",
                "name_en": "InactiveTitleBar",
                "description": "Цвет заголовка неактивного окна."
            },
            {
                "name": "Кнопка",
                "name_en": "ButtonFace",
                "description": "Цвет кнопки."
            },
            {
                "name": "КнопкаПодсвеченная",
                "name_en": "ButtonHighlight",
                "description": "Цвет кнопки подсвеченной."
            },
            {
                "name": "Подсвеченный",
                "name_en": "Highlight",
                "description": "Цвет подсвеченного."
            },
            {
                "name": "Подсказка",
                "name_en": "ToolTip",
                "description": "Цвет подсказки."
            },
            {
                "name": "ПолосаПрокрутки",
                "name_en": "ScrollBar",
                "description": "Цвет полосы прокрутки."
            },
            {
                "name": "РабочаяОбластьПриложения",
                "name_en": "ApplicationWorkspace",
                "description": "Цвет рабочей области приложения."
            },
            {
                "name": "РабочийСтол",
                "name_en": "Desktop",
                "description": "Цвет рабочего стола."
            },
            {
                "name": "РамкаОкна",
                "name_en": "WindowFrame",
                "description": "Цвет границы активного окна."
            },
            {
                "name": "СтрокаМеню",
                "name_en": "MenuBar",
                "description": "Цвет строки меню."
            },
            {
                "name": "ТекстЗаголовкаАктивногоОкна",
                "name_en": "ActiveTitleBarText",
                "description": "Цвет текста заголовка активного окна."
            },
            {
                "name": "ТекстЗаголовкаНеактивногоОкна",
                "name_en": "InactiveTitleBarText",
                "description": "Цвет текста заголовка неактивного окна."
            },
            {
                "name": "ТекстКнопки",
                "name_en": "ButtonText",
                "description": "Цвет текста кнопки."
            },
            {
                "name": "ТекстНедоступный",
                "name_en": "DisabledText",
                "description": "Цвет недоступного текста."
            },
            {
                "name": "ТекстОкна",
                "name_en": "WindowText",
                "description": "Цвет текста окна."
            },
            {
                "name": "ТекстПодсвеченный",
                "name_en": "HighlightText",
                "description": "Цвет текста подсвеченного."
            },
            {
                "name": "ТекстПодсказки",
                "name_en": "ToolTipText",
                "description": "Цвет текста подсказки."
            },
            {
                "name": "ТекстПунктаМеню",
                "name_en": "MenuItemText",
                "description": "Цвет текста пункта меню."
            },
            {
                "name": "ТеньКнопки",
                "name_en": "ButtonShadow",
                "description": "Цвет тени кнопки."
            },
            {
                "name": "ТеньКнопкиСветлая",
                "name_en": "ButtonLightShadow",
                "description": "Цвет светлой тени кнопки."
            },
            {
                "name": "ТеньКнопкиТемная",
                "name_en": "ButtonDarkShadow",
                "description": "Цвет темной тени кнопки."
            },
            {
                "name": "ФонОкна",
                "name_en": "WindowBackground",
                "description": "Цвет фона окна."
            }
        ]
    },
    {
        "name": "БиблиотекаКартинок",
        "name_en": "PictureLib",
        "description": "Определяет набор картинок, используемых в конфигурации. Значения этого набора имеют тип",
        "values": [
            {
                "name": "АктивироватьЗадачу",
                "name_en": "ActivateTask",
                "description": "Активировать задачу."
            },
            {
                "name": "АктивныеПользователи",
                "name_en": "ActiveUsers",
                "description": "Активные пользователи."
            },
            {
                "name": "БизнесПроцесс",
                "name_en": "BusinessProcess",
                "description": "Бизнес-процесс."
            },
            {
                "name": "БизнесПроцессОбъект",
                "name_en": "BusinessProcessObject",
                "description": "Бизнес-процесс объект."
            },
            {
                "name": "ВводНаОсновании",
                "name_en": "InputOnBasis",
                "description": "Ввод на основании."
            },
            {
                "name": "ВидРасчета",
                "name_en": "CalculationType",
                "description": "Вид расчета."
            },
            {
                "name": "ВложеннаяТаблица",
                "name_en": "NestedTable",
                "description": "Вложенная таблица."
            },
            {
                "name": "ВнешнийИсточникДанных",
                "name_en": "ExternalDataSource",
                "description": "Картинка внешнего источника данных."
            },
            {
                "name": "ВнешнийИсточникДанныхКуб",
                "name_en": "ExternalDataSourceCube",
                "description": "Куб внешнего источника данных."
            },
            {
                "name": "ВнешнийИсточникДанныхКубТаблицаИзмерения",
                "name_en": "ExternalDataSourceCubeDimensionTable",
                "description": "Таблица измерения куба внешнего источника данных."
            },
            {
                "name": "ВнешнийИсточникДанныхТаблица",
                "name_en": "ExternalDataSourceTable",
                "description": "Картинка таблицы внешнего источника данных."
            },
            {
                "name": "ВнешнийИсточникДанныхФункция",
                "name_en": "ExternalDataSourceFunction",
                "description": "Функция внешнего источника данных."
            },
            {
                "name": "ВосстановитьЗначения",
                "name_en": "RestoreValues",
                "description": "Восстановить сохраненные прежде значения."
            },
            {
                "name": "Вперед",
                "name_en": "Forward",
                "description": "Вперед."
            },
            {
                "name": "ВыборКомпоновкиДанных",
                "name_en": "DataCompositionSelection",
                "description": "Наличие выбора компоновки данных."
            },
            {
                "name": "ВыборКомпоновкиДанныхНедоступный",
                "name_en": "DataCompositionSelectionDisabled",
                "description": "Недоступен выбор компоновки данных."
            },
            {
                "name": "Выбрать",
                "name_en": "Select",
                "description": "Выбрать."
            },
            {
                "name": "ВыбратьВерхнийУровень",
                "name_en": "ChooseTopLevel",
                "description": "Выбрать верхний уровень."
            },
            {
                "name": "ВыбратьЗначение",
                "name_en": "ChooseValue",
                "description": "Выбрать значение."
            },
            {
                "name": "ВыбратьТип",
                "name_en": "ChooseType",
                "description": "Картинка кнопки поля ввода для выбора типа."
            },
            {
                "name": "ВывестиСписок",
                "name_en": "OutputList",
                "description": "Вывести список."
            },
            {
                "name": "ВыполнитьЗадачу",
                "name_en": "ExecuteTask",
                "description": "Выполнить задачу."
            },
            {
                "name": "ГеографическаяСхема",
                "name_en": "GeographicalSchema",
                "description": "Географическая схема."
            },
            {
                "name": "ГрафическаяСхема",
                "name_en": "GraphicalSchema",
                "description": "Графическая схема."
            },
            {
                "name": "ГрупповоеОбсуждение",
                "name_en": "GroupConversation",
                "description": "Групповое обсуждение."
            },
            {
                "name": "Дебет",
                "name_en": "Debit",
                "description": "Дебет."
            },
            {
                "name": "ДебетКредит",
                "name_en": "DebitCredit",
                "description": "Дебет и кредит."
            },
            {
                "name": "Дендрограмма",
                "name_en": "Dendrogram",
                "description": "Дендрограмма."
            },
            {
                "name": "Диаграмма",
                "name_en": "Chart",
                "description": "Диаграмма."
            },
            {
                "name": "ДиаграммаГанта",
                "name_en": "GanttChart",
                "description": "Диаграмма Ганта."
            },
            {
                "name": "ДиалогВопрос",
                "name_en": "DialogQuestion",
                "description": "Вопрос."
            },
            {
                "name": "ДиалогВосклицание",
                "name_en": "DialogExclamation",
                "description": "Восклицание."
            },
            {
                "name": "ДиалогИнформация",
                "name_en": "DialogInformation",
                "description": "Информация."
            },
            {
                "name": "ДиалогСтоп",
                "name_en": "DialogStop",
                "description": "Стоп."
            },
            {
                "name": "ДобавитьВИзбранное",
                "name_en": "AddToFavorites",
                "description": "Добавить в избранное."
            },
            {
                "name": "Документ",
                "name_en": "Document",
                "description": "Документ."
            },
            {
                "name": "ДокументОбъект",
                "name_en": "DocumentObject",
                "description": "Документ объект."
            },
            {
                "name": "ЖурналДокументов",
                "name_en": "DocumentJournal",
                "description": "Журнал документов."
            },
            {
                "name": "ЖурналРегистрации",
                "name_en": "EventLog",
                "description": "Журнал регистрации."
            },
            {
                "name": "ЖурналРегистрацииПоПользователю",
                "name_en": "EventLogByUser",
                "description": "Журнал регистрации по пользователю."
            },
            {
                "name": "ЗагрузитьНастройкиОтчета",
                "name_en": "LoadReportSettings",
                "description": "Загрузить настройки отчета."
            },
            {
                "name": "Задача",
                "name_en": "Task",
                "description": "Задача."
            },
            {
                "name": "ЗадачаОбъект",
                "name_en": "TaskObject",
                "description": "Задача объект."
            },
            {
                "name": "ЗакончитьРедактирование",
                "name_en": "EndEdit",
                "description": "Закончить редактирование."
            },
            {
                "name": "Закрыть",
                "name_en": "Close",
                "description": "Закрыть."
            },
            {
                "name": "Заменить",
                "name_en": "Replace",
                "description": "Заменить."
            },
            {
                "name": "Записать",
                "name_en": "Write",
                "description": "Записать объект."
            },
            {
                "name": "ЗаписатьИЗакрыть",
                "name_en": "WriteAndClose",
                "description": "Записать объект и закрыть форму."
            },
            {
                "name": "ЗаписатьИзменения",
                "name_en": "WriteChanges",
                "description": "Записать изменения."
            },
            {
                "name": "ЗатенитьФлажки",
                "name_en": "GrayedAll",
                "description": "Затенить флажки."
            },
            {
                "name": "ЗафиксироватьТаблицу",
                "name_en": "FixTable",
                "description": "Зафиксировать таблицу."
            },
            {
                "name": "ИерархическийПросмотр",
                "name_en": "HierarchicalView",
                "description": "Иерархический просмотр."
            },
            {
                "name": "Избранное",
                "name_en": "Favorites",
                "description": "Избранное."
            },
            {
                "name": "Изменить",
                "name_en": "Change",
                "description": "Изменить."
            },
            {
                "name": "ИзменитьМасштаб",
                "name_en": "Zoom",
                "description": "Изменить масштаб."
            },
            {
                "name": "ИзменитьФорму",
                "name_en": "CustomizeForm",
                "description": "Изменить форму."
            },
            {
                "name": "Измерение",
                "name_en": "Dimension",
                "description": "Измерение."
            },
            {
                "name": "Информация",
                "name_en": "Information",
                "description": "Информация."
            },
            {
                "name": "История",
                "name_en": "History",
                "description": "История."
            },
            {
                "name": "ИсторияДанных",
                "name_en": "DataHistory",
                "description": "История данных."
            },
            {
                "name": "ИсторияОтборов",
                "name_en": "FilterHistory",
                "description": "История отборов."
            },
            {
                "name": "Календарь",
                "name_en": "Calendar",
                "description": "Календарь."
            },
            {
                "name": "Калькулятор",
                "name_en": "Calculator",
                "description": "Калькулятор."
            },
            {
                "name": "Картинка",
                "name_en": "Picture",
                "description": "Картинка."
            },
            {
                "name": "КомандаМенюФункций",
                "name_en": "FunctionMenuCommand",
                "description": "Команда меню \"Функции\"."
            },
            {
                "name": "Константа",
                "name_en": "Constant",
                "description": "Константа."
            },
            {
                "name": "КонструкторЗапроса",
                "name_en": "QueryWizard",
                "description": "Конструктор запроса."
            },
            {
                "name": "КонструкторЗапросаВложенныйЗапрос",
                "name_en": "QueryWizardNestedQuery",
                "description": "Вложенный запрос в конструкторе запроса."
            },
            {
                "name": "КонструкторЗапросаВременнаяТаблица",
                "name_en": "QueryWizardTempTable",
                "description": "Временная таблица в конструкторе запроса."
            },
            {
                "name": "КонструкторЗапросаГруппаВременныхТаблиц",
                "name_en": "QueryWizardTempTablesGroup",
                "description": "Группа временных таблиц в конструкторе запроса."
            },
            {
                "name": "КонструкторЗапросаЗаменитьТаблицу",
                "name_en": "QueryWizardReplaceTable",
                "description": "Заменить таблицу в конструкторе запроса."
            },
            {
                "name": "КонструкторЗапросаОписаниеВременнойТаблицы",
                "name_en": "QueryWizardTempTableDescription",
                "description": "Описание временной таблицы в конструкторе запросов."
            },
            {
                "name": "КонструкторЗапросаОтображатьТаблицыИзменений",
                "name_en": "QueryWizardShowChangesTables",
                "description": "Отображать таблицы изменений в конструкторе запроса."
            },
            {
                "name": "КонструкторЗапросаПараметрыТаблицы",
                "name_en": "QueryWizardTableParameters",
                "description": "Параметры таблицы в конструкторе запросов."
            },
            {
                "name": "КонструкторЗапросаСоздатьВложенныйЗапрос",
                "name_en": "QueryWizardCreateNestedQuery",
                "description": "Создать вложенный запрос в конструкторе запроса."
            },
            {
                "name": "КонструкторЗапросаСоздатьЗапросУничтоженияВременнойТаблицы",
                "name_en": "QueryWizardCreateTempTableDropQuery",
                "description": "Создать запрос уничтожения временной таблицы."
            },
            {
                "name": "КонструкторЗапросаСоздатьОписаниеВременнойТаблицы",
                "name_en": "QueryWizardCreateTempTableDescription",
                "description": "Создать описание временной таблицы в конструкторе запросов."
            },
            {
                "name": "КонструкторНастроекКомпоновкиДанных",
                "name_en": "DataCompositionSettingsWizard",
                "description": "Конструктор настроек компоновки данных."
            },
            {
                "name": "Кредит",
                "name_en": "Credit",
                "description": "Кредит."
            },
            {
                "name": "КритерийОтбора",
                "name_en": "FilterCriterion",
                "description": "Критерий отбора."
            },
            {
                "name": "Лупа",
                "name_en": "Magnifier",
                "description": "Лупа."
            },
            {
                "name": "Назад",
                "name_en": "Back",
                "description": "Назад."
            },
            {
                "name": "Найти",
                "name_en": "Find",
                "description": "Найти."
            },
            {
                "name": "НайтиВДереве",
                "name_en": "FindInTree",
                "description": "Найти в дереве."
            },
            {
                "name": "НайтиВСодержании",
                "name_en": "SyncContents",
                "description": "Найти в содержании."
            },
            {
                "name": "НайтиВСписке",
                "name_en": "FindInList",
                "description": "Найти в списке."
            },
            {
                "name": "НайтиПоНомеру",
                "name_en": "FindByNumber",
                "description": "Поиск по номеру."
            },
            {
                "name": "НайтиПредыдущий",
                "name_en": "FindPrevious",
                "description": "Найти предыдущий."
            },
            {
                "name": "НайтиСледующий",
                "name_en": "FindNext",
                "description": "Найти следующий."
            },
            {
                "name": "НастроитьСписок",
                "name_en": "CustomizeList",
                "description": "Настроить список."
            },
            {
                "name": "Настройка",
                "name_en": "Setting",
                "description": "Настройка."
            },
            {
                "name": "НастройкаСписка",
                "name_en": "ListSettings",
                "description": "Настройка списка."
            },
            {
                "name": "НастройкиОтчета",
                "name_en": "ReportSettings",
                "description": "Настройки отчета."
            },
            {
                "name": "НеБеспокоить",
                "name_en": "DontDisturb",
                "description": "Не беспокоить."
            },
            {
                "name": "НеОповещать",
                "name_en": "DontNotify",
                "description": "Не оповещать."
            },
            {
                "name": "НоваяВложеннаяСхемаКомпоновкиДанных",
                "name_en": "DataCompositionNewNestedScheme",
                "description": "Новая вложенная схема компоновки данных."
            },
            {
                "name": "НоваяГруппировкаКомпоновкиДанных",
                "name_en": "DataCompositionNewGroup",
                "description": "Новая группировка компоновки данных."
            },
            {
                "name": "НоваяДиаграммаКомпоновкиДанных",
                "name_en": "DataCompositionNewChart",
                "description": "Новая диаграмма компоновки данных."
            },
            {
                "name": "НоваяТаблицаКомпоновкиДанных",
                "name_en": "DataCompositionNewTable",
                "description": "Новая таблица компоновки данных."
            },
            {
                "name": "НовоеОбсуждение",
                "name_en": "NewConversation",
                "description": "Новое обсуждение."
            },
            {
                "name": "НовоеОкно",
                "name_en": "NewWindow",
                "description": "Новое окно."
            },
            {
                "name": "Обновить",
                "name_en": "Refresh",
                "description": "Обновить текущий список."
            },
            {
                "name": "Обработка",
                "name_en": "DataProcessor",
                "description": "Обработка."
            },
            {
                "name": "Обсуждения",
                "name_en": "Conversations",
                "description": "Обсуждения."
            },
            {
                "name": "Оповещать",
                "name_en": "Notify",
                "description": "Оповещать."
            },
            {
                "name": "Оповещения",
                "name_en": "Notifications",
                "description": "Оповещения."
            },
            {
                "name": "Остановить",
                "name_en": "Stop",
                "description": "Остановить."
            },
            {
                "name": "ОтборИСортировка",
                "name_en": "FilterAndSort",
                "description": "Установить условия и порядок отбора."
            },
            {
                "name": "ОтборКомпоновкиДанных",
                "name_en": "DataCompositionFilter",
                "description": "Наличие отбора компоновки данных."
            },
            {
                "name": "ОтборКомпоновкиДанныхНедоступный",
                "name_en": "DataCompositionFilterDisabled",
                "description": "Недоступен отбор компоновки данных."
            },
            {
                "name": "ОтборПоВиду",
                "name_en": "FilterByType",
                "description": "Отбор по виду документа."
            },
            {
                "name": "ОтборПоТекущемуЗначению",
                "name_en": "FilterByCurrentValue",
                "description": "Отбор по текущему значению."
            },
            {
                "name": "ОтключитьОтбор",
                "name_en": "ClearFilter",
                "description": "Отключить отбор."
            },
            {
                "name": "ОткрытьСАвтономногоСервера",
                "name_en": "OpenFromStandaloneServer",
                "description": "Открыть с автономного сервера."
            },
            {
                "name": "ОткрытьСОсновногоСервера",
                "name_en": "OpenFromMainServer",
                "description": "Открыть с основного сервера."
            },
            {
                "name": "ОткрытьФайл",
                "name_en": "OpenFile",
                "description": "Открыть существующий файл."
            },
            {
                "name": "ОтменаПроведения",
                "name_en": "UndoPosting",
                "description": "Отмена проведения."
            },
            {
                "name": "ОтменитьПоиск",
                "name_en": "CancelSearch",
                "description": "Отменить поиск."
            },
            {
                "name": "ОтправитьСообщение",
                "name_en": "SendMessage",
                "description": "Отправить сообщение."
            },
            {
                "name": "Отчет",
                "name_en": "Report",
                "description": "Отчет."
            },
            {
                "name": "ОформлениеВоcклицательныйЗнак",
                "name_en": "AppearanceExclamationMark",
                "description": "Восклицательный знак."
            },
            {
                "name": "ОформлениеДефисЖелтый",
                "name_en": "AppearanceDashYellow",
                "description": "Желтый дефис."
            },
            {
                "name": "ОформлениеЗвездаЗаполненная",
                "name_en": "AppearanceStarFilled",
                "description": "Заполненная звезда."
            },
            {
                "name": "ОформлениеЗвездаЗаполненнаяНаполовину",
                "name_en": "AppearanceStarHalfFilled",
                "description": "Звезда, заполненная наполовину."
            },
            {
                "name": "ОформлениеЗвездаПустая",
                "name_en": "AppearanceStarEmpty",
                "description": "Незаполненная звезда."
            },
            {
                "name": "ОформлениеЗнакВоcклицательныйЗнак",
                "name_en": "AppearanceExclamationMarkIcon",
                "description": "Восклицательный знак."
            },
            {
                "name": "ОформлениеЗнакКрест",
                "name_en": "AppearanceCrossIcon",
                "description": "Крест."
            },
            {
                "name": "ОформлениеЗнакФлажок",
                "name_en": "AppearanceCheckIcon",
                "description": "Флажок."
            },
            {
                "name": "ОформлениеКвадратыЗаполненные",
                "name_en": "AppearanceBoxesFilled",
                "description": "Четыре заполненных квадрата."
            },
            {
                "name": "ОформлениеКвадратыЗаполненныеДва",
                "name_en": "AppearanceBoxesTwoFilled",
                "description": "Два заполненных квадрата."
            },
            {
                "name": "ОформлениеКвадратыЗаполненныеОдин",
                "name_en": "AppearanceBoxesOneFilled",
                "description": "Один заполненный квадрат."
            },
            {
                "name": "ОформлениеКвадратыЗаполненныеТри",
                "name_en": "AppearanceBoxesThreeFilled",
                "description": "Три заполненных квадрата."
            },
            {
                "name": "ОформлениеКвадратыПустые",
                "name_en": "AppearanceBoxesEmpty",
                "description": "Пустые квадраты."
            },
            {
                "name": "ОформлениеКрест",
                "name_en": "AppearanceCross",
                "description": "Крест."
            },
            {
                "name": "ОформлениеКругЖелтый",
                "name_en": "AppearanceCircleYellow",
                "description": "Желтый круг."
            },
            {
                "name": "ОформлениеКругЗаполненный",
                "name_en": "AppearanceCircleFilled",
                "description": "Заполненный круг."
            },
            {
                "name": "ОформлениеКругЗаполненныйНаДвеЧетверти",
                "name_en": "AppearanceCircleTwoFourthFilled",
                "description": "Круг, заполненный на две четверти."
            },
            {
                "name": "ОформлениеКругЗаполненныйНаОднуЧетверть",
                "name_en": "AppearanceCircleOneFourthFilled",
                "description": "Круг, заполненный на одну четверть."
            },
            {
                "name": "ОформлениеКругЗаполненныйНаТриЧетверти",
                "name_en": "AppearanceCircleThreeFourthFilled",
                "description": "Круг, заполненный на три четверти."
            },
            {
                "name": "ОформлениеКругЗеленый",
                "name_en": "AppearanceCircleGreen",
                "description": "Зеленый круг."
            },
            {
                "name": "ОформлениеКругКрасный",
                "name_en": "AppearanceCircleRed",
                "description": "Красный круг."
            },
            {
                "name": "ОформлениеКругПустой",
                "name_en": "AppearanceCircleEmpty",
                "description": "Пустой круг."
            },
            {
                "name": "ОформлениеКругЧерный",
                "name_en": "AppearanceCircleBlack",
                "description": "Черный круг."
            },
            {
                "name": "ОформлениеСтрелкаВверхЗеленая",
                "name_en": "AppearanceUpArrowGreen",
                "description": "Зеленая стрелка вверх."
            },
            {
                "name": "ОформлениеСтрелкаВверхСерая",
                "name_en": "AppearanceUpArrowGray",
                "description": "Серая стрелка вверх."
            },
            {
                "name": "ОформлениеСтрелкаВнизКрасная",
                "name_en": "AppearanceDownArrowRed",
                "description": "Красная стрелка вниз."
            },
            {
                "name": "ОформлениеСтрелкаВнизСерая",
                "name_en": "AppearanceDownArrowGray",
                "description": "Серая стрелка вниз."
            },
            {
                "name": "ОформлениеСтрелкаВправоЖелтая",
                "name_en": "AppearanceRightArrowYellow",
                "description": "Желтая стрелка вправо."
            },
            {
                "name": "ОформлениеСтрелкаВправоСерая",
                "name_en": "AppearanceRightArrowGray",
                "description": "Серая стрелка вправо."
            },
            {
                "name": "ОформлениеСтрелкаНаклоннаяВверхЖелтая",
                "name_en": "AppearanceUpInclineArrowYellow",
                "description": "Желтая стрелка, наклонная вверх."
            },
            {
                "name": "ОформлениеСтрелкаНаклоннаяВверхЗеленая",
                "name_en": "AppearanceUpInclineArrowGreen",
                "description": "Зеленая стрелка, наклонная вверх."
            },
            {
                "name": "ОформлениеСтрелкаНаклоннаяВверхСерая",
                "name_en": "AppearanceUpInclineArrowGray",
                "description": "Стрелка серая, наклонная вверх."
            },
            {
                "name": "ОформлениеСтрелкаНаклоннаяВнизЖелтая",
                "name_en": "AppearanceDownInclineArrowYellow",
                "description": "Желтая стрелка, наклонная вниз."
            },
            {
                "name": "ОформлениеСтрелкаНаклоннаяВнизКрасная",
                "name_en": "AppearanceDownInclineArrowRed",
                "description": "Красная стрелка, наклонная вниз."
            },
            {
                "name": "ОформлениеСтрелкаНаклоннаяВнизСерая",
                "name_en": "AppearanceDownInclineArrowGray",
                "description": "Стрелка серая, наклонная вниз."
            },
            {
                "name": "ОформлениеТреугольникВверхЗеленый",
                "name_en": "AppearanceUpTriangleGreen",
                "description": "Зеленый треугольник, направленный вверх."
            },
            {
                "name": "ОформлениеТреугольникВнизКрасный",
                "name_en": "AppearanceDownTriangleRed",
                "description": "Красный треугольник, направленный вниз."
            },
            {
                "name": "ОформлениеФлагЖелтый",
                "name_en": "AppearanceFlagYellow",
                "description": "Желтый флаг."
            },
            {
                "name": "ОформлениеФлагЗеленый",
                "name_en": "AppearanceFlagGreen",
                "description": "Зеленый флаг."
            },
            {
                "name": "ОформлениеФлагКрасный",
                "name_en": "AppearanceFlagRed",
                "description": "Красный флаг."
            },
            {
                "name": "ОформлениеФлажок",
                "name_en": "AppearanceCheckBox",
                "description": "Флажок."
            },
            {
                "name": "Очистить",
                "name_en": "Clear",
                "description": "Очистить."
            },
            {
                "name": "Параметры",
                "name_en": "Parameters",
                "description": "Параметры."
            },
            {
                "name": "ПараметрыВыводаКомпоновкиДанных",
                "name_en": "DataCompositionOutputParameters",
                "description": "Содержит параметры вывода компоновки данных."
            },
            {
                "name": "ПараметрыВыводаКомпоновкиДанныхНедоступные",
                "name_en": "DataCompositionOutputParametersDisabled",
                "description": "Недоступны параметры вывода компоновки данных."
            },
            {
                "name": "ПараметрыДанныхКомпоновкиДанных",
                "name_en": "DataCompositionDataParameters",
                "description": "Параметры данных компоновки данных."
            },
            {
                "name": "Переименовать",
                "name_en": "Rename",
                "description": "Переименовать."
            },
            {
                "name": "ПерейтиВперед",
                "name_en": "GoForward",
                "description": "Перейти вперед."
            },
            {
                "name": "ПерейтиККонцу",
                "name_en": "GoToEnd",
                "description": "Перейти к концу."
            },
            {
                "name": "ПерейтиКНачалу",
                "name_en": "GoToBegin",
                "description": "Перейти к началу."
            },
            {
                "name": "ПерейтиНазад",
                "name_en": "GoBack",
                "description": "Перейти назад."
            },
            {
                "name": "ПерейтиПоВнешнейНавигационнойСсылке",
                "name_en": "GotoExternalURL",
                "description": "Перейти по внешней навигационной ссылке."
            },
            {
                "name": "ПерейтиПоНавигационнойСсылке",
                "name_en": "GotoURL",
                "description": "Перейти по навигационной ссылке."
            },
            {
                "name": "ПереключитьАктивность",
                "name_en": "SwitchActivity",
                "description": "Переключить активность."
            },
            {
                "name": "ПереместитьВверх",
                "name_en": "MoveUp",
                "description": "Переместить вверх."
            },
            {
                "name": "ПереместитьВлево",
                "name_en": "MoveLeft",
                "description": "Переместить влево."
            },
            {
                "name": "ПереместитьВниз",
                "name_en": "MoveDown",
                "description": "Переместить вниз."
            },
            {
                "name": "ПереместитьВправо",
                "name_en": "MoveRight",
                "description": "Переместить вправо."
            },
            {
                "name": "ПеренестиЭлемент",
                "name_en": "MoveItem",
                "description": "Перенести элемент в другую группу."
            },
            {
                "name": "Перечисление",
                "name_en": "Enum",
                "description": "Перечисление."
            },
            {
                "name": "Перечитать",
                "name_en": "Reread",
                "description": "Перечитать данные объекта."
            },
            {
                "name": "Печать",
                "name_en": "Print",
                "description": "Печать."
            },
            {
                "name": "ПечатьСразу",
                "name_en": "PrintImmediately",
                "description": "Печать с использованием текущих установок принтера."
            },
            {
                "name": "ПланВидовРасчета",
                "name_en": "ChartOfCalculationTypes",
                "description": "План видов расчета."
            },
            {
                "name": "ПланВидовРасчетаОбъект",
                "name_en": "ChartOfCalculationTypesObject",
                "description": "План видов расчета объект."
            },
            {
                "name": "ПланВидовХарактеристик",
                "name_en": "ChartOfCharacteristicTypes",
                "description": "План видов характеристик."
            },
            {
                "name": "ПланВидовХарактеристикОбъект",
                "name_en": "ChartOfCharacteristicTypesObject",
                "description": "План видов характеристик объект."
            },
            {
                "name": "ПланОбмена",
                "name_en": "ExchangePlan",
                "description": "План обмена."
            },
            {
                "name": "ПланОбменаОбъект",
                "name_en": "ExchangePlanObject",
                "description": "План обмена объект."
            },
            {
                "name": "ПланСчетов",
                "name_en": "ChartOfAccounts",
                "description": "План счетов."
            },
            {
                "name": "ПланСчетовОбъект",
                "name_en": "ChartOfAccountsObject",
                "description": "План счетов объект."
            },
            {
                "name": "ПоискДанных",
                "name_en": "DataSearch",
                "description": "Поиск данных."
            },
            {
                "name": "ПоказатьВСписке",
                "name_en": "ShowInList",
                "description": "Показать в списке."
            },
            {
                "name": "ПоказатьДанные",
                "name_en": "ShowData",
                "description": "Показать данные."
            },
            {
                "name": "ПолеВводаВыбрать",
                "name_en": "InputFieldSelect",
                "description": "Команда поля ввода \"Выбрать\" ."
            },
            {
                "name": "ПолеВводаВыбратьТип",
                "name_en": "InputFieldChooseType",
                "description": "Команда поля ввода \"Выбрать тип\" ."
            },
            {
                "name": "ПолеВводаКалендарь",
                "name_en": "InputFieldCalendar",
                "description": "Команда поля ввода \"Календарь\" ."
            },
            {
                "name": "ПолеВводаКалькулятор",
                "name_en": "InputFieldCalculator",
                "description": "Команда поля ввода \"Калькулятор\" ."
            },
            {
                "name": "ПолеВводаОткрыть",
                "name_en": "InputFieldOpen",
                "description": "Команда поля ввода \"Открыть\" ."
            },
            {
                "name": "ПолеВводаОчистить",
                "name_en": "InputFieldClear",
                "description": "Команда поля ввода \"Очистить\"."
            },
            {
                "name": "ПолучитьНавигационнуюСсылку",
                "name_en": "GetURL",
                "description": "Получить навигационную ссылку."
            },
            {
                "name": "Пользователь",
                "name_en": "User",
                "description": "Пользователь без аутентификации."
            },
            {
                "name": "ПользовательБезНеобходимыхСвойств",
                "name_en": "UserWithoutNecessaryProperties",
                "description": "Пользователь без необходимых свойств."
            },
            {
                "name": "ПользовательИнтеграцииСистемыВзаимодействия",
                "name_en": "CollaborationSystemIntegrationUser",
                "description": "Пользователь интеграции системы взаимодействия."
            },
            {
                "name": "ПользовательСАутентификацией",
                "name_en": "UserWithAuthentication",
                "description": "Пользователь с аутентификацией."
            },
            {
                "name": "ПользовательСистемыВзаимодействия",
                "name_en": "CollaborationSystemUser",
                "description": "Пользователь системы взаимодействия."
            },
            {
                "name": "ПользовательскиеПоляКомпоновкиДанных",
                "name_en": "DataCompositionUserFields",
                "description": "Пользовательские поля компоновки данных."
            },
            {
                "name": "ПоляГруппировкиКомпоновкиДанных",
                "name_en": "DataCompositionGroupFields",
                "description": "Поля группировки компоновки данных."
            },
            {
                "name": "ПоляГруппировкиКомпоновкиДанныхНедоступные",
                "name_en": "DataCompositionGroupFieldsDisabled",
                "description": "Недоступны поля группировки компоновки данных."
            },
            {
                "name": "ПометитьНаУдаление",
                "name_en": "MarkToDelete",
                "description": "Пометить на удаление."
            },
            {
                "name": "ПорядокКомпоновкиДанных",
                "name_en": "DataCompositionOrder",
                "description": "Наличие порядка компоновки данных."
            },
            {
                "name": "ПорядокКомпоновкиДанныхНедоступный",
                "name_en": "DataCompositionOrderDisabled",
                "description": "Недоступен порядок компоновки данных."
            },
            {
                "name": "Предыдущий",
                "name_en": "Previous",
                "description": "Переход к предыдущему."
            },
            {
                "name": "Прикрепить",
                "name_en": "Attach",
                "description": "Прикрепить (вложение)."
            },
            {
                "name": "Провести",
                "name_en": "Post",
                "description": "Провести."
            },
            {
                "name": "ПроизвольноеВыражение",
                "name_en": "CustomExpression",
                "description": "Произвольное выражение."
            },
            {
                "name": "ПросмотрПоВладельцу",
                "name_en": "ViewByOwner",
                "description": "Просмотр по владельцам."
            },
            {
                "name": "ПрочитатьИзменения",
                "name_en": "ReadChanges",
                "description": "Прочитать изменения."
            },
            {
                "name": "РазвернутьВсе",
                "name_en": "ExpandAll",
                "description": "Развернуть все."
            },
            {
                "name": "РегистрБухгалтерии",
                "name_en": "AccountingRegister",
                "description": "Регистр бухгалтерии."
            },
            {
                "name": "РегистрНакопления",
                "name_en": "AccumulationRegister",
                "description": "Регистр накопления."
            },
            {
                "name": "РегистрРасчета",
                "name_en": "CalculationRegister",
                "description": "Регистр расчета."
            },
            {
                "name": "РегистрСведений",
                "name_en": "InformationRegister",
                "description": "Регистр сведений."
            },
            {
                "name": "РегистрСведенийЗапись",
                "name_en": "InformationRegisterRecord",
                "description": "Регистр сведений запись."
            },
            {
                "name": "РегламентноеЗадание",
                "name_en": "ScheduledJob",
                "description": "Регламентное задание."
            },
            {
                "name": "РегламентныеЗадания",
                "name_en": "ScheduledJobs",
                "description": "Регламентные задания."
            },
            {
                "name": "РедактироватьВДиалоге",
                "name_en": "EditInDialog",
                "description": "Редактировать в диалоге."
            },
            {
                "name": "РежимПросмотраСписка",
                "name_en": "ListViewMode",
                "description": "Режим просмотра списка."
            },
            {
                "name": "РежимПросмотраСпискаДерево",
                "name_en": "ListViewModeTree",
                "description": "Режим просмотра списка \"Дерево\"."
            },
            {
                "name": "РежимПросмотраСпискаИерархическийСписок",
                "name_en": "ListViewModeHierarchicalList",
                "description": "Режим просмотра списка \"Иерархический список\"."
            },
            {
                "name": "РежимПросмотраСпискаСписок",
                "name_en": "ListViewModeList",
                "description": "Режим просмотра списка \"Список\"."
            },
            {
                "name": "Реквизит",
                "name_en": "Attribute",
                "description": "Реквизит."
            },
            {
                "name": "Ресурс",
                "name_en": "Resource",
                "description": "Ресурс."
            },
            {
                "name": "СвернутьВсе",
                "name_en": "CollapseAll",
                "description": "Свернуть все."
            },
            {
                "name": "СводнаяДиаграмма",
                "name_en": "PivotChart",
                "description": "Сводная диаграмма."
            },
            {
                "name": "Свойства",
                "name_en": "Properties",
                "description": "Свойства."
            },
            {
                "name": "Сегодня",
                "name_en": "Today",
                "description": "Сегодня."
            },
            {
                "name": "Символ",
                "name_en": "Char",
                "description": "Символ."
            },
            {
                "name": "СинтаксическийКонтроль",
                "name_en": "CheckSyntax",
                "description": "Синтаксический контроль (проверка модуля)."
            },
            {
                "name": "СкопироватьОбъект",
                "name_en": "CloneObject",
                "description": "Создать новый объект копированием."
            },
            {
                "name": "СкопироватьЭлементСписка",
                "name_en": "CloneListItem",
                "description": "Добавить новый элемент копированием текущего."
            },
            {
                "name": "Следующий",
                "name_en": "Next",
                "description": "Переход к следующему."
            },
            {
                "name": "СнятьФлажки",
                "name_en": "UncheckAll",
                "description": "Снять флажки."
            },
            {
                "name": "СоздатьГруппу",
                "name_en": "CreateFolder",
                "description": "Создать группу."
            },
            {
                "name": "СоздатьНачальныйОбраз",
                "name_en": "CreateInitialImage",
                "description": "Создать начальный образ."
            },
            {
                "name": "СоздатьЭлементСписка",
                "name_en": "CreateListItem",
                "description": "Создать элемент списка."
            },
            {
                "name": "Сообщение",
                "name_en": "Message",
                "description": "Сообщение."
            },
            {
                "name": "СортироватьСписок",
                "name_en": "SortList",
                "description": "Сортировать."
            },
            {
                "name": "СортироватьСписокПоВозрастанию",
                "name_en": "SortListAsc",
                "description": "Сортировать по возрастанию."
            },
            {
                "name": "СортироватьСписокПоУбыванию",
                "name_en": "SortListDesc",
                "description": "Сортировать по убыванию."
            },
            {
                "name": "Сортировка",
                "name_en": "Sort",
                "description": "Сортировка."
            },
            {
                "name": "СохранитьЗначения",
                "name_en": "SaveValues",
                "description": "Сохранить набор сохраняемых формой значений."
            },
            {
                "name": "СохранитьНастройкиОтчета",
                "name_en": "SaveReportSettings",
                "description": "Сохранить настройки отчета."
            },
            {
                "name": "СохранитьФайл",
                "name_en": "SaveFile",
                "description": "Сохранить файл."
            },
            {
                "name": "Справка",
                "name_en": "Help",
                "description": "Открыть справку."
            },
            {
                "name": "СправкаФормы",
                "name_en": "FormHelp",
                "description": "Справка формы."
            },
            {
                "name": "Справочник",
                "name_en": "Catalog",
                "description": "Справочник."
            },
            {
                "name": "СправочникОбъект",
                "name_en": "CatalogObject",
                "description": "Справочник объект."
            },
            {
                "name": "СтандартнаяНастройкаКомпоновкиДанных",
                "name_en": "DataCompositionStandardSettings",
                "description": "Стандартная настройка компоновки данных."
            },
            {
                "name": "СтартБизнесПроцесса",
                "name_en": "BusinessProcessStart",
                "description": "Старт бизнес-процесса."
            },
            {
                "name": "СформироватьОтчет",
                "name_en": "GenerateReport",
                "description": "Сформировать отчет."
            },
            {
                "name": "ТабличныйДокументВставитьПримечание",
                "name_en": "SpreadsheetInsertComment",
                "description": "Вставить примечание для ячейки табличного документа."
            },
            {
                "name": "ТабличныйДокументВставитьРазрывСтраницы",
                "name_en": "SpreadsheetInsertPageBreak",
                "description": "Вставить разрыв страницы табличного документа."
            },
            {
                "name": "ТабличныйДокументОтображатьГруппировки",
                "name_en": "SpreadsheetShowGroups",
                "description": "Включить/выключить отображение групп табличного документа."
            },
            {
                "name": "ТабличныйДокументОтображатьЗаголовки",
                "name_en": "SpreadsheetShowHeaders",
                "description": "Изменить режим отображения заголовков табличного документа."
            },
            {
                "name": "ТабличныйДокументОтображатьПримечания",
                "name_en": "SpreadsheetShowComments",
                "description": "Необходимость отображения примечаний для ячеек табличного документа."
            },
            {
                "name": "ТабличныйДокументОтображатьСетку",
                "name_en": "SpreadsheetShowGrid",
                "description": "Изменить режим отображения сетки табличного документа."
            },
            {
                "name": "ТабличныйДокументТолькоПросмотр",
                "name_en": "SpreadsheetReadOnly",
                "description": "Изменить режим \"Только просмотр\" табличного документа."
            },
            {
                "name": "ТабличныйДокументУдалитьПримечание",
                "name_en": "SpreadsheetDeleteComment",
                "description": "Удалить примечание табличного документа."
            },
            {
                "name": "ТабличныйДокументУдалитьРазрывСтраницы",
                "name_en": "SpreadsheetDeletePageBreak",
                "description": "Удалить разрыв страницы табличного документа."
            },
            {
                "name": "УвеличитьМасштаб",
                "name_en": "ZoomIn",
                "description": "Увеличить масштаб."
            },
            {
                "name": "Удалить",
                "name_en": "Delete",
                "description": "Удалить."
            },
            {
                "name": "УдалитьНепосредственно",
                "name_en": "DeleteDirectly",
                "description": "Удалить непосредственно."
            },
            {
                "name": "УменьшитьМасштаб",
                "name_en": "ZoomOut",
                "description": "Уменьшить масштаб."
            },
            {
                "name": "УправлениеПоиском",
                "name_en": "SearchControl",
                "description": "Управление поиском."
            },
            {
                "name": "УровеньВверх",
                "name_en": "LevelUp",
                "description": "Перейти на уровень вверх."
            },
            {
                "name": "УровеньВниз",
                "name_en": "LevelDown",
                "description": "Перейти на уровень вниз."
            },
            {
                "name": "УсловноеОформлениеКомпоновкиДанных",
                "name_en": "DataCompositionConditionalAppearance",
                "description": "Содержит условное оформление компоновки данных."
            },
            {
                "name": "УсловноеОформлениеКомпоновкиДанныхНедоступное",
                "name_en": "DataCompositionConditionalAppearanceDisabled",
                "description": "Недоступно условное оформление компоновки данных."
            },
            {
                "name": "УстановитьВремя",
                "name_en": "SetTime",
                "description": "Установка времени документа."
            },
            {
                "name": "УстановитьИнтервал",
                "name_en": "SetDateInterval",
                "description": "Установить интервал дат."
            },
            {
                "name": "УстановитьФлажки",
                "name_en": "CheckAll",
                "description": "Установить флажки."
            },
            {
                "name": "Форма",
                "name_en": "Form",
                "description": "Форма."
            },
            {
                "name": "ХранилищеНастроек",
                "name_en": "SettingsStorage",
                "description": "Хранилище настроек."
            }
        ]
    },
    {
        "name": "ШрифтыСтиля",
        "name_en": "StyleFonts",
        "description": "Определяет набор шрифтов, используемых в стиле. Значения этого набора имеют тип",
        "values": [
            {
                "name": "КрупныйШрифтТекста",
                "name_en": "LargeTextFont",
                "description": "Крупный шрифт текста."
            },
            {
                "name": "МелкийШрифтТекста",
                "name_en": "SmallTextFont",
                "description": "Мелкий шрифт текста."
            },
            {
                "name": "ОбычныйШрифтТекста",
                "name_en": "NormalTextFont",
                "description": "Обычный шрифт текста."
            },
            {
                "name": "ОченьКрупныйШрифтТекста",
                "name_en": "ExtraLargeTextFont",
                "description": "Очень крупный шрифт текста."
            },
            {
                "name": "ШрифтТекста",
                "name_en": "TextFont",
                "description": "Указывает шрифт текста."
            }
        ]
    },
    {
        "name": "ПоложениеЗаголовкаЭлементаФормы",
        "name_en": "FormItemTitleLocation",
        "description": "Содержит варианты положения подчиненного элемента относительно элемента формы. В зависимости от вида элемента и его размещения, не все варианты могут отрабатываться.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Автоматическое определение расположения заголовка в зависимости от вида элемента. Положение заголовка относительно поля зависит от размеров элемента. Лево, если элемент однострочный и помещается по ширине. Верх, если элемент многострочный или не помещается по ширине."
            },
            {
                "name": "Верх",
                "name_en": "Top",
                "description": "Расположение заголовка сверху от элемента."
            },
            {
                "name": "Лево",
                "name_en": "Left",
                "description": "Расположение заголовка слева от элемента."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Заголовок к элементу не выводить."
            },
            {
                "name": "Низ",
                "name_en": "Bottom",
                "description": "Расположение заголовка снизу от элемента."
            },
            {
                "name": "Право",
                "name_en": "Right",
                "description": "Расположение заголовка справа от элемента."
            }
        ]
    },
    {
        "name": "РежимОтображенияВыделения",
        "name_en": "SelectionShowMode",
        "description": "Содержит варианты режима отображения выделения элемента.",
        "values": [
            {
                "name": "Всегда",
                "name_en": "Always",
                "description": "Всегда."
            },
            {
                "name": "НеОтображать",
                "name_en": "DontShow",
                "description": "Выделение элементов не отображается."
            },
            {
                "name": "ПриАктивности",
                "name_en": "WhenActive",
                "description": "Когда элемент активен."
            },
            {
                "name": "ПриВыделенииНесколькихЯчеек",
                "name_en": "WhenMultipleCellsSelected",
                "description": "Выделение отображается только когда выбрано больше одной ячейки."
            },
            {
                "name": "ПриВыделенииНесколькихЯчеекПриАктивности",
                "name_en": "WhenMultipleCellsSelectedWhenActive",
                "description": "Выделение отображается только, если элемент активен и если выбрано больше одной ячейки."
            }
        ]
    },
    {
        "name": "ГоризонтальноеПоложениеЭлемента",
        "name_en": "ItemHorizontalLocation",
        "description": "Содержит варианты горизонтального положение элемента управления.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Горизонтальное выравнивание текста элемента управления будет определяться автоматически, исходя из типа отображаемого значения. Числовые значения будут прижиматься к правой границе, остальные - к левой."
            },
            {
                "name": "Лево",
                "name_en": "Left",
                "description": "Выравнивание текста по левому краю."
            },
            {
                "name": "Право",
                "name_en": "Right",
                "description": "Выравнивание текста по правому краю."
            },
            {
                "name": "Центр",
                "name_en": "Center",
                "description": "Выравнивание текста по центру."
            }
        ]
    },
    {
        "name": "ГруппировкаКолонок",
        "name_en": "ColumnsGroup",
        "description": "Содержит варианты группировки колонок в группе вида",
        "values": [
            {
                "name": "Вертикальная",
                "name_en": "Vertical",
                "description": "Вертикальная группировка колонок."
            },
            {
                "name": "ВЯчейке",
                "name_en": "InCell",
                "description": "Группировка колонок в одной ячейке. При этом варианте текстовые значения отображаются через запятую. Редактирование возможно только для первого значения. Помимо текстовых возможно отображение одного значения в виде флажка и одного в виде картинки."
            },
            {
                "name": "Горизонтальная",
                "name_en": "Horizontal",
                "description": "Горизонтальная группировка колонок."
            }
        ]
    },
    {
        "name": "ОтображениеОбычнойГруппы",
        "name_en": "UsualGroupRepresentation",
        "description": "Содержит варианты отображения группы формы клиентского приложения вида",
        "values": [
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Группа не имеет специального визуального представления."
            },
            {
                "name": "ОбычноеВыделение",
                "name_en": "NormalSeparation",
                "description": "Обычное (среднее) выделение."
            },
            {
                "name": "СильноеВыделение",
                "name_en": "StrongSeparation",
                "description": "Сильное выделение."
            },
            {
                "name": "СлабоеВыделение",
                "name_en": "WeakSeparation",
                "description": "Слабое выделение."
            }
        ]
    },
    {
        "name": "ОтображениеКнопки",
        "name_en": "ButtonRepresentation",
        "description": "Содержит варианты отображения кнопки в форме клиентского приложения.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Автоматическое определение представления кнопки. Выбор представления зависит от заведенных для команды данных (наличие текста, картинки) и от вида и размещения кнопки. Например, если есть и текст, и картинка, то при размещении в меню она представляется в виде картинки, а при размещении в подменю - в виде текста и картинки.  Также учитывается значение свойства Отображение."
            },
            {
                "name": "Картинка",
                "name_en": "Picture",
                "description": "Представление кнопки в виде картинки."
            },
            {
                "name": "КартинкаИТекст",
                "name_en": "PictureAndText",
                "description": "Представление кнопки в виде картинки и текста."
            },
            {
                "name": "Текст",
                "name_en": "Text",
                "description": "Представление кнопки в виде текста."
            }
        ]
    },
    {
        "name": "ВидКнопкиФормы",
        "name_en": "FormButtonType",
        "description": "Содержит варианты видов кнопки формы клиентского приложения.",
        "values": [
            {
                "name": "Гиперссылка",
                "name_en": "Hyperlink",
                "description": "Гиперссылка. Данный вид недоступен для кнопок расположенных в командной панели или в группах, расположенных в командной панели."
            },
            {
                "name": "ГиперссылкаКоманднойПанели",
                "name_en": "CommandBarHyperlink",
                "description": "Гиперссылка комадной панели. Данный вид имеют кнопки, расположенные в командной панели или в группах, расположенных в командной панели."
            },
            {
                "name": "КнопкаКоманднойПанели",
                "name_en": "CommandBarButton",
                "description": "Кнопка командной панели. Данный вид имеют кнопки, расположенные в командной панели или в группах, расположенных в командной панели."
            },
            {
                "name": "ОбычнаяКнопка",
                "name_en": "UsualButton",
                "description": "Стандартная кнопка формы. Данный вид недоступен для кнопок, расположенных в командной панели или в группах, расположенных в командной панели."
            }
        ]
    },
    {
        "name": "ВидПоляФормы",
        "name_en": "FormFieldType",
        "description": "Содержит вид поля формы клиентского приложения.",
        "values": [
            {
                "name": "ПолеHTMLДокумента",
                "name_en": "HTMLDocumentField",
                "description": "Поле представляется в виде HTML-документа.  Данный вид недоступен для полей, расположенных в таблице."
            },
            {
                "name": "ПолеВвода",
                "name_en": "InputField",
                "description": "Поле представляется в виде поля ввода."
            },
            {
                "name": "ПолеГеографическойСхемы",
                "name_en": "GeographicalSchemaField",
                "description": "Поле представляется в виде поля географической схемы.  Данный вид недоступен для полей, расположенных в таблице."
            },
            {
                "name": "ПолеГрафическойСхемы",
                "name_en": "GraphicalSchemaField",
                "description": "Поле представляется в виде поля графической схемы. Данный вид недоступен для полей, расположенных в таблице."
            },
            {
                "name": "ПолеДендрограммы",
                "name_en": "DendrogramField",
                "description": "Поле представляется в виде дендрограммы. Данный вид недоступен для полей, расположенных в таблице."
            },
            {
                "name": "ПолеДиаграммы",
                "name_en": "ChartField",
                "description": "Поле представляется в виде диаграммы. Данный вид недоступен для полей, расположенных в таблице."
            },
            {
                "name": "ПолеДиаграммыГанта",
                "name_en": "GanttChartField",
                "description": "Поле представляется в виде диаграммы Ганта. Данный вид недоступен для полей, расположенных в таблице."
            },
            {
                "name": "ПолеИндикатора",
                "name_en": "ProgressBarField",
                "description": "Поле представляется в виде индикатора. Данный вид недоступен для полей, расположенных в таблице."
            },
            {
                "name": "ПолеКалендаря",
                "name_en": "CalendarField",
                "description": "Поле представляется в виде календаря. Данный вид недоступен для полей, расположенных в таблице."
            },
            {
                "name": "ПолеКартинки",
                "name_en": "PictureField",
                "description": "Поле представляется в виде картинки."
            },
            {
                "name": "ПолеНадписи",
                "name_en": "LabelField",
                "description": "Поле представляется в виде статического текста."
            },
            {
                "name": "ПолеПереключателя",
                "name_en": "RadioButtonField",
                "description": "Поле представляется в виде группы переключателей. Поле данного вида не может быть расположено в таблице. В данных поля должен быть заполнен список значений, который и определит количество переключателей."
            },
            {
                "name": "ПолеПериода",
                "name_en": "PeriodField",
                "description": "Поле для выбора периода. Данный вид недоступен для полей, расположенных в таблице."
            },
            {
                "name": "ПолеПланировщика",
                "name_en": "PlannerField",
                "description": "Поле представляется в виде планировщика."
            },
            {
                "name": "ПолеПолосыРегулирования",
                "name_en": "TrackBarField",
                "description": "Поле представляется в виде полосы регулирования. Данный вид недоступен для полей, расположенных в таблице."
            },
            {
                "name": "ПолеТабличногоДокумента",
                "name_en": "SpreadsheetDocumentField",
                "description": "Поле представляется в виде табличного документа. Данный вид недоступен для полей, расположенных в таблице."
            },
            {
                "name": "ПолеТекстовогоДокумента",
                "name_en": "TextDocumentField",
                "description": "Поле представляется в виде текстового документа. Данный вид недоступен для полей, расположенных в таблице."
            },
            {
                "name": "ПолеФлажка",
                "name_en": "CheckBoxField",
                "description": "Поле представляется в виде флажка."
            },
            {
                "name": "ПолеФорматированногоДокумента",
                "name_en": "FormattedDocumentField",
                "description": "Поле представляется в виде поля форматированного документа.  Данный вид недоступен для полей, расположенных в таблице."
            }
        ]
    },
    {
        "name": "ВидГруппыФормы",
        "name_en": "FormGroupType",
        "description": "Содержит варианты видов групп формы клиентского приложения.",
        "values": [
            {
                "name": "ГруппаКнопок",
                "name_en": "ButtonGroup",
                "description": "Группа кнопок. Группа данного вида может содержать кнопки и группы видов Подменю и ГруппаКнопок."
            },
            {
                "name": "ГруппаКолонок",
                "name_en": "ColumnGroup",
                "description": "Группа колонок. Группа данного вида может содержать поля и группы вида ГруппаКнопок."
            },
            {
                "name": "КоманднаяПанель",
                "name_en": "CommandBar",
                "description": "Командная панель. Группа данного вида может содержать кнопки и группы видов Подменю и ГруппаКнопок."
            },
            {
                "name": "КонтекстноеМеню",
                "name_en": "ContextMenu",
                "description": "Содержит контекстное меню элемента.  Группа данного вида может содержать кнопки и группы видов ГруппаКнопок и Подменю."
            },
            {
                "name": "ОбычнаяГруппа",
                "name_en": "UsualGroup",
                "description": "Обычная группа. Группа данного вида может содержать поля, таблицы, кнопки и группы видов ОбычнаяГруппа, КоманднаяПанель, Страницы."
            },
            {
                "name": "Подменю",
                "name_en": "Popup",
                "description": "Подменю командной панели. Группа данного вида может содержать кнопки и группы видов Подменю и ГруппаКнопок."
            },
            {
                "name": "Страница",
                "name_en": "Page",
                "description": "Страница панели. Группа данного вида может содержать тот же набор элементов, что и группа вида ОбычнаяГруппа."
            },
            {
                "name": "Страницы",
                "name_en": "Pages",
                "description": "Панель со страницами. Группа данного вида может содержать группы вида Страница."
            }
        ]
    },
    {
        "name": "ОтображениеТаблицы",
        "name_en": "TableRepresentation",
        "description": "Содержит варианты отображения данных в таблице формы клиентского приложения.",
        "values": [
            {
                "name": "Дерево",
                "name_en": "Tree",
                "description": "Представление в виде дерева."
            },
            {
                "name": "ИерархическийСписок",
                "name_en": "HierarchicalList",
                "description": "Представление в виде иерархического списка."
            },
            {
                "name": "Список",
                "name_en": "List",
                "description": "Представление в виде списка."
            }
        ]
    },
    {
        "name": "РежимВводаСтрокТаблицы",
        "name_en": "TableRowInputMode",
        "description": "Содержит варианты режимов ввода строк в таблице формы клиентского приложения.",
        "values": [
            {
                "name": "ВКонецОкна",
                "name_en": "EndOfWindow",
                "description": "Новая строка будет вводиться в конец видимого окна."
            },
            {
                "name": "ВКонецСписка",
                "name_en": "EndOfList",
                "description": "Новая строка будет вводиться в конце списка."
            },
            {
                "name": "ПередТекущейСтрокой",
                "name_en": "BeforeCurrentRow",
                "description": "Новая строка будет вводиться перед текущей строкой."
            },
            {
                "name": "ПослеТекущейСтроки",
                "name_en": "AfterCurrentRow",
                "description": "Новая строка будет вводиться после текущей строки."
            }
        ]
    },
    {
        "name": "РежимВыделенияТаблицы",
        "name_en": "TableSelectionMode",
        "description": "Содержит варианты выделения строк таблицы формы клиентского приложения.",
        "values": [
            {
                "name": "Множественный",
                "name_en": "MultiRow",
                "description": "Разрешено выделение нескольких строк."
            },
            {
                "name": "Одиночный",
                "name_en": "SingleRow",
                "description": "Разрешено выделение только одной строки."
            }
        ]
    },
    {
        "name": "РежимВыделенияСтрокиТаблицы",
        "name_en": "TableRowSelectionMode",
        "description": "Содержит варианты режима выделения строки таблицы формы клиентского приложения.",
        "values": [
            {
                "name": "Строка",
                "name_en": "Row",
                "description": "Выделение строки целиком."
            },
            {
                "name": "Ячейка",
                "name_en": "Cell",
                "description": "Выделение активной ячейки."
            }
        ]
    },
    {
        "name": "ГруппыИЭлементы",
        "name_en": "FoldersAndItems",
        "description": "Содержит варианты выбора объектов для иерархических данных с иерархией групп и элементов.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Автоматическое определение."
            },
            {
                "name": "Группы",
                "name_en": "Folders",
                "description": "Только группы."
            },
            {
                "name": "ГруппыИЭлементы",
                "name_en": "FoldersAndItems",
                "description": "Группы и элементы."
            },
            {
                "name": "Элементы",
                "name_en": "Items",
                "description": "Только элементы."
            }
        ]
    },
    {
        "name": "ОриентацияЭлементаФормы",
        "name_en": "FormItemOrientation",
        "description": "Содержит варианты ориентации элемента формы.",
        "values": [
            {
                "name": "Вертикально",
                "name_en": "Vertical",
                "description": "Элемент управления расположен вертикально."
            },
            {
                "name": "Горизонтально",
                "name_en": "Horizontal",
                "description": "Элемент управления расположен горизонтально."
            }
        ]
    },
    {
        "name": "ОтображениеСтраницФормы",
        "name_en": "FormPagesRepresentation",
        "description": "Содержит варианты отображения закладок страниц в панели в форме клиентского приложения.",
        "values": [
            {
                "name": "ЗакладкиСверху",
                "name_en": "TabsOnTop",
                "description": "Отображать закладки сверху панели."
            },
            {
                "name": "ЗакладкиСлеваГоризонтально",
                "name_en": "TabsOnLeftHorizontal",
                "description": "Отображать закладки слева."
            },
            {
                "name": "ЗакладкиСнизу",
                "name_en": "TabsOnBottom",
                "description": "Отображать закладки снизу панели."
            },
            {
                "name": "ЗакладкиСправаГоризонтально",
                "name_en": "TabsOnRightHorizontal",
                "description": "Отображать закладки справа."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Не отображать закладки."
            },
            {
                "name": "Пролистывание",
                "name_en": "Swipe",
                "description": "Отображать страницы в режиме перелистывания."
            }
        ]
    },
    {
        "name": "РежимОткрытияОкнаФормы",
        "name_en": "FormWindowOpeningMode",
        "description": "Содержит варианты открытия формы клиентского приложения.",
        "values": [
            {
                "name": "БлокироватьВеcьИнтерфейс",
                "name_en": "LockWholeInterface",
                "description": "Блокировать весь интерфейс. При этом блокируется работа всех остальных открытых окон приложения, включая главное окно."
            },
            {
                "name": "БлокироватьОкноВладельца",
                "name_en": "LockOwnerWindow",
                "description": "Открывать поверх владельца. При открытии в таком режиме блокируется работа окна-владельца. Блокируемое окно определяется следующим образом:  - Если в свойстве ВладелецФормы задана форма и эта форма не закрыта, блокируется окно этой формы;  - Если в свойстве ВладелецФормы задан элемент формы и эта форма не закрыта, то блокируется окно формы, которому принадлежит этот элемент;  - В остальных случаях (если в свойстве ВладелецФормы задано значение Неопределено или форма владельца закрыта) блокируется окно, которое является текущим окном клиентского приложения на момент открытия формы."
            },
            {
                "name": "Независимый",
                "name_en": "Independent",
                "description": "Обычный режим открытия формы, при котором возможны действия пользователя в окне-владельце до закрытия формы:  - В интерфейсе \"В отдельных окнах\" открывается отдельное окно.  - В интерфейсах \"В закладках\" и \"Такси\" форма открывается в рабочей области основного окна."
            }
        ]
    },
    {
        "name": "СохранениеДанныхФормыВНастройках",
        "name_en": "SaveFormDataInSettings",
        "description": "Содержит варианты сохранения данных формы в настройках.",
        "values": [
            {
                "name": "ИспользоватьСписок",
                "name_en": "UseList",
                "description": "Использовать список сохраняемых данных."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Не использовать сохранение."
            }
        ]
    },
    {
        "name": "АвтоматическоеСохранениеДанныхФормыВНастройках",
        "name_en": "AutoSaveFormDataInSettings",
        "description": "Содержит варианты автоматического сохранения данных формы в настройках.",
        "values": [
            {
                "name": "Использовать",
                "name_en": "Use",
                "description": "Использовать автоматическое сохранение."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Не использовать автоматическое сохранение."
            }
        ]
    },
    {
        "name": "ГруппировкаПодчиненныхЭлементовФормы",
        "name_en": "ChildFormItemsGroup",
        "description": "Содержит варианты группировки подчиненных элементов в обычной группе и странице.",
        "values": [
            {
                "name": "Вертикальная",
                "name_en": "Vertical",
                "description": "Вертикальная группировка."
            },
            {
                "name": "Горизонтальная",
                "name_en": "Horizontal",
                "description": "Горизонтальная группировка."
            },
            {
                "name": "ГоризонтальнаяВсегда",
                "name_en": "AlwaysHorizontal",
                "description": "Горизонтальная группировка независимо от наличия достаточного места по ширине формы. Если места недостаточно:  - В версии для персонального компьютера на форме отображается полоса прокрутки.  - На мобильном устройстве часть содержимого становится недоступна."
            },
            {
                "name": "ГоризонтальнаяЕслиВозможно",
                "name_en": "HorizontalIfPossible",
                "description": "Горизонтальная группировка при наличии достаточного места по ширине формы. В противном случае - вертикальная группировка."
            }
        ]
    },
    {
        "name": "ШиринаПодчиненныхЭлементовФормы",
        "name_en": "ChildFormItemsWidth",
        "description": "Содержит варианты относительной ширины дочерних элементов формы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Ширина зависит от данных."
            },
            {
                "name": "ЛевыйОченьУзкий",
                "name_en": "LeftNarrowest",
                "description": "Левый элемент в два раза уже остальных."
            },
            {
                "name": "ЛевыйОченьШирокий",
                "name_en": "LeftWidest",
                "description": "Левый элемент в два раза шире остальных."
            },
            {
                "name": "ЛевыйУзкий",
                "name_en": "LeftNarrow",
                "description": "Левый элемент уже остальных."
            },
            {
                "name": "ЛевыйШирокий",
                "name_en": "LeftWide",
                "description": "Левый элемент шире остальных."
            },
            {
                "name": "Одинаковая",
                "name_en": "Equal",
                "description": "Одинаковая ширина."
            }
        ]
    },
    {
        "name": "ПоложениеКоманднойПанелиЭлементаФормы",
        "name_en": "FormItemCommandBarLabelLocation",
        "description": "Содержит варианты положения автоматической командной панели элемента формы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Автоматически подбирать положение."
            },
            {
                "name": "Верх",
                "name_en": "Top",
                "description": "Размещать сверху от элемента."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Не размещать автоматическую командную панель."
            },
            {
                "name": "Низ",
                "name_en": "Bottom",
                "description": "Размещать снизу от элемента."
            }
        ]
    },
    {
        "name": "ВидИзмененияДанных",
        "name_en": "DataChangeType",
        "description": "Содержит варианты видов изменения данных.",
        "values": [
            {
                "name": "Добавление",
                "name_en": "Create",
                "description": "Добавление."
            },
            {
                "name": "Изменение",
                "name_en": "Update",
                "description": "Изменение."
            },
            {
                "name": "Удаление",
                "name_en": "Delete",
                "description": "Удаление."
            }
        ]
    },
    {
        "name": "ПоложениеКоманднойПанелиФормы",
        "name_en": "FormCommandBarLabelLocation",
        "description": "Содержит варианты положений автоматической командной панели элемента.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Автоматически определять положение."
            },
            {
                "name": "Верх",
                "name_en": "Top",
                "description": "Размещать командную панель сверху формы."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Не размещать командную панель."
            },
            {
                "name": "Низ",
                "name_en": "Bottom",
                "description": "Размещать командную панель снизу формы."
            }
        ]
    },
    {
        "name": "ОтображениеПредупрежденияПриРедактировании",
        "name_en": "WarningOnEditRepresentation",
        "description": "Содержит варианты отображения предупреждения перед началом редактирования поля формы клиентского приложения.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Определяет режим отображения предупреждения из метаданных. Предупреждение отображается для полей с автонумерацией."
            },
            {
                "name": "НеОтображать",
                "name_en": "DontShow",
                "description": "Не отображать предупреждение."
            },
            {
                "name": "Отображать",
                "name_en": "Show",
                "description": "Отображать предупреждение."
            }
        ]
    },
    {
        "name": "ВидДекорацииФормы",
        "name_en": "FormDecorationType",
        "description": "Содержит виды декорации формы клиентского приложения.",
        "values": [
            {
                "name": "Картинка",
                "name_en": "Picture",
                "description": "Декорация представляет собой картинку."
            },
            {
                "name": "Надпись",
                "name_en": "Label",
                "description": "Декорация представляет собой надпись."
            }
        ]
    },
    {
        "name": "ВертикальноеПоложениеЭлемента",
        "name_en": "ItemVerticalAlign",
        "description": "Содержит варианты вертикального положения элемента.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Вертикальное положение определяется автоматически. Для однострочной декорации будет использовано значение Центр. Для многострочной - Верх."
            },
            {
                "name": "Верх",
                "name_en": "Top",
                "description": "Верх."
            },
            {
                "name": "Низ",
                "name_en": "Bottom",
                "description": "Низ."
            },
            {
                "name": "Центр",
                "name_en": "Center",
                "description": "Центр."
            }
        ]
    },
    {
        "name": "КатегорияГруппыКоманд",
        "name_en": "CommandGroupCategory",
        "description": "Определяет размещение группы команд в основном или вспомогательном окне приложения.",
        "values": [
            {
                "name": "КоманднаяПанельФормы",
                "name_en": "FormCommandBar",
                "description": "Группа команд размещается в командной панели формы."
            },
            {
                "name": "ПанельДействий",
                "name_en": "ActionsPanel",
                "description": "Группа команд размещается в панели действий основного окна приложения."
            },
            {
                "name": "ПанельНавигации",
                "name_en": "NavigationPanel",
                "description": "Группа команд размещается в панели навигации основного окна приложения."
            },
            {
                "name": "ПанельНавигацииФормы",
                "name_en": "FormNavigationPanel",
                "description": "Группа команд размещается в панели навигации вспомогательного окна приложения, в котором открыта форма."
            }
        ]
    },
    {
        "name": "СтандартнаяГруппаКоманд",
        "name_en": "StandardCommandsGroup",
        "description": "Описывает возможные стандартные типы группы команд.",
        "values": [
            {
                "name": "КоманднаяПанельФормыВажное",
                "name_en": "FormCommandBarImportant",
                "description": "Команда принадлежит группе \"Важное\" командной панели формы."
            },
            {
                "name": "КоманднаяПанельФормыСоздатьНаОсновании",
                "name_en": "FormCommandBarCreateBasedOn",
                "description": "Команда принадлежит группе \"Создать на основании\" командной панели формы."
            },
            {
                "name": "ПанельДействийОтчеты",
                "name_en": "ActionsPanelReports",
                "description": "Команда принадлежит группе \"Отчеты\" панели действий."
            },
            {
                "name": "ПанельДействийСервис",
                "name_en": "ActionsPanelTools",
                "description": "Команда принадлежит группе \"Сервис\" панели действий."
            },
            {
                "name": "ПанельДействийСоздать",
                "name_en": "ActionsPanelCreate",
                "description": "Команда принадлежит группе \"Создать\" панели действий."
            },
            {
                "name": "ПанельНавигацииВажное",
                "name_en": "NavigationPanelImportant",
                "description": "Команда принадлежит группе \"Важное\" панели навигации."
            },
            {
                "name": "ПанельНавигацииОбычное",
                "name_en": "NavigationPanelOrdinary",
                "description": "Команда принадлежит группе \"Обычное\" панели навигации."
            },
            {
                "name": "ПанельНавигацииСмТакже",
                "name_en": "NavigationPanelSeeAlso",
                "description": "Команда принадлежит группе \"См. также\" панели навигации."
            },
            {
                "name": "ПанельНавигацииФормыВажное",
                "name_en": "FormNavigationPanelImportant",
                "description": "Команда принадлежит группе \"Важное\" навигационной панели формы."
            },
            {
                "name": "ПанельНавигацииФормыПерейти",
                "name_en": "FormNavigationPanelGoTo",
                "description": "Команда принадлежит группе \"Перейти\" навигационной панели формы."
            },
            {
                "name": "ПанельНавигацииФормыСмТакже",
                "name_en": "FormNavigationPanelSeeAlso",
                "description": "Команда принадлежит группе \"См. также\" навигационной панели формы."
            }
        ]
    },
    {
        "name": "ВариантСостоянияОкна",
        "name_en": "WindowStateVariant",
        "description": "Содержит варианты состояния окна формы.",
        "values": [
            {
                "name": "Обычное",
                "name_en": "Normal",
                "description": "Обычное: окно располагается только внутри рабочей области программы."
            },
            {
                "name": "Прикрепленное",
                "name_en": "Docked",
                "description": "Прикрепляемое: окно может \"прикрепиться\" к границам рабочей области программы."
            },
            {
                "name": "Прячущееся",
                "name_en": "Autohide",
                "description": "Автоматически скрывающееся окно."
            },
            {
                "name": "Свободное",
                "name_en": "Float",
                "description": "Свободное расположение: окно может свободно перемещаться по всему экрану (не только внутри рабочей области программы)."
            }
        ]
    },
    {
        "name": "РежимСглаживанияИндикатора",
        "name_en": "ProgressBarSmoothingMode",
        "description": "Содержит варианты стилей заполнения индикатора. Используется для определения свойства",
        "values": [
            {
                "name": "Плавный",
                "name_en": "Smooth",
                "description": "Плавное заполнение."
            },
            {
                "name": "Прерывистый",
                "name_en": "Broken",
                "description": "Прерывистое заполнение - прямоугольниками."
            },
            {
                "name": "ПрерывистыйНаклонный",
                "name_en": "BrokenTilt",
                "description": "Прерывистое заполнение - наклонными параллелограммами."
            }
        ]
    },
    {
        "name": "ВариантСпособаОтображенияОкна",
        "name_en": "WindowAppearanceModeVariant",
        "description": "Содержит варианты начального отображения окна формы.",
        "values": [
            {
                "name": "Максимизированное",
                "name_en": "Maximized",
                "description": "Форма открывается в максимизированном виде."
            },
            {
                "name": "Минимизированное",
                "name_en": "Minimized",
                "description": "Форма открывается в минимизированном виде."
            },
            {
                "name": "Нормальное",
                "name_en": "Normal",
                "description": "Форма открывается в нормальном виде."
            }
        ]
    },
    {
        "name": "ВариантПоложенияОкна",
        "name_en": "WindowLocationVariant",
        "description": "Содержит варианты начального положения окна в обычном или свободном состояниях.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Система подберет положение окна самостоятельно."
            },
            {
                "name": "НеПерекрыватьВладельца",
                "name_en": "DontOverlapOwner",
                "description": "При открытии окно не перекроет окно владельца. При условии, что целиком поместится в пределах родительского окна."
            },
            {
                "name": "Центрировать",
                "name_en": "Center",
                "description": "Окно будет расположено по центру родительского окна."
            }
        ]
    },
    {
        "name": "ВариантПрикрепленияОкна",
        "name_en": "WindowDockVariant",
        "description": "Содержит варианты прикрепления окна. Используется для определения свойства",
        "values": [
            {
                "name": "Верх",
                "name_en": "Top",
                "description": "Прикреплять сверху."
            },
            {
                "name": "Лево",
                "name_en": "Left",
                "description": "Прикреплять слева."
            },
            {
                "name": "Низ",
                "name_en": "Bottom",
                "description": "Прикреплять снизу."
            },
            {
                "name": "Право",
                "name_en": "Right",
                "description": "Прикреплять справа."
            }
        ]
    },
    {
        "name": "ИзменениеРазмераОкна",
        "name_en": "WindowSizeChange",
        "description": "Содержит варианты изменения размеров окна формы.",
        "values": [
            {
                "name": "Изменять",
                "name_en": "Change",
                "description": "Разрешить изменения размеров окна формы."
            },
            {
                "name": "НеИзменять",
                "name_en": "DontChange",
                "description": "Запретить изменения размеров окна формы."
            }
        ]
    },
    {
        "name": "ИзменениеСпособаОтображенияОкна",
        "name_en": "WindowAppearanceModeChange",
        "description": "Содержит варианты изменения способа отображения окна.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Изменение способа отображения зависит от состояния окна. Если у формы установлено состояние окна Обычное, то изменять способ отображения можно, если установлено состояние окна Свободное, то нельзя."
            },
            {
                "name": "Запретить",
                "name_en": "Disable",
                "description": "Запрещает изменение способа отображения формы."
            },
            {
                "name": "Разрешить",
                "name_en": "Enable",
                "description": "Разрешает изменение способа отображения формы."
            }
        ]
    },
    {
        "name": "АвтонумерацияВФорме",
        "name_en": "AutonumerationInForm",
        "description": "Режим автонумерации в форме определяет, получать или нет автоматически номер при открытии формы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Автонумерация используется или не используется в зависимости от настроек нумерации в метаданных объекта."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Автонумерация в форме не используется. Номер формируется при записи объекта."
            }
        ]
    },
    {
        "name": "ТипФормыОтчета",
        "name_en": "ReportFormType",
        "description": "Содержит варианты типов форм отчета.",
        "values": [
            {
                "name": "Вариант",
                "name_en": "Variant",
                "description": "Содержит форму для редактирования варианта отчета."
            },
            {
                "name": "Настройка",
                "name_en": "Settings",
                "description": "Форма для настройки отчета."
            },
            {
                "name": "Основная",
                "name_en": "Main",
                "description": "Основная форма отчета."
            }
        ]
    },
    {
        "name": "РежимРедактированияКолонки",
        "name_en": "ColumnEditMode",
        "description": "Определяет варианты редактирования содержимого колонки.",
        "values": [
            {
                "name": "Вход",
                "name_en": "Enter",
                "description": "Для начала редактирования необходимо нажать клавишу Enter или дважды щелкнуть мышью."
            },
            {
                "name": "ВходПриВводе",
                "name_en": "EnterOnInput",
                "description": "Редактирование начинается при начале ввода символов."
            },
            {
                "name": "Непосредственно",
                "name_en": "Directly",
                "description": "Редактирование начинается при активизации колонки."
            }
        ]
    },
    {
        "name": "Ориентация",
        "name_en": "Orientation",
        "description": "Содержит варианты ориентации элементов управления. Используется при определении свойства Ориентация.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Ориентация элемента управления определяется автоматически. Ориентация выбирается по соотношению сторон. Если высота больше ширины, то элемент ориентирован вертикально, если высота меньше ширины, то элемент ориентирован горизонтально. Для элементов управления Индикатор, КоманднаяПанель, ПолосаРегулирования, Разделитель и РамкаГруппы привязка к границам формы осуществляется в зависимости от ориентации элемента управления."
            },
            {
                "name": "Вертикально",
                "name_en": "Vertical",
                "description": "Элемент управления расположен вертикально."
            },
            {
                "name": "Горизонтально",
                "name_en": "Horizontal",
                "description": "Элемент управления расположен горизонтально."
            }
        ]
    },
    {
        "name": "ВертикальноеПоложение",
        "name_en": "VerticalAlign",
        "description": "Содержит варианты выравнивания текста в элементе управления или области табличного документа по вертикали. Используется при определении свойства ВертикальноеПоложение.",
        "values": [
            {
                "name": "Верх",
                "name_en": "Top",
                "description": "Выравнивание текста по верхнему краю."
            },
            {
                "name": "Низ",
                "name_en": "Bottom",
                "description": "Выравнивание текста по нижнему краю."
            },
            {
                "name": "Центр",
                "name_en": "Center",
                "description": "Выравнивание текста по центру."
            }
        ]
    },
    {
        "name": "ГоризонтальноеПоложение",
        "name_en": "HorizontalAlign",
        "description": "Содержит варианты выравнивания текста в элементе управления, области табличного документа по горизонтали или элементе графической схемы. Используется при определении свойства ГоризонтальноеПоложение.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Горизонтальное выравнивание текста элемента управления или области табличного документа будет определяться автоматически, исходя из типа отображаемого значения. Числовые значения будут прижиматься к правой границе, остальные - к левой."
            },
            {
                "name": "Лево",
                "name_en": "Left",
                "description": "Выравнивание текста по левому краю."
            },
            {
                "name": "ПоШирине",
                "name_en": "Justify",
                "description": "Текст форматируется таким образом, чтобы занимать всю ширину элемента управления или области табличного документа."
            },
            {
                "name": "Право",
                "name_en": "Right",
                "description": "Выравнивание текста по правому краю."
            },
            {
                "name": "Центр",
                "name_en": "Center",
                "description": "Выравнивание текста по центру."
            }
        ]
    },
    {
        "name": "ПоложениеЗаголовка",
        "name_en": "TitleLocation",
        "description": "Содержит варианты расположения заголовка относительно отметок для элементов управления",
        "values": [
            {
                "name": "ЗаголовокСлева",
                "name_en": "TitleLeft",
                "description": "Заголовок располагается слева от отметки."
            },
            {
                "name": "ЗаголовокСправа",
                "name_en": "TitleRight",
                "description": "Заголовок располагается справа от отметки."
            }
        ]
    },
    {
        "name": "РежимСверткиЭлементаУправления",
        "name_en": "ControlCollapseMode",
        "description": "Содержит варианты свертки элементов управления.",
        "values": [
            {
                "name": "Верх",
                "name_en": "Top",
                "description": "Элемент управления свертывается к своей верхней стороне (нижняя сторона прижимается к верхней)."
            },
            {
                "name": "Лево",
                "name_en": "Left",
                "description": "Элемент управления свертывается к своей левой стороне (правая сторона прижимается к левой)."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Элемент управления восстанавливается и принимает размеры на момент свертки."
            },
            {
                "name": "Низ",
                "name_en": "Bottom",
                "description": "Элемент управления свертывается к своей нижней стороне (верхняя сторона прижимается к нижней)."
            },
            {
                "name": "Право",
                "name_en": "Right",
                "description": "Элемент управления свертывается к своей правой стороне (левая сторона прижимается к правой)."
            }
        ]
    },
    {
        "name": "ТипРамкиЭлементаУправления",
        "name_en": "ControlBorderType",
        "description": "Содержит варианты типов рамок, используемых в элементах управления. Используется для определения свойства",
        "values": [
            {
                "name": "БезРамки",
                "name_en": "WithoutBorder",
                "description": "Без рамки."
            },
            {
                "name": "Вдавленная",
                "name_en": "Indented",
                "description": "Вдавленная рамка."
            },
            {
                "name": "Выпуклая",
                "name_en": "Embossed",
                "description": "Выпуклая рамка."
            },
            {
                "name": "Двойная",
                "name_en": "Double",
                "description": "Двойная рамка."
            },
            {
                "name": "ДвойноеПодчеркивание",
                "name_en": "DoubleUnderline",
                "description": "Двойная рамка снизу (двойное подчеркивание)."
            },
            {
                "name": "Одинарная",
                "name_en": "Single",
                "description": "Одинарная рамка."
            },
            {
                "name": "Подчеркивание",
                "name_en": "Underline",
                "description": "Одинарная рамка снизу (подчеркивание)."
            },
            {
                "name": "Скругленная",
                "name_en": "Rounded",
                "description": "Скругленная рамка используется только для рамки группы. Может иметь толщину 1."
            },
            {
                "name": "ЧертаСверху",
                "name_en": "Overline",
                "description": "Одинарная рамка сверху."
            }
        ]
    },
    {
        "name": "ДействиеПеретаскивания",
        "name_en": "DragAction",
        "description": "Указывает тип действия перетаскивания.",
        "values": [
            {
                "name": "Выбор",
                "name_en": "Choice",
                "description": "При перетаскивании будет открыто меню."
            },
            {
                "name": "Копирование",
                "name_en": "Copy",
                "description": "При перетаскивании происходит копирование."
            },
            {
                "name": "Отмена",
                "name_en": "Cancel",
                "description": "Происходит отмена действия."
            },
            {
                "name": "Перемещение",
                "name_en": "Move",
                "description": "При перетаскивании происходит перемещение."
            }
        ]
    },
    {
        "name": "ДопустимыеДействияПеретаскивания",
        "name_en": "DragAllowedActions",
        "description": "Определяет варианты обработки перетаскивания.",
        "values": [
            {
                "name": "Копирование",
                "name_en": "Copy",
                "description": "Осуществлять копирование."
            },
            {
                "name": "КопированиеИПеремещение",
                "name_en": "CopyAndMove",
                "description": "Осуществлять перемещение или копирование."
            },
            {
                "name": "НеОбрабатывать",
                "name_en": "DontProcess",
                "description": "Не осуществлять никаких действий."
            },
            {
                "name": "Перемещение",
                "name_en": "Move",
                "description": "Осуществлять перемещение."
            }
        ]
    },
    {
        "name": "РежимВыделенияДаты",
        "name_en": "DateSelectionMode",
        "description": "Режим выделения даты в элементе управления",
        "values": [
            {
                "name": "Интервал",
                "name_en": "Interval",
                "description": "Выделение непрерывного интервала дат."
            },
            {
                "name": "Множественный",
                "name_en": "Multiple",
                "description": "Выделение нескольких дат."
            },
            {
                "name": "Одиночный",
                "name_en": "Single",
                "description": "Выделение только одной даты в календаре."
            }
        ]
    },
    {
        "name": "ПоложениеКартинкиКнопки",
        "name_en": "ButtonPictureLocation",
        "description": "Содержит варианты положений картинки кнопки относительно текста. Используется при определении свойства",
        "values": [
            {
                "name": "Лево",
                "name_en": "Left",
                "description": "Картинка прижимается к левой границе кнопки."
            },
            {
                "name": "Право",
                "name_en": "Right",
                "description": "Картинка прижимается к правой границе кнопки."
            }
        ]
    },
    {
        "name": "ОтображениеКнопкиКоманднойПанели",
        "name_en": "CommandBarButtonRepresentation",
        "description": "Содержит варианты стилей отображения кнопок в командных панелях.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Стиль отображения кнопки определяется командной панелью. Например, кнопка с таким стилем отображения, вставленная в командную панель будет отображаться в виде картинки, а вставленная в подменю - в виде картинки и текста."
            },
            {
                "name": "Картинка",
                "name_en": "Picture",
                "description": "На кнопке отображается только картинка, без текста."
            },
            {
                "name": "Надпись",
                "name_en": "Text",
                "description": "На кнопке отображается только текст, без картинки."
            },
            {
                "name": "НадписьКартинка",
                "name_en": "PictureText",
                "description": "На кнопке отображается и текст и картинка."
            }
        ]
    },
    {
        "name": "ВыравниваниеКнопокКоманднойПанели",
        "name_en": "CommandBarButtonAlignment",
        "description": "Содержит варианты выравнивания кнопок командной панели.",
        "values": [
            {
                "name": "Лево",
                "name_en": "Left",
                "description": "Кнопки командной панели выравниваются по левому краю панели."
            },
            {
                "name": "Право",
                "name_en": "Right",
                "description": "Кнопки командной панели выравниваются по правому краю панели."
            },
            {
                "name": "Центр",
                "name_en": "Center",
                "description": "Кнопки командной панели выравниваются по центру панели."
            }
        ]
    },
    {
        "name": "ТипКнопкиКоманднойПанели",
        "name_en": "CommandBarButtonType",
        "description": "Содержит варианты типов кнопки командного интерфейса.",
        "values": [
            {
                "name": "Действие",
                "name_en": "Action",
                "description": "Кнопка данного типа представляет собой обычную кнопку панели. Кнопке может быть установлено действие, которое будет выполнено при нажатии на кнопку."
            },
            {
                "name": "Подменю",
                "name_en": "Popup",
                "description": "Кнопка данного типа аналогична кнопке типа Действие, но при нажатии на нее будет открыто связанное с данной кнопкой подменю, а не выполнено действие."
            },
            {
                "name": "Разделитель",
                "name_en": "Separator",
                "description": "Визуально кнопка данного типа представляет собой горизонтальную или вертикальную (в зависимости от расположения командной панели) черту. Кнопки такого типа не имеют визуальных свойств (картинка, текст и т.д.). Используется для разделения групп кнопок в командной панели и панели инструментов."
            }
        ]
    },
    {
        "name": "ПорядокКнопокКоманднойПанели",
        "name_en": "CommandBarButtonOrder",
        "description": "Содержит варианты порядка кнопок командной панели в подменю.",
        "values": [
            {
                "name": "Возр",
                "name_en": "Asc",
                "description": "Кнопки упорядочиваются по возрастанию."
            },
            {
                "name": "НеУпорядочивать",
                "name_en": "DontOrder",
                "description": "Кнопки не упорядочиваются."
            },
            {
                "name": "Убыв",
                "name_en": "Desc",
                "description": "Кнопки упорядочиваются по убыванию."
            }
        ]
    },
    {
        "name": "ИспользованиеРежимаМеню",
        "name_en": "UseMenuMode",
        "description": "Содержит варианты режима командной панели для элемента управления",
        "values": [
            {
                "name": "Использовать",
                "name_en": "Use",
                "description": "Если свойство установлено, то на кнопке справа рисуется треугольник. При нажатии на кнопку не отрабатывается событие нажатия, а появляется выпадающее меню, откуда пользователь выбирает команду."
            },
            {
                "name": "ИспользоватьДополнительно",
                "name_en": "UseExtra",
                "description": "Если свойство установлено, то кнопка делится на две части. Левая часть представляет обычную кнопку, нажатие которой вызывает отработку события нажатия. Правая часть представляет кнопку со стрелкой, при нажатии которой появляется выпадающее меню. Из меню выбирается команда для выполнения."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Если свойство установлено, командная панель представляет собой обычную кнопку."
            }
        ]
    },
    {
        "name": "ПоложениеКартинкиНадписи",
        "name_en": "LabelPictureLocation",
        "description": "Содержит варианты расположения картинки внутри элемента управления.",
        "values": [
            {
                "name": "Верх",
                "name_en": "Top",
                "description": "Картинка будет расположена в верхней части элемента управления."
            },
            {
                "name": "Лево",
                "name_en": "Left",
                "description": "Картинка будет расположена в левой части элемента управления."
            },
            {
                "name": "Низ",
                "name_en": "Bottom",
                "description": "Картинка будет расположена в нижней части элемента управления."
            },
            {
                "name": "Право",
                "name_en": "Right",
                "description": "Картинка будет расположена в правой части элемента управления."
            },
            {
                "name": "Центр",
                "name_en": "Center",
                "description": "Картинка будет расположена по центру элемента управления."
            }
        ]
    },
    {
        "name": "РежимБегущейСтроки",
        "name_en": "ScrollingTextMode",
        "description": "Содержит варианты режима бегущей строки. Используется для задания свойства",
        "values": [
            {
                "name": "Быстро",
                "name_en": "Fast",
                "description": "Быстрое перемещение текста."
            },
            {
                "name": "Медленно",
                "name_en": "Slow",
                "description": "Медленное перемещение текста."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Не использовать режим бегущей строки."
            },
            {
                "name": "Нормально",
                "name_en": "Normal",
                "description": "Средняя (нормальная) скорость перемещения текста."
            },
            {
                "name": "ОченьБыстро",
                "name_en": "VeryFast",
                "description": "Очень быстрое перемещение текста."
            },
            {
                "name": "ОченьМедленно",
                "name_en": "VerySlow",
                "description": "Очень медленное перемещение текста."
            }
        ]
    },
    {
        "name": "ОтображениеЗакладок",
        "name_en": "ShowTabs",
        "description": "Содержит варианты отображения закладок. Используется для заполнения свойства",
        "values": [
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Не использовать закладки."
            },
            {
                "name": "Сверху",
                "name_en": "Top",
                "description": "Закладки располагаются сверху в одну строку. Если закладки не умещаются полностью на верхней стороне панели, то они уменьшаются, отображая только часть текста названия, дополненного троеточием."
            },
            {
                "name": "СверхуМногострочный",
                "name_en": "TopMultiLine",
                "description": "Закладки располагаются сверху в несколько строк, если не умещаются на верхней стороне панели. При выборе закладки порядок строк закладок не изменяется."
            },
            {
                "name": "СверхуМногострочныйСПерестановкой",
                "name_en": "TopMultilineTransposition",
                "description": "Закладки располагаются сверху в несколько строк, если не умещаются на верхней стороне панели. При активизации закладки содержащая ее строка перемещается в самый низ области строк закладок."
            },
            {
                "name": "СверхуСПрокруткой",
                "name_en": "TopScrolling",
                "description": "Закладки располагаются сверху в одну строку с прокруткой. Если все закладки не умещаются на верхней стороне панели, то справа от закладок выводятся кнопки перемещения по закладкам (прокрутки)."
            },
            {
                "name": "СлеваВертикально",
                "name_en": "LeftVertical",
                "description": "Закладки располагаются в одну строку слева, текст закладок отображается вертикально. Если закладки умещаются на левой стороне панели, то они уменьшаются, отображая только часть текста названия, дополненного троеточием."
            },
            {
                "name": "СлеваГоризонтально",
                "name_en": "LeftHorizontal",
                "description": "Закладки располагаются в одну строку слева, текст закладок отображается горизонтально. Если закладки умещаются на левой стороне панели, то в нижней части области закладок появляются кнопки для прокрутки списка закладок."
            },
            {
                "name": "Снизу",
                "name_en": "Bottom",
                "description": "Закладки располагаются снизу в одну строку. Если закладки не умещаются полностью на нижней стороне панели, то они уменьшаются, отображая только часть текста названия, дополненного троеточием."
            },
            {
                "name": "СнизуМногострочный",
                "name_en": "BottomMultiLine",
                "description": "Закладки располагаются снизу в несколько строк, если не умещаются на нижней стороне панели. При выборе закладки порядок строк закладок не изменяется."
            },
            {
                "name": "СнизуМногострочныйСПерестановкой",
                "name_en": "BottomMultilineTransposition",
                "description": "Закладки располагаются снизу в несколько строк, если не умещаются на нижней стороне панели. При активизации закладки содержащая ее строка перемещается в самый верх области строк закладок."
            },
            {
                "name": "СнизуСПрокруткой",
                "name_en": "BottomScrolling",
                "description": "Закладки располагаются снизу в одну строку с прокруткой. Если все закладки не умещаются на нижней стороне панели, то справа от закладок выводятся кнопки перемещения по закладкам (прокрутки)."
            },
            {
                "name": "СправаВертикально",
                "name_en": "RightVertical",
                "description": "Закладки располагаются в одну строку справа, текст закладок отображается вертикально. Если закладки умещаются на правой стороне панели, то они уменьшаются, отображая только часть текста названия, дополненного троеточием."
            },
            {
                "name": "СправаГоризонтально",
                "name_en": "RightHorizontal",
                "description": "Закладки располагаются в одну строку справа, текст закладок отображается горизонтально. Если закладки умещаются на правой стороне панели, то в нижней части области закладок появляются кнопки для прокрутки списка закладок."
            }
        ]
    },
    {
        "name": "ПоложениеКартинкиПанели",
        "name_en": "PanelPictureLocation",
        "description": "Содержит варианты расположения картинки внутри элемента управления.",
        "values": [
            {
                "name": "Верх",
                "name_en": "Top",
                "description": "Картинка будет расположена в верхней части элемента управления."
            },
            {
                "name": "Лево",
                "name_en": "Left",
                "description": "Картинка будет расположена в левой части элемента управления."
            },
            {
                "name": "Низ",
                "name_en": "Bottom",
                "description": "Картинка будет расположена в нижней части элемента управления."
            },
            {
                "name": "Право",
                "name_en": "Right",
                "description": "Картинка будет расположена в правой части элемента управления."
            },
            {
                "name": "Центр",
                "name_en": "Center",
                "description": "Картинка будет расположена по центру элемента управления."
            }
        ]
    },
    {
        "name": "РежимПоляHTMLДокумента",
        "name_en": "HTMLDocumentFieldMode",
        "description": "Перечисление описывает варианты режимов работы элемента управления",
        "values": [
            {
                "name": "Просмотр",
                "name_en": "Browse",
                "description": "Обычный режим работы (навигация)."
            },
            {
                "name": "Редактирование",
                "name_en": "Design",
                "description": "Режим редактирования HTML-документов."
            }
        ]
    },
    {
        "name": "ИзменениеРазмераКолонки",
        "name_en": "ColumnSizeChange",
        "description": "Определяет набор режимов изменения размера колонки. Используется для определения свойства",
        "values": [
            {
                "name": "Изменять",
                "name_en": "Change",
                "description": "Размер колонки может изменяться при масштабировании или пользователем."
            },
            {
                "name": "НеИзменять",
                "name_en": "DontChange",
                "description": "Размер колонки не может изменяться при масштабировании или пользователем."
            }
        ]
    },
    {
        "name": "ИспользованиеПолосыПрокрутки",
        "name_en": "ScrollBarUse",
        "description": "Содержит варианты использования полосы прокрутки. Используется для определения признаков использования вертикальной и горизонтальной полосы прокрутки у элементов формы.",
        "values": [
            {
                "name": "ИспользоватьАвтоматически",
                "name_en": "AutoUse",
                "description": "Полоса прокрутки появляется, если содержимое элемента формы не может быть размещено полностью в отведенной для него области."
            },
            {
                "name": "ИспользоватьВсегда",
                "name_en": "UseAlways",
                "description": "Полоса прокрутки всегда присутствует, даже если все содержимое элемента формы умещается в отведенную область. В этом случае ползунок полосы будет отсутствовать, кнопки полосы прокрутки будут недоступны."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Не использовать полосу прокрутки."
            }
        ]
    },
    {
        "name": "НачальноеОтображениеДерева",
        "name_en": "InitialTreeView",
        "description": "Определяет набор вариантов раскрытия дерева в табличном поле. Используется для определения свойства",
        "values": [
            {
                "name": "НеРаскрывать",
                "name_en": "NoExpand",
                "description": "Не раскрывать уровни дерева."
            },
            {
                "name": "РаскрыватьВерхнийУровень",
                "name_en": "ExpandTopLevel",
                "description": "Раскрывать только верхний уровень дерева."
            },
            {
                "name": "РаскрыватьВсеУровни",
                "name_en": "ExpandAllLevels",
                "description": "Раскрывать все уровни дерева."
            }
        ]
    },
    {
        "name": "НачальноеОтображениеСписка",
        "name_en": "InitialListView",
        "description": "Определяет набор вариантов перехода на строку связанного с табличным полем списка при открытии табличного поля.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Вариант перехода при открытии (начало или конец) в связанном с полем списке или наборе данных определяется типом этого списка или набора, а также порядком сортировки, установленным для списка при открытии. Переход в конец по умолчанию установлен для следующих списков: списки документов, журналов документов, записей регистров бухгалтерии, расчета, накопления, сведений (периодических), списков бизнес-процессов и задач. Переход в конец списка при открытии будет осуществляться для этих списков в том случае, если первым полем в сортировке является поле даты (Дата или Период для разных списков). Для прочих списков по умолчанию переход осуществляется в начало списка."
            },
            {
                "name": "Конец",
                "name_en": "End",
                "description": "При открытии табличного поля переходить в конец связанного с полем списка или набора данных."
            },
            {
                "name": "Начало",
                "name_en": "Beginning",
                "description": "При открытии табличного поля переходить в начало связанного с полем списка или набора данных."
            }
        ]
    },
    {
        "name": "ПоложениеКолонки",
        "name_en": "ColumnLocation",
        "description": "Содержит варианты расположения колонки табличного поля по отношению к предыдущей. Используется для определения свойства",
        "values": [
            {
                "name": "ВТойЖеКолонке",
                "name_en": "SameColumn",
                "description": "Колонка находится на той же строке, что и предыдущая, вместе они образуют составную колонку."
            },
            {
                "name": "НаСледующейСтроке",
                "name_en": "OnNextRow",
                "description": "Колонка входит в составную колонку и находится на следующей строке."
            },
            {
                "name": "НоваяКолонка",
                "name_en": "NewColumn",
                "description": "В новой колонке (справа)."
            }
        ]
    },
    {
        "name": "РежимВыделенияСтрокиТабличногоПоля",
        "name_en": "TableBoxRowSelectionMode",
        "description": "Содержит варианты режима выделения строки для табличного поля.",
        "values": [
            {
                "name": "Строка",
                "name_en": "Row",
                "description": "Выделенная строка отображается полной строкой табличного поля."
            },
            {
                "name": "Ячейка",
                "name_en": "Cell",
                "description": "Выделенная строка отображается ячейкой строки табличного поля."
            }
        ]
    },
    {
        "name": "РежимВводаСтрокТабличногоПоля",
        "name_en": "TableBoxRowInputMode",
        "description": "Содержит варианты режимов интерактивного ввода строк в табличный документ. Используется для определения свойства",
        "values": [
            {
                "name": "ВКонецОкна",
                "name_en": "EndOfWindow",
                "description": "Новая строка будет вводиться в конец окна."
            },
            {
                "name": "ВКонецСписка",
                "name_en": "EndOfList",
                "description": "Новая строка будет вводиться в конце списка."
            },
            {
                "name": "ПередТекущейСтрокой",
                "name_en": "BeforeCurrentRow",
                "description": "Новая строка будет вводиться перед текущей строкой."
            },
            {
                "name": "ПослеТекущейСтроки",
                "name_en": "AfterCurrentRow",
                "description": "Новая строка будет вводиться после текущей строки."
            }
        ]
    },
    {
        "name": "РежимВыделенияТабличногоПоля",
        "name_en": "TableBoxSelectionMode",
        "description": "Содержит варианты выделения строк табличного поля.",
        "values": [
            {
                "name": "Множественный",
                "name_en": "MultiLine",
                "description": "Разрешено выделение нескольких строк."
            },
            {
                "name": "Одиночный",
                "name_en": "SingleLine",
                "description": "Разрешено выделение только одной строки."
            }
        ]
    },
    {
        "name": "СпособРедактированияСписка",
        "name_en": "ListEditMode",
        "description": "Содержит варианты редактирования элементов списка. Используется для заполнения свойства СпособРедактирования.",
        "values": [
            {
                "name": "ВДиалоге",
                "name_en": "InDialog",
                "description": "Для редактирования элемента списка поля вызывается специальный диалог."
            },
            {
                "name": "ВСписке",
                "name_en": "InList",
                "description": "Элементы редактируется непосредственно в поле списка."
            }
        ]
    },
    {
        "name": "СтандартноеОформление",
        "name_en": "StandardAppearance",
        "description": "Содержит перечисление стандартных вариантов оформления.",
        "values": [
            {
                "name": "Апельсин",
                "name_en": "Orange",
                "description": "Оформление в стиле \"Апельсин\"."
            },
            {
                "name": "Асфальт",
                "name_en": "Asphalt",
                "description": "Оформление в стиле \"Асфальт\"."
            },
            {
                "name": "БезОформления",
                "name_en": "None",
                "description": "Оформление не используется."
            },
            {
                "name": "Бирюза",
                "name_en": "Turquoise",
                "description": "Оформление в стиле \"Бирюза\"."
            },
            {
                "name": "Бронза",
                "name_en": "Bronze",
                "description": "Оформление в стиле \"Бронза\"."
            },
            {
                "name": "Весна",
                "name_en": "Spring",
                "description": "Оформление в стиле \"Весна\"."
            },
            {
                "name": "Дерево",
                "name_en": "Wood",
                "description": "Оформление в стиле \"Дерево\"."
            },
            {
                "name": "Зима",
                "name_en": "Winter",
                "description": "Оформление в стиле \"Зима\"."
            },
            {
                "name": "Интерфейс",
                "name_en": "Interface",
                "description": "Оформление в стиле \"Интерфейс\"."
            },
            {
                "name": "Камень",
                "name_en": "Stone",
                "description": "Оформление в стиле \"Камень\"."
            },
            {
                "name": "Классика",
                "name_en": "Classic",
                "description": "Оформление в стиле \"Классика\"."
            },
            {
                "name": "Классика2",
                "name_en": "Classic2",
                "description": "Оформление в стиле \"Классика2\"."
            },
            {
                "name": "Классика3",
                "name_en": "Classic3",
                "description": "Оформление в стиле \"Классика3\"."
            },
            {
                "name": "Лед",
                "name_en": "Ice",
                "description": "Оформление в стиле \"Лед\"."
            },
            {
                "name": "Лето",
                "name_en": "Summer",
                "description": "Оформление в стиле \"Лето\"."
            },
            {
                "name": "Медь",
                "name_en": "Copper",
                "description": "Оформление в стиле \"Медь\"."
            },
            {
                "name": "Осень",
                "name_en": "Autumn",
                "description": "Оформление в стиле \"Осень\"."
            },
            {
                "name": "Песок",
                "name_en": "Sand",
                "description": "Оформление в стиле \"Песок\"."
            },
            {
                "name": "Платина",
                "name_en": "Platinum",
                "description": "Оформление в стиле \"Платина\"."
            },
            {
                "name": "Серебро",
                "name_en": "Silver",
                "description": "Оформление в стиле \"Серебро\"."
            },
            {
                "name": "Текстиль",
                "name_en": "Textile",
                "description": "Оформление в стиле \"Текстиль\"."
            },
            {
                "name": "Трава",
                "name_en": "Grass",
                "description": "Оформление в стиле \"Трава\"."
            }
        ]
    },
    {
        "name": "ТипОбластиОформления",
        "name_en": "AppearanceAreaType",
        "description": "Содержит возможные типы области оформления.",
        "values": [
            {
                "name": "Группировка",
                "name_en": "Group",
                "description": "Поле оформления является группировкой."
            },
            {
                "name": "Поле",
                "name_en": "Field",
                "description": "Поле оформления является полем."
            }
        ]
    },
    {
        "name": "РежимВыбораНезаполненного",
        "name_en": "IncompleteChoiceMode",
        "description": "Перечисление описывает варианты выбора незаполненных значений.",
        "values": [
            {
                "name": "ПриАктивизации",
                "name_en": "OnActivate",
                "description": "Выбор незаполненного значения производится при активизации элемента управления."
            },
            {
                "name": "ПриНажатииEnter",
                "name_en": "OnEnterPressed",
                "description": "Выбор незаполненного значения производится при нажатии клавиши Enter."
            }
        ]
    },
    {
        "name": "РежимИзмененияРазмера",
        "name_en": "SizeChangeMode",
        "description": "Содержит варианты изменения размера.",
        "values": [
            {
                "name": "БыстроеИзменение",
                "name_en": "QuickChange",
                "description": "Режим быстрого изменения."
            },
            {
                "name": "Обычный",
                "name_en": "Normal",
                "description": "Обычный режим изменения."
            }
        ]
    },
    {
        "name": "РежимОсновногоОкнаКлиентскогоПриложения",
        "name_en": "MainClientApplicationWindowMode",
        "description": "Содержит варианты режимов основного окна клиентского приложения.",
        "values": [
            {
                "name": "ВстроенноеРабочееМесто",
                "name_en": "EmbeddedWorkplace",
                "description": "Режим встроенного рабочего места основного окна клиентского приложения. Применяется только в веб-клиенте, используется для встраивания веб-клиента во внешний сайт. В тонком, толстом, мобильном клиентах данное значение игнорируется и интерпретируется как Обычный. Имеет следующие особенности:  - все особенности режима РабочееМесто,  - системная командная панель скрывается,  - в правом нижнем углу отображается надпись \"РАБОТАЕТ НА 1С\"."
            },
            {
                "name": "Киоск",
                "name_en": "Kiosk",
                "description": "Режим киоска основного окна клиентского приложения. Применяется только в интерфейсе Такси. Имеет следующие особенности:  - окно приложения открывается на весь экран;  - в системной командной панели скрывается системное меню и все элементы, кроме логотипа и заголовка окна;  - скрываются все панели, кроме панели сообщений и панели показателей производительности;  - скрываются стрелки навигации по формам, кнопка перехода на начальную страницу, надпись \"Начальная страница\", кнопка избранного, кнопка закрытия формы;  - блокируется контекстное меню заголовка формы;  - в случае, когда свойства формы ОтображатьЗаголовок и ОтображатьКнопкуЗакрытия установлены в значения Ложь, скрывается вся область, где располагается заголовок с кнопкой закрытия;  - отключается ряд горячих клавиш для скрытых элементов:  - навигация по панелям (Alt+1, Alt+2, Alt+3, Alt+`, F10),  - навигация по формам (Ctrl+Tab, Ctrl+Shift+Tab, Ctrl+F6, Ctrl+Shift+F6),  - показать/скрыть активные панели (Ctrl+Shift+`),  - создать новый документ (Ctrl+N),  - открыть документ (Ctrl+O),  - сохранить (Ctrl+S),  - печать (Ctrl+P),  - печать с текущими настройками (Ctrl+Shift+P),  - открыть калькулятор (Ctrl+F2),  - перейти по ссылке (Shift+F11),  - получить ссылку (Ctrl+F11),  - добавить в избранное (Ctrl+D),  - открыть панель истории (Ctrl+Shift+H),  - открыть панель избранного (Ctrl+Shift+B),  - открыть панель поиска (Ctrl+Shift+F),  - вызов справки конфигурации (F1, Shift+F1, Alt+Shift+F1, Alt+F1, Ctrl+Shift+F1) (вызов справки по формам при этом продолжает работать),  - операции над числами в буфере обмена (Shift + Num *, Shift + Num +, Shift + Num -).  - в веб-клиенте, если браузер поддерживает полноэкранный режим, переход в него выполняется с помощью диалога \"Работа в полноэкранном режиме\"; при нажатии клавиши Esc выполняется выход из полноэкранного режима, и предлагается вернуться в него с помощью диалога \"Работа возможна только в полноэкранном режиме\";  - в веб-клиенте в полноэкранном режиме меняется поведение на сочетание клавиши Esc. При нажатии клавиши Esc происходит выход из полноэкранного режима.  - блокируется контекстное меню, вызываемое кликом по системной командной панели."
            },
            {
                "name": "Обычный",
                "name_en": "Normal",
                "description": "Обычный режим основного окна клиентского приложения."
            },
            {
                "name": "ПолноэкранноеРабочееМесто",
                "name_en": "FullscreenWorkplace",
                "description": "Режим полноэкранного рабочего места основного окна клиентского приложения. Применяется только в интерфейсе Такси. Имеет следующие особенности:  - окно приложения открывается на весь экран;  - в системной командной панели скрывается системное меню и все элементы, кроме логотипа, заголовка окна, гиперссылки с именем пользователя и кнопки \"О программе\";  - скрываются все панели, кроме панели сообщений и панели показателей производительности;  - скрываются стрелки навигации по формам, кнопка перехода на начальную страницу, надпись \"Начальная страница\", кнопка избранного, кнопка закрытия формы;  - блокируется контекстное меню заголовка формы;  - в случае, когда свойства формы ОтображатьЗаголовок и ОтображатьКнопкуЗакрытия установлены в значения Ложь, скрывается вся область, где располагается заголовок с кнопкой закрытия;  - отключается ряд горячих клавиш для скрытых элементов:  - навигация по панелям (Alt+1, Alt+2, Alt+3, Alt+`, F10),  - навигация по формам (Ctrl+Tab, Ctrl+Shift+Tab, Ctrl+F6, Ctrl+Shift+F6),  - показать/скрыть все панели (Ctrl+Shift+`),  - создать новый документ (Ctrl+N),  - открыть документ (Ctrl+O),  - сохранить (Ctrl+S),  - печать (Ctrl+P),  - печать с текущими настройками (Ctrl+Shift+P),  - открыть калькулятор (Ctrl+F2),  - перейти по ссылке (Shift+F11),  - получить ссылку (Ctrl+F11),  - добавить в избранное (Ctrl+D),  - открыть панель истории (Ctrl+Shift+H),  - открыть панель избранного (Ctrl+Shift+B),  - открыть панель поиска (Ctrl+Shift+F),  - вызов справки конфигурации (F1, Shift+F1, Alt+Shift+F1, Alt+F1, Ctrl+Shift+F1) (вызов справки по формам при этом продолжает работать),  - операции над числами в буфере обмена (Shift + Num *, Shift + Num +, Shift + Num -).  - в веб-клиенте, если браузер поддерживает полноэкранный режим, переход в него выполняется с помощью диалога \"Работа в полноэкранном режиме\"; при нажатии клавиши Esc выполняется выход из полноэкранного режима, и предлагается вернуться в него с помощью диалога \"Работа возможна только в полноэкранном режиме\";  - в веб-клиенте в полноэкранном режиме меняется поведение на сочетание клавиши Esc. При нажатии клавиши Esc происходит выход из полноэкранного режима.  - блокируется контекстное меню, вызываемое кликом по системной командной панели."
            },
            {
                "name": "РабочееМесто",
                "name_en": "Workplace",
                "description": "Режим рабочего места основного окна клиентского приложения. Применяется только в интерфейсе Такси. Имеет следующие особенности:  - в системной командной панели скрывается системное меню и все элементы, кроме логотипа, заголовка окна, гиперссылки с именем пользователя и кнопок \"О программе\", \"Свернуть окно\", \"Развернуть окно\" и \"Закрыть окно\";  - скрываются все панели, кроме панели сообщений и панели показателей производительности;  - скрываются стрелки навигации по формам, кнопка перехода на начальную страницу, надпись \"Начальная страница\", кнопка избранного, кнопка закрытия формы;  - блокируется контекстное меню заголовка формы;  - в случае, когда свойства формы ОтображатьЗаголовок и ОтображатьКнопкуЗакрытия установлены в значения Ложь, скрывается вся область, где располагается заголовок с кнопкой закрытия;  - отключается ряд горячих клавиш для скрытых элементов:  - навигация по панелям (Alt+1, Alt+2, Alt+3, Alt+`, F10),  - навигация по формам (Ctrl+Tab, Ctrl+Shift+Tab, Ctrl+F6, Ctrl+Shift+F6),  - показать/скрыть все панели (Ctrl+Shift+`),  - создать новый документ (Ctrl+N),  - открыть документ (Ctrl+O),  - сохранить (Ctrl+S),  - печать (Ctrl+P),  - печать с текущими настройками (Ctrl+Shift+P),  - открыть калькулятор (Ctrl+F2),  - перейти по ссылке (Shift+F11),  - получить ссылку (Ctrl+F11),  - добавить в избранное (Ctrl+D),  - открыть панель истории (Ctrl+Shift+H),  - открыть панель избранного (Ctrl+Shift+B),  - открыть панель поиска (Ctrl+Shift+F),  - вызов справки конфигурации (F1, Shift+F1, Alt+Shift+F1, Alt+F1, Ctrl+Shift+F1) (вызов справки по формам при этом продолжает работать),  - операции над числами в буфере обмена (Shift + Num *, Shift + Num +, Shift + Num -)."
            }
        ]
    },
    {
        "name": "СтатусОповещенияПользователя",
        "name_en": "UserNotificationStatus",
        "description": "Определяет набор статусов сообщений, которые влияют на поведение оповещения.",
        "values": [
            {
                "name": "Важное",
                "name_en": "Important",
                "description": "Оповещение после автоматического закрытия будет добавлено в центр оповещений."
            },
            {
                "name": "Информация",
                "name_en": "Information",
                "description": "Оповещение после автоматического закрытия не будет добавлено в центр оповещений."
            }
        ]
    },
    {
        "name": "ТипРазмещенияИзмерений",
        "name_en": "DimensionPlacementType",
        "description": "Содержит варианты расположения измерений в сводной таблице и построителе отчета.",
        "values": [
            {
                "name": "Вместе",
                "name_en": "Together",
                "description": "Измерения располагаются в одной строке/колонке."
            },
            {
                "name": "Отдельно",
                "name_en": "Separately",
                "description": "Каждое измерение располагается в отдельной строке/колонке."
            },
            {
                "name": "ОтдельноИТолькоВИтогах",
                "name_en": "SeparatelyAndInTotalsOnly",
                "description": "Каждое измерение располагается в отдельной строке/колонке, а подписи располагаются только в итоговой строке."
            }
        ]
    },
    {
        "name": "ТипРазмещенияРеквизитовИзмерений",
        "name_en": "DimensionAttributePlacementType",
        "description": "Содержит варианты расположения реквизитов измерений в построителе отчета и сводной таблице.",
        "values": [
            {
                "name": "Вместе",
                "name_en": "Together",
                "description": "Все реквизиты располагаются в одной отдельной строке/колонке."
            },
            {
                "name": "ВместеСИзмерениями",
                "name_en": "WithDimensions",
                "description": "Реквизиты располагаются в одной строке/колонке с измерениями."
            },
            {
                "name": "Отдельно",
                "name_en": "Separately",
                "description": "Реквизиты располагаются в отдельных строках/колонках."
            }
        ]
    },
    {
        "name": "ВариантПроверкиОтображенияНовойСтроки",
        "name_en": "NewRowShowCheckVariant",
        "description": "Варианты проверки новой строки на соответствие отбору, установленному в табличном поле.",
        "values": [
            {
                "name": "НеПроверять",
                "name_en": "DontCheck",
                "description": "Проверка запрещена."
            },
            {
                "name": "СообщатьОНесоответствииОтбору",
                "name_en": "FilterMismatchMessage",
                "description": "Проверка разрешена."
            }
        ]
    },
    {
        "name": "ГраницаЭлементаУправления",
        "name_en": "ControlEdge",
        "description": "Содержит варианты границ элементов управления. Используется для управления привязками.",
        "values": [
            {
                "name": "Верх",
                "name_en": "Top",
                "description": "Верхняя граница элемента управления."
            },
            {
                "name": "Лево",
                "name_en": "Left",
                "description": "Левая граница элемента управления."
            },
            {
                "name": "Низ",
                "name_en": "Bottom",
                "description": "Нижняя граница элемента управления."
            },
            {
                "name": "Право",
                "name_en": "Right",
                "description": "Правая граница элемента управления."
            },
            {
                "name": "Центр",
                "name_en": "Center",
                "description": "Центр элемента управления."
            }
        ]
    },
    {
        "name": "РазмерКартинки",
        "name_en": "PictureSize",
        "description": "Содержит варианты приспособления оригинальных размеров картинки к размерам области, отведенной для ее отображения. Используется для определения свойства РазмерКартинки.",
        "values": [
            {
                "name": "АвтоРазмер",
                "name_en": "AutoSize",
                "description": "Если область, в которой отображается картинка, больше чем размеры картинки, используется режим РеальныйРазмер, в противном случае используется режим Пропорционально."
            },
            {
                "name": "АвтоРазмерБезУчетаМасштаба",
                "name_en": "AutoSizeIgnoreScale",
                "description": "Если предоставленного для картинки места достаточно, используется режим РеальныйРазмер, в противном случае используется режим Пропорционально. При определении размера картинки не учитывается масштаб формы."
            },
            {
                "name": "Пропорционально",
                "name_en": "Proportionally",
                "description": "Картинка растягивается или сжимается таким образом, чтобы занять всю высоту или ширину отведенной для нее области, сохраняя при этом соотношение высоты и ширины оригинальной картинки."
            },
            {
                "name": "Растянуть",
                "name_en": "Stretch",
                "description": "Растянуть или сжать картинку таким образом, чтобы она занимала всю область, отведенную для ее отображения."
            },
            {
                "name": "РеальныйРазмер",
                "name_en": "RealSize",
                "description": "Сохранять реальные размеры картинки. Если область, в которой отображается картинка, меньше ее размеров, из середины картинки вырезается прямоугольник нужного размера."
            },
            {
                "name": "РеальныйРазмерБезУчетаМасштаба",
                "name_en": "RealSizeIgnoreScale",
                "description": "Сохраняет реальные размеры картинки без учета масштаба формы. Если область, в которой отображается картинка, меньше ее размеров, из середины картинки вырезается прямоугольник требуемого размера."
            },
            {
                "name": "Черепица",
                "name_en": "Tile",
                "description": "Картинка, сохраняя свои оригинальные размеры, будет периодически повторяться, заполняя всю отведенную для нее область."
            }
        ]
    },
    {
        "name": "ИспользованиеВывода",
        "name_en": "UseOutput",
        "description": "Содержит варианты использования права доступа Вывод.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Если право доступа Вывод установлено, то вывод разрешен, иначе запрещен."
            },
            {
                "name": "Запретить",
                "name_en": "Disable",
                "description": "Запретить вывод."
            },
            {
                "name": "Разрешить",
                "name_en": "Enable",
                "description": "Разрешить вывод."
            }
        ]
    },
    {
        "name": "ОтображениеРазметкиПолосыРегулирования",
        "name_en": "TrackBarMarkingAppearance",
        "description": "Содержит варианты режимов отображения разметки полосы регулирования.",
        "values": [
            {
                "name": "НеОтображать",
                "name_en": "DontShow",
                "description": "Не отображать разметку."
            },
            {
                "name": "СверхуИлиСлева",
                "name_en": "TopLeft",
                "description": "Отображать разметку сверху от полосы регулирования, если элемент управление имеет горизонтальную ориентацию, или слева - если вертикальную."
            },
            {
                "name": "СнизуИлиСправа",
                "name_en": "BottomRight",
                "description": "Отображать разметку снизу от полосы регулирования, если элемент управление имеет горизонтальную ориентацию, или справа - если вертикальную."
            },
            {
                "name": "СОбоихСторон",
                "name_en": "BothSides",
                "description": "Отображать разметку с обеих сторон от полосы регулирования. Если элемент управление имеет горизонтальную ориентацию, то сверху и снизу, если вертикальную - то слева и справа."
            }
        ]
    },
    {
        "name": "РежимИспользованияПараметраКоманды",
        "name_en": "CommandParameterUseMode",
        "description": "Содержит варианты режимов использования параметра команды.",
        "values": [
            {
                "name": "Множественный",
                "name_en": "Multiple",
                "description": "В обработчик команды передается массив значений, а не одно значение даже, если в конкретном случае значение одно."
            },
            {
                "name": "Одиночный",
                "name_en": "Single",
                "description": "В обработчик команды передается одно значение."
            }
        ]
    },
    {
        "name": "РежимСпискаЗадач",
        "name_en": "TaskListMode",
        "description": "Содержит варианты режимов списков задач.",
        "values": [
            {
                "name": "ВсеЗадачи",
                "name_en": "AllTasks",
                "description": "Режим отображения всех задач по всем пользователям."
            },
            {
                "name": "ПоИсполнителю",
                "name_en": "ByPerformer",
                "description": "Режим отображения задач только по исполнителю, указанному в свойстве Исполнитель расширения табличного поля списка задач. В этом режиме в список попадают задачи с учетом персональной и ролевой адресации, т.е. задачи, у которых в основном реквизите адресации установлен соответствующий текущий исполнитель (персональная адресация) и задачи, у которых основной реквизит адресации не заполнен, но в соответствующем регистре адресации нашлась запись, соответствующая остальным реквизитам адресации задачи, в которой исполнитель совпадает с указанным (ролевая адресация).  Процесс определения исполнителя через реквизит адресации называется разыменованием и подробно описан в соответствующей главе книги \"Руководство разработчика\"."
            }
        ]
    },
    {
        "name": "ПоложениеКартинкиЭлементаГрафическойСхемы",
        "name_en": "GraphicalSchemaItemPictureLocation",
        "description": "Содержит варианты расположения картинки внутри элемента графической схемы.",
        "values": [
            {
                "name": "Верх",
                "name_en": "Top",
                "description": "Картинка будет расположена в верхней части элемента графической схемы."
            },
            {
                "name": "Лево",
                "name_en": "Left",
                "description": "Картинка будет расположена в левой части элемента графической схемы."
            },
            {
                "name": "Низ",
                "name_en": "Bottom",
                "description": "Картинка будет расположена в нижней части элемента графической схемы."
            },
            {
                "name": "Право",
                "name_en": "Right",
                "description": "Картинка будет расположена в правой части элемента графической схемы."
            },
            {
                "name": "Центр",
                "name_en": "Center",
                "description": "Картинка будет расположена по центру элемента графической схемы."
            }
        ]
    },
    {
        "name": "ПоложениеТекстаСоединительнойЛинии",
        "name_en": "ConnectorTextLocation",
        "description": "Содержит варианты позиций текста относительно соединительной линии графической схемы.",
        "values": [
            {
                "name": "ПервыйСегмент",
                "name_en": "FirstSegment",
                "description": "Текст размещается поверх первого сегмента соединительной линии, если он горизонтален, или на уровне его центра, если первый сегмент вертикален."
            },
            {
                "name": "СерединаЛинии",
                "name_en": "Middle",
                "description": "Текст размещается в районе середины линии (середина вычисляется как половина суммы длин всех сегментов линии)."
            }
        ]
    },
    {
        "name": "РежимОтрисовкиСеткиГрафическойСхемы",
        "name_en": "GraphicalSchemaGridDrawMode",
        "description": "Содержит варианты режимов отрисовки сетки графической схемы.",
        "values": [
            {
                "name": "Линии",
                "name_en": "Lines",
                "description": "Рисовать сетку линиями."
            },
            {
                "name": "НеРисовать",
                "name_en": "None",
                "description": "Не рисовать сетку."
            },
            {
                "name": "Точки",
                "name_en": "Dots",
                "description": "Рисовать сетку точками."
            },
            {
                "name": "ШахматнаяСетка",
                "name_en": "Chess",
                "description": "Рисовать сетку точками в шахматном порядке."
            }
        ]
    },
    {
        "name": "РежимРазмещенияНаСтранице",
        "name_en": "FitPageMode",
        "description": "Содержит варианты режима размещения на странице графической схемы при печати и просмотре.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Изменение масштаба не производится."
            },
            {
                "name": "ПоШиринеСтраницы",
                "name_en": "PageWidth",
                "description": "Выбор режима пропорционального масштабирования по ширине страницы. Если ширина графической схемы больше ширины страницы, то производится пропорциональное масштабирование (пропорциональное изменение размеров по X и по Y), так, чтобы по ширине схема уместилась на страницу."
            },
            {
                "name": "Пропорционально",
                "name_en": "Proportionally",
                "description": "Выбор режима пропорционального масштабирования.  Если высота или ширина графической схемы больше высоты (ширины) страницы, то производится пропорциональное масштабирование (пропорциональное изменение размеров по X и по Y) так, чтобы вся схема уместилась на одну страницу."
            }
        ]
    },
    {
        "name": "СтильСтрелки",
        "name_en": "ArrowStyle",
        "description": "Содержит варианты стилей стрелки на конце или в начале декоративной линии графической схемы.",
        "values": [
            {
                "name": "Заполненная",
                "name_en": "Filled",
                "description": "Стрелка заполнена."
            },
            {
                "name": "Незаполненная",
                "name_en": "Blank",
                "description": "Стрелка внутри имеет цвет фона, а по краям - цвет линии."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Стрелка отсутствует."
            }
        ]
    },
    {
        "name": "ТипСоединительнойЛинии",
        "name_en": "ConnectorLineType",
        "description": "Содержит варианты линий, используемые в соединительных линиях и точках графической схемы.",
        "values": [
            {
                "name": "НетЛинии",
                "name_en": "None",
                "description": "Линия отсутствует."
            },
            {
                "name": "Пунктир",
                "name_en": "Dashed",
                "description": "Пунктирная линия."
            },
            {
                "name": "ПунктирТочка",
                "name_en": "DashDotted",
                "description": "Пунктирно-точечная линия."
            },
            {
                "name": "ПунктирТочкаТочка",
                "name_en": "DashDottedDotted",
                "description": "Линия, в которой чередуются 2 точки и один пунктир."
            },
            {
                "name": "Сплошная",
                "name_en": "Solid",
                "description": "Сплошная линия."
            },
            {
                "name": "Точечная",
                "name_en": "Dotted",
                "description": "Точечная линия."
            }
        ]
    },
    {
        "name": "ФигурыГрафическойСхемы",
        "name_en": "GraphicalSchemaShapes",
        "description": "Содержит варианты начертаний фигур внутри области декорации графической схемы.",
        "values": [
            {
                "name": "Блок",
                "name_en": "Block",
                "description": "Фигура, очерчивающая область декорации по ее периметру."
            },
            {
                "name": "Документ",
                "name_en": "Document",
                "description": "Фигура, предназначенная для нанесения на графическую схему текстовых пояснений или комментариев."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Фигура не отрисовывается."
            },
            {
                "name": "Папка",
                "name_en": "Folder",
                "description": "Фигура в виде полураскрытой папки."
            },
            {
                "name": "СкобкиВертикальные",
                "name_en": "VerticalBrackets",
                "description": "Фигура для нанесения на графическую схему комментариев, взятых в вертикальные квадратные скобки."
            },
            {
                "name": "СкобкиГоризонтальные",
                "name_en": "BracketsHorizontal",
                "description": "Фигура для нанесения на графическую схему комментариев, взятых в горизонтальные квадратные скобки."
            },
            {
                "name": "СтрелкаВверх",
                "name_en": "UpArrow",
                "description": "Стрелка вверх."
            },
            {
                "name": "СтрелкаВверхВниз",
                "name_en": "UpDownArrow",
                "description": "Двухконечная вертикальная стрелка."
            },
            {
                "name": "СтрелкаВлево",
                "name_en": "LeftArrow",
                "description": "Стрелка влево."
            },
            {
                "name": "СтрелкаВлевоВправо",
                "name_en": "LeftRightArrow",
                "description": "Двухконечная горизонтальная стрелка."
            },
            {
                "name": "СтрелкаВниз",
                "name_en": "DownArrow",
                "description": "Стрелка вниз."
            },
            {
                "name": "СтрелкаВправо",
                "name_en": "RightArrow",
                "description": "Стрелка вправо."
            },
            {
                "name": "Файл",
                "name_en": "File",
                "description": "Фигура файла."
            },
            {
                "name": "Эллипс",
                "name_en": "Ellipse",
                "description": "Эллипс или круг, если область декорации представляет собой квадрат."
            }
        ]
    },
    {
        "name": "ТипСтороныЭлементаГрафическойСхемы",
        "name_en": "GraphicalSchemeElementSideType",
        "description": "Содержит варианты сторон, к которой может быть присоединена линия.",
        "values": [
            {
                "name": "Верх",
                "name_en": "Top",
                "description": "Линия присоединена сверху."
            },
            {
                "name": "Лево",
                "name_en": "Left",
                "description": "Линия присоединена слева."
            },
            {
                "name": "Низ",
                "name_en": "Bottom",
                "description": "Линия присоединена снизу."
            },
            {
                "name": "Право",
                "name_en": "Right",
                "description": "Линия присоединена справа."
            },
            {
                "name": "Центр",
                "name_en": "Center",
                "description": "Линия присоединена к центру. Это значит, что при построении будет выбрана ближайшая сторона (лево, право, верх или низ)."
            }
        ]
    },
    {
        "name": "ФорматКартинки",
        "name_en": "PictureFormat",
        "description": "Содержит варианты форматов хранения картинки.",
        "values": [
            {
                "name": "BMP",
                "name_en": "BMP",
                "description": "Формат картинки BMP."
            },
            {
                "name": "EMF",
                "name_en": "EMF",
                "description": "Формат картинки EMF."
            },
            {
                "name": "GIF",
                "name_en": "GIF",
                "description": "Формат картинки GIF."
            },
            {
                "name": "Icon",
                "name_en": "Icon",
                "description": "Формат картинки Icon."
            },
            {
                "name": "JPEG",
                "name_en": "JPEG",
                "description": "Формат картинки JPEG."
            },
            {
                "name": "PNG",
                "name_en": "PNG",
                "description": "Формат картинки PNG."
            },
            {
                "name": "SVG",
                "name_en": "SVG",
                "description": "Формат картинки SVG."
            },
            {
                "name": "TIFF",
                "name_en": "TIFF",
                "description": "Формат картинки TIFF."
            },
            {
                "name": "WMF",
                "name_en": "WMF",
                "description": "Формат картинки WMF."
            },
            {
                "name": "НеизвестныйФормат",
                "name_en": "UnknownFormat",
                "description": "Формат картинки не определен."
            }
        ]
    },
    {
        "name": "РежимИзмененияСвязанногоЗначения",
        "name_en": "LinkedValueChangeMode",
        "description": "Содержит варианты изменения связанного значения при изменении ведущего значения.",
        "values": [
            {
                "name": "НеИзменять",
                "name_en": "DontChange",
                "description": "При изменении ведущего значения не изменять связанное значение."
            },
            {
                "name": "Очищать",
                "name_en": "Clear",
                "description": "При изменении ведущего значения очищать связанное значение."
            }
        ]
    },
    {
        "name": "РежимИспользованияДиалогаПечати",
        "name_en": "PrintDialogUseMode",
        "description": "Содержит варианты использования диалога печати методами Напечатать.",
        "values": [
            {
                "name": "Использовать",
                "name_en": "Use",
                "description": "Диалог печати используется."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Диалог печати не используется."
            }
        ]
    },
    {
        "name": "ФиксацияВТаблице",
        "name_en": "FixingInTable",
        "description": "Содержит варианты фиксации колонок и групп в таблице.",
        "values": [
            {
                "name": "Лево",
                "name_en": "Left",
                "description": "Зафиксировать слева."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Не фиксировать колонку или группу колонок."
            },
            {
                "name": "Право",
                "name_en": "Right",
                "description": "Зафиксировать справа."
            }
        ]
    },
    {
        "name": "ДополнительныйРежимОтображения",
        "name_en": "AdditionalShowMode",
        "description": "Виды дополнительного отображения состояния.",
        "values": [
            {
                "name": "Неактуальность",
                "name_en": "Irrelevance",
                "description": "Отображается неактуальное состояние."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Дополнительное отображение состояния не используется."
            }
        ]
    },
    {
        "name": "РежимАвтоОтображенияСостояния",
        "name_en": "AutoShowStateMode",
        "description": "Содержит варианты отображения состояния.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Необходимость отображения состояния определяется автоматически."
            },
            {
                "name": "НеОтображать",
                "name_en": "DontShow",
                "description": "Состояние не отображается."
            },
            {
                "name": "Отображать",
                "name_en": "Show",
                "description": "Состояние отображается."
            },
            {
                "name": "ОтображатьПриФормировании",
                "name_en": "ShowOnComposition",
                "description": "Состояние нужно отображать только при формировании."
            }
        ]
    },
    {
        "name": "ПоискВТаблицеПриВводе",
        "name_en": "SearchInTableOnInput",
        "description": "Содержит варианты режимов выполнения поиска при вводе символов в таблице, связанной с данными типа",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "При вводе символов в таблицу, связанную с данными типа ДинамическийСписок, выполняется поиск в таблице. При вводе символов в таблицу, связанную с ДанныеФормыКоллекция или ДанныеФормыСтруктураСКоллекцией, поиск выполняется только в режиме совместимости конфигурации Версия8_2_13."
            },
            {
                "name": "Использовать",
                "name_en": "Use",
                "description": "При вводе символов в таблицу, связанную с данными типа ДинамическийСписок, ДанныеФормыКоллекция или ДанныеФормыСтруктураСКоллекцией выполняется поиск в таблице."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "При вводе символов в таблицу, связанную с данными типа ДинамическийСписок, ДанныеФормыКоллекция или ДанныеФормыСтруктураСКоллекцией поиск в таблице не выполняется."
            }
        ]
    },
    {
        "name": "ОбновлениеТекстаРедактирования",
        "name_en": "EditTextUpdate",
        "description": "Содержит варианты обновления текста редактирования в поле ввода формы клиентского приложения при установке значения.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "При установке Авто текст в поле ввода не обновляется, но если режим совместимости Версия8_2_16 и выше и в обработчике события АвтоПодбор было выполнено обновление текста, то текст в поле ввода обновляется."
            },
            {
                "name": "Всегда",
                "name_en": "Always",
                "description": "Текст в поле ввода формы клиентского приложения обновляется при любой установке значения в поле (установка значения может быть выполнена системой автоматически и в том случае, когда значение другого реквизита было изменено программно)."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Текст в поле ввода формы клиентского приложения не обновляется никогда, даже в том случае, если устанавливаемое значение отличается от текущего."
            },
            {
                "name": "ПриИзмененииЗначения",
                "name_en": "OnValueChange",
                "description": "Текст в поле ввода формы клиентского приложения обновляется в том случае, если устанавливаемое в поле ввода значение отличается от имеющегося в данных, редактируемых в поле ввода."
            }
        ]
    },
    {
        "name": "ОтображениеПодсказки",
        "name_en": "ToolTipRepresentation",
        "description": "Задает способ отображения подсказки элемента формы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Используется вариант Всплывающая."
            },
            {
                "name": "Всплывающая",
                "name_en": "Balloon",
                "description": "Подсказка отображается в виде всплывающего текста. На мобильной платформе вариант эквивалентен варианту Нет."
            },
            {
                "name": "Кнопка",
                "name_en": "Button",
                "description": "Рядом с элементом выводится кнопка. Подсказка отображается при нажатии на эту кнопку."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Подсказка не отображается."
            },
            {
                "name": "ОтображатьАвто",
                "name_en": "ShowAuto",
                "description": "Подсказка выводится в виде краткой подсказки. Положение краткой подсказки определяется автоматически."
            },
            {
                "name": "ОтображатьСверху",
                "name_en": "ShowTop",
                "description": "Подсказка выводится в виде краткой подсказки сверху от элемента."
            },
            {
                "name": "ОтображатьСлева",
                "name_en": "ShowLeft",
                "description": "Подсказка выводится в виде краткой подсказки слева от элемента."
            },
            {
                "name": "ОтображатьСнизу",
                "name_en": "ShowBottom",
                "description": "Подсказка выводится в виде краткой подсказки снизу от элемента."
            },
            {
                "name": "ОтображатьСправа",
                "name_en": "ShowRight",
                "description": "Подсказка выводится в виде краткой подсказки справа от элемента."
            }
        ]
    },
    {
        "name": "ВидФлажка",
        "name_en": "CheckBoxType",
        "description": "Содержит варианты режимов отображения поля вида",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Автоматически определять вид. Соответствует варианту Флажок."
            },
            {
                "name": "Выключатель",
                "name_en": "Switch",
                "description": "Отображать флажок в виде выключателя."
            },
            {
                "name": "Тумблер",
                "name_en": "Tumbler",
                "description": "Отображать флажок в виде двухпозиционного тумблера."
            },
            {
                "name": "Флажок",
                "name_en": "CheckBox",
                "description": "Классический вид флажка."
            }
        ]
    },
    {
        "name": "ВидПереключателя",
        "name_en": "RadioButtonType",
        "description": "Содержит варианты режимов переключателя поля вида",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Автоматически определять вид. Соответствует варианту Переключатель."
            },
            {
                "name": "Переключатель",
                "name_en": "RadioButton",
                "description": "Классический вид переключателя."
            },
            {
                "name": "Тумблер",
                "name_en": "Tumbler",
                "description": "Отображать переключатель в виде многопозиционного тублера."
            }
        ]
    },
    {
        "name": "ВертикальнаяПрокруткаФормы",
        "name_en": "VerticalFormScroll",
        "description": "Содержит варианты режимов включения вертикальной прокрутки формы клиентского приложения.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Режим включения вертикальной прокрутки определяетя типом основного реквизита формы."
            },
            {
                "name": "Использовать",
                "name_en": "Use",
                "description": "Включает вертикальную прокрутку.  Перед включением элементы формы не сжимаются по вертикали."
            },
            {
                "name": "ИспользоватьБезРастягивания",
                "name_en": "UseWithoutStretch",
                "description": "При изменении размера формы элементы формы не сжимаются и не растягиваются по вертикали."
            },
            {
                "name": "ИспользоватьПриНеобходимости",
                "name_en": "UseIfNecessary",
                "description": "Включает вертикальную прокрутку.  Перед включением элементы формы максимально сжимаются по вертикали."
            }
        ]
    },
    {
        "name": "ПоведениеОбычнойГруппы",
        "name_en": "UsualGroupBehavior",
        "description": "Содержит варианты поведения группы вида",
        "values": [
            {
                "name": "Всплывающая",
                "name_en": "PopUp",
                "description": "Группа отображается в виде заголовка и имеет возможность показываться во всплывающем окне."
            },
            {
                "name": "Обычное",
                "name_en": "Usual",
                "description": "Группа отображается обычным образом."
            },
            {
                "name": "Свертываемая",
                "name_en": "Collapsible",
                "description": "Группа обладает возможностью свертываться и развертываться."
            }
        ]
    },
    {
        "name": "ОтображениеУправленияОбычнойГруппы",
        "name_en": "UsualGroupControlRepresentation",
        "description": "Содержит варианты отображения управления обычной группы.",
        "values": [
            {
                "name": "ГиперссылкаЗаголовка",
                "name_en": "TitleHyperlink",
                "description": "Заголовок группы отображается в виде гиперссылки. Нажатие на гиперссылку приводит к свертыванию / развертыванию или к всплытию группы."
            },
            {
                "name": "Картинка",
                "name_en": "Picture",
                "description": "Рядом с заголовком группы отображается пиктограмма, нажатие на которую приводит к свертыванию / развертыванию или к всплытию группы."
            }
        ]
    },
    {
        "name": "ОтображениеКнопкиВыбора",
        "name_en": "ChoiceButtonRepresentation",
        "description": "Содержит варианты отображения кнопки выбора.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Расположение кнопки выбора определяется автоматически."
            },
            {
                "name": "ОтображатьВВыпадающемСписке",
                "name_en": "ShowInDropList",
                "description": "Кнопка выбора отображается в выпадающем списке."
            },
            {
                "name": "ОтображатьВВыпадающемСпискеИВПолеВвода",
                "name_en": "ShowInDropListAndInInputField",
                "description": "Кнопка выбора отображается в выпадающем списке и в поле ввода."
            },
            {
                "name": "ОтображатьВПолеВвода",
                "name_en": "ShowInInputField",
                "description": "Кнопка выбора отображается в поле ввода."
            }
        ]
    },
    {
        "name": "ИсторияВыбораПриВводе",
        "name_en": "ChoiceHistoryOnInput",
        "description": "Содержит варианты сохранения и отображения истории выбора при вводе.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Режим сохранения и отображения истории выбора при вводе опеределяется автоматически."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "История выбора при вводе не сохраняется и не отображается."
            }
        ]
    },
    {
        "name": "РежимМасштабированияПросмотра",
        "name_en": "ViewScalingMode",
        "description": "Содержит варианты масштабирования документа при отображении.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Режим масштабирования просмотра определяется автоматически:  - для интерфейса Такси - Крупный,  - для интерфейса Версия8_2 - Обычный."
            },
            {
                "name": "Крупный",
                "name_en": "Large",
                "description": "Документ отображается в увеличенном масштабе."
            },
            {
                "name": "Обычный",
                "name_en": "Normal",
                "description": "Документ отображается в обычном размере."
            }
        ]
    },
    {
        "name": "ВидДополненияЭлементаФормы",
        "name_en": "FormItemAdditionType",
        "description": "Вид дополнения элемента формы.",
        "values": [
            {
                "name": "ОтображениеСостоянияПросмотра",
                "name_en": "ViewStatusRepresentation",
                "description": "Состояние просмотра."
            },
            {
                "name": "ОтображениеСтрокиПоиска",
                "name_en": "SearchStringRepresentation",
                "description": "Строка поиска."
            },
            {
                "name": "УправлениеПоиском",
                "name_en": "SearchControl",
                "description": "Управление поиском."
            }
        ]
    },
    {
        "name": "ПоложениеСтрокиПоиска",
        "name_en": "SearchStringLocation",
        "description": "Определяет положение автоматически размещенной строки поиска таблицы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Расположение строки поиска определяется автоматически."
            },
            {
                "name": "Верх",
                "name_en": "Top",
                "description": "Строка поиска расположена над таблицей."
            },
            {
                "name": "ЗаголовокФормы",
                "name_en": "FormCaption",
                "description": "Строка поиска располагается в заголовке формы."
            },
            {
                "name": "КоманднаяПанель",
                "name_en": "CommandBar",
                "description": "Строка поиска располагается в командной панели."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Строка поиска не отображается."
            },
            {
                "name": "Низ",
                "name_en": "Bottom",
                "description": "Строка поиска расположена под таблицей."
            },
            {
                "name": "ПотянутьСверху",
                "name_en": "PullFromTop",
                "description": "Строка поиска располагается над первой строкой таблицы, и первоначально скрыта. Чтобы отобразить строку поиска, необходимо перетянуть содержимое таблицы сверху вниз."
            }
        ]
    },
    {
        "name": "ПоложениеСостоянияПросмотра",
        "name_en": "ViewStatusLocation",
        "description": "Определяет положение автоматически размещенного состояния просмотра таблицы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Положение состояния просмотра определяется автоматически."
            },
            {
                "name": "Верх",
                "name_en": "Top",
                "description": "Состояние просмотра отображается над таблицей."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Состояние просмотра не отображается."
            },
            {
                "name": "Низ",
                "name_en": "Bottom",
                "description": "Состояние просмотра отображается под таблицей."
            }
        ]
    },
    {
        "name": "ПоложениеУправленияПоиском",
        "name_en": "SearchControlLocation",
        "description": "Определяет положение автоматически размещенного элемента управления поиском в таблице.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Положение управление поиском определяется автоматически."
            },
            {
                "name": "КоманднаяПанель",
                "name_en": "CommandBar",
                "description": "Элемент управления поиском отображается в командной панели."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Элемент управления поиском не отображается."
            }
        ]
    },
    {
        "name": "СпособЗапросаОбновления",
        "name_en": "RefreshRequestMethod",
        "description": "Содержит варианты способов инициации обновления таблицы на мобильной платформе.",
        "values": [
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Обновление данных запрашиваться не будет."
            },
            {
                "name": "ПотянутьСверху",
                "name_en": "PullFromTop",
                "description": "Чтобы обновить данные в мобильном приложении, нужно провести по экрану сверху вниз и отпустить."
            },
            {
                "name": "ПотянутьСверхуИлиСнизу",
                "name_en": "PullFromTopOrBottom",
                "description": "Чтобы обновить данные в мобильном приложении, нужно провести по экрану сверху вниз или снизу вверху и отпустить."
            },
            {
                "name": "ПотянутьСнизу",
                "name_en": "PullFromBottom",
                "description": "Чтобы обновить данные в мобильном приложении, нужно провести по экрану снизу вверх и отпустить."
            }
        ]
    },
    {
        "name": "ВариантВыравниванияЭлементовИЗаголовков",
        "name_en": "ItemsAndTitlesAlignVariant",
        "description": "Содержит варианты выравнивания элементов и их заголовков.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Элементы и заголовки выравниваются автоматически."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Выравнивание элементов и заголовков не используется."
            },
            {
                "name": "ЭлементыЛевоЗаголовкиЛево",
                "name_en": "ItemsLeftTitlesLeft",
                "description": "Элементы выравнены влево. Заголовки элементов выравнены влево."
            },
            {
                "name": "ЭлементыЛевоЗаголовкиПраво",
                "name_en": "ItemsLeftTitlesRight",
                "description": "Элементы выравнены влево. Заголовки элементов выравнены вправо."
            },
            {
                "name": "ЭлементыПравоЗаголовкиЛево",
                "name_en": "ItemsRightTitlesLeft",
                "description": "Элементы выравнены вправо. Заголовки элементов выравнены влево."
            },
            {
                "name": "ЭлементыПравоЗаголовкиПраво",
                "name_en": "ItemsRightTitlesRight",
                "description": "Элементы выравнены вправо. Заголовки элементов выравнены вправо."
            }
        ]
    },
    {
        "name": "ИнтервалМеждуЭлементамиФормы",
        "name_en": "FormItemSpacing",
        "description": "Содержит варианты расстояния между элементами формы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Размер интервала устанавливается автоматически."
            },
            {
                "name": "Двойной",
                "name_en": "Double",
                "description": "Двойной интервал."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Интервал между элементами формы не используется."
            },
            {
                "name": "Одинарный",
                "name_en": "Single",
                "description": "Одинарный интервал."
            },
            {
                "name": "Половинный",
                "name_en": "Half",
                "description": "Половинный интервал."
            },
            {
                "name": "Полуторный",
                "name_en": "OneAndHalf",
                "description": "Полуторный интервал."
            }
        ]
    },
    {
        "name": "СквозноеВыравнивание",
        "name_en": "ThroughAlign",
        "description": "Содержит варианты внешнего выравнивания элементов.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Выравнивание заголовков зависит от расположения группы."
            },
            {
                "name": "Использовать",
                "name_en": "Use",
                "description": "Заголовки выравниваются у первых элементов группы."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Заголовки не выравниваются."
            }
        ]
    },
    {
        "name": "ОтображениеГруппыКнопок",
        "name_en": "ButtonGroupRepresentation",
        "description": "Содержит варианты отображения группы кнопок в командной панели.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Вид группы кнопок командной панели определяется автоматически:  - если у группы кнопок есть родительская группа, используется значение свойства Отображение родительской группы,  - Если родительской группы нет, используется значение Обычное."
            },
            {
                "name": "Компактное",
                "name_en": "Compact",
                "description": "Группа кнопок командной панели отображется компактно."
            },
            {
                "name": "Обычное",
                "name_en": "Usual",
                "description": "Обычное отображение группы кнопок командной панели."
            }
        ]
    },
    {
        "name": "ФигураКнопки",
        "name_en": "ButtonShape",
        "description": "Определяет фигуру кнопки.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Фигура кнопки определяется автоматически:  - Для стандартной команды используется значение, заданное для команды.  - В остальных случаях используется значение Обычная."
            },
            {
                "name": "Обычная",
                "name_en": "Usual",
                "description": "Обычная фигура кнопки."
            },
            {
                "name": "Овал",
                "name_en": "Oval",
                "description": "Фигура кнопки отображается в виде овала."
            }
        ]
    },
    {
        "name": "ОтображениеФигурыКнопки",
        "name_en": "ButtonShapeRepresentation",
        "description": "Содержит варианты отображения фигуры кнопки.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Способ отображения фигуры кнопки определяется автоматически:  - Для стандартных команд используется вариант отображения, установленный для команды.  - В остальных случаях используется значение Всегда."
            },
            {
                "name": "Всегда",
                "name_en": "Always",
                "description": "Отображать фигуру кнопки всегда."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Фигура кнопки не отображается."
            },
            {
                "name": "ПриАктивности",
                "name_en": "WhenActive",
                "description": "Отображать фигуру кнопки, когда она активна."
            }
        ]
    },
    {
        "name": "ПоложениеКартинкиКнопкиФормы",
        "name_en": "FormButtonPictureLocation",
        "description": "Содержит варианты расположения картинки на кнопке.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Положение картинки кнопки определяется автоматически. Эквивалентно значению Лево."
            },
            {
                "name": "Лево",
                "name_en": "Left",
                "description": "Картинка кнопки располагается слева."
            },
            {
                "name": "Право",
                "name_en": "Right",
                "description": "Картинка кнопки располагается справа."
            }
        ]
    },
    {
        "name": "СостояниеСтраницФормы",
        "name_en": "FormPagesState",
        "description": "Содержит варианты состояния панели страниц в форме клиентского приложения.",
        "values": [
            {
                "name": "Заголовки",
                "name_en": "Titles",
                "description": "Отображаются только заголовки страниц."
            },
            {
                "name": "ЗаголовкиИТекущаяСтраница",
                "name_en": "TitlesAndCurrentPage",
                "description": "Отображаются и заголовки страниц, и текущая страница."
            },
            {
                "name": "ТекущаяСтраница",
                "name_en": "CurrentPage",
                "description": "Отображается только текущая страница."
            }
        ]
    },
    {
        "name": "РежимАвтоОтображенияКнопкиОчистки",
        "name_en": "AutoShowClearButtonMode",
        "description": "Содержит варианты автоматического отображения кнопки очистки в поле ввода формы клиентского приложения.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Автоматическое определение режима отображения - ТолькоДляЗаполненного."
            },
            {
                "name": "Всегда",
                "name_en": "Always",
                "description": "Кнопка отображается всегда."
            },
            {
                "name": "ТолькоДляЗаполненного",
                "name_en": "FilledOnly",
                "description": "Кнопка очистки в одном из случаев:  - если значение в поле ввода отличается от значения по умолчанию для данного типа  - если выбран тип - для поля, подерживающего выбор типа ."
            }
        ]
    },
    {
        "name": "РежимАвтоОтображенияКнопкиОткрытия",
        "name_en": "AutoShowOpenButtonMode",
        "description": "Содержит варианты автоматического отображения кнопки открытия в поле ввода формы клиентского приложения.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Автоматическое определение режима отображения - ТолькоДляЗаполненного."
            },
            {
                "name": "Всегда",
                "name_en": "Always",
                "description": "Кнопка отображается всегда."
            },
            {
                "name": "ТолькоДляЗаполненного",
                "name_en": "FilledOnly",
                "description": "Кнопка открытия отображается только если значение в поле ввода отличается от значения по умолчанию для данного типа."
            }
        ]
    },
    {
        "name": "ВариантУправленияВысотойЭлемента",
        "name_en": "ItemHeightControlVariant",
        "description": "Содержит варианты управления высотой элементов формы клиентского приложения.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Вариант управления высотой определяется автоматически:  - Для многострочного поля ввода - ПоСодержимому,  - Для однострочного поля ввода - ВСтрокахФормы.  -"
            },
            {
                "name": "ВСтрокахФормы",
                "name_en": "UseHeightInFormRows",
                "description": "Высота элемента устанавливается в соответствии со значением свойства Высота."
            },
            {
                "name": "ПоСодержимому",
                "name_en": "UseContentHeight",
                "description": "Высота элемента задается так, чтобы высота рабочей области элемента совпадала с высотой содержимого."
            }
        ]
    },
    {
        "name": "АвтоИсправлениеПриВводеТекста",
        "name_en": "AutoCorrectionOnTextInput",
        "description": "Содержит варианты автоматического исправления ошибок при вводе в поле ввода формы клиентского приложения.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Автоматическое определение автоисправления по типу элемента:  - В многострочных полях - Использовать,  - в однострочных - НеИспользовать."
            },
            {
                "name": "Использовать",
                "name_en": "Use",
                "description": "Автоисправление включено."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Автоисправление отключено."
            }
        ]
    },
    {
        "name": "ПроверкаПравописанияПриВводеТекста",
        "name_en": "SpellCheckingOnTextInput",
        "description": "Содержит варианты проверки правописания при вводе в поле ввода формы клиентского приложения.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Способ проверки правописания определяется автоматически по типу элемента:  - Для многострочного поля ввода - Использовать,  - Для однострочного поля ввода - НеИспользовать."
            },
            {
                "name": "Использовать",
                "name_en": "Use",
                "description": "Проверка правописания включена."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Проверка правописания отключена."
            }
        ]
    },
    {
        "name": "АвтоИзменениеРегистраПриВводеТекста",
        "name_en": "AutoCapitalizationOnTextInput",
        "description": "Содержит варианты автоматического изменения регистра при вводе в поле ввода формы клиентского приложения.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Автоматическое определение автоизменения регистра по типу элемента:  - В многострочных полях - Предложения,  - в однострочных - Нет."
            },
            {
                "name": "ВсеСимволы",
                "name_en": "AllCharacters",
                "description": "Регистр автоматически изменяется на верхний для всех символов в тексте."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Автоизменение регистра выключено."
            },
            {
                "name": "Предложения",
                "name_en": "Sentences",
                "description": "Регистр автоматически изменяется на верхний для первой буквы первого слова в каждом предложении."
            },
            {
                "name": "Слова",
                "name_en": "Words",
                "description": "Регистр автоматически изменяется на верхний для первой буквы каждого слова."
            }
        ]
    },
    {
        "name": "СпециальныйРежимВводаТекста",
        "name_en": "SpecialTextInputMode",
        "description": "Содержит варианты специальных режимов ввода текста в поле ввода формы клиентского приложения.",
        "values": [
            {
                "name": "Email",
                "name_en": "Email",
                "description": "Режим ввода адреса электронной почты. На экранной клавиатуре будет присутствовать символ \"@\"."
            },
            {
                "name": "URL",
                "name_en": "URL",
                "description": "Режим ввода URL-адреса."
            },
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Автоматическое определение специального режима ввода - Нет."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Обычный режим ввода любого текста."
            },
            {
                "name": "НомерТелефона",
                "name_en": "PhoneNumber",
                "description": "Режим ввода номера телефона. Экранная клавиатура содержит цифры, а также клавиши \"*\" и \"#\"."
            },
            {
                "name": "Цифры",
                "name_en": "Digits",
                "description": "Режим ввода цифр. Экранная клавиатура содержит цифры."
            },
            {
                "name": "ЦифрыИПунктуация",
                "name_en": "DigitsAndPunctuation",
                "description": "Режим ввода цифр и пунктуации, например, формул. Экранная клавиатура содержит соответствующие символы."
            }
        ]
    },
    {
        "name": "ТекстКнопкиВводаЭкраннойКлавиатуры",
        "name_en": "OnScreenKeyboardReturnKeyText",
        "description": "Содержит предопределенные варианты текста кнопки ввода экранной клавиатуры в поле ввода формы клиентского приложения.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Авто."
            },
            {
                "name": "Ввод",
                "name_en": "Return",
                "description": "Ввод."
            },
            {
                "name": "Готово",
                "name_en": "Done",
                "description": "Готово."
            },
            {
                "name": "Далее",
                "name_en": "Next",
                "description": "Далее."
            },
            {
                "name": "Найти",
                "name_en": "Search",
                "description": "Найти."
            },
            {
                "name": "Отправить",
                "name_en": "Send",
                "description": "Отправить."
            },
            {
                "name": "Перейти",
                "name_en": "Go",
                "description": "Перейти."
            },
            {
                "name": "Подключиться",
                "name_en": "Join",
                "description": "Подключиться."
            },
            {
                "name": "Продолжить",
                "name_en": "Continue",
                "description": "Продолжить."
            }
        ]
    },
    {
        "name": "ВариантУправленияВысотойТаблицы",
        "name_en": "TableHeightControlVariant",
        "description": "Содержит варианты управления высотой таблицы формы клиентского приложения.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Вариант управления высотой таблицы определяется автоматически:  - Для динамического списка - ВСтрокахФормы,  - в остальных случаях - ПоСодержимому."
            },
            {
                "name": "ВСтрокахТаблицы",
                "name_en": "UseHeightInTableRows",
                "description": "Высота элемента устанавливается в соответствии со значением свойства ВысотаВСтрокахТаблицы."
            },
            {
                "name": "ВСтрокахФормы",
                "name_en": "UseHeightInFormRows",
                "description": "Высота элемента устанавливается в соответствии со значением свойства Высота."
            },
            {
                "name": "ПоСодержимому",
                "name_en": "UseContentHeight",
                "description": "Высота элемента задается так, чтобы высота рабочей области элемента совпадала с высотой всех строк, заголовка и подвала. Если количество строк превышает 50, режим управления высотой переходит в режим ВСтрокахФормы."
            }
        ]
    },
    {
        "name": "ОтображениеОбсужденийФормы",
        "name_en": "FormConversationsRepresentation",
        "description": "Содержит варианты режима отображения обсуждений формы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Если основным реквизитом формы является объект или запись регистр сведений. используется режим Отображать. В противном случае - НеОтображать."
            },
            {
                "name": "НеОтображать",
                "name_en": "DontShow",
                "description": "Обсуждения формы не отображаются."
            },
            {
                "name": "Отображать",
                "name_en": "Show",
                "description": "Обсуждения формы отображаются."
            }
        ]
    },
    {
        "name": "РежимОтображенияРезультатаОтчета",
        "name_en": "ReportResultViewMode",
        "description": "Содержит варианты режима отображения результата отчета.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Режим отображения результата отчета определяется автоматически:  - В мобильной версии - Компактный,  - В платформе для ПК - Обычный."
            },
            {
                "name": "Компактный",
                "name_en": "Compact",
                "description": "Результат отчета отображается в компактном виде."
            },
            {
                "name": "Обычный",
                "name_en": "Default",
                "description": "Результат отчета отображается в обычном виде."
            }
        ]
    },
    {
        "name": "ВажностьПриОтображении",
        "name_en": "DisplayImportance",
        "description": "Содержит варианты важности элементов формы, которая учитывается при отображении формы на экране мобильного устройства.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Для реквизитов ссылочного типа, у которых свойство \"БыстрыйВыбор\" установлено в значение Ложь, используется значение Высокая. Для стандартных реквизитов значение выбирается согласно предопределенным значениям, установленным в платформе для каждого стандартного реквизита. Подробнее см. в документации."
            },
            {
                "name": "Высокая",
                "name_en": "High",
                "description": "Важность высокая."
            },
            {
                "name": "Низкая",
                "name_en": "Low",
                "description": "Важность низкая."
            },
            {
                "name": "Обычная",
                "name_en": "Usual",
                "description": "Важность обычная."
            },
            {
                "name": "ОченьВысокая",
                "name_en": "VeryHigh",
                "description": "Важность очень высокая."
            },
            {
                "name": "ОченьНизкая",
                "name_en": "VeryLow",
                "description": "Важность очень низкая."
            }
        ]
    },
    {
        "name": "ИспользованиеТекущейСтрокиТаблицы",
        "name_en": "TableCurrentRowUse",
        "description": "Содержит варианты поведения на мобильном устройстве текущей строки таблицы формы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Значение интерпретируется как Выбор."
            },
            {
                "name": "Выбор",
                "name_en": "Choice",
                "description": "- Текущая строка используется только в момент обработки команд, вызванных из контекстного меню, либо во время редактирования строки;  - Текущая строка визуально отображается кратковременно при нажатии;  - При программной установке текущей строки значение сохраняется только до окончания выполнения текущего вызова;  - При нажатии на строку вызываются события ПриАктивизацииПоля, ПриАктивизацииСтроки, ПриАктивизацииЯчейки, Выбор;  - При завершении выполнения всех обработчиков событий строка сбрасывается. Данное значение рекомендуется использовать для таблиц, логически не связанных с другими данными формы."
            },
            {
                "name": "ОтображениеВыделения",
                "name_en": "SelectionPresentation",
                "description": "- Текущая строка используется, если у таблицы есть хотя бы одна строка.  - Текущая строка отображается визуально.  - При нажатии на строку вызывается событие ПриАктивизацииПоля. Событие Выбор не вызывается. Данное значение рекомендуется использовать для таблиц, с которыми связаны другие реквизиты формы. Например, если в форме размещены таблица групп товаров и таблица товаров, и при нажатии на группу в таблице товаров нужно отобразить товары выбранной группы."
            },
            {
                "name": "ОтображениеВыделенияИВыбор",
                "name_en": "SelectionPresentationAndChoice",
                "description": "- Текущая строка используется, если у таблицы есть хотя бы одна строка.  - Текущая строка отображается визуально.  - При нажатии на строку вызывается событие ПриАктивизацииПоля. Событие Выбор не вызывается.  - В правой части строки отображается кнопка, при нажатии которой вызываются события ПриАктивизацииПоля и Выбор."
            }
        ]
    },
    {
        "name": "ИспользованиеТекущейСтроки",
        "name_en": "CurrentRowUse",
        "description": "Содержит варианты поведения на мобильном устройстве элементов формы, связанных с текущей строкой таблицы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "- Для команд используется значение НеИспользует,  - Для групп - значение свойства зависит от реквизитов, связанных с текущими данными таблицы."
            },
            {
                "name": "Использует",
                "name_en": "Use",
                "description": "Для элемента формы текущая строка используется."
            },
            {
                "name": "НеИспользует",
                "name_en": "DontUse",
                "description": "Для элемента формы текущая строка не используется."
            }
        ]
    },
    {
        "name": "ПоведениеТаблицыПриСжатииПоГоризонтали",
        "name_en": "TableBehaviorOnHorizontalCompression",
        "description": "Содержит варианты поведения таблицы при адаптации к ширине экрана устройства.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "- В мобильной платформе используется значение СкрыватьЭлементыПоВажности;  - В мобильном клиенте - ПереноситьЭлементыПоВажности."
            },
            {
                "name": "ПереноситьЭлементыПоВажности",
                "name_en": "MoveItemsByImportance",
                "description": "При адаптации к ширине экрана колонки с наименьшей важностью скрываются, а их значения отображаются в отдельной строке мелким шрифтом с курсивным начертанием, с использованием нескольких цветов. В пределах одного уровня важности скрываются элементы, расположенные справа налево. Элементы в строке располагаются в порядке важности."
            },
            {
                "name": "СкрыватьЭлементыПоВажности",
                "name_en": "HideItemsByImportance",
                "description": "При адаптации к ширине экрана, колонки с наименьшей важностью скрываются. В пределах одного уровня важности скрываются элементы, последовательно расположенные справа налево."
            }
        ]
    },
    {
        "name": "СворачиваниеЭлементовФормыПоВажности",
        "name_en": "CollapseFormItemsByImportance",
        "description": "Содержит варианты использования сворачивания элементов формы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Интерпретируется как Использовать."
            },
            {
                "name": "Использовать",
                "name_en": "Use",
                "description": "Сворачивание элементов формы по важности используется."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Сворачивание элементов формы по важности не используется."
            }
        ]
    },
    {
        "name": "ГлубинаЦвета",
        "name_en": "ColorDepth",
        "description": "Описывает поддерживаемые глубины цвета картинки.",
        "values": [
            {
                "name": "БитНаПиксел1",
                "name_en": "BitPerPixel1",
                "description": "Для хранения одного пикселя используется 1 бит (картинка монохромная)."
            },
            {
                "name": "БитНаПиксел24",
                "name_en": "BitPerPixel24",
                "description": "Для хранения одного пикселя используется 24 бита (картинка многоцветная)."
            },
            {
                "name": "БитНаПиксел32",
                "name_en": "BitPerPixel32",
                "description": "Для хранения одного пикселя используется 32 бита (картинка полноцветная с прозрачностью)."
            },
            {
                "name": "БитНаПиксел4",
                "name_en": "BitPerPixel4",
                "description": "Для хранения одного пикселя используется 4 бита (картинка использует 16 цветов)."
            },
            {
                "name": "БитНаПиксел8",
                "name_en": "BitPerPixel8",
                "description": "Для хранения одного пикселя используется 8 бит (картинка использует 256 цветов)."
            }
        ]
    },
    {
        "name": "ПоложениеКнопкиВКоманднойПанели",
        "name_en": "ButtonLocationInCommandBar",
        "description": "Содержит варианты расположения кнопки в командной панели.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Положение кнопки в панели определяется автоматически."
            },
            {
                "name": "ВДополнительномПодменю",
                "name_en": "InAdditionalSubmenu",
                "description": "Кнопка расположена в дополнительном подменю."
            },
            {
                "name": "ВКоманднойПанели",
                "name_en": "InCommandBar",
                "description": "Кнопка расположена в командной панели."
            },
            {
                "name": "ВКоманднойПанелиИВДополнительномПодменю",
                "name_en": "InCommandBarAndInAdditionalSubmenu",
                "description": "Кнопка расположена в командной панели и в дополнительном подменю \"Еще\"."
            }
        ]
    },
    {
        "name": "РежимОтображенияВыделенияРисунков",
        "name_en": "DrawingSelectionShowMode",
        "description": "Содержит варианты режима отображения выделения рисунков.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Выделение рисунков:  - в режиме совместимости с Версия8_3_16 отображается,  - если режим совместимости не установлен:  - в режиме редактирования табличного документа отображается,  - в режиме просмотра табличного документа для рисунков с расшифровкой и снятой защитой отображается, а для остальных рисунков - не отображается."
            },
            {
                "name": "НеОтображать",
                "name_en": "DontShow",
                "description": "Выделение рисунков не отображается."
            },
            {
                "name": "Отображать",
                "name_en": "Show",
                "description": "Выделение рисунков отображается."
            }
        ]
    },
    {
        "name": "НаправлениеТекста",
        "name_en": "TextDirection",
        "description": "Содержит варианты направления текста.",
        "values": [
            {
                "name": "СлеваНаправо",
                "name_en": "LeftToRight",
                "description": "Определяет направление текста слева направо."
            },
            {
                "name": "СправаНалево",
                "name_en": "RightToLeft",
                "description": "Определяет направление текста справа налево."
            }
        ]
    },
    {
        "name": "ВидДвиженияБухгалтерии",
        "name_en": "AccountingRecordType",
        "description": "Предназначен для определения вида движения записи регистра бухгалтерии.",
        "values": [
            {
                "name": "Дебет",
                "name_en": "Debit",
                "description": "Движение средств в дебет счета."
            },
            {
                "name": "Кредит",
                "name_en": "Credit",
                "description": "Движение средств в кредит счета."
            }
        ]
    },
    {
        "name": "ВидДвиженияНакопления",
        "name_en": "AccumulationRecordType",
        "description": "Виды движений регистра накопления.",
        "values": [
            {
                "name": "Приход",
                "name_en": "Receipt",
                "description": "Используется для обозначения движений, увеличивающих ресурсы регистра."
            },
            {
                "name": "Расход",
                "name_en": "Expense",
                "description": "Используется для обозначения движений, уменьшающих ресурсы регистра."
            }
        ]
    },
    {
        "name": "ВидПериодаРегистраРасчета",
        "name_en": "CalculationRegisterPeriodType",
        "description": "Определяет вид периода регистра расчета - базовый период, период действия или период регистрации.",
        "values": [
            {
                "name": "БазовыйПериод",
                "name_en": "BasePeriod",
                "description": "Базовый период."
            },
            {
                "name": "ПериодДействия",
                "name_en": "ActionPeriod",
                "description": "Период действия."
            },
            {
                "name": "ПериодРегистрации",
                "name_en": "RegistrationPeriod",
                "description": "Период регистрации."
            },
            {
                "name": "ФактическийПериодДействия",
                "name_en": "ActualActionPeriod",
                "description": "Фактический период действия."
            }
        ]
    },
    {
        "name": "ВидСчета",
        "name_en": "AccountType",
        "description": "Определяет вид счета.",
        "values": [
            {
                "name": "АктивноПассивный",
                "name_en": "ActivePassive",
                "description": "Остаток на счете считается дебетовым, если положительный и кредитовый, если отрицательный."
            },
            {
                "name": "Активный",
                "name_en": "Active",
                "description": "Остаток на счете всегда считается дебетовым."
            },
            {
                "name": "Пассивный",
                "name_en": "Passive",
                "description": "Остаток на счете всегда считается кредитовым."
            }
        ]
    },
    {
        "name": "ВидТочкиМаршрутаБизнесПроцесса",
        "name_en": "BusinessProcessRoutePointType",
        "description": "Задает вид точки маршрута бизнес-процесса.",
        "values": [
            {
                "name": "ВложенныйБизнесПроцесс",
                "name_en": "SubBusinessProcess",
                "description": "Точка вложенного бизнес-процесса."
            },
            {
                "name": "ВыборВарианта",
                "name_en": "Switch",
                "description": "Точка выбора перехода. Для такой точки может быть определено произвольное число переходов."
            },
            {
                "name": "Действие",
                "name_en": "Activity",
                "description": "Точка действия."
            },
            {
                "name": "Завершение",
                "name_en": "End",
                "description": "Точка завершения бизнес-процесса."
            },
            {
                "name": "Обработка",
                "name_en": "Processing",
                "description": "Точка обработки."
            },
            {
                "name": "Разделение",
                "name_en": "Split",
                "description": "Точка разделения."
            },
            {
                "name": "Слияние",
                "name_en": "Join",
                "description": "Точка слияния."
            },
            {
                "name": "Старт",
                "name_en": "Start",
                "description": "Точка старта бизнес-процесса."
            },
            {
                "name": "Условие",
                "name_en": "Condition",
                "description": "Точка бинарного условия. Для такой точки определено только два перехода."
            }
        ]
    },
    {
        "name": "ИспользованиеГруппИЭлементов",
        "name_en": "FoldersAndItemsUse",
        "description": "Определяет способ использования групп и элементов справочника.",
        "values": [
            {
                "name": "Группы",
                "name_en": "Folders",
                "description": "Будут использоваться только группы."
            },
            {
                "name": "ГруппыИЭлементы",
                "name_en": "FoldersAndItems",
                "description": "Будут использоваться, и элементы, и группы."
            },
            {
                "name": "Элементы",
                "name_en": "Items",
                "description": "Будут использоваться только элементы."
            }
        ]
    },
    {
        "name": "ИспользованиеСреза",
        "name_en": "SliceUse",
        "description": "Определяет набор вариантов формирования среза периодического регистра сведений. Используется для заполнения свойства",
        "values": [
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Срез не будет использоваться."
            },
            {
                "name": "Первые",
                "name_en": "First",
                "description": "Будут выбираться первые (наиболее ранние) записи."
            },
            {
                "name": "Последние",
                "name_en": "Last",
                "description": "Будут выбираться последние (наиболее поздние) записи."
            }
        ]
    },
    {
        "name": "ИспользованиеРежимаПроведения",
        "name_en": "PostingModeUse",
        "description": "Определяет набор вариантов использования режима проведения в форме документа.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Режим проведения будет подбираться системой автоматически исходя из даты документа, позиции документа по отношению к оперативной отметки времени и других параметров."
            },
            {
                "name": "Неоперативный",
                "name_en": "Regular",
                "description": "Проведение будет выполняться в неоперативном режиме."
            },
            {
                "name": "Оперативный",
                "name_en": "RealTime",
                "description": "Проведение будет выполняться в оперативном режиме."
            }
        ]
    },
    {
        "name": "РежимАвтоВремя",
        "name_en": "AutoTimeMode",
        "description": "Определяет набор режимов записи документов, бизнес-процессов, задач.",
        "values": [
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Не использовать установку времени объекта (документа, бизнес-процесса, задачи). Это означает, что если в дате объекта время не нулевое, оно будет сброшено (время - 0:00:00)."
            },
            {
                "name": "Первым",
                "name_en": "First",
                "description": "Установить время объекта (документа, бизнес-процесса, задачи) так, что бы он оказался первым на свою дату. Если при этом дата объекта совпадает с текущей по дню, то время объекта будет установлено не позже, чем текущее."
            },
            {
                "name": "Последним",
                "name_en": "Last",
                "description": "Установить время объекта (документа, бизнес-процесса, задачи) так, чтобы он оказался последним на свою дату. Если при этом дата объекта совпадает с текущей по дню, то время объекта будет установлено не раньше, чем текущее."
            },
            {
                "name": "ТекущееИлиПервым",
                "name_en": "CurrentOrFirst",
                "description": "Если дата объекта (документа, бизнес-процесса, задачи) совпадает с текущей, то будет установлено текущее время. Если дата объекта не совпадает с текущей, то устанавливается такое время, чтобы объект оказался первым за день."
            },
            {
                "name": "ТекущееИлиПоследним",
                "name_en": "CurrentOrLast",
                "description": "Если дата объекта (документа, бизнес-процесса, задачи) совпадает с текущей, то будет установлено текущее время. Если дата объекта не совпадает с текущей, то устанавливается такое время, чтобы объект оказался последним за день."
            }
        ]
    },
    {
        "name": "РежимЗаписиДокумента",
        "name_en": "DocumentWriteMode",
        "description": "Определяет набор режимов записи документа.",
        "values": [
            {
                "name": "Запись",
                "name_en": "Write",
                "description": "В этом случае будут сохранены изменения, внесенные в документ, и движения."
            },
            {
                "name": "ОтменаПроведения",
                "name_en": "UndoPosting",
                "description": "В этом случае будут сохранены изменения документа, после чего инициирована отмена проведения документа. Оба действия производятся в одной транзакции."
            },
            {
                "name": "Проведение",
                "name_en": "Posting",
                "description": "В этом случае будут сохранены все изменения документа, после чего инициировано проведение документа. Оба действия производятся в одной транзакции."
            }
        ]
    },
    {
        "name": "РежимПроведенияДокумента",
        "name_en": "DocumentPostingMode",
        "description": "Определяет набор режимов проведения документа.",
        "values": [
            {
                "name": "Неоперативный",
                "name_en": "Regular",
                "description": "Неоперативное проведение, т.е. проведение выполняется не в реальном времени. Например, используется при проведении задним числом."
            },
            {
                "name": "Оперативный",
                "name_en": "RealTime",
                "description": "Оперативное проведение, т.е. проведение выполняется в реальном времени. При этом может, например, выполняться контроль текущих остатков."
            }
        ]
    },
    {
        "name": "ПериодичностьАгрегатаРегистраНакопления",
        "name_en": "AccumulationRegisterAggregatePeriodicity",
        "description": "Перечисление возможных периодичностей агрегата регистра накопления.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Периодичность определяется автоматически."
            },
            {
                "name": "Год",
                "name_en": "Year",
                "description": "Периодичность год."
            },
            {
                "name": "День",
                "name_en": "Day",
                "description": "Периодичность день."
            },
            {
                "name": "Квартал",
                "name_en": "Quarter",
                "description": "Периодичность квартал."
            },
            {
                "name": "Месяц",
                "name_en": "Month",
                "description": "Периодичность месяц."
            },
            {
                "name": "Непериодический",
                "name_en": "Nonperiodical",
                "description": "Нет периодичности."
            },
            {
                "name": "Полугодие",
                "name_en": "HalfYear",
                "description": "Периодичность полугодие."
            }
        ]
    },
    {
        "name": "ИспользованиеАгрегатаРегистраНакопления",
        "name_en": "AccumulationRegisterAggregateUse",
        "description": "Определяет варианты использования агрегата регистра накопления при выполнении запроса.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Использование агрегата при выполнении запроса определяется автоматически."
            },
            {
                "name": "Всегда",
                "name_en": "Always",
                "description": "Агрегат должен использоваться при выполнении запросов."
            }
        ]
    },
    {
        "name": "АвтоРегистрацияИзменений",
        "name_en": "AutoChangeRecord",
        "description": "Содержит варианты авторегистрации изменений данных.",
        "values": [
            {
                "name": "Запретить",
                "name_en": "Deny",
                "description": "Авторегистрация изменений данных запрещена."
            },
            {
                "name": "Разрешить",
                "name_en": "Allow",
                "description": "Автоматическая регистрация изменений разрешена."
            }
        ]
    },
    {
        "name": "ДопустимыйНомерСообщения",
        "name_en": "AllowedMessageNo",
        "description": "Содержит варианты указаний, какой номер сообщения обмена данными следует считать допустимым при приеме сообщения.",
        "values": [
            {
                "name": "Больший",
                "name_en": "Greater",
                "description": "Данное значение показывает, что принимаемое сообщение может иметь любой номер больший, чем максимальный номер принятого сообщения. Максимальный номер принятого сообщения можно узнать, обратившись к реквизиту НомерПринятого узла плана обмена."
            },
            {
                "name": "Любой",
                "name_en": "Any",
                "description": "Принимаемое сообщение обмена может иметь любой номер."
            },
            {
                "name": "Очередной",
                "name_en": "Next",
                "description": "Данное значение показывает, что номер принимаемого сообщения должен быть на 1 больше, чем максимальный номер принятого сообщения. Максимальный номер принятого сообщения можно узнать, обратившись к реквизиту НомерПринятого узла плана обмена."
            }
        ]
    },
    {
        "name": "ОтправкаЭлементаДанных",
        "name_en": "DataItemSend",
        "description": "Содержит варианты значений выходных параметров обработчиков событий",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Обозначает поведение по умолчанию, при котором данные помещаются в сообщение."
            },
            {
                "name": "Игнорировать",
                "name_en": "Ignore",
                "description": "Ничего соответствующего элементу данных в сообщение не помещается."
            },
            {
                "name": "Удалить",
                "name_en": "Delete",
                "description": "При указании этого значения вместо самих данных помещается элемент, который при приеме сообщения получателем вызовет удаление этих данных. Для объектов это УдалениеОбъекта, а для наборов записей набор записей с тем же отбором, но не содержащий ни одной записи."
            }
        ]
    },
    {
        "name": "ПолучениеЭлементаДанных",
        "name_en": "DataItemReceive",
        "description": "Содержит варианты значений выходных параметров обработчиков событий",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Обозначает поведение по умолчанию, при котором выполняется безусловный прием элемента данных при получении от главного узла и прием, если изменений не зарегистрировано при получении от подчиненного."
            },
            {
                "name": "Игнорировать",
                "name_en": "Ignore",
                "description": "Проигнорировать полученный элемент данных и ничего не предпринимать."
            },
            {
                "name": "Принять",
                "name_en": "Accept",
                "description": "Указывает на безусловный прием элемента данных."
            }
        ]
    },
    {
        "name": "ИспользованиеРасшифровкиТабличногоДокумента",
        "name_en": "SpreadsheetDocumentDetailUse",
        "description": "Содержит варианты использования расшифровки области ячеек табличного документа.",
        "values": [
            {
                "name": "БезОбработки",
                "name_en": "WithoutProcessing",
                "description": "Обработка расшифровки не вызывается."
            },
            {
                "name": "Строка",
                "name_en": "Row",
                "description": "Обработка расшифровки вызывается для всех ячеек строки, следующей за ячейкой, содержащей значение расшифровки."
            },
            {
                "name": "Ячейка",
                "name_en": "Cell",
                "description": "Обработка расшифровки вызывается для каждой ячейки области, содержащей расшифровку."
            }
        ]
    },
    {
        "name": "ТипЗаполненияОбластиТабличногоДокумента",
        "name_en": "SpreadsheetDocumentAreaFillType",
        "description": "Содержит варианты заполнения области табличного документа при выводе в результирующий документ.",
        "values": [
            {
                "name": "Параметр",
                "name_en": "Parameter",
                "description": "При выводе области в результирующий документ выведется значение параметра."
            },
            {
                "name": "Текст",
                "name_en": "Text",
                "description": "При выводе области в результирующий документ выведется текст."
            },
            {
                "name": "Шаблон",
                "name_en": "Template",
                "description": "При выводе области в результирующий документ выведется текст по шаблону."
            }
        ]
    },
    {
        "name": "ТипЛинииРисункаТабличногоДокумента",
        "name_en": "SpreadsheetDocumentDrawingLineType",
        "description": "Содержит варианты линий, используемых для рисунка табличного документа.",
        "values": [
            {
                "name": "НетЛинии",
                "name_en": "None",
                "description": "Линия отсутствует."
            },
            {
                "name": "Пунктир",
                "name_en": "Dashed",
                "description": "Пунктирная линия."
            },
            {
                "name": "ПунктирТочка",
                "name_en": "DashDotted",
                "description": "Линия \"пунктир - точка\"."
            },
            {
                "name": "ПунктирТочкаТочка",
                "name_en": "DashDottedDotted",
                "description": "Линия \"пунктир - точка - точка\"."
            },
            {
                "name": "Сплошная",
                "name_en": "Solid",
                "description": "Сплошная линия."
            },
            {
                "name": "Точечная",
                "name_en": "Dotted",
                "description": "Точечная линия."
            }
        ]
    },
    {
        "name": "ТипЛинииЯчейкиТабличногоДокумента",
        "name_en": "SpreadsheetDocumentCellLineType",
        "description": "Содержит варианты линий, используемых для границ ячеек табличного документа.",
        "values": [
            {
                "name": "БольшойПунктир",
                "name_en": "LargeDashed",
                "description": "Пунктир с длинными штрихами."
            },
            {
                "name": "Двойная",
                "name_en": "Double",
                "description": "Двойная линия."
            },
            {
                "name": "НетЛинии",
                "name_en": "None",
                "description": "Линия отсутствует."
            },
            {
                "name": "РедкийПунктир",
                "name_en": "ThinDashed",
                "description": "Пунктир с редкими штрихами."
            },
            {
                "name": "Сплошная",
                "name_en": "Solid",
                "description": "Сплошная линия."
            },
            {
                "name": "Точечная",
                "name_en": "Dotted",
                "description": "Точечная линия."
            },
            {
                "name": "ЧастыйПунктир",
                "name_en": "ThickDashed",
                "description": "Пунктир с частыми штрихами."
            }
        ]
    },
    {
        "name": "ТипНаправленияПереходаТабличногоДокумента",
        "name_en": "SpreadsheetDocumentStepDirectionType",
        "description": "Содержит типы перехода по ячейкам после завершения редактирования ячейки.",
        "values": [
            {
                "name": "БезПерехода",
                "name_en": "WithoutMove",
                "description": "После редактирования оставаться на отредактированной ячейке."
            },
            {
                "name": "ПоКолонкам",
                "name_en": "ByColumns",
                "description": "После редактирования переходить к следующей ячейке в колонке."
            },
            {
                "name": "ПоСтрокам",
                "name_en": "ByRows",
                "description": "После редактирования переходить к следующей ячейке в строке."
            }
        ]
    },
    {
        "name": "ТипОбластиЯчеекТабличногоДокумента",
        "name_en": "SpreadsheetDocumentCellAreaType",
        "description": "Содержит варианты областей ячеек табличного документа.",
        "values": [
            {
                "name": "Колонки",
                "name_en": "Columns",
                "description": "Содержит область, состоящую из колонок."
            },
            {
                "name": "Прямоугольник",
                "name_en": "Rectangle",
                "description": "Прямоугольная область."
            },
            {
                "name": "Строки",
                "name_en": "Rows",
                "description": "Область, состоящая из строк."
            },
            {
                "name": "Таблица",
                "name_en": "Table",
                "description": "Область представляет собой все ячейки табличного документа."
            }
        ]
    },
    {
        "name": "ТипОтображенияВыделенияТабличногоДокумента",
        "name_en": "SpreadsheetDocumentSelectionShowModeType",
        "description": "Содержит варианты отображения выделения табличного документа.",
        "values": [
            {
                "name": "Всегда",
                "name_en": "Always",
                "description": "Отображать выделение всегда."
            },
            {
                "name": "ПриАктивности",
                "name_en": "WhenActive",
                "description": "Отображать выделение только активного поля табличного документа."
            }
        ]
    },
    {
        "name": "ТипРазмещенияТекстаТабличногоДокумента",
        "name_en": "SpreadsheetDocumentTextPlacementType",
        "description": "Содержит варианты размещения текста в ячейке и рисунке табличного документа. Используется для определения свойства РазмещениеТекста.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Не помещающийся по ширине текст будет показан в соседних по горизонтали ячейках, если в них нет текста."
            },
            {
                "name": "Забивать",
                "name_en": "Block",
                "description": "Видимая часть текста будет ограничена левой и правой границами ячейки, если при этом текст не умещается полностью, то все символы видимой части будут отображаться как \"#\". (Применяется для предотвращения неправильного восприятия обрезанного текста)."
            },
            {
                "name": "Обрезать",
                "name_en": "Cut",
                "description": "Видимая часть текста будет ограничена левой и правой границами ячейки."
            },
            {
                "name": "Переносить",
                "name_en": "Wrap",
                "description": "Не помещающийся по ширине текст будет переноситься на следующие строки ячейки."
            }
        ]
    },
    {
        "name": "ТипРисункаТабличногоДокумента",
        "name_en": "SpreadsheetDocumentDrawingType",
        "description": "Содержит типы рисунков табличного документа. Используется для определения свойства",
        "values": [
            {
                "name": "ГеографическаяСхема",
                "name_en": "GeographicalSchema",
                "description": "Географическая схема."
            },
            {
                "name": "Группа",
                "name_en": "Group",
                "description": "Рисунок представляет собой группу рисунков."
            },
            {
                "name": "Дендрограмма",
                "name_en": "Dendrogram",
                "description": "Дендрограмма."
            },
            {
                "name": "Диаграмма",
                "name_en": "Chart",
                "description": "Диаграмма."
            },
            {
                "name": "ДиаграммаГанта",
                "name_en": "GanttChart",
                "description": "Диаграмма Ганта."
            },
            {
                "name": "Картинка",
                "name_en": "Picture",
                "description": "Картинка."
            },
            {
                "name": "Объект",
                "name_en": "Object",
                "description": "OLE объект."
            },
            {
                "name": "Примечание",
                "name_en": "Comment",
                "description": "Примечание к ячейке или группе ячеек."
            },
            {
                "name": "Прямая",
                "name_en": "Line",
                "description": "Рисунок представляет собой отрезок прямой линии."
            },
            {
                "name": "Прямоугольник",
                "name_en": "Rectangle",
                "description": "Прямоугольник."
            },
            {
                "name": "СводнаяДиаграмма",
                "name_en": "PivotChart",
                "description": "Сводная диаграмма."
            },
            {
                "name": "Текст",
                "name_en": "Text",
                "description": "Рисунок представляет собой прямоугольную область, предназначенную для ввода текста."
            },
            {
                "name": "Эллипс",
                "name_en": "Ellipse",
                "description": "Эллипс."
            }
        ]
    },
    {
        "name": "ТипСмещенияТабличногоДокумента",
        "name_en": "SpreadsheetDocumentShiftType",
        "description": "Содержит варианты смещения ячеек при вставке или удалении областей табличного документа.",
        "values": [
            {
                "name": "БезСмещения",
                "name_en": "WithoutShift",
                "description": "Не смещать ячейки."
            },
            {
                "name": "ПоВертикали",
                "name_en": "Vertical",
                "description": "Смещать ячейки по вертикали."
            },
            {
                "name": "ПоГоризонтали",
                "name_en": "Horizontal",
                "description": "Смещать ячейки по горизонтали."
            }
        ]
    },
    {
        "name": "ТипУзораТабличногоДокумента",
        "name_en": "SpreadsheetDocumentPatternType",
        "description": "Содержит варианты узоров, применяемых для фона ячеек табличного документа и рисунков табличного документа. Используется для определения свойства Узор.",
        "values": [
            {
                "name": "БезУзора",
                "name_en": "WithoutPattern",
                "description": "Нет узора."
            },
            {
                "name": "Сплошной",
                "name_en": "Solid",
                "description": "Сплошное заполнение одним цветом."
            },
            {
                "name": "Узор1",
                "name_en": "Pattern1",
                "description": "Узор 1."
            },
            {
                "name": "Узор10",
                "name_en": "Pattern10",
                "description": "Узор 10."
            },
            {
                "name": "Узор11",
                "name_en": "Pattern11",
                "description": "Узор 11."
            },
            {
                "name": "Узор12",
                "name_en": "Pattern12",
                "description": "Узор 12."
            },
            {
                "name": "Узор13",
                "name_en": "Pattern13",
                "description": "Узор 13."
            },
            {
                "name": "Узор14",
                "name_en": "Pattern14",
                "description": "Узор 14."
            },
            {
                "name": "Узор15",
                "name_en": "Pattern15",
                "description": "Узор 15."
            },
            {
                "name": "Узор16",
                "name_en": "Pattern16",
                "description": "Узор 16."
            },
            {
                "name": "Узор17",
                "name_en": "Pattern17",
                "description": "Узор 17."
            },
            {
                "name": "Узор2",
                "name_en": "Pattern2",
                "description": "Узор 2."
            },
            {
                "name": "Узор3",
                "name_en": "Pattern3",
                "description": "Узор 3."
            },
            {
                "name": "Узор4",
                "name_en": "Pattern4",
                "description": "Узор 4."
            },
            {
                "name": "Узор5",
                "name_en": "Pattern5",
                "description": "Узор 5."
            },
            {
                "name": "Узор6",
                "name_en": "Pattern6",
                "description": "Узор 6."
            },
            {
                "name": "Узор7",
                "name_en": "Pattern7",
                "description": "Узор 7."
            },
            {
                "name": "Узор8",
                "name_en": "Pattern8",
                "description": "Узор 8."
            },
            {
                "name": "Узор9",
                "name_en": "Pattern9",
                "description": "Узор 9."
            }
        ]
    },
    {
        "name": "ТипФайлаТабличногоДокумента",
        "name_en": "SpreadsheetDocumentFileType",
        "description": "Содержит варианты форматов файлов для сохранения табличного документа. Используется для определения параметра ТипФайлаТаблицы метода",
        "values": [
            {
                "name": "ANSITXT",
                "name_en": "ANSITXT",
                "description": "Формат текстового файла в кодировке ANSI."
            },
            {
                "name": "DOCX",
                "name_en": "DOCX",
                "description": "Формат файла DOCX (Word 2007)."
            },
            {
                "name": "HTML",
                "name_en": "HTML",
                "description": "Файл в формате HTML версии 4."
            },
            {
                "name": "HTML3",
                "name_en": "HTML3",
                "description": "Формат файла HTML версии 3."
            },
            {
                "name": "HTML4",
                "name_en": "HTML4",
                "description": "Формат файла HTML версии 4."
            },
            {
                "name": "HTML5",
                "name_en": "HTML5",
                "description": "Формат файла HTML версии 5. Вывод в этом формате отличается от вывода в HTML4 тем, что диаграммы и примитивные рисунки выводятся в результирующий документ при помощи встроенных SVG рисунков. Кроме того, поддерживается вывод текста под углом."
            },
            {
                "name": "MXL",
                "name_en": "MXL",
                "description": "Файл табличного документа \"1С:Предприятия\"."
            },
            {
                "name": "MXL7",
                "name_en": "MXL7",
                "description": "Файл табличного документа \"1С:Предприятия\" версии 7.7."
            },
            {
                "name": "ODS",
                "name_en": "ODS",
                "description": "Формат файла электронной таблицы *.ods OpenOffice."
            },
            {
                "name": "PDF",
                "name_en": "PDF",
                "description": "Формат файла PDF стандарта ISO 32000-1:2008. При экспорте используются параметры печати, установленные у табличного документа. При записи в файл PDF перенос строк в ячейках документа может быть выполнен с некоторыми отличиями от того, как он выполняется при отображении на экран. Это может повлиять на высоту строк, у которых указана автоматическая высота."
            },
            {
                "name": "PDF_A_1",
                "name_en": "PDF_A_1",
                "description": "Формат файла PDF/A-1 стандарта ISO 19005-1."
            },
            {
                "name": "PDF_A_2",
                "name_en": "PDF_A_2",
                "description": "Формат файла PDF/A-2 стандарта ISO 19005-2."
            },
            {
                "name": "PDF_A_3",
                "name_en": "PDF_A_3",
                "description": "Формат файла PDF/A-3 стандарта ISO 19005-3."
            },
            {
                "name": "TXT",
                "name_en": "TXT",
                "description": "Текстовый файл."
            },
            {
                "name": "XLS",
                "name_en": "XLS",
                "description": "Файл в формате MS Excel. Сохранение в данном формате выполняет сохранение в формате MS Excel, используемом по умолчанию (эквивалентно XLS97)."
            },
            {
                "name": "XLS95",
                "name_en": "XLS95",
                "description": "Формат Excel 95."
            },
            {
                "name": "XLS97",
                "name_en": "XLS97",
                "description": "Формат Excel 97."
            },
            {
                "name": "XLSX",
                "name_en": "XLSX",
                "description": "Формат файла *.xlsx Excel 2007."
            }
        ]
    },
    {
        "name": "ОриентацияСтраницы",
        "name_en": "PageOrientation",
        "description": "Определяет варианты ориентации страницы при выводе табличного документа на печать. Используется для определения свойства ОриентацияСтраницы.",
        "values": [
            {
                "name": "Ландшафт",
                "name_en": "Landscape",
                "description": "Ориентация страницы, при которой горизонтальная сторона больше вертикальной."
            },
            {
                "name": "Портрет",
                "name_en": "Portrait",
                "description": "Ориентация страницы, при которой горизонтальная сторона меньше вертикальной."
            }
        ]
    },
    {
        "name": "РасположениеЗаголовкаГруппировкиТабличногоДокумента",
        "name_en": "SpreadsheetDocumentGroupHeaderPlacement",
        "description": "Содержит варианты расположения заголовка группировки табличного документа.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Определение расположения заголовка группировки в зависимости от значений свойств табличного документа ИтогиСнизу и ИтогиСправа. Если ИтогиСнизу содержит значение Истина, заголовки группировок будут выводиться снизу, и сверху в противном случае. Если ИтогиСправа содержит значение Истина, заголовки группировок будут выводиться справа, и слева в противном случае."
            },
            {
                "name": "Конец",
                "name_en": "End",
                "description": "Расположение заголовка в конце группировки."
            },
            {
                "name": "Начало",
                "name_en": "Begin",
                "description": "Расположение заголовка в начале группировки."
            }
        ]
    },
    {
        "name": "ТипДвустороннейПечати",
        "name_en": "DuplexPrintingType",
        "description": "Содержит варианты двусторонней печати.",
        "values": [
            {
                "name": "ИспользоватьНастройкиПринтера",
                "name_en": "UsePrinterSettings",
                "description": "При печати платформа специально не настраивает режим двусторонней печати. Используется настройка двусторонней печати принтера."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Не использовать двустороннюю печать."
            },
            {
                "name": "ПереворотВверх",
                "name_en": "FlipPagesUp",
                "description": "Использовать двусторонняя печать таким образом, чтобы страницу нужно было переворачивать вверх (переворот выполняется относительно горизонтальной оси листа)."
            },
            {
                "name": "ПереворотВлево",
                "name_en": "FlipPagesLeft",
                "description": "Использовать двустороннюю печать таким образом, чтобы страницу нужно было переворачивать влево (переворот выполняется относительно вертикальной оси листа)."
            }
        ]
    },
    {
        "name": "ЧередованиеРасположенияСтраниц",
        "name_en": "PagePlacementAlternation",
        "description": "Содержит варианты вывода на печать чередующихся страниц.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Если свойство ДвусторонняяПечать (для ТабличныйДокумент или ГрафическаяСхема) имеет значение Нет, то используется обычный вывод полей и колонтитулов, если ДвусторонняяПечать имеет значение ПереворотВлево, то используется вывод со значением ЗеркальноСлева, если ДвусторонняяПечать имеет значение ПереворотВверх, то используется вывод со значением ЗеркальноСверху."
            },
            {
                "name": "ЗеркальноСверху",
                "name_en": "MirrorOnTop",
                "description": "Нечетные страницы печатаются как обычно, а четные страницы печатаются с переметной местами нижнего и верхнего полей отступов и колонтитулов."
            },
            {
                "name": "ЗеркальноСлева",
                "name_en": "MirrorOnLeft",
                "description": "Нечетные страницы печатаются как обычно, а четные печатаются с переменой местами левого и правого полей отступов и колонтитулов."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Чередование страниц использовать не нужно."
            }
        ]
    },
    {
        "name": "ТочностьПечати",
        "name_en": "PrintAccuracy",
        "description": "Содержит варианты точности печати табличного документа из веб-клиента.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "При печати возможны изменения полей и масштаба. При печати из веб-клиента способом \"PDF\" печатаемый табличный документ открывается в отдельном окне."
            },
            {
                "name": "Точная",
                "name_en": "Accurate",
                "description": "Печать без изменения полей и масштаба. При печати из веб-браузера Google Chrome способом PDF печатаемый документ возвращается в виде файла."
            }
        ]
    },
    {
        "name": "СпособЧтенияЗначенийТабличногоДокумента",
        "name_en": "SpreadsheetDocumentValuesReadingMode",
        "description": "Содержит варианты загрузки значений в табличный документ.",
        "values": [
            {
                "name": "Значение",
                "name_en": "Value",
                "description": "Значения читаются как значения."
            },
            {
                "name": "Текст",
                "name_en": "Text",
                "description": "Значения читаются как текст."
            }
        ]
    },
    {
        "name": "ПоложениеТекстаОтносительноКартинки",
        "name_en": "TextPositionRelativeToPicture",
        "description": "Содержит варианты расположения текста в ячейке относительно картинки.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Размещение текста определяется автоматически в зависимости от выравнивания текста и картинки:  - Если картинка выровнена горизонтально по левому краю, то текст отображается справа от картинки.  - Если картинка выровнена горизонтально по правому краю, то текст отображается слева от картинки.  - Если картинка выровнена вертикально по верхнему краю, то текст отображается снизу от картинки.  - Если картинка выровнена вертикально по нижнему краю, то текст отображается сверху от картинки.  - Иначе текст отображается поверх картинки.  -"
            },
            {
                "name": "Поверх",
                "name_en": "OnTop",
                "description": "Текст отображается поверх картинки."
            },
            {
                "name": "Сверху",
                "name_en": "Top",
                "description": "Текст отображается над картинкой."
            },
            {
                "name": "Слева",
                "name_en": "Left",
                "description": "Текст в ячейке выводится слева от картинки."
            },
            {
                "name": "Снизу",
                "name_en": "Bottom",
                "description": "Текст в ячейке выводится снизу от картинки."
            },
            {
                "name": "Справа",
                "name_en": "Right",
                "description": "Текст в ячейке отображается справа относительно картинки."
            }
        ]
    },
    {
        "name": "ТипКурсоровТабличногоДокумента",
        "name_en": "SpreadsheetDocumentPointerType",
        "description": "Содержит варианты указателя мыши для табличного документа.",
        "values": [
            {
                "name": "Обычные",
                "name_en": "Regular",
                "description": "В табличном документе используется стандартный указатель мыши (стрелка)."
            },
            {
                "name": "Специальные",
                "name_en": "Special",
                "description": "В табличном документе нужно использовать специальные указатели мыши (перекрестие с увеличительным стеклом)."
            }
        ]
    },
    {
        "name": "ИспользованиеШириныСжатияТабличногоДокумента",
        "name_en": "UseSpreadsheetDocumentWidthReduction",
        "description": "Содержит варианты использования ширины сжатия табличного документа.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Интерпретируется как ПриПревышенииСжиматьДоМинимума."
            },
            {
                "name": "ПриПревышенииНеСжимать",
                "name_en": "DoNotReduceOnExcess",
                "description": "Области табличного документа, в которых есть столбцы, минимальная ширина которых больше переданной, не будут модифицироваться."
            },
            {
                "name": "ПриПревышенииСжиматьДоМинимума",
                "name_en": "ReduceToMinimumOnExcess",
                "description": "Для областей табличного документа, в которых минимальная ширина больше переданной, минимальная ширина будет рассчитана автоматически"
            },
            {
                "name": "СжиматьВсегда",
                "name_en": "ReduceAlways",
                "description": "Ширина результирующего табличного документа не будет превышать переданную ширину, вне зависимости от содержимого табличного документа."
            }
        ]
    },
    {
        "name": "ОтображениеВремениЭлементовПланировщика",
        "name_en": "PlannerItemsTimeRepresentation",
        "description": "Содержит варианты отображения времени элемента планировщика.",
        "values": [
            {
                "name": "ВремяНачала",
                "name_en": "BeginTime",
                "description": "Отображать время начала элемента."
            },
            {
                "name": "ВремяНачалаИКонца",
                "name_en": "BeginAndEndTime",
                "description": "Отображать время начала и время конца элемента."
            },
            {
                "name": "НеОтображать",
                "name_en": "DontDisplay",
                "description": "Не отображать время на элементе планировщика."
            }
        ]
    },
    {
        "name": "ПоведениеЭлементовПланировщикаПриНедостаткеМеста",
        "name_en": "PlannerItemsBehaviorOnLackOfSpace",
        "description": "Содержит варианты поведения элементов планировщика при недостатке места в поле планировщика.",
        "values": [
            {
                "name": "ОтображатьВсеЭлементы",
                "name_en": "ShowAllItems",
                "description": "При нехватке места в поле планировщика отображаются все элементы. Высота каждой строки планировщика вычисляется таким образом, чтобы вместить все элементы и, по возможности, избежать появления полос прокрутки."
            },
            {
                "name": "СворачиватьЭлементы",
                "name_en": "CollapseItems",
                "description": "При недостатке места в планировщике элементы, которые не вмещаются по высоте, сворачиваются в подменю \"Ещё\". При этом высоты всех строк планировщика одинаковы."
            }
        ]
    },
    {
        "name": "ИсточникКомандПланировщика",
        "name_en": "PlannerCommandSource",
        "description": "Содержит варианты элементов поля планировщика, при нажатии на которые будет вызвано событие",
        "values": [
            {
                "name": "ОбластьПеренесенногоЗаголовкаШкалыВремени",
                "name_en": "WrappedTimeScaleHeaderArea",
                "description": "Значение, которое устанавливается при нажатии на перенесенный заголовок шкалы времени поля планировщика. Во время возникновения события ОбработкаФормированияКоманд:  - Элементы содержит Неопределено,  - ЭлементИзмерения содержит Неопределено,  - ЗначенияИзмерений содержит Неопределено,  - Дата заполнено,  - ЭлементШкалыВремени содержит Неопределено,  - Команды не содержит стандартных команд,  - КомандаПоУмолчанию заполнено командой ВыбратьПеренесенныйЗаголовокШкалыВремени."
            },
            {
                "name": "ПустаяОбластьЭлементов",
                "name_en": "EmptyItemsArea",
                "description": "Значение, которое устанавливается при нажатии на пустую область поля планировщика. Во время возникновения события ОбработкаФормированияКоманд:  - Элементы содержит Неопределено,  - ЭлементИзмерения содержит Неопределено,  - ЗначенияИзмерений заполнено,  - Дата заполнено,  - ЭлементШкалыВремени содержит Неопределено,  - Команды заполнено стандартными командами планировщика - СоздатьЭлемент,  - КомандаПоУмолчанию заполнено командой СоздатьЭлемент."
            },
            {
                "name": "ЭлементИзмерения",
                "name_en": "DimensionItem",
                "description": "Значение, которое устанавливается при нажатии на измерение поля планировщика. Во время возникновения события ОбработкаФормированияКоманд:  - Элементы содержит Неопределено,  - ЭлементИзмерения заполнено,  - ЗначенияИзмерений заполнено,  - Дата содержит Неопределено,  - ЭлементШкалыВремени содержит Неопределено,  - Команды не содержит команд,  - КомандаПоУмолчанию заполнено командой ВыбратьЭлементИзмерения."
            },
            {
                "name": "ЭлементШкалыВремени",
                "name_en": "TimeScaleItem",
                "description": "Значение, которое устанавливается при нажатии на шкалу времени планировщика. Во время возникновения события ОбработкаФормированияКоманд:  - Элементы содержит Неопределено,  - ЭлементИзмерения содержит Неопределено,  - ЗначенияИзмерений содержит Неопределено,  - Дата заполнено,  - ЭлементШкалыВремени заполнено,  - Команды не содержат стандартных команд,  - КомандаПоУмолчанию заполнено командой ВыбратьЭлементШкалыВремени."
            },
            {
                "name": "Элементы",
                "name_en": "Items",
                "description": "Значение, которое устанавливается при нажатии на элементы поля планировщика. Во время возникновения события ОбработкаФормированияКоманд:  - Элементы заполнено,  - ЭлементИзмерения содержит Неопределено,  - ЗначенияИзмерений содержит Неопределено,  - Дата содержит Неопределено,  - ЭлементШкалыВремени содержит Неопределено,  - Команды заполнены следующими стандартными командами планировщика: УдалитьЭлементы, РедактироватьЭлемент (недоступно, если элементов несколько),  - КомандаПоУмолчанию заполнено командой БыстроРедактироватьЭлемент (игнорируется, если элементов несколько)."
            }
        ]
    },
    {
        "name": "СтандартнаяКомандаПланировщика",
        "name_en": "PlannerStandardCommand",
        "description": "Содержит все стандартные команды планировщика.",
        "values": [
            {
                "name": "БыстроРедактироватьЭлемент",
                "name_en": "QuickEditItem",
                "description": "Переход в режим быстрого редактирования выбранного элемента планировщика. Используется только для источника типа Элементы, когда свойство Элементы содержит массив из одного элемента планировщика. В контекстном меню команда будет иметь представление \"Быстро редактировать\"."
            },
            {
                "name": "ВыбратьПеренесенныйЗаголовокШкалыВремени",
                "name_en": "SelectWrappedTimeScaleHeader",
                "description": "Переход к событию НажатиеНаПеренесенномЗаголовкеШкалыВремени. Используется только для источника вида ОбластьПеренесенногоЗаголовкаШкалыВремени. В контекстном меню команда будет иметь представление \"Выбрать\"."
            },
            {
                "name": "ВыбратьЭлементИзмерения",
                "name_en": "SelectDimensionItem",
                "description": "Переход к событию НажатиеНаЭлементеИзмерения. Используется только для источника вида ЭлементИзмерения. В контекстном меню команда будет иметь представление \"Открыть\"."
            },
            {
                "name": "ВыбратьЭлементШкалыВремени",
                "name_en": "SelectTimeScaleItem",
                "description": "Переход к событию НажатиеНаЭлементеШкалыВремени. Используется только для источника типа ЭлементШкалыВремени. В контекстном меню команда будет иметь представление \"Выбрать\"."
            },
            {
                "name": "РедактироватьЭлемент",
                "name_en": "EditItem",
                "description": "Переход в режим редактирования выбранного элемента планировщика. Используется только для источника типа Элементы, когда свойство Элементы содержит массив из одного элемента планировщика. В контекстном меню команда будет иметь представление \"Редактировать\"."
            },
            {
                "name": "СоздатьЭлемент",
                "name_en": "CreateItem",
                "description": "Создает элемент планировщика в месте нажатия правой кнопки мыши. Используется только для источника типа ПустаяОбластьЭлементов . В контекстном меню команда будет иметь представление \"Создать\"."
            },
            {
                "name": "УдалитьЭлементы",
                "name_en": "DeleteItems",
                "description": "Удалить выбранные элементы. Используется только для источника типа Элементы. В контекстном меню команда будет иметь представление \"Удалить\"."
            }
        ]
    },
    {
        "name": "ТипФайлаФорматированногоДокумента",
        "name_en": "FormattedDocumentFileType",
        "description": "Содержит варианты типов файлов форматированного документа.",
        "values": [
            {
                "name": "ANSITXT",
                "name_en": "ANSITXT",
                "description": "Текстовый файл в кодировке ANSI."
            },
            {
                "name": "HTML",
                "name_en": "HTML",
                "description": "HTML-файл."
            },
            {
                "name": "PDF",
                "name_en": "PDF",
                "description": "PDF-файл."
            },
            {
                "name": "TXT",
                "name_en": "TXT",
                "description": "Текстовый файл."
            }
        ]
    },
    {
        "name": "ТипПараграфаФорматированногоДокумента",
        "name_en": "FormattedDocumentParagraphType",
        "description": "Содержит варианты типов параграфа форматированного документа.",
        "values": [
            {
                "name": "МаркированныйСписок",
                "name_en": "BulletedList",
                "description": "Маркированный список."
            },
            {
                "name": "НумерованныйСписок",
                "name_en": "NumberedList",
                "description": "Нумерованный список."
            },
            {
                "name": "Обычный",
                "name_en": "Usual",
                "description": "Обычный параграф форматированного документа."
            }
        ]
    },
    {
        "name": "ОбходРезультатаЗапроса",
        "name_en": "QueryResultIteration",
        "description": "Содержит варианты обхода результата запроса.",
        "values": [
            {
                "name": "ПоГруппировкам",
                "name_en": "ByGroups",
                "description": "Обход записей результата запроса по группировкам."
            },
            {
                "name": "ПоГруппировкамСИерархией",
                "name_en": "ByGroupsWithHierarchy",
                "description": "Обход записей результата запроса по группировкам с учетом иерархии."
            },
            {
                "name": "Прямой",
                "name_en": "Linear",
                "description": "Прямой тип обхода записей результата запроса. При таком способе обход осуществляется без группировок и иерархии."
            }
        ]
    },
    {
        "name": "ТипЗаписиЗапроса",
        "name_en": "QueryRecordType",
        "description": "Содержит типы записей выборки результатов запроса.",
        "values": [
            {
                "name": "ДетальнаяЗапись",
                "name_en": "DetailRecord",
                "description": "Детальная (конечная) запись результата запроса."
            },
            {
                "name": "ИтогПоГруппировке",
                "name_en": "GroupTotal",
                "description": "Итоговая запись по группировке запроса."
            },
            {
                "name": "ИтогПоИерархии",
                "name_en": "TotalByHierarchy",
                "description": "Итоговая запись по иерархии запроса."
            },
            {
                "name": "ОбщийИтог",
                "name_en": "Overall",
                "description": "Общая итоговая запись запроса."
            }
        ]
    },
    {
        "name": "ВидЗаполненияРасшифровкиПостроителяОтчета",
        "name_en": "ReportBuilderDetailFillType",
        "description": "Содержит варианты заполнения расшифровки построителя отчета.",
        "values": [
            {
                "name": "ЗначенияГруппировок",
                "name_en": "GroupValues",
                "description": "Расшифровка будет заполняться значениями группировок."
            },
            {
                "name": "НеЗаполнять",
                "name_en": "DontFill",
                "description": "Расшифровка не будет заполняться."
            },
            {
                "name": "Расшифровка",
                "name_en": "Details",
                "description": "Расшифровка будет заполняться структурой, содержащей значения всех группировок."
            }
        ]
    },
    {
        "name": "ТипДобавленияПредставлений",
        "name_en": "PresentationAdditionType",
        "description": "Содержит возможные типы добавления представлений.",
        "values": [
            {
                "name": "Добавлять",
                "name_en": "Add",
                "description": "Добавлять представления в запрос."
            },
            {
                "name": "НеДобавлять",
                "name_en": "DontAdd",
                "description": "Не добавлять представления в запрос."
            }
        ]
    },
    {
        "name": "ТипИзмеренияПостроителяОтчета",
        "name_en": "ReportBuilderDimensionType",
        "description": "Содержит типы измерения построителя отчета.",
        "values": [
            {
                "name": "Иерархия",
                "name_en": "Hierarchy",
                "description": "Измерения построителя отчета - группы и элементы."
            },
            {
                "name": "ТолькоИерархия",
                "name_en": "HierarchyOnly",
                "description": "Измерения построителя отчета - только группы."
            },
            {
                "name": "Элементы",
                "name_en": "Items",
                "description": "Измерения построителя отчета - элементы."
            }
        ]
    },
    {
        "name": "ТипРазмещенияИтогов",
        "name_en": "TotalPlacementType",
        "description": "Содержит варианты размещения итогов.",
        "values": [
            {
                "name": "Заголовок",
                "name_en": "Header",
                "description": "Размещение итоговых значений в заголовке."
            },
            {
                "name": "ЗаголовокИПодвал",
                "name_en": "HeaderAndFooter",
                "description": "Размещение итоговых значений в заголовке и подвале."
            },
            {
                "name": "Подвал",
                "name_en": "Footer",
                "description": "Размещение итоговых значений в подвале. Описание группировки выводится в заголовке."
            },
            {
                "name": "ТолькоПодвал",
                "name_en": "FooterOnly",
                "description": "Размещение итоговых значений только в подвале. Заголовок группировки отсутствует."
            }
        ]
    },
    {
        "name": "РежимДиалогаВыбораФайла",
        "name_en": "FileDialogMode",
        "description": "Содержит варианты диалога выбора файла. Используется для определения свойства",
        "values": [
            {
                "name": "ВыборКаталога",
                "name_en": "ChooseDirectory",
                "description": "Диалог выбора каталога."
            },
            {
                "name": "Открытие",
                "name_en": "Open",
                "description": "Диалог выбора файла для открытия."
            },
            {
                "name": "Сохранение",
                "name_en": "Save",
                "description": "Диалог выбора файла для сохранения."
            }
        ]
    },
    {
        "name": "СпособСравненияФайлов",
        "name_en": "FileCompareMethod",
        "description": "Перечислимые значения свойства",
        "values": [
            {
                "name": "Двоичное",
                "name_en": "Binary",
                "description": "Сравнивать файлы по байтам."
            },
            {
                "name": "ТабличныйДокумент",
                "name_en": "SpreadsheetDocument",
                "description": "Сравнивать файлы как табличные документы."
            },
            {
                "name": "ТекстовыйДокумент",
                "name_en": "TextDocument",
                "description": "Сравнивать файлы как текстовые документы."
            }
        ]
    },
    {
        "name": "ДоступКФайлу",
        "name_en": "FileAccess",
        "description": "Определяет возможные способы доступа к файлу.",
        "values": [
            {
                "name": "Запись",
                "name_en": "Write",
                "description": "Данные в файле доступны только для записи."
            },
            {
                "name": "Чтение",
                "name_en": "Read",
                "description": "Данные в файле доступны только для чтения."
            },
            {
                "name": "ЧтениеИЗапись",
                "name_en": "ReadAndWrite",
                "description": "Данные в файле доступны для чтения и записи."
            }
        ]
    },
    {
        "name": "РежимОткрытияФайла",
        "name_en": "FileOpenMode",
        "description": "Определяет режим открытия файла.",
        "values": [
            {
                "name": "Дописать",
                "name_en": "Append",
                "description": "Открывает существующий файл и перемещает позицию потока в конец файла. Если файл не существует, будет создан новый файл."
            },
            {
                "name": "Обрезать",
                "name_en": "Truncate",
                "description": "Существующий файл будет перезаписан. При открытии длина файла будет равна 0. Если файл не существует, будет сгенерировано исключение."
            },
            {
                "name": "Открыть",
                "name_en": "Open",
                "description": "Открытие существующего файла. Если файл не существует, будет сгенерировано исключение."
            },
            {
                "name": "ОткрытьИлиСоздать",
                "name_en": "OpenOrCreate",
                "description": "Открытие существующего файла. Если файл не существует, будет создан новый файл. Если файл существует, то при записи данные в нем будут перезаписаны."
            },
            {
                "name": "Создать",
                "name_en": "Create",
                "description": "Создание нового файла. Если указанный файл существует, данные в нем будут полностью перезаписаны."
            },
            {
                "name": "СоздатьНовый",
                "name_en": "CreateNew",
                "description": "Создание нового файла. Если такой файл существует, будет сгенерировано исключение."
            }
        ]
    },
    {
        "name": "ТипКаталогаБиблиотекиМобильногоУстройства",
        "name_en": "MobileDeviceLibraryDirType",
        "description": "Содержит варианты типов каталога библиотеки мобильного устройства.",
        "values": [
            {
                "name": "Аудио",
                "name_en": "Audio",
                "description": "Библиотека аудиозаписей."
            },
            {
                "name": "Видео",
                "name_en": "Video",
                "description": "Каталог видеозаписей."
            },
            {
                "name": "Картинки",
                "name_en": "Pictures",
                "description": "Каталог картинок."
            }
        ]
    },
    {
        "name": "СпособПеретаскиванияФайлов",
        "name_en": "FileDragMode",
        "description": "Содержит режим перетаскивания файлов на элементы управления.",
        "values": [
            {
                "name": "КакСсылкаНаФайл",
                "name_en": "AsFileRef",
                "description": "Режим перетаскивания файлов, в котором тип объекта, представляющего перетаскиваемый файл - СсылкаНаФайл."
            },
            {
                "name": "КакФайл",
                "name_en": "AsFile",
                "description": "Режим перетаскивания файлов, в котором тип объекта, представляющего перетаскиваемый файл - Файл."
            }
        ]
    },
    {
        "name": "ТипИзмеренияПостроителяЗапроса",
        "name_en": "QueryBuilderDimensionType",
        "description": "Типы измерения построителя запроса.",
        "values": [
            {
                "name": "Иерархия",
                "name_en": "Hierarchy",
                "description": "Измерения построителя запроса - группы и элементы."
            },
            {
                "name": "ТолькоИерархия",
                "name_en": "HierarchyOnly",
                "description": "Измерения построителя запроса - только группы."
            },
            {
                "name": "Элементы",
                "name_en": "Items",
                "description": "Будут использоваться только элементы."
            }
        ]
    },
    {
        "name": "ВидДанныхАнализа",
        "name_en": "AnalysisDataType",
        "description": "Содержит варианты типов поля (дискретное или непрерывное).",
        "values": [
            {
                "name": "Дискретные",
                "name_en": "Discrete",
                "description": "Поле содержит дискретные значения."
            },
            {
                "name": "Непрерывные",
                "name_en": "Contiguous",
                "description": "Поле содержит непрерывные значения."
            }
        ]
    },
    {
        "name": "МетодКластеризации",
        "name_en": "ClusterizationMethod",
        "description": "Содержит варианты методов кластеризации.",
        "values": [
            {
                "name": "БлижняяСвязь",
                "name_en": "NearestNeighbor",
                "description": "Метод \"Ближней связи\". Метод кластеризации, в котором объект присоединяется к той группе, для которой расстояние до ближайшего объекта минимально."
            },
            {
                "name": "ДальняяСвязь",
                "name_en": "FurthestNeighbor",
                "description": "Метод \"Дальняя связь\". Метод кластеризации, в котором объект присоединяется к той группе, для которой расстояние до наиболее дальнего объекта минимально."
            },
            {
                "name": "КСредних",
                "name_en": "KMeans",
                "description": "Метод \"k-средних\". В данном методе выбираются произвольные объекты, которые считаются центрами кластеров, затем последовательно перебираются все анализируемые объекты и присоединяются к ближайшему к ним кластеру. После присоединения объекта рассчитывается новый центр кластера, который вычисляется как среднее значение атрибутов всех объектов, входящих в кластер. Процедура повторяется до тех пор, пока изменяются центры кластеров."
            },
            {
                "name": "ЦентрТяжести",
                "name_en": "Centroid",
                "description": "Метод \"Центр тяжести\". Метод кластеризации, в котором объект присоединяется к той группе, для которой расстояние до центра тяжести минимально."
            }
        ]
    },
    {
        "name": "ТипЕдиницыИнтервалаВремениАнализаДанных",
        "name_en": "DataAnalysisTimeIntervalUnitType",
        "description": "Содержит варианты типов единицы интервала времени. Значение интервала времени определяется по указанному значению времени с учетом кратности.",
        "values": [
            {
                "name": "Год",
                "name_en": "Year",
                "description": "Тип единицы интервала времени \"Год\"."
            },
            {
                "name": "Декада",
                "name_en": "TenDays",
                "description": "Тип единицы интервала времени \"Декада\"."
            },
            {
                "name": "День",
                "name_en": "Day",
                "description": "Тип единицы интервала времени \"День\"."
            },
            {
                "name": "Квартал",
                "name_en": "Quarter",
                "description": "Тип единицы интервала времени \"Квартал\"."
            },
            {
                "name": "Месяц",
                "name_en": "Month",
                "description": "Тип единицы интервала времени \"Месяц\"."
            },
            {
                "name": "Минута",
                "name_en": "Minute",
                "description": "Тип единицы интервала времени \"Минута\"."
            },
            {
                "name": "Неделя",
                "name_en": "Week",
                "description": "Тип единицы интервала времени \"Неделя\"."
            },
            {
                "name": "Полугодие",
                "name_en": "HalfYear",
                "description": "Тип единицы интервала времени \"Полугодие\"."
            },
            {
                "name": "Секунда",
                "name_en": "Second",
                "description": "Тип единицы интервала времени \"Секунда\"."
            },
            {
                "name": "ТекущаяДекада",
                "name_en": "CurrentTenDays",
                "description": "Тип единицы интервала времени \"ТекущаяДекада\"."
            },
            {
                "name": "ТекущаяМинута",
                "name_en": "CurrentMinute",
                "description": "Тип единицы интервала времени \"Текущая минута\"."
            },
            {
                "name": "ТекущаяНеделя",
                "name_en": "CurrentWeek",
                "description": "Тип единицы интервала времени \"Текущая неделя\"."
            },
            {
                "name": "ТекущееПолугодие",
                "name_en": "CurrentHalfYear",
                "description": "Тип единицы интервала времени \"Текущее полугодие\"."
            },
            {
                "name": "ТекущийГод",
                "name_en": "CurrentYear",
                "description": "Тип единицы интервала времени \"Текущий год\"."
            },
            {
                "name": "ТекущийДень",
                "name_en": "CurrentDay",
                "description": "Тип единицы интервала времени \"Текущий день\"."
            },
            {
                "name": "ТекущийКвартал",
                "name_en": "CurrentQuarter",
                "description": "Тип единицы интервала времени \"Текущий квартал\"."
            },
            {
                "name": "ТекущийМесяц",
                "name_en": "CurrentMonth",
                "description": "Тип единицы интервала времени \"Текущий месяц\"."
            },
            {
                "name": "ТекущийЧас",
                "name_en": "CurrentHour",
                "description": "Тип единицы интервала времени \"Текущий час\"."
            },
            {
                "name": "Час",
                "name_en": "Hour",
                "description": "Тип единицы интервала времени \"Час\"."
            }
        ]
    },
    {
        "name": "ТипЗаполненияТаблицыРезультатаАнализаДанных",
        "name_en": "DataAnalysisResultTableFillType",
        "description": "Содержит варианты типов заполнения результирующей таблицы анализа.",
        "values": [
            {
                "name": "ВсеПоля",
                "name_en": "AllFields",
                "description": "Заполнять всеми полями."
            },
            {
                "name": "ИспользуемыеПоля",
                "name_en": "UsedFields",
                "description": "Заполнять используемыми полями."
            },
            {
                "name": "КлючевыеПоля",
                "name_en": "KeyFields",
                "description": "Заполнять ключевыми полями."
            },
            {
                "name": "НеЗаполнять",
                "name_en": "DontFill",
                "description": "Не заполнять результирующую таблицу."
            }
        ]
    },
    {
        "name": "ТипИспользованияЧисловыхЗначенийАнализаДанных",
        "name_en": "DataAnalysisNumericValueUseType",
        "description": "Содержит варианты использования числовых полей в анализе данных.",
        "values": [
            {
                "name": "КакБулево",
                "name_en": "AsBoolean",
                "description": "Интерпретировать 0 как Ложь, остальные значения - как Истина."
            },
            {
                "name": "КакЧисло",
                "name_en": "AsNumeric",
                "description": "Использовать числовые значения как есть."
            }
        ]
    },
    {
        "name": "ТипИсточникаДанныхПоискаАссоциаций",
        "name_en": "AssociationRulesDataSourceType",
        "description": "Содержит варианты типов источников поиска ассоциаций.",
        "values": [
            {
                "name": "Объектный",
                "name_en": "Object",
                "description": "Источник данных содержит объекты с характеристиками."
            },
            {
                "name": "Событийный",
                "name_en": "Event",
                "description": "Источник данных содержит список событий. Например, состав документа продажи."
            }
        ]
    },
    {
        "name": "ТипКолонкиАнализаДанныхДеревоРешений",
        "name_en": "DataAnalysisColumnTypeDecisionTree",
        "description": "Содержит варианты типов колонок анализа данных - дерево решений.",
        "values": [
            {
                "name": "Входная",
                "name_en": "Input",
                "description": "Входная колонка."
            },
            {
                "name": "НеИспользуемая",
                "name_en": "NotUsed",
                "description": "Колонка не используется."
            },
            {
                "name": "Прогнозируемая",
                "name_en": "Predictable",
                "description": "Колонка прогноза."
            }
        ]
    },
    {
        "name": "ТипКолонкиАнализаДанныхКластеризация",
        "name_en": "DataAnalysisColumnTypeClusterization",
        "description": "Содержит варианты типов колонок кластерного анализа.",
        "values": [
            {
                "name": "Входная",
                "name_en": "Input",
                "description": "Входная колонка."
            },
            {
                "name": "ВходнаяИПрогнозируемая",
                "name_en": "InputAndPredictable",
                "description": "Входная и прогнозируемая колонка."
            },
            {
                "name": "Ключ",
                "name_en": "Key",
                "description": "Ключевая колонка."
            },
            {
                "name": "НеИспользуемая",
                "name_en": "NotUsed",
                "description": "Не используемая колонка."
            },
            {
                "name": "Прогнозируемая",
                "name_en": "Predictable",
                "description": "Колонка прогноза."
            }
        ]
    },
    {
        "name": "ТипКолонкиАнализаДанныхОбщаяСтатистика",
        "name_en": "DataAnalysisColumnTypeSummaryStatistics",
        "description": "Содержит варианты типов колонки общей статистики.",
        "values": [
            {
                "name": "Входная",
                "name_en": "Input",
                "description": "Входная колонка."
            },
            {
                "name": "НеИспользуемая",
                "name_en": "NotUsed",
                "description": "Колонка не используется."
            }
        ]
    },
    {
        "name": "ТипКолонкиАнализаДанныхПоискАссоциаций",
        "name_en": "DataAnalysisColumnTypeAssociationRules",
        "description": "Содержит варианты типов колонок поиска ассоциаций.",
        "values": [
            {
                "name": "НеИспользуемая",
                "name_en": "NotUsed",
                "description": "Не используемая колонка."
            },
            {
                "name": "Объект",
                "name_en": "Object",
                "description": "Колонка, содержащая объекты."
            },
            {
                "name": "Элемент",
                "name_en": "Item",
                "description": "Колонка, содержащая элементы."
            }
        ]
    },
    {
        "name": "ТипКолонкиАнализаДанныхПоискПоследовательностей",
        "name_en": "DataAnalysisColumnTypeSequentialPatterns",
        "description": "Содержит варианты типов колонок поиска последовательностей.",
        "values": [
            {
                "name": "Время",
                "name_en": "Time",
                "description": "Содержит время события."
            },
            {
                "name": "НеИспользуемая",
                "name_en": "NotUsed",
                "description": "Колонка не используется."
            },
            {
                "name": "Последовательность",
                "name_en": "Sequence",
                "description": "Колонка содержит последовательность."
            },
            {
                "name": "Элемент",
                "name_en": "Item",
                "description": "Колонка содержит элемент."
            }
        ]
    },
    {
        "name": "ТипКолонкиМоделиПрогноза",
        "name_en": "PredictionModelColumnType",
        "description": "Содержит варианты типов колонок модели прогноза.",
        "values": [
            {
                "name": "Входная",
                "name_en": "Input",
                "description": "Входная колонка модели."
            },
            {
                "name": "КолонкаИсточникаДанных",
                "name_en": "DataSourceColumn",
                "description": "Содержит колонку источника данных."
            },
            {
                "name": "Прогнозируемая",
                "name_en": "Predictable",
                "description": "Прогнозируемая колонка модели."
            }
        ]
    },
    {
        "name": "ТипМерыРасстоянияАнализаДанных",
        "name_en": "DataAnalysisDistanceMetricType",
        "description": "Содержит варианты измерения расстояния между двумя объектами.",
        "values": [
            {
                "name": "ЕвклидоваМетрика",
                "name_en": "Euclidean",
                "description": "Расстояние между двумя объектами вычисляется по формуле: D = (sum( Wi * (Xi - Yi)^2) )^(1/2), где Xi, Yi - значения атрибутов объектов, Wi - весовой коэффициент. i - номер атрибута, от 1 до n, где n - число атрибутов."
            },
            {
                "name": "ЕвклидоваМетрикаВКвадрате",
                "name_en": "SquaredEuclidean",
                "description": "Расстояние между двумя объектами вычисляется по формуле: D = sum( Wi * (Xi - Yi)^2), где Xi, Yi - значения атрибутов объектов, Wi - весовой коэффициент. i - номер атрибута, от 1 до n, где n - число атрибутов."
            },
            {
                "name": "МетрикаГорода",
                "name_en": "CityBlock",
                "description": "Расстояние между двумя объектами вычисляется по формуле: D = sum (Wi * | Xi - Yi | ), где Xi, Yi - значения атрибутов объектов, Wi - весовой коэффициент. i - номер атрибута, от 1 до n, где n - число атрибутов."
            },
            {
                "name": "МетрикаДоминирования",
                "name_en": "Maximum",
                "description": "Расстояние между двумя объектами вычисляется по формуле: D = max ( Wi * | Xi - Yi | ), где Xi, Yi - значения атрибутов объектов, Wi - весовой коэффициент. i - номер атрибута, от 1 до n, где n - число атрибутов."
            }
        ]
    },
    {
        "name": "ТипОтсеченияПравилАссоциации",
        "name_en": "AssociationRulesPruneType",
        "description": "Содержит варианты типов отсечения найденных правил ассоциаций.",
        "values": [
            {
                "name": "Избыточные",
                "name_en": "Redundant",
                "description": "Отсекать избыточные правила."
            },
            {
                "name": "Покрытые",
                "name_en": "Covered",
                "description": "Отсекать правила, покрытые другими правилами."
            }
        ]
    },
    {
        "name": "ТипПоляАнализаДанных",
        "name_en": "DataAnalysisFieldType",
        "description": "Содержит варианты типов поля анализа данных.",
        "values": [
            {
                "name": "ОбъектАнализаДанных",
                "name_en": "DataAnalysisObject",
                "description": "Поле анализа данных является объектом анализа данных."
            },
            {
                "name": "Поле",
                "name_en": "Field",
                "description": "Поле анализа данных является обычным полем."
            }
        ]
    },
    {
        "name": "ТипСтандартизацииАнализаДанных",
        "name_en": "DataAnalysisStandardizationType",
        "description": "Содержит варианты стандартизации данных.",
        "values": [
            {
                "name": "НеСтандартизировать",
                "name_en": "DontStandardize",
                "description": "Не стандартизировать данные."
            },
            {
                "name": "Стандартизировать",
                "name_en": "Standardize",
                "description": "Стандартизировать данные."
            }
        ]
    },
    {
        "name": "ТипУпрощенияДереваРешений",
        "name_en": "DecisionTreeSimplificationType",
        "description": "Содержит варианты типов упрощения дерева решения.",
        "values": [
            {
                "name": "НеУпрощать",
                "name_en": "DontSimplify",
                "description": "Не упрощать построенное дерево."
            },
            {
                "name": "Упрощать",
                "name_en": "Simplify",
                "description": "Упрощать полученное дерево."
            }
        ]
    },
    {
        "name": "ТипУпорядочиванияПравилАссоциацииАнализаДанных",
        "name_en": "DataAnalysisAssociationRulesOrderType",
        "description": "Содержит варианты упорядочивания найденных правил ассоциации.",
        "values": [
            {
                "name": "ПоДостоверности",
                "name_en": "ByConfidence",
                "description": "Упорядочивание производится по достоверности правила."
            },
            {
                "name": "ПоЗначимости",
                "name_en": "ByImportance",
                "description": "Упорядочивание производится по значимости правила."
            },
            {
                "name": "ПоКоличествуСлучаев",
                "name_en": "BySupport",
                "description": "Упорядочивание производится по количеству случаев, в которых наблюдается правило."
            }
        ]
    },
    {
        "name": "ТипУпорядочиванияШаблоновПоследовательностейАнализаДанных",
        "name_en": "DataAnalysisSequentialPatternsOrderType",
        "description": "Тип упорядочивания найденных шаблонов последовательностей.",
        "values": [
            {
                "name": "ПоДлине",
                "name_en": "ByLength",
                "description": "Упорядочивание производится по длине последовательности."
            },
            {
                "name": "ПоКоличествуСлучаев",
                "name_en": "BySupport",
                "description": "Упорядочивание производится по количеству случаев."
            }
        ]
    },
    {
        "name": "НазначениеТипаXML",
        "name_en": "XMLTypeAssignment",
        "description": "Содержит варианты необходимости назначения типа элементу XML при сохранении значения.",
        "values": [
            {
                "name": "Неявное",
                "name_en": "Implicit",
                "description": "Назначение типа при сохранении значения в поток XML производиться не будет."
            },
            {
                "name": "Явное",
                "name_en": "Explicit",
                "description": "Явное назначение типа при записи значения в поток XML."
            }
        ]
    },
    {
        "name": "ПробельныеСимволыXML",
        "name_en": "XMLSpace",
        "description": "Варианты реакции на пробельные символы XML в процессе чтения.",
        "values": [
            {
                "name": "ПоУмолчанию",
                "name_en": "Default",
                "description": "Поведение при чтении определяется поведением по умолчанию для спецификации XML."
            },
            {
                "name": "Сохранять",
                "name_en": "Preserve",
                "description": "При чтении пробельные символы сохраняются."
            }
        ]
    },
    {
        "name": "ТипАтрибутаXML",
        "name_en": "XMLAttributeType",
        "description": "Содержит варианты типов атрибута XML.",
        "values": [
            {
                "name": "CDATA",
                "name_en": "CDATA",
                "description": "Символьные данные."
            },
            {
                "name": "ENTITIES",
                "name_en": "ENTITIES",
                "description": "Список сущностей."
            },
            {
                "name": "ENTITY",
                "name_en": "ENTITY",
                "description": "Сущность."
            },
            {
                "name": "ENUMERATION",
                "name_en": "ENUMERATION",
                "description": "Перечисление."
            },
            {
                "name": "ID",
                "name_en": "ID",
                "description": "Идентификатор."
            },
            {
                "name": "IDREF",
                "name_en": "IDREF",
                "description": "Ссылка на идентификатор."
            },
            {
                "name": "IDREFS",
                "name_en": "IDREFS",
                "description": "Список ссылок на идентификаторы."
            },
            {
                "name": "NMTOKEN",
                "name_en": "NMTOKEN",
                "description": "Токен."
            },
            {
                "name": "NMTOKENS",
                "name_en": "NMTOKENS",
                "description": "Список токенов."
            },
            {
                "name": "NOTATION",
                "name_en": "NOTATION",
                "description": "Нотация."
            }
        ]
    },
    {
        "name": "ТипКаноническогоXML",
        "name_en": "XMLCanonicalizationType",
        "description": "Содержит типы алгоритма приведения XML к каноническому виду.",
        "values": [
            {
                "name": "ИсключающийКаноническийXML",
                "name_en": "XMLExclusiveCanonicalization",
                "description": "Приведение к каноническому виду по w3c стандарту Exclusive XML Canonicalization. Комментарии игнорируются."
            },
            {
                "name": "ИсключающийКаноническийXMLСКомментариями",
                "name_en": "XMLExclusiveCanonicalizationWithComments",
                "description": "Приведение к каноническому виду по w3c стандарту Exclusive XML Canonicalization. Комментарии учитываются."
            },
            {
                "name": "КаноническийXML",
                "name_en": "XMLCanonicalization",
                "description": "Приведение к каноническому виду по w3c стандарту Canonical XML. Комментарии игнорируются."
            },
            {
                "name": "КаноническийXML1_1",
                "name_en": "XMLCanonicalization1_1",
                "description": "Приведение к каноническому виду по стандарту W3C \"Canonical XML 1.0\". Комментарии игнорируются."
            },
            {
                "name": "КаноническийXML1_1СКомментариями",
                "name_en": "XMLCanonicalization1_1WithComments",
                "description": "Приведение к каноническому виду по стандарту W3C \"Canonical XML 1.0\". Комментарии учитываются."
            },
            {
                "name": "КаноническийXMLСКомментариями",
                "name_en": "XMLCanonicalizationWithComments",
                "description": "Приведение к каноническому виду по w3c стандарту Canonical XML. Комментарии учитываются."
            }
        ]
    },
    {
        "name": "ТипПроверкиXML",
        "name_en": "XMLValidationType",
        "description": "Варианты проверок документа XML при чтении.",
        "values": [
            {
                "name": "НетПроверки",
                "name_en": "NoValidate",
                "description": "Чтение осуществляется без проверки."
            },
            {
                "name": "ОпределениеТипаДокумента",
                "name_en": "DocumentTypeDefinition",
                "description": "Проверка осуществляется на основании определения типа документа (DTD)."
            },
            {
                "name": "СхемаXML",
                "name_en": "XMLSchema",
                "description": "Проверка осуществляется на основании схемы XML."
            }
        ]
    },
    {
        "name": "ТипУзлаXML",
        "name_en": "XMLNodeType",
        "description": "Содержит варианты узлов XML, которые могут быть получены при чтении XML с помощью объекта",
        "values": [
            {
                "name": "Атрибут",
                "name_en": "Attribute",
                "description": "Соответствует атрибуту элемента XML."
            },
            {
                "name": "ИнструкцияОбработки",
                "name_en": "ProcessingInstruction",
                "description": "Соответствует инструкции обработки XML."
            },
            {
                "name": "Комментарий",
                "name_en": "Comment",
                "description": "Узел комментария."
            },
            {
                "name": "КонецСущности",
                "name_en": "EndEntity",
                "description": "Конец разбора разыменованной сущности XML."
            },
            {
                "name": "КонецЭлемента",
                "name_en": "EndElement",
                "description": "Соответствует концу элемента XML."
            },
            {
                "name": "НачалоЭлемента",
                "name_en": "StartElement",
                "description": "Соответствует узлу XML."
            },
            {
                "name": "Ничего",
                "name_en": "None",
                "description": "Нет никакого узла. Чтение еще не начато, или уже все прочитано."
            },
            {
                "name": "Нотация",
                "name_en": "Notation",
                "description": "Нотация XML."
            },
            {
                "name": "ОбъявлениеXML",
                "name_en": "XMLDeclaration",
                "description": "Объявление документа XML."
            },
            {
                "name": "ОпределениеТипаДокумента",
                "name_en": "DocumentTypeDefinition",
                "description": "Узел определения типа документа (DTD)."
            },
            {
                "name": "ПробельныеСимволы",
                "name_en": "Whitespace",
                "description": "Пробельные символы."
            },
            {
                "name": "СекцияCDATA",
                "name_en": "CDATASection",
                "description": "Узел секции CDATA."
            },
            {
                "name": "СсылкаНаСущность",
                "name_en": "EntityReference",
                "description": "Узел ссылки на сущность XML."
            },
            {
                "name": "Сущность",
                "name_en": "Entity",
                "description": "Узел определения сущности XML."
            },
            {
                "name": "Текст",
                "name_en": "Text",
                "description": "Соответствует тексту элемента XML."
            }
        ]
    },
    {
        "name": "ВариантXPathXS",
        "name_en": "XSXPathVariety",
        "description": "Содержит варианты использования выражения XPath.",
        "values": [
            {
                "name": "Поле",
                "name_en": "Field",
                "description": "Поле."
            },
            {
                "name": "Селектор",
                "name_en": "Selector",
                "description": "Селектор."
            }
        ]
    },
    {
        "name": "ВариантПростогоТипаXS",
        "name_en": "XSSimpleTypeVariety",
        "description": "Содержит варианты моделей содержания простого типа.",
        "values": [
            {
                "name": "Атомарная",
                "name_en": "Atomic",
                "description": "Атомарная модель содержания."
            },
            {
                "name": "Объединение",
                "name_en": "Union",
                "description": "Модель содержания - объединение."
            },
            {
                "name": "Список",
                "name_en": "List",
                "description": "Модель содержания - список."
            }
        ]
    },
    {
        "name": "ВидГруппыМоделиXS",
        "name_en": "XSCompositor",
        "description": "Вид группы модели.",
        "values": [
            {
                "name": "Все",
                "name_en": "All",
                "description": "Все."
            },
            {
                "name": "Выбор",
                "name_en": "Choice",
                "description": "Выбор."
            },
            {
                "name": "Последовательность",
                "name_en": "Sequence",
                "description": "Последовательность."
            }
        ]
    },
    {
        "name": "ЗавершенностьПростогоТипаXS",
        "name_en": "XSSimpleFinal",
        "description": "Содержит варианты завершения простого типа.",
        "values": [
            {
                "name": "Все",
                "name_en": "All",
                "description": "Все."
            },
            {
                "name": "Объединение",
                "name_en": "Union",
                "description": "Объединение."
            },
            {
                "name": "Ограничение",
                "name_en": "Restriction",
                "description": "Ограничение."
            },
            {
                "name": "Список",
                "name_en": "List",
                "description": "Список."
            }
        ]
    },
    {
        "name": "ЗавершенностьСоставногоТипаXS",
        "name_en": "XSComplexFinal",
        "description": "Содержит типы завершения составного типа.",
        "values": [
            {
                "name": "Все",
                "name_en": "All",
                "description": "Завершение всех видов наследования."
            },
            {
                "name": "Ограничение",
                "name_en": "Restriction",
                "description": "Завершение наследования ограничением."
            },
            {
                "name": "Расширение",
                "name_en": "Extension",
                "description": "Завершение наследования расширением."
            }
        ]
    },
    {
        "name": "ЗавершенностьСхемыXS",
        "name_en": "XSSchemaFinal",
        "description": "Содержит виды завершения для схемы XML.",
        "values": [
            {
                "name": "Все",
                "name_en": "All",
                "description": "Все."
            },
            {
                "name": "Объединение",
                "name_en": "Union",
                "description": "Объединение."
            },
            {
                "name": "Ограничение",
                "name_en": "Restriction",
                "description": "Ограничение."
            },
            {
                "name": "Расширение",
                "name_en": "Extension",
                "description": "Расширение."
            },
            {
                "name": "Список",
                "name_en": "List",
                "description": "Список."
            }
        ]
    },
    {
        "name": "ЗапрещенныеПодстановкиXS",
        "name_en": "XSProhibitedSubstitutions",
        "description": "Виды запрещения подстановок.",
        "values": [
            {
                "name": "Все",
                "name_en": "All",
                "description": "Запрещение всех подстановок."
            },
            {
                "name": "Ограничение",
                "name_en": "Restriction",
                "description": "Запрещение ограничивающей подстановки."
            },
            {
                "name": "Расширение",
                "name_en": "Extension",
                "description": "Запрещение расширяющей подстановки."
            }
        ]
    },
    {
        "name": "ИсключенияГруппПодстановкиXS",
        "name_en": "XSSubstitutionGroupExclusions",
        "description": "Содержит виды исключения групп подстановки.",
        "values": [
            {
                "name": "Все",
                "name_en": "All",
                "description": "Все."
            },
            {
                "name": "Ограничение",
                "name_en": "Restriction",
                "description": "Ограничение."
            },
            {
                "name": "Расширение",
                "name_en": "Extension",
                "description": "Расширение."
            }
        ]
    },
    {
        "name": "КатегорияИспользованияАтрибутаXS",
        "name_en": "XSAttributeUseCategory",
        "description": "Содержит категории использования атрибута схемы XML.",
        "values": [
            {
                "name": "Запрещено",
                "name_en": "Prohibited",
                "description": "Использование атрибута запрещено."
            },
            {
                "name": "Необязательно",
                "name_en": "Optional",
                "description": "Использование атрибута необязательно."
            },
            {
                "name": "Обязательно",
                "name_en": "Required",
                "description": "Использование атрибута обязательно."
            }
        ]
    },
    {
        "name": "КатегорияОграниченияИдентичностиXS",
        "name_en": "XSIdentityConstraintCategory",
        "description": "Содержит категории ограничения идентичности.",
        "values": [
            {
                "name": "Ключ",
                "name_en": "Key",
                "description": "Ключ."
            },
            {
                "name": "СсылкаНаКлюч",
                "name_en": "KeyRef",
                "description": "Ссылка на ключ."
            },
            {
                "name": "Уникальность",
                "name_en": "Unique",
                "description": "Уникальность."
            }
        ]
    },
    {
        "name": "КатегорияОграниченияПространствИменXS",
        "name_en": "XSNamespaceConstraintCategory",
        "description": "Содержит категории ограничения использования пространств имен.",
        "values": [
            {
                "name": "Кроме",
                "name_en": "Not",
                "description": "Допускается использование любого пространства имен, кроме указанного."
            },
            {
                "name": "Любое",
                "name_en": "Any",
                "description": "Допускается использование любого пространства имен."
            },
            {
                "name": "Набор",
                "name_en": "Set",
                "description": "Допускается использование пространств имен из набора."
            }
        ]
    },
    {
        "name": "МодельСодержимогоXS",
        "name_en": "XSContentModel",
        "description": "Определяет вид модели содержания.",
        "values": [
            {
                "name": "Простая",
                "name_en": "Simple",
                "description": "Простая модель содержания."
            },
            {
                "name": "Составная",
                "name_en": "Complex",
                "description": "Составная модель содержания."
            }
        ]
    },
    {
        "name": "МетодНаследованияXS",
        "name_en": "XSDerivationMethod",
        "description": "Метод наследования типов.",
        "values": [
            {
                "name": "Ограничение",
                "name_en": "Restriction",
                "description": "Наследование ограничением."
            },
            {
                "name": "Расширение",
                "name_en": "Extension",
                "description": "Наследование расширением."
            }
        ]
    },
    {
        "name": "ОбработкаПробельныхСимволовXS",
        "name_en": "XSWhitespaceHandling",
        "description": "Содержит варианты способов обработки пробельных символов.",
        "values": [
            {
                "name": "Заменять",
                "name_en": "Replace",
                "description": "Заменять пробельные символы."
            },
            {
                "name": "Сворачивать",
                "name_en": "Collapse",
                "description": "Сворачивать пробельные символы."
            },
            {
                "name": "Сохранять",
                "name_en": "Preserve",
                "description": "Сохранять пробельные символы."
            }
        ]
    },
    {
        "name": "ОбработкаСодержимогоXS",
        "name_en": "XSProcessContents",
        "description": "Содержит типы обработки содержимого.",
        "values": [
            {
                "name": "Пропустить",
                "name_en": "Skip",
                "description": "Пропустить при проверке."
            },
            {
                "name": "Слабая",
                "name_en": "Lax",
                "description": "Слабая проверка."
            },
            {
                "name": "Строгая",
                "name_en": "Strict",
                "description": "Строгая проверка."
            }
        ]
    },
    {
        "name": "ОграничениеЗначенияXS",
        "name_en": "XSConstraint",
        "description": "Содержит варианты способов ограничения значения.",
        "values": [
            {
                "name": "ПоУмолчанию",
                "name_en": "Default",
                "description": "Значение по умолчанию."
            },
            {
                "name": "Фиксированное",
                "name_en": "Fixed",
                "description": "Фиксированное значение."
            }
        ]
    },
    {
        "name": "НедопустимыеПодстановкиXS",
        "name_en": "XSDisallowedSubstitutions",
        "description": "Содержит виды запрета подстановки.",
        "values": [
            {
                "name": "Все",
                "name_en": "All",
                "description": "Все."
            },
            {
                "name": "Ограничение",
                "name_en": "Restriction",
                "description": "Ограничение."
            },
            {
                "name": "Подстановка",
                "name_en": "Substitution",
                "description": "Подстановка."
            },
            {
                "name": "Расширение",
                "name_en": "Extension",
                "description": "Расширение."
            }
        ]
    },
    {
        "name": "ТипКомпонентыXS",
        "name_en": "XSComponentType",
        "description": "Содержит варианты типов компонентов объектной модели схемы XML.",
        "values": [
            {
                "name": "Аннотация",
                "name_en": "Annotation",
                "description": "Аннотация."
            },
            {
                "name": "Включение",
                "name_en": "Include",
                "description": "Директива включения."
            },
            {
                "name": "ГруппаМодели",
                "name_en": "ModelGroup",
                "description": "Группа модели."
            },
            {
                "name": "Документация",
                "name_en": "Documentation",
                "description": "Документация."
            },
            {
                "name": "Импорт",
                "name_en": "Import",
                "description": "Директива импорта."
            },
            {
                "name": "ИнформацияПриложения",
                "name_en": "AppInfo",
                "description": "Информация приложения."
            },
            {
                "name": "ИспользованиеАтрибута",
                "name_en": "AttributeUse",
                "description": "Компонент использования атрибута."
            },
            {
                "name": "МаксимальноВключающийФасет",
                "name_en": "MaxInclusiveFacet",
                "description": "Фасет максимального включающего значения."
            },
            {
                "name": "МаксимальноИсключающийФасет",
                "name_en": "MaxExclusiveFacet",
                "description": "Фасет максимального исключающего значения."
            },
            {
                "name": "Маска",
                "name_en": "Wildcard",
                "description": "Маска."
            },
            {
                "name": "МинимальноВключающийФасет",
                "name_en": "MinInclusiveFacet",
                "description": "Фасет минимального включающего значения."
            },
            {
                "name": "МинимальноИсключающийФасет",
                "name_en": "MinExclusiveFacet",
                "description": "Фасет минимального исключающего значения."
            },
            {
                "name": "ОбъявлениеАтрибута",
                "name_en": "AttributeDeclaration",
                "description": "Объявление атрибута."
            },
            {
                "name": "ОбъявлениеНотации",
                "name_en": "NotationDeclaration",
                "description": "Объявление нотации."
            },
            {
                "name": "ОбъявлениеЭлемента",
                "name_en": "ElementDeclaration",
                "description": "Объявление элемента."
            },
            {
                "name": "ОпределениеXPath",
                "name_en": "XPathDefinition",
                "description": "Определение XPath."
            },
            {
                "name": "ОпределениеГруппыАтрибутов",
                "name_en": "AttributeGroupDefinition",
                "description": "Определение группы атрибутов."
            },
            {
                "name": "ОпределениеГруппыМодели",
                "name_en": "ModelGroupDefinition",
                "description": "Определение группы модели."
            },
            {
                "name": "ОпределениеОграниченияИдентичности",
                "name_en": "IdentityConstraintDefinition",
                "description": "Определение ограничения идентичности."
            },
            {
                "name": "ОпределениеПростогоТипа",
                "name_en": "SimpleTypeDefinition",
                "description": "Определение простого типа."
            },
            {
                "name": "ОпределениеСоставногоТипа",
                "name_en": "ComplexTypeDefinition",
                "description": "Определение составного типа."
            },
            {
                "name": "Переопределение",
                "name_en": "Redefine",
                "description": "Директива переопределения."
            },
            {
                "name": "Схема",
                "name_en": "Schema",
                "description": "Схема."
            },
            {
                "name": "ФасетДлины",
                "name_en": "LengthFacet",
                "description": "Фасет длины."
            },
            {
                "name": "ФасетКоличестваРазрядовДробнойЧасти",
                "name_en": "FractionDigitsFacet",
                "description": "Фасет количества цифр дробной части."
            },
            {
                "name": "ФасетМаксимальнойДлины",
                "name_en": "MaxLengthFacet",
                "description": "Фасет максимальной длины."
            },
            {
                "name": "ФасетМинимальнойДлины",
                "name_en": "MinLengthFacet",
                "description": "Фасет минимальной длины."
            },
            {
                "name": "ФасетОбразца",
                "name_en": "PatternFacet",
                "description": "Фасет образца."
            },
            {
                "name": "ФасетОбщегоКоличестваРазрядов",
                "name_en": "TotalDigitsFacet",
                "description": "Фасет общего количества цифр."
            },
            {
                "name": "ФасетПеречисления",
                "name_en": "EnumerationFacet",
                "description": "Фасет перечисления."
            },
            {
                "name": "ФасетПробельныхСимволов",
                "name_en": "WhitespaceFacet",
                "description": "Фасет пробельных символов."
            },
            {
                "name": "Фрагмент",
                "name_en": "Particle",
                "description": "Фрагмент."
            }
        ]
    },
    {
        "name": "ФормаПредставленияXS",
        "name_en": "XSForm",
        "description": "Содержит варианты форм представления элементов или атрибутов.",
        "values": [
            {
                "name": "Квалифицированная",
                "name_en": "Qualified",
                "description": "Квалифицированная форма."
            },
            {
                "name": "Неквалифицированная",
                "name_en": "Unqualified",
                "description": "Неквалифицированная."
            }
        ]
    },
    {
        "name": "ВариантЗаписиДатыJSON",
        "name_en": "JSONDateWritingVariant",
        "description": "Определяет варианты записи даты JSON.",
        "values": [
            {
                "name": "ЛокальнаяДата",
                "name_en": "LocalDate",
                "description": "Локальная дата без указания часового пояса. Пример для формата ISO: \"2009-02-15T10:00:00\"."
            },
            {
                "name": "ЛокальнаяДатаСоСмещением",
                "name_en": "LocalDateWithOffset",
                "description": "Локальная дата с указание смещения относительно всемирного координированного времени (UTC). Пример для формата ISO: 2009-02-15T10:00:00+04:00."
            },
            {
                "name": "УниверсальнаяДата",
                "name_en": "UniversalDate",
                "description": "Дата в поясе UTC.  Пример для формата ISO: \"2009-02-15T06:00:00Z\"."
            }
        ]
    },
    {
        "name": "ПереносСтрокJSON",
        "name_en": "JSONLineBreak",
        "description": "Варианты символов переноса строки, использующихся при формировании документа.",
        "values": [
            {
                "name": "Unix",
                "name_en": "Unix",
                "description": "Строки переносятся. Для переноса используются символы переноса строк Unix - \\n."
            },
            {
                "name": "Windows",
                "name_en": "Windows",
                "description": "Строки переносятся. Для переноса используются символы переноса строк Microsoft Windows - \\r\\n."
            },
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Строки переносятся. Для переноса строк используются символы переноса строк в зависимости от текущей операционной системы (Windows или Unix)."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Строки не переносятся."
            }
        ]
    },
    {
        "name": "ТипЗначенияJSON",
        "name_en": "JSONValueType",
        "description": "Содержит типы значений JSON.",
        "values": [
            {
                "name": "Null",
                "name_en": "Null",
                "description": "Указывает, что значение является Null в формате JSON."
            },
            {
                "name": "Булево",
                "name_en": "Boolean",
                "description": "Указывает, что значение является булевым JSON."
            },
            {
                "name": "ИмяСвойства",
                "name_en": "PropertyName",
                "description": "Указывает, что значение является именем свойства JSON."
            },
            {
                "name": "Комментарий",
                "name_en": "Comment",
                "description": "Указывает, что значение является комментарием JSON."
            },
            {
                "name": "КонецМассива",
                "name_en": "ArrayEnd",
                "description": "Указывает, что значение является концом массива JSON."
            },
            {
                "name": "КонецОбъекта",
                "name_en": "ObjectEnd",
                "description": "Указывает, что значение является концом объекта JSON."
            },
            {
                "name": "НачалоМассива",
                "name_en": "ArrayStart",
                "description": "Указывает, что значение является началом массива JSON."
            },
            {
                "name": "НачалоОбъекта",
                "name_en": "ObjectStart",
                "description": "Указывает, что значение является началом объекта JSON."
            },
            {
                "name": "Ничего",
                "name_en": "None",
                "description": "Указывает, что значения нет."
            },
            {
                "name": "Строка",
                "name_en": "String",
                "description": "Указывает, что значение является строкой JSON."
            },
            {
                "name": "Число",
                "name_en": "Number",
                "description": "Указывает, что значение является числом JSON."
            }
        ]
    },
    {
        "name": "ФорматДатыJSON",
        "name_en": "JSONDateFormat",
        "description": "Определяет различные форматы сериализации/десериализации дат JSON-объектов.",
        "values": [
            {
                "name": "ISO",
                "name_en": "ISO",
                "description": "Формат даты ISO вида: \"ГГГГ-ММ-ДДTЧЧ:ММ:ССZ\". Например: \"2009-02-15T00:00:00Z\". Дата сериализуется в дату стандарта UTC."
            },
            {
                "name": "JavaScript",
                "name_en": "JavaScript",
                "description": "Формат даты JavaScript вида: \"1234656000000\". Указывается количество миллисекунд, прошедших с начала эры Unix (Unix Epoch)."
            },
            {
                "name": "Microsoft",
                "name_en": "Microsoft",
                "description": "Формат даты Microsoft вида: \"/Date(123456000000)/\". Этот же вариант в формате JSON с экранированием будет выглядеть следующим образом: \"\\/Date(123456000000)\\/\".  Дата указывается в формате Unix-времени. JSON поддерживает опциональное экранирование символа \"/\", поэтому для чтения допускаются оба варианта."
            }
        ]
    },
    {
        "name": "ЭкранированиеСимволовJSON",
        "name_en": "JSONCharactersEscapeMode",
        "description": "Содержит варианты способов экранирования символов JSON.",
        "values": [
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Не экранировать символы."
            },
            {
                "name": "СимволыВнеASCII",
                "name_en": "NotASCIISymbols",
                "description": "Экранировать символы, не входящие в кодировку ASCII."
            },
            {
                "name": "СимволыВнеBMP",
                "name_en": "SymbolsNotInBMP",
                "description": "Экранировать символы, которые в UTF-16 будут представлены \"суррогатной парой\" (двумя символами UTF-16)."
            }
        ]
    },
    {
        "name": "КатегорияСодержимогоHTML",
        "name_en": "HTMLContentCategory",
        "description": "Содержит варианты способов очистки содержимого HTML-документа.",
        "values": [
            {
                "name": "AppletТеги",
                "name_en": "AppletTags",
                "description": "Из документа будут удалены все элементы applet и их дочерние элементы."
            },
            {
                "name": "AreaТеги",
                "name_en": "AreaTags",
                "description": "Из документа будут удалены все атрибуты href, содержащиеся в элементах area. Таким образом, area href=\"dest\" примет вид area."
            },
            {
                "name": "EmbedТеги",
                "name_en": "EmbedTags",
                "description": "Из документа будут удалены все элементы embed и их дочерние элементы."
            },
            {
                "name": "FrameТеги",
                "name_en": "FrameTags",
                "description": "Из документа будут удалены все элементы frame и их дочерние элементы."
            },
            {
                "name": "IframeТеги",
                "name_en": "IframeTags",
                "description": "Из документа будут удалены все элементы iframe и их дочерние элементы."
            },
            {
                "name": "ImportАтрибуты",
                "name_en": "ImportAttributes",
                "description": "Из документа будут удалены все элементы, у которых есть атрибуты rel=\"import\" и href с любым значением, т.е. будут удалены выражения вида: link rel=\"import\" href=\"any/href/link\"/."
            },
            {
                "name": "JavaScriptТеги",
                "name_en": "JavaScriptTags",
                "description": "Из документа будут удалены все элементы script и их дочерние элементы."
            },
            {
                "name": "LinkТеги",
                "name_en": "LinkTags",
                "description": "Из документа будут удалены все элементы link, у которых атрибут type не равен css, т.е.: link type=\"text/html\" будет удален, а link type=\"css\" удален не будет."
            },
            {
                "name": "NoembedТеги",
                "name_en": "NoembedTags",
                "description": "Из документа будут удалены все элементы noembed и их дочерние элементы."
            },
            {
                "name": "ObjectТеги",
                "name_en": "ObjectTags",
                "description": "Из документа будут удалены все элементы object и их дочерние элементы."
            },
            {
                "name": "SourceТеги",
                "name_en": "SourceTags",
                "description": "Из документа будут удалены все элементы source и их дочерние элементы."
            },
            {
                "name": "StyleТеги",
                "name_en": "StyleTags",
                "description": "Из документа будут удалены все элементы style с атрибутом type, значение которого отличается от text/css, т.е.: style type=\"text/html\" src=\"some/link/to/src\" будет удален, а style type=\"text/css\" src=\"some/link/to/src\" удален не будет."
            },
            {
                "name": "W3IncludeАтрибуты",
                "name_en": "W3IncludeAttributes",
                "description": "Из документа будут удалены все атрибуты \"w3-include-html\".  Например, div w3-include-html=\"content.html\" Some text/divбудет преобразован в div Some text /div."
            },
            {
                "name": "Все",
                "name_en": "All",
                "description": "Из документа будут удалены уязвимости, которые удовлетворяют хотя бы одному из критериев: обработчики событий, элементы w3-includes, элементы applet, area, embed, и т.д."
            },
            {
                "name": "ОбработчикиСобытий",
                "name_en": "EventsHandlers",
                "description": "Из документа будут удалены все атрибуты, имя которых начинается на on. Например, div onclick=\"test\"Пример текста/div будет преобразован в divПример текста/div."
            }
        ]
    },
    {
        "name": "ДействиеПостроителяDOM",
        "name_en": "DOMBuilderAction",
        "description": "Содержит варианты действий, которые можно выполнить при создании узла в контексте документа DOM.",
        "values": [
            {
                "name": "ВставитьПеред",
                "name_en": "InsertBefore",
                "description": "Вставить до. Результат чтения добавляется непосредственно до узла контекста документа. В качестве узла контекста могут выступать узлы, имеющие в качестве родительского: Элемент или ФрагментДокумента."
            },
            {
                "name": "ВставитьПосле",
                "name_en": "InsertAfter",
                "description": "Вставить после. Результат чтения добавляется непосредственно после узла контекста документа. В качестве узла контекста могут выступать узлы, имеющие в качестве родительского: Элемент или ФрагментДокумента."
            },
            {
                "name": "ДобавитьКакДочерние",
                "name_en": "AppendAsChildren",
                "description": "Добавить как дочерние узлы. Результат чтения добавляется в узел контекста документа в качестве дочерних узлов. В качестве узла контекста могут выступать узлы: Элемент или ФрагментДокумента."
            },
            {
                "name": "Заменить",
                "name_en": "Replace",
                "description": "Заменить. Результат чтения заменяет узел контекста документа. В качестве узла контекста могут выступать узлы, имеющие в качестве родительского: Элемент или ФрагментДокумента."
            },
            {
                "name": "ЗаменитьДочерние",
                "name_en": "ReplaceChildren",
                "description": "Заменить дочерние узлы. Результат чтения заменяет дочерние узлы контекста документа. В качестве узла контекста могут выступать: Элемент, Документ или ФрагментДокумента."
            }
        ]
    },
    {
        "name": "ПараметрыОтбораУзловDOM",
        "name_en": "DOMNodeFilterParameters",
        "description": "Содержит перечисления, определяющее состав фильтруемых узлов DOM.",
        "values": [
            {
                "name": "ОтображатьАтрибут",
                "name_en": "ShowAttribute",
                "description": "Отображать узлы атрибутов."
            },
            {
                "name": "ОтображатьВсе",
                "name_en": "ShowAll",
                "description": "Отображать все узлы."
            },
            {
                "name": "ОтображатьДокумент",
                "name_en": "ShowDocument",
                "description": "Отображать узел документа DOM."
            },
            {
                "name": "ОтображатьИнструкциюОбработки",
                "name_en": "ShowProcessingInstruction",
                "description": "Отображать узлы инструкций обработки."
            },
            {
                "name": "ОтображатьКомментарий",
                "name_en": "ShowComment",
                "description": "Отображать узлы комментариев."
            },
            {
                "name": "ОтображатьНотацию",
                "name_en": "ShowNotation",
                "description": "Отображать узлы нотаций DOM."
            },
            {
                "name": "ОтображатьОпределениеТипаДокумента",
                "name_en": "ShowDocumentType",
                "description": "Отображать узел определения типа документа."
            },
            {
                "name": "ОтображатьСекцииCDATA",
                "name_en": "ShowCDATASection",
                "description": "Отображать узлы секций CDATA."
            },
            {
                "name": "ОтображатьСсылкуНаСущность",
                "name_en": "ShowEntityReference",
                "description": "Отображать узлы ссылок на сущности DOM."
            },
            {
                "name": "ОтображатьСущность",
                "name_en": "ShowEntity",
                "description": "Отображать узлы сущностей."
            },
            {
                "name": "ОтображатьТекст",
                "name_en": "ShowText",
                "description": "Отображать узлы текста."
            },
            {
                "name": "ОтображатьФрагментДокумента",
                "name_en": "ShowDocumentFragment",
                "description": "Отображать узлы фрагмента DOM."
            },
            {
                "name": "ОтображатьЭлемент",
                "name_en": "ShowElement",
                "description": "Отображать узлы элементов."
            }
        ]
    },
    {
        "name": "ПозицияВДокументеDOM",
        "name_en": "DOMDocumentPosition",
        "description": "Варианты позиции узла DOM в документе DOM.",
        "values": [
            {
                "name": "ЗависитОтРеализации",
                "name_en": "ImplementationSpecific",
                "description": "Положение узла DOM зависит от реализации."
            },
            {
                "name": "Отсоединен",
                "name_en": "Disconnected",
                "description": "Узел не принадлежит документу."
            },
            {
                "name": "Предшествует",
                "name_en": "Preceding",
                "description": "Узел предшествует узлу DOM."
            },
            {
                "name": "Следует",
                "name_en": "Following",
                "description": "Узел DOM следует за узлом."
            },
            {
                "name": "Содержит",
                "name_en": "Contains",
                "description": "Узел DOM содержит узел."
            },
            {
                "name": "Содержится",
                "name_en": "ContainedBy",
                "description": "Узел DOM содержится в узле."
            }
        ]
    },
    {
        "name": "ТипРезультатаDOMXPath",
        "name_en": "DOMXPathResultType",
        "description": "Содержит варианты типов результата при вычислении выражения XPath.",
        "values": [
            {
                "name": "Булево",
                "name_en": "Boolean",
                "description": "Результат может представлять собой булево."
            },
            {
                "name": "Любой",
                "name_en": "Any",
                "description": "Результат может представлять любой возможный тип."
            },
            {
                "name": "ЛюбойНеупорядоченныйУзел",
                "name_en": "AnyUnorderedNode",
                "description": "Результат - узел DOM."
            },
            {
                "name": "НеупорядоченныйИтераторУзлов",
                "name_en": "UnorderedNodeIterator",
                "description": "Результат - неупорядоченный набор узлов. Изменение документа делает набор недействительным."
            },
            {
                "name": "НеупорядоченныйСнимокУзлов",
                "name_en": "UnorderedNodeSnapshot",
                "description": "Результат - неупорядоченный набор узлов (снимок). Изменение документа не влияет на набор."
            },
            {
                "name": "ПервыйУпорядоченныйУзел",
                "name_en": "FirstOrderedNode",
                "description": "Результат - первый узел в упорядоченном наборе узлов DOM."
            },
            {
                "name": "Строка",
                "name_en": "String",
                "description": "Результат может представлять собой строку."
            },
            {
                "name": "УпорядоченныйИтераторУзлов",
                "name_en": "OrderedNodeIterator",
                "description": "Результат - упорядоченный набор узлов (согласно порядку в документе). Изменение документа делает набор недействительным."
            },
            {
                "name": "УпорядоченныйСнимокУзлов",
                "name_en": "OrderedNodeSnapshot",
                "description": "Результат - упорядоченный набор узлов (снимок). Изменение документа не влияет на набор."
            },
            {
                "name": "Число",
                "name_en": "Number",
                "description": "Результат может представлять собой число."
            }
        ]
    },
    {
        "name": "ТипУзлаDOM",
        "name_en": "DOMNodeType",
        "description": "Типов узлов DOM.",
        "values": [
            {
                "name": "Атрибут",
                "name_en": "Attribute",
                "description": "Атрибут DOM."
            },
            {
                "name": "Документ",
                "name_en": "Document",
                "description": "Документ DOM."
            },
            {
                "name": "ИнструкцияОбработки",
                "name_en": "ProcessingInstruction",
                "description": "Инструкция обработки."
            },
            {
                "name": "Комментарий",
                "name_en": "Comment",
                "description": "Комментарий DOM."
            },
            {
                "name": "Нотация",
                "name_en": "Notation",
                "description": "Нотация DOM."
            },
            {
                "name": "ОпределениеТипаДокумента",
                "name_en": "DocumentType",
                "description": "Определение типа документа DOM."
            },
            {
                "name": "ПространствоИменXPath",
                "name_en": "XPathNamespace",
                "description": "Узел пространства имен механизма XPath."
            },
            {
                "name": "СекцияCDATA",
                "name_en": "CDATASection",
                "description": "Узел секции CDATA."
            },
            {
                "name": "СсылкаНаСущность",
                "name_en": "EntityReference",
                "description": "Узел ссылки на сущность."
            },
            {
                "name": "Сущность",
                "name_en": "Entity",
                "description": "Сущность."
            },
            {
                "name": "Текст",
                "name_en": "Text",
                "description": "Текстовый узел DOM."
            },
            {
                "name": "ФрагментДокумента",
                "name_en": "DocumentFragment",
                "description": "Фрагмент документа DOM."
            },
            {
                "name": "Элемент",
                "name_en": "Element",
                "description": "Элемент DOM."
            }
        ]
    },
    {
        "name": "ВидФасетаXDTO",
        "name_en": "XDTOFacetType",
        "description": "Содержит виды фасетов простого типа модели XDTO.",
        "values": [
            {
                "name": "Длина",
                "name_en": "Length",
                "description": "Фасет длины."
            },
            {
                "name": "МаксВключающее",
                "name_en": "MaxInclusive",
                "description": "Фасет максимального включающего значения."
            },
            {
                "name": "МаксДлина",
                "name_en": "MaxLength",
                "description": "Фасет максимальной длины."
            },
            {
                "name": "МаксИсключающее",
                "name_en": "MaxExclusive",
                "description": "Фасет максимального исключающего значения."
            },
            {
                "name": "МинВключающее",
                "name_en": "MinInclusive",
                "description": "Фасет минимального включающего значения."
            },
            {
                "name": "МинДлина",
                "name_en": "MinLength",
                "description": "Фасет минимальной длины."
            },
            {
                "name": "МинИсключающее",
                "name_en": "MinExclusive",
                "description": "Фасет минимального исключающего значения."
            },
            {
                "name": "Образец",
                "name_en": "Pattern",
                "description": "Фасет образца."
            },
            {
                "name": "Перечисление",
                "name_en": "Enumeration",
                "description": "Фасет перечисления."
            },
            {
                "name": "ПробельныеСимволы",
                "name_en": "Whitespace",
                "description": "Фасет пробельных символов."
            },
            {
                "name": "РазрядовВсего",
                "name_en": "TotalDigits",
                "description": "Фасет количества цифр."
            },
            {
                "name": "РазрядовДробнойЧасти",
                "name_en": "FractionDigits",
                "description": "Фасет количества цифр дробной части."
            }
        ]
    },
    {
        "name": "ФормаXML",
        "name_en": "XMLForm",
        "description": "Содержит варианты форм представления свойства объекта XDTO в формате XML.",
        "values": [
            {
                "name": "Атрибут",
                "name_en": "Attribute",
                "description": "Представление в виде атрибута XML."
            },
            {
                "name": "Текст",
                "name_en": "Text",
                "description": "Представление свойства в виде содержания элемента XML."
            },
            {
                "name": "Элемент",
                "name_en": "Element",
                "description": "Представление в виде элемента XML."
            }
        ]
    },
    {
        "name": "WSНаправлениеПараметра",
        "name_en": "WSParameterDirection",
        "description": "Направление параметра операции.",
        "values": [
            {
                "name": "Входной",
                "name_en": "In",
                "description": "Параметр является входным."
            },
            {
                "name": "ВходнойВыходной",
                "name_en": "InOut",
                "description": "Параметр является входным и выходным."
            },
            {
                "name": "Выходной",
                "name_en": "Out",
                "description": "Параметр является выходным."
            }
        ]
    },
    {
        "name": "ВидСравненияКомпоновкиДанных",
        "name_en": "DataCompositionComparisonType",
        "description": "Определяет набор видов сравнения, которые могут быть использованы в условиях отбора.",
        "values": [
            {
                "name": "Больше",
                "name_en": "Greater",
                "description": "Сравниваемое значение больше заданного в условии."
            },
            {
                "name": "БольшеИлиРавно",
                "name_en": "GreaterOrEqual",
                "description": "Сравниваемое значение больше или равно заданному в условии."
            },
            {
                "name": "ВИерархии",
                "name_en": "InHierarchy",
                "description": "Проверка того, что сравниваемое значение принадлежит иерархии заданного значения. Имеет смысл при сравнении для иерархических объектов."
            },
            {
                "name": "ВСписке",
                "name_en": "InList",
                "description": "Проверка того, что сравниваемое значение входит в список."
            },
            {
                "name": "ВСпискеПоИерархии",
                "name_en": "InListByHierarchy",
                "description": "Проверка того, что сравниваемое значение входит в список с учетом иерархии."
            },
            {
                "name": "Заполнено",
                "name_en": "Filled",
                "description": "Осуществляет проверку поля на то, что его значение отличается от значения данного поля по умолчанию, отличное от значения Null, отличное от пустой ссылки, отличное от значения Неопределено. Для логических значений осуществляется проверка на значение Null. Для строк осуществляется проверка на отсутствие непробельных символов."
            },
            {
                "name": "Меньше",
                "name_en": "Less",
                "description": "Сравниваемое значение меньше заданного в условии."
            },
            {
                "name": "МеньшеИлиРавно",
                "name_en": "LessOrEqual",
                "description": "Сравниваемое значение меньше или равно заданному в условии."
            },
            {
                "name": "НачинаетсяС",
                "name_en": "BeginsWith",
                "description": "Сравниваемое значение начинается с подстроки, заданной в условии сравнения."
            },
            {
                "name": "НеВИерархии",
                "name_en": "NotInHierarchy",
                "description": "Проверка на то, что значение не находится в указанной группе."
            },
            {
                "name": "НеВСписке",
                "name_en": "NotInList",
                "description": "Проверка на то, что значение не находится в указанном списке."
            },
            {
                "name": "НеВСпискеПоИерархии",
                "name_en": "NotInListByHierarchy",
                "description": "Проверка на то, что значение не находится в указанном списке с учетом иерархии."
            },
            {
                "name": "НеЗаполнено",
                "name_en": "NotFilled",
                "description": "Обратная операция к виду сравнения Заполнено."
            },
            {
                "name": "НеНачинаетсяС",
                "name_en": "NotBeginsWith",
                "description": "Сравниваемое значение не начинается с подстроки, заданной в условии сравнения."
            },
            {
                "name": "НеПодобно",
                "name_en": "NotLike",
                "description": "Сравниваемое значение не удовлетворяет маске, заданной в условии сравнения.  - % (процент): последовательность, содержащая любое количество произвольных символов.  - _ (подчеркивание): один произвольный символ.  - / - следующий символ нужно интерпретировать как обычный символ."
            },
            {
                "name": "НеРавно",
                "name_en": "NotEqual",
                "description": "Проверка на неравенство. Для строковых значений регистр символов не учитывается."
            },
            {
                "name": "НеСодержит",
                "name_en": "NotContains",
                "description": "Проверка на то, что строка не содержит указанную подстроку."
            },
            {
                "name": "Подобно",
                "name_en": "Like",
                "description": "Сравниваемое значение удовлетворяет маске, заданной в условии сравнения:  - % (процент): последовательность, содержащая любое количество произвольных символов.  - _ (подчеркивание): один произвольный символ.  - / - следующий символ нужно интерпретировать как обычный символ."
            },
            {
                "name": "Равно",
                "name_en": "Equal",
                "description": "Проверка на равенство."
            },
            {
                "name": "Содержит",
                "name_en": "Contains",
                "description": "Сравниваемое значение содержит подстроку, заданную в условии сравнения."
            }
        ]
    },
    {
        "name": "ДействиеОбработкиРасшифровкиКомпоновкиДанных",
        "name_en": "DataCompositionDetailsProcessingAction",
        "description": "Действие, возможное при обработке расшифровки. Используется для определения доступных действий и для информирования о том, какое действие выполнено.",
        "values": [
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Расшифровка не обрабатывается."
            },
            {
                "name": "ОткрытьЗначение",
                "name_en": "OpenValue",
                "description": "Открыть форму для текущего значения."
            },
            {
                "name": "Отфильтровать",
                "name_en": "Filter",
                "description": "Применить дополнительный отбор."
            },
            {
                "name": "Оформить",
                "name_en": "ApplyAppearance",
                "description": "Применить дополнительное условное оформление."
            },
            {
                "name": "Расшифровать",
                "name_en": "DrillDown",
                "description": "Получение более детальной информации."
            },
            {
                "name": "Сгруппировать",
                "name_en": "Group",
                "description": "Дополнительно сгруппировать данные."
            },
            {
                "name": "Упорядочить",
                "name_en": "Order",
                "description": "Применить упорядочивание."
            }
        ]
    },
    {
        "name": "ДействиеПриНедоступностиНастроекКомпоновкиДанных",
        "name_en": "OnUnavailabilityDataCompositionSettingsAction",
        "description": "Определяет варианты управления редакторами настроек, связанных с текущими данными структуры настроек.",
        "values": [
            {
                "name": "ИзменятьДоступностьПоля",
                "name_en": "DisableControl",
                "description": "Редакторы, которые не используются при редактировании текущих данных, становятся недоступными."
            },
            {
                "name": "СкрыватьСтраницу",
                "name_en": "HidePage",
                "description": "Станица скрывается, если она содержит только элементы управления, связанные с текущими данными структуры настроек, которые не имеют смысла для текущей страницы. Наличие или отсутствие других элементов управления на других страницах формы не анализируется."
            }
        ]
    },
    {
        "name": "НаправлениеСортировкиКомпоновкиДанных",
        "name_en": "DataCompositionSortDirection",
        "description": "Содержит варианты направления упорядочивания.",
        "values": [
            {
                "name": "Возр",
                "name_en": "Asc",
                "description": "Упорядочивать по возрастанию."
            },
            {
                "name": "Убыв",
                "name_en": "Desc",
                "description": "Упорядочивать по убыванию."
            }
        ]
    },
    {
        "name": "РасположениеВложенныхЭлементовРезультатаКомпоновкиДанных",
        "name_en": "DataCompositionResultNestedItemsLayout",
        "description": "Содержит варианты расположения вложенных элементов результата.",
        "values": [
            {
                "name": "Вертикально",
                "name_en": "Vertically",
                "description": "Вложенные элементы будут располагаться друг под другом."
            },
            {
                "name": "Горизонтально",
                "name_en": "Horizontally",
                "description": "Вложенные элементы будут располагаться горизонтально."
            }
        ]
    },
    {
        "name": "РасположениеИтоговКомпоновкиДанных",
        "name_en": "DataCompositionTotalPlacement",
        "description": "Содержит варианты расположения итогов системы компоновки данных.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Автоматическое определение расположения итогов."
            },
            {
                "name": "Конец",
                "name_en": "End",
                "description": "Расположение итогов в конце."
            },
            {
                "name": "Начало",
                "name_en": "Begin",
                "description": "Отображать итоги в начале."
            },
            {
                "name": "НачалоИКонец",
                "name_en": "BeginAndEnd",
                "description": "Расположение итогов в начале и в конце."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Не отображать итоги."
            }
        ]
    },
    {
        "name": "РасположениеГруппировкиКомпоновкиДанных",
        "name_en": "DataCompositionGroupPlacement",
        "description": "Содержит варианты расположения группировки системы компоновки данных.",
        "values": [
            {
                "name": "Конец",
                "name_en": "End",
                "description": "Расположение итогов в конце."
            },
            {
                "name": "Начало",
                "name_en": "Begin",
                "description": "Отображать итоги в начале."
            },
            {
                "name": "НачалоИКонец",
                "name_en": "BeginAndEnd",
                "description": "Расположение итогов в начале и в конце."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Нет группировки."
            }
        ]
    },
    {
        "name": "РасположениеПолейГруппировкиКомпоновкиДанных",
        "name_en": "DataCompositionGroupFieldsPlacement",
        "description": "Содержит варианты расположения группировок полей системы компоновки данных относительно друг друга.",
        "values": [
            {
                "name": "Вместе",
                "name_en": "Together",
                "description": "Группировки располагаются друг под другом."
            },
            {
                "name": "Отдельно",
                "name_en": "Separately",
                "description": "Каждая группировка располагается в отдельной области. Группировки располагаются друг за другом слева направо. Выводимые поля группировки выводятся также и во вложенных группировках."
            },
            {
                "name": "ОтдельноИТолькоВИтогах",
                "name_en": "SeparatelyAndInTotalsOnly",
                "description": "Каждая группировка располагается в отдельной области. Группировки располагаются друг за другом слева направо. Выводимые поля выводятся только в данной группировке."
            }
        ]
    },
    {
        "name": "РасположениеПоляКомпоновкиДанных",
        "name_en": "DataCompositionFieldPlacement",
        "description": "Содержит варианты расположения полей системы компоновки данных.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Автоматическое расположение полей: для группировок и строк таблицы горизонтально, для колонок таблицы вертикально."
            },
            {
                "name": "Вертикально",
                "name_en": "Vertically",
                "description": "Вертикальное расположение полей."
            },
            {
                "name": "Вместе",
                "name_en": "Together",
                "description": "Расположение полей вместе в одной колонке и разделение их запятой."
            },
            {
                "name": "Горизонтально",
                "name_en": "Horizontally",
                "description": "Горизонтальное расположение полей."
            },
            {
                "name": "ОтдельнаяКолонка",
                "name_en": "SpecialColumn",
                "description": "Расположение полей в отдельной колонке, расположенной правее всех остальных."
            }
        ]
    },
    {
        "name": "РасположениеРеквизитовКомпоновкиДанных",
        "name_en": "DataCompositionAttributesPlacement",
        "description": "Содержит варианты расположения реквизитов системы компоновки данных.",
        "values": [
            {
                "name": "Вместе",
                "name_en": "Together",
                "description": "Все реквизиты располагаются вместе в одной колонке и разделяются запятой."
            },
            {
                "name": "ВместеСВладельцем",
                "name_en": "WithOwnerField",
                "description": "Реквизиты располагаются в колонке, отображающей владельца."
            },
            {
                "name": "ВСпециальнойПозиции",
                "name_en": "SpecialPosition",
                "description": "Все реквизиты располагаются в отдельной колонке, расположенной правее всех остальных."
            },
            {
                "name": "Отдельно",
                "name_en": "Separately",
                "description": "Каждый реквизит располагается в отдельной колонке."
            }
        ]
    },
    {
        "name": "РасположениеРесурсовКомпоновкиДанных",
        "name_en": "DataCompositionResourcesPlacement",
        "description": "Содержит варианты расположения ресурсов системы компоновки данных.",
        "values": [
            {
                "name": "Вертикально",
                "name_en": "Vertically",
                "description": "Расположение ресурсов вертикально."
            },
            {
                "name": "Горизонтально",
                "name_en": "Horizontally",
                "description": "Расположение ресурсов горизонтально."
            }
        ]
    },
    {
        "name": "ТипБухгалтерскогоОстаткаКомпоновкиДанных",
        "name_en": "DataCompositionAccountingBalanceType",
        "description": "Содержит варианты типов бухгалтерского остатка для поля.",
        "values": [
            {
                "name": "Дебет",
                "name_en": "Debit",
                "description": "Поле является дебетом."
            },
            {
                "name": "Кредит",
                "name_en": "Credit",
                "description": "Поле является кредитом."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Поле не является бухгалтерским остатком."
            }
        ]
    },
    {
        "name": "ТипВыводаТекстаКомпоновкиДанных",
        "name_en": "DataCompositionTextOutputType",
        "description": "Определяет тип вывода текстов при компоновке данных.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Поведение определяет механизм компоновки данных: текст выводится, если он не пустой."
            },
            {
                "name": "Выводить",
                "name_en": "Output",
                "description": "Текст будет выведен."
            },
            {
                "name": "НеВыводить",
                "name_en": "DontOutput",
                "description": "Текст не будет выведен."
            }
        ]
    },
    {
        "name": "ТипГруппировкиКомпоновкиДанных",
        "name_en": "DataCompositionGroupType",
        "description": "Содержит варианты типов группировок системы компоновки данных.",
        "values": [
            {
                "name": "Иерархия",
                "name_en": "Hierarchy",
                "description": "Иерархическая группировка системы компоновки данных (группы и элементы)."
            },
            {
                "name": "ТолькоИерархия",
                "name_en": "HierarchyOnly",
                "description": "Группировка системы компоновки данных - только группы."
            },
            {
                "name": "Элементы",
                "name_en": "Items",
                "description": "Группировка системы компоновки данных - только элементы."
            }
        ]
    },
    {
        "name": "ТипГруппыЭлементовОтбораКомпоновкиДанных",
        "name_en": "DataCompositionFilterItemsGroupType",
        "description": "Содержит возможные типы групп элементов отбора системы компоновки данных.",
        "values": [
            {
                "name": "ГруппаИ",
                "name_en": "AndGroup",
                "description": "Вложенные элементы группы объединяются по \"И\"."
            },
            {
                "name": "ГруппаИли",
                "name_en": "OrGroup",
                "description": "Вложенные элементы группы объединяются по \"Или\"."
            },
            {
                "name": "ГруппаНе",
                "name_en": "NotGroup",
                "description": "Вложенные элементы группы объединяются по \"И\" и отрицаются."
            }
        ]
    },
    {
        "name": "ТипДополненияПериодаКомпоновкиДанных",
        "name_en": "DataCompositionPeriodAdditionType",
        "description": "Содержит варианты типов дополнения дат в периоде. Например: если в отчете за год нужны данные по месяцам, то следует указать дополнение периода \"Месяц\".",
        "values": [
            {
                "name": "БезДополнения",
                "name_en": "None",
                "description": "Не использовать дополнение периода."
            },
            {
                "name": "Год",
                "name_en": "Year",
                "description": "Тип дополнения периода \"Год\"."
            },
            {
                "name": "ГодОтНачалаПериода",
                "name_en": "YearSinceBeginOfPeriod",
                "description": "Тип дополнения периода \"Год\", которое будет отсчитываться от начальной даты периода дополнения."
            },
            {
                "name": "ГодОтНачалаПериода445",
                "name_en": "YearSinceBeginOfPeriod445",
                "description": "Тип дополнения периода \"Год\", которое будет отсчитываться от начальной даты периода дополнения. При этом считается, что размер первого и второго месяца равен четырем неделям, третьего - пяти неделям, четвертого и пятого - четырем неделям, для шестого - пяти, и т.д."
            },
            {
                "name": "Декада",
                "name_en": "TenDays",
                "description": "Тип дополнения периода \"Декада\"."
            },
            {
                "name": "День",
                "name_en": "Day",
                "description": "Тип дополнения периода \"День\"."
            },
            {
                "name": "ДеньОтНачалаПериода",
                "name_en": "DaySinceBeginOfPeriod",
                "description": "Тип дополнения периода \"День\", которое будет отсчитываться от начальной даты периода дополнения."
            },
            {
                "name": "Квартал",
                "name_en": "Quarter",
                "description": "Тип дополнения периода \"Квартал\"."
            },
            {
                "name": "КварталОтНачалаПериода",
                "name_en": "QuarterSinceBeginOfPeriod",
                "description": "Тип дополнения периода \"Квартал\", которое будет отсчитываться от начальной даты периода дополнения."
            },
            {
                "name": "КварталОтНачалаПериода445",
                "name_en": "QuarterSinceBeginOfPeriod445",
                "description": "Тип дополнения периода \"Квартал\", которое будет отсчитываться от начальной даты периода дополнения. При этом считается, что размер первого и второго месяца равен четырем неделям, третьего - пяти неделям, четвертого и пятого - четырем неделям, для шестого - пяти, и т.д."
            },
            {
                "name": "Месяц",
                "name_en": "Month",
                "description": "Тип дополнения периода \"Месяц\"."
            },
            {
                "name": "МесяцОтНачалаПериода",
                "name_en": "MonthSinceBeginOfPeriod",
                "description": "Тип дополнения периода \"Месяц\", которое будет отсчитываться от начальной даты периода дополнения."
            },
            {
                "name": "МесяцОтНачалаПериода445",
                "name_en": "MonthSinceBeginOfPeriod445",
                "description": "Тип дополнения периода \"Месяц\", которое будет отсчитываться от начальной даты периода дополнения. При этом считается, что размер первого и второго месяца равен четырем неделям, третьего - пяти неделям, четвертого и пятого - четырем неделям, для шестого - пяти, и т.д."
            },
            {
                "name": "Минута",
                "name_en": "Minute",
                "description": "Тип дополнения периода \"Минута\"."
            },
            {
                "name": "МинутаОтНачалаПериода",
                "name_en": "MinuteSinceBeginOfPeriod",
                "description": "Тип дополнения периода \"Минута\", которое будет отсчитываться от начальной даты периода дополнения."
            },
            {
                "name": "Неделя",
                "name_en": "Week",
                "description": "Тип дополнения периода \"Неделя\"."
            },
            {
                "name": "НеделяОтНачалаПериода",
                "name_en": "WeekSinceBeginOfPeriod",
                "description": "Тип дополнения периода \"Неделя\", которое будет отсчитываться от начальной даты периода дополнения."
            },
            {
                "name": "Полугодие",
                "name_en": "HalfYear",
                "description": "Тип дополнения периода \"Полугодие\"."
            },
            {
                "name": "ПолугодиеОтНачалаПериода",
                "name_en": "HalfYearSinceBeginOfPeriod",
                "description": "Тип дополнения периода \"Полугодие\", которое будет отсчитываться от начальной даты периода дополнения."
            },
            {
                "name": "ПолугодиеОтНачалаПериода445",
                "name_en": "HalfYearSinceBeginOfPeriod445",
                "description": "Тип дополнения периода \"Полугодие\", которое будет отсчитываться от начальной даты периода дополнения. При этом считается, что размер первого и второго месяца равен четырем неделям, третьего - пяти неделям, четвертого и пятого - четырем неделям, для шестого - пяти, и т.д."
            },
            {
                "name": "Секунда",
                "name_en": "Second",
                "description": "Тип дополнения периода \"Секунда\"."
            },
            {
                "name": "Час",
                "name_en": "Hour",
                "description": "Тип дополнения периода \"Час\"."
            },
            {
                "name": "ЧасОтНачалаПериода",
                "name_en": "HourSinceBeginOfPeriod",
                "description": "Тип дополнения периода \"Час\", которое будет отсчитываться от начальной даты периода дополнения."
            }
        ]
    },
    {
        "name": "ТипЗаголовкаПолейКомпоновкиДанных",
        "name_en": "DataCompositionFieldsTitleType",
        "description": "Содержит типы заголовков полей системы компоновки данных.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Для полей группировки - полный заголовок, для полей реквизитов - краткий заголовок."
            },
            {
                "name": "Краткий",
                "name_en": "Short",
                "description": "Краткий заголовок."
            },
            {
                "name": "Полный",
                "name_en": "Full",
                "description": "Полный заголовок."
            }
        ]
    },
    {
        "name": "ТипМакетаГруппировкиКомпоновкиДанных",
        "name_en": "DataCompositionGroupTemplateType",
        "description": "Типы макета группировки - указывает расположение выбранных полей в макете группировки.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Автоматическое определение расположения выбранных полей: Если в группировке есть вложенная таблица, диаграмма, вложенный отчет или группировка с типом макета группировки Вертикальный, то выбранные поля располагаются вертикально, иначе горизонтально."
            },
            {
                "name": "Вертикальный",
                "name_en": "Vertical",
                "description": "Расположение выбранных полей вертикально, друг под другом."
            },
            {
                "name": "Горизонтальный",
                "name_en": "Horizontal",
                "description": "Расположение выбранных полей горизонтально, друг за другим слева направо."
            }
        ]
    },
    {
        "name": "ТипМакетаОбластиКомпоновкиДанных",
        "name_en": "DataCompositionAreaTemplateType",
        "description": "Содержит возможные типы макета области схемы компоновки данных.",
        "values": [
            {
                "name": "Заголовок",
                "name_en": "Header",
                "description": "Макет заголовка."
            },
            {
                "name": "ЗаголовокИерархии",
                "name_en": "HierarchicalHeader",
                "description": "Макет заголовка для иерархии."
            },
            {
                "name": "ОбщийИтогЗаголовок",
                "name_en": "OverallHeader",
                "description": "Область общего итога группировки, выводимого в заголовке."
            },
            {
                "name": "ОбщийИтогПодвал",
                "name_en": "OverallFooter",
                "description": "Область общего итога группировки, выводимого в подвале."
            },
            {
                "name": "Подвал",
                "name_en": "Footer",
                "description": "Макет подвала."
            },
            {
                "name": "ПодвалИерархии",
                "name_en": "HierarchicalFooter",
                "description": "Макет подвала иерархии."
            }
        ]
    },
    {
        "name": "ТипОстаткаКомпоновкиДанных",
        "name_en": "DataCompositionBalanceType",
        "description": "Содержит возможные типы остатка.",
        "values": [
            {
                "name": "КонечныйОстаток",
                "name_en": "ClosingBalance",
                "description": "Поле является конечным остатком."
            },
            {
                "name": "НачальныйОстаток",
                "name_en": "OpeningBalance",
                "description": "Поле является начальным остатком."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Поле не является остатком."
            }
        ]
    },
    {
        "name": "ТипПериодаКомпоновкиДанных",
        "name_en": "DataCompositionPeriodType",
        "description": "Типы периодов.",
        "values": [
            {
                "name": "Дополнительный",
                "name_en": "Additional",
                "description": "Указывает, что период является дополнительным. При использовании поля с таким типом периода нет необходимости добавлять родительские поля - периоды."
            },
            {
                "name": "Основной",
                "name_en": "Main",
                "description": "Указывает, что период является основным. При использовании такого поля в компоновке будут задействованы и основные родительские периоды."
            }
        ]
    },
    {
        "name": "ТипРазмещенияТекстаКомпоновкиДанных",
        "name_en": "DataCompositionTextPlacementType",
        "description": "Содержит типы размещения текста.",
        "values": [
            {
                "name": "Выступать",
                "name_en": "Overflow",
                "description": "Текст, не вмещающийся в ячейки, будет выступать на следущие ячейки в случае, если они пустые."
            },
            {
                "name": "Забивать",
                "name_en": "Block",
                "description": "Забивать."
            },
            {
                "name": "Обрезать",
                "name_en": "Cut",
                "description": "Обрезать."
            },
            {
                "name": "Переносить",
                "name_en": "Wrap",
                "description": "Переносить."
            }
        ]
    },
    {
        "name": "ТипСвязиНаборовДанныхКомпоновкиДанных",
        "name_en": "DataCompositionDataSetsLinkType",
        "description": "Содержит возможные типы связи наборов данных.",
        "values": [
            {
                "name": "Внешняя",
                "name_en": "Outer",
                "description": "Записи исходного набора данных, для которых не были найдены записи в наборе данных – приемнике, все равно попадут в результат компоновки."
            },
            {
                "name": "Внутренняя",
                "name_en": "Inner",
                "description": "Записи исходного набора данных, для которых не были найдены записи в наборе данных – приемнике, в результат компоновки не попадут."
            }
        ]
    },
    {
        "name": "ТипЭлементаРезультатаКомпоновкиДанных",
        "name_en": "DataCompositionResultItemType",
        "description": "Содержит варианты вложенности элемента результата.",
        "values": [
            {
                "name": "Конец",
                "name_en": "End",
                "description": "Конец ранее начатого элемента."
            },
            {
                "name": "Начало",
                "name_en": "Begin",
                "description": "Следующие за элементом элементы являются дочерними для этого элемента."
            },
            {
                "name": "НачалоИКонец",
                "name_en": "BeginAndEnd",
                "description": "Элемент не содержит вложенных элементов."
            }
        ]
    },
    {
        "name": "РасположениеЛегендыДиаграммыКомпоновкиДанных",
        "name_en": "DataCompositionChartLegendPlacement",
        "description": "Содержит варианты расположения легенды диаграммы.",
        "values": [
            {
                "name": "Верх",
                "name_en": "Top",
                "description": "Легенду выводить в верхней части диаграммы."
            },
            {
                "name": "Лево",
                "name_en": "Left",
                "description": "Легенду выводить в левой части диаграммы."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Выводить легенду не требуется."
            },
            {
                "name": "Низ",
                "name_en": "Bottom",
                "description": "Легенду выводить в нижней части диаграммы."
            },
            {
                "name": "Право",
                "name_en": "Right",
                "description": "Легенду выводить в правой части диаграммы."
            }
        ]
    },
    {
        "name": "ТипПримененияОтбораКомпоновкиДанных",
        "name_en": "DataCompositionFilterApplicationType",
        "description": "Содержит типы применения отбора к записям результата компоновки.",
        "values": [
            {
                "name": "Иерархия",
                "name_en": "Hierarchy",
                "description": "Условие применяется к элементам и иерархическим записям."
            },
            {
                "name": "ТолькоИерархия",
                "name_en": "HierarchyOnly",
                "description": "Условие применяется только к иерархическим записям."
            },
            {
                "name": "Элементы",
                "name_en": "Items",
                "description": "Условие применяется только к записям - элементам."
            }
        ]
    },
    {
        "name": "РежимОтображенияЭлементаНастройкиКомпоновкиДанных",
        "name_en": "DataCompositionSettingsItemViewMode",
        "description": "Содержит режимы отображения элемента настройки компоновки данных.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Значение режима нужно получать из основных настроек."
            },
            {
                "name": "БыстрыйДоступ",
                "name_en": "QuickAccess",
                "description": "Этот элемент настройки предназначен для режима быстрого доступа. Он будет доступен в табличном поле, если у расширения табличного поля отбора свойство РежимОтображения будет установлено в значение Все или БыстрыйДоступ."
            },
            {
                "name": "Недоступный",
                "name_en": "Inaccessible",
                "description": "Этот элемент настройки не предназначен для изменения в составе пользовательской настройки."
            },
            {
                "name": "Обычный",
                "name_en": "Normal",
                "description": "Указывает на обычный режим отображения. Он будет доступен в табличном поле, если у расширения табличного поля отбора, свойство РежимОтображения будет установлено в значение Все."
            }
        ]
    },
    {
        "name": "РежимОтображенияНастроекКомпоновкиДанных",
        "name_en": "DataCompositionSettingsViewMode",
        "description": "Содержит режимы отображения настроек компоновки данных.",
        "values": [
            {
                "name": "БыстрыйДоступ",
                "name_en": "QuickAccess",
                "description": "Табличное поле отображает только элементы, предназначенные для быстрого доступа."
            },
            {
                "name": "Все",
                "name_en": "All",
                "description": "Табличное поле отображает все элементы отбора."
            }
        ]
    },
    {
        "name": "СостояниеЭлементаНастройкиКомпоновкиДанных",
        "name_en": "DataCompositionSettingsItemState",
        "description": "Содержит варианты состояния элемента настроек.",
        "values": [
            {
                "name": "Включен",
                "name_en": "Enabled",
                "description": "Элемент включен."
            },
            {
                "name": "Отключен",
                "name_en": "Disabled",
                "description": "Элемент отключен."
            },
            {
                "name": "УдаленПользователем",
                "name_en": "DeletedByUser",
                "description": "Элемент удален пользователем."
            }
        ]
    },
    {
        "name": "СпособВосстановленияНастроекКомпоновкиДанных",
        "name_en": "DataCompositionSettingsRefreshMethod",
        "description": "Способы восстановления настроек компоновки данных.",
        "values": [
            {
                "name": "Полное",
                "name_en": "Full",
                "description": "При восстановлении настроек отключается использование у всех настроек, содержащих недоступные поля."
            },
            {
                "name": "ПроверятьДоступность",
                "name_en": "CheckAvailability",
                "description": "При восстановлении настроек удаляются настройки, недоступные по функциональным опциям."
            }
        ]
    },
    {
        "name": "РежимКомпоновкиРезультата",
        "name_en": "ResultCompositionMode",
        "description": "Содержит возможные варианты компоновки результата.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Режим формирования определяется автоматически. Для файлового варианта - Непосредственно. Для клиент-серверного - Фоновый."
            },
            {
                "name": "Непосредственно",
                "name_en": "Directly",
                "description": "Результат компонуется непосредственно при вызове метода."
            },
            {
                "name": "Фоновый",
                "name_en": "Background",
                "description": "Результат компонуется в фоновом режиме."
            }
        ]
    },
    {
        "name": "ИспользованиеПараметраКомпоновкиДанных",
        "name_en": "DataCompositionParameterUse",
        "description": "Содержит возможные варианты использования параметра компоновки данных.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Значение параметра получается из настроек компоновки данных только тогда, когда у параметра в настройках включено использование."
            },
            {
                "name": "Всегда",
                "name_en": "Always",
                "description": "Значение параметра всегда получается из настроек компоновки данных. Даже если в настройках компоновки данных использование параметра выключено."
            }
        ]
    },
    {
        "name": "АвтоПозицияРесурсовКомпоновкиДанных",
        "name_en": "DataCompositionResourcesAutoPosition",
        "description": "Содержит варианты расположения ресурсов.",
        "values": [
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Поля-ресурсы выводятся в той позиции, где они расположены, т.е. располагаются также, как и другие поля."
            },
            {
                "name": "ПослеВсехПолей",
                "name_en": "AfterAllFields",
                "description": "Ресурсы всегда выводятся справа от других полей."
            }
        ]
    },
    {
        "name": "ВариантИспользованияГруппировкиКомпоновкиДанных",
        "name_en": "DataCompositionGroupUseVariant",
        "description": "Содержит варианты использования группировки.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Вывод колонки выполняется как в версии 8.1."
            },
            {
                "name": "ДополнительнаяИнформация",
                "name_en": "AdditionalInformation",
                "description": "Если указан у группировки–колонки, то в результирующую таблицу в этой колонке будет выдана одна колонка, в которой будут выводиться поля, содержащиеся в выбранных полях данной группировки и доступные для вывода в группировке–строке. При этом, если у группировки–колонки указаны поля группировки, то при компоновке макета генерируется исключение.  Для группировки–строки – аналогично, выводится одна строка, а не колонка."
            }
        ]
    },
    {
        "name": "РасположениеРесурсовВДиаграммеКомпоновкиДанных",
        "name_en": "DataCompositionResourcesPlacementInChart",
        "description": "Указывает расположение ресурсов в диаграмме.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Автоматическое расположение ресурсов. Если в диаграмме указано несколько ресурсов, и параметр диаграммы ТипДиаграммы.РасположениеРесурсов равно Авто, тогда:  - Если в диаграмме отсутствуют серии, то создается по одной серии для каждого выводимого в диаграмму ресурса;  - Если в диаграмме отсутствуют точки, но присутствуют серии, то создается по одной точке для каждого ресурса, выводимого в диаграмму;  - Если присутствуют точки и серии, то ресурсы выводятся в сериях."
            },
            {
                "name": "Серии",
                "name_en": "Series",
                "description": "Указывает расположение ресурсов в сериях диаграммы."
            },
            {
                "name": "Точки",
                "name_en": "Points",
                "description": "Указывает расположение ресурсов в точках диаграммы."
            }
        ]
    },
    {
        "name": "ФиксацияКомпоновкиДанных",
        "name_en": "DataCompositionFixation",
        "description": "Содержит варианты фиксации результата компоновки данных.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Фиксация используется при необходимости."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Фиксация не используется."
            }
        ]
    },
    {
        "name": "ИспользованиеУсловногоОформленияКомпоновкиДанных",
        "name_en": "DataCompositionConditionalAppearanceUse",
        "description": "Содержит варианты использования условного оформления.",
        "values": [
            {
                "name": "Использовать",
                "name_en": "Use",
                "description": "Разрешает использование условного оформления."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Запрещает использование условного оформления."
            }
        ]
    },
    {
        "name": "ТипВыводаКартинкиКомпоновкиДанных",
        "name_en": "DataCompositionPictureOutputType",
        "description": "Содержит варианты способов вывода картинки в отчете, формируемом с помощью системы компоновки данных.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Для полей типа хранилище значений интерпретируется как:  - ВыводитьПоСсылке, если есть такая возможность;  - ВыводитьПоЗначению, если нет возможности интепретировать по ссылке.{/bullet1} ВыводитьПоСсылке, если есть такая возможность; ВыводитьПоЗначению, если нет возможности интепретировать по ссылке.{/bullet1}"
            },
            {
                "name": "ВыводитьПоЗначению",
                "name_en": "OutputByValue",
                "description": "Значение отображается как картинка."
            },
            {
                "name": "ВыводитьПоСсылке",
                "name_en": "OutputByRef",
                "description": "Значение отображается как ссылка на картинку."
            },
            {
                "name": "НеВыводить",
                "name_en": "DontOutput",
                "description": "Значение не отображается как картинка."
            }
        ]
    },
    {
        "name": "СохранениеОформленияКомпоновкиДанных",
        "name_en": "SaveDataCompositionAppearance",
        "description": "Задает вариант сохранения оформления компоновки данных.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Если параметр ТипДиаграммы.КлючСохраненияЦветов установлен, то используется значение ПоКлючуДляПользователя. Иначе, в режиме совместимости Версия8_3_15 используется значение НеИспользовать, а если режим совместимости не установлен - ДляПользователя."
            },
            {
                "name": "ДляПользователя",
                "name_en": "ForUser",
                "description": "Используются значения, содержащиеся в объекте ОформлениеЗначений для всей конфигурации."
            },
            {
                "name": "ДляТекущегоРезультата",
                "name_en": "ForCurrentResult",
                "description": "Используются значения ОформлениеЗначений, создаваемые только на момент вывода отчета, без сохранения между формированием отчета."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "ОформлениеЗначений не используется."
            },
            {
                "name": "ПоКлючуДляПользователя",
                "name_en": "ByKeyForUser",
                "description": "Указывает ключ для системного хранилища."
            }
        ]
    },
    {
        "name": "ВажностьИнтернетПочтовогоСообщения",
        "name_en": "InternetMailMessageImportance",
        "description": "Содержит варианты важности почтового сообщения.",
        "values": [
            {
                "name": "Высокая",
                "name_en": "High",
                "description": "Высокая важность сообщения."
            },
            {
                "name": "Наивысшая",
                "name_en": "Highest",
                "description": "Наивысшая важность сообщения."
            },
            {
                "name": "Наименьшая",
                "name_en": "Lowest",
                "description": "Наименьшая важность сообщения."
            },
            {
                "name": "Низкая",
                "name_en": "Low",
                "description": "Низкая важность сообщения."
            },
            {
                "name": "Обычная",
                "name_en": "Normal",
                "description": "Обычная важность сообщения."
            }
        ]
    },
    {
        "name": "ОбработкаТекстаИнтернетПочтовогоСообщения",
        "name_en": "InternetMailTextProcessing",
        "description": "Определяет набор действий над текстами почтового сообщения перед отправкой.",
        "values": [
            {
                "name": "НеОбрабатывать",
                "name_en": "DontProcess",
                "description": "Обработка текстов почтового сообщения перед отправкой не требуется. Текст посылается без внутренней обработки. Также отключает загрузку картинок при отправке HTML-документов."
            },
            {
                "name": "Обрабатывать",
                "name_en": "Process",
                "description": "Тексты и картинки отправляемых HTML-документов загружаются и добавляются к письму как вложения, с соответствующей правкой этих HTML-документов."
            }
        ]
    },
    {
        "name": "СпособКодированияИнтернетПочтовогоВложения",
        "name_en": "InternetMailAttachmentEncodingMode",
        "description": "Описывает способ кодирования вложений почтового сообщения.",
        "values": [
            {
                "name": "MIME",
                "name_en": "MIME",
                "description": "Кодирование вложений способом MIME."
            },
            {
                "name": "UUEncode",
                "name_en": "UUEncode",
                "description": "Кодирование вложений способом UUEncode."
            }
        ]
    },
    {
        "name": "СпособКодированияНеASCIIСимволовИнтернетПочтовогоСообщения",
        "name_en": "InternetMailMessageNonASCIISymbolsEncodingMode",
        "description": "Содержит варианты способов кодирования не ASCII символов в почтовом сообщении.",
        "values": [
            {
                "name": "MIME",
                "name_en": "MIME",
                "description": "Кодируются методом MIME."
            },
            {
                "name": "QuotedPrintable",
                "name_en": "QuotedPrintable",
                "description": "Кодируются методом Quoted-Printable."
            },
            {
                "name": "БезКодирования",
                "name_en": "None",
                "description": "Все поля заголовков, содержащие не ASCII символы кодироваться не будут. Все символы будут конвертироваться в кодировку, заданною свойством Кодировка."
            }
        ]
    },
    {
        "name": "ТипТекстаПочтовогоСообщения",
        "name_en": "InternetMailTextType",
        "description": "Определяет набор допустимых типов текста почтового сообщения.",
        "values": [
            {
                "name": "HTML",
                "name_en": "HTML",
                "description": "Текст почтового сообщения в формате HTML. При использовании текстов почтовых сообщений данного типа следует учитывать особенности их реализации на платформе Android. При оформлении тела письма не рекомендуется использовать:  - каскадные таблицы стилей,  - встроенные таблицы,  - встроенные изображения,  - шрифты разных размеров.  - Поведение может различаться при работе с разными клиентами и на различных версиях операционной системы. Рекомендуется проверять результат на устройствах конечных пользователей."
            },
            {
                "name": "ПростойТекст",
                "name_en": "PlainText",
                "description": "Простой текст почтового сообщения. Отображается \"как есть\"."
            },
            {
                "name": "РазмеченныйТекст",
                "name_en": "RichText",
                "description": "Текст почтового сообщения в формате Rich Text."
            }
        ]
    },
    {
        "name": "ПротоколИнтернетПочты",
        "name_en": "InternetMailProtocol",
        "description": "Определяет набор допустимых типов протоколов, используемых Интернет почтой.",
        "values": [
            {
                "name": "IMAP",
                "name_en": "IMAP",
                "description": "Соответствует IMAP протоколу."
            },
            {
                "name": "POP3",
                "name_en": "POP3",
                "description": "Соответствует POP3 протоколу."
            },
            {
                "name": "SMTP",
                "name_en": "SMTP",
                "description": "Соответствует SMTP протоколу."
            }
        ]
    },
    {
        "name": "СтатусРазбораПочтовогоСообщения",
        "name_en": "InternetMailMessageParseStatus",
        "description": "Содержит виды статусов разбора почтового сообщения:  - ОбнаруженыОшибки - ошибки в структуре письма при разборе были обнаружены ошибки. Объект ИнтернетПочтовоеСообщение может содержать ошибки.  - ОшибокНеОбнаружено - при разборе письма ошибки обнаружены не были.  -",
        "values": [
            {
                "name": "ОбнаруженыОшибки",
                "name_en": "ErrorsDetected",
                "description": "При разборе почтового сообщения обнаружены ошибки. Некоторые поля сообщения могут быть не заполнены."
            },
            {
                "name": "ОшибокНеОбнаружено",
                "name_en": "ErrorsNotDetected",
                "description": "При разборе почтового соощения ошибок обнаружено не было."
            }
        ]
    },
    {
        "name": "ИспользованиеАутентификацииИнтернетПочтыПоТокену",
        "name_en": "UseInternetMailTokenAuthentication",
        "description": "Содержит варианты использования протокола аутентификации OAuth2 в механизме",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Автоматический режим. Если сервер поддерживает аутентификацию по протоколу OAuth2, то будет использована она, в противном случае – аутентификация по логину и паролю. Если значение свойства ТокенДоступа не указано, то аутентификация по протоколу OAuth2 не используется."
            },
            {
                "name": "Использовать",
                "name_en": "Use",
                "description": "При подключении принудительно использовать протокол OAuth2.  Исключение генерируется в следующих случаях:  - Если сервер не поддерживает данную возможность,  - Если не указано значение свойства ТокенДоступа."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "При подключении аутентификация по протоколу OAuth2 не используется."
            }
        ]
    },
    {
        "name": "РежимТранзакцииЗаписиЖурналаРегистрации",
        "name_en": "EventLogEntryTransactionMode",
        "description": "Содержит варианты транзакционных режимов записи в журнал регистрации.",
        "values": [
            {
                "name": "Независимая",
                "name_en": "Independent",
                "description": "Запись не зависит от текущей транзакции."
            },
            {
                "name": "Транзакционная",
                "name_en": "Transactional",
                "description": "Запись находится в зависимости от текущей транзакции."
            }
        ]
    },
    {
        "name": "СтатусТранзакцииЗаписиЖурналаРегистрации",
        "name_en": "EventLogEntryTransactionStatus",
        "description": "Содержит виды статусов завершения транзакции, отображаемых в журнале регистрации.",
        "values": [
            {
                "name": "Зафиксирована",
                "name_en": "Committed",
                "description": "Транзакция, к которой относится запись журнала, зафиксирована."
            },
            {
                "name": "НеЗавершена",
                "name_en": "Unfinished",
                "description": "Нет данных о завершении транзакции, к которой относится запись журнала, статус транзакции не определен."
            },
            {
                "name": "НетТранзакции",
                "name_en": "NotApplicable",
                "description": "Запись журнала не зависит от транзакции, свойство статуса транзакции к ней не применяется."
            },
            {
                "name": "Отменена",
                "name_en": "RolledBack",
                "description": "Транзакция, к которой относится запись журнала, отменена."
            }
        ]
    },
    {
        "name": "УровеньЖурналаРегистрации",
        "name_en": "EventLogLevel",
        "description": "Уровни важности событий журнала регистрации.",
        "values": [
            {
                "name": "Информация",
                "name_en": "Information",
                "description": "Регистрация информации."
            },
            {
                "name": "Ошибка",
                "name_en": "Error",
                "description": "Регистрация ошибок."
            },
            {
                "name": "Предупреждение",
                "name_en": "Warning",
                "description": "Регистрация предупреждений."
            },
            {
                "name": "Примечание",
                "name_en": "Note",
                "description": "Регистрация примечаний."
            }
        ]
    },
    {
        "name": "РежимВключенияСертификатовКриптографии",
        "name_en": "CryptoCertificateIncludeMode",
        "description": "Содержит варианты режимов включения сертификатов криптографии в подпись.",
        "values": [
            {
                "name": "ВключатьПолнуюЦепочку",
                "name_en": "IncludeWholeChain",
                "description": "Включать полную цепочку сертификатов, включая корневой сертификат."
            },
            {
                "name": "ВключатьСертификатСубъекта",
                "name_en": "IncludeSubjectCertificate",
                "description": "Включать только сертификат субъекта."
            },
            {
                "name": "ВключатьЦепочкуБезКорневого",
                "name_en": "IncludeChainWithoutRoot",
                "description": "Включать цепочку сертификатов криптографии без корневого сертификата."
            },
            {
                "name": "НеВключать",
                "name_en": "DontInclude",
                "description": "Не включать сертификаты криптографии."
            }
        ]
    },
    {
        "name": "РежимПроверкиСертификатаКриптографии",
        "name_en": "CryptoCertificateCheckMode",
        "description": "Содержит варианты режимов проверки сертификата криптографии.",
        "values": [
            {
                "name": "ИгнорироватьВремяДействия",
                "name_en": "IgnoreTimeValidity",
                "description": "Игнорировать время действия."
            },
            {
                "name": "ИгнорироватьДействительностьПодписи",
                "name_en": "IgnoreSignatureValidity",
                "description": "Игнорировать действительность подписи."
            },
            {
                "name": "ИгнорироватьПроверкуВСпискеОтозванныхСертификатов",
                "name_en": "IgnoreCertificateRevocationStatus",
                "description": "Игнорировать проверку в списке отозванных."
            },
            {
                "name": "РазрешитьТестовыеСертификаты",
                "name_en": "AllowTestCertificates",
                "description": "Разрешить тестовые сертификаты."
            }
        ]
    },
    {
        "name": "ТипХранилищаСертификатовКриптографии",
        "name_en": "CryptoCertificateStoreType",
        "description": "Содержит варианты типов хранилища сертификатов криптографии.",
        "values": [
            {
                "name": "КорневыеСертификаты",
                "name_en": "RootCertificates",
                "description": "Корневые сертификаты."
            },
            {
                "name": "ПерсональныеСертификаты",
                "name_en": "PersonalCertificates",
                "description": "Персональные сертификаты."
            },
            {
                "name": "СертификатыПолучателей",
                "name_en": "RecipientCertificates",
                "description": "Сертификаты получателей."
            },
            {
                "name": "СертификатыУдостоверяющихЦентров",
                "name_en": "CertificationAuthorityCertificates",
                "description": "Сертификаты удостоверяющих центров."
            }
        ]
    },
    {
        "name": "РасположениеХранилищаСертификатовКриптографии",
        "name_en": "CryptoCertificateStorePlacement",
        "description": "Содержит варианты расположения сертификатов.",
        "values": [
            {
                "name": "ДанныеКомпьютера",
                "name_en": "ComputerData",
                "description": "Указывает, что нужно использовать хранилище сертификатов локального компьютера."
            },
            {
                "name": "ДанныеПользователяОС",
                "name_en": "OSUserData",
                "description": "Указывает, что нужно использовать хранилище сертификатов пользователя операционной системы."
            },
            {
                "name": "ДанныеПриложения",
                "name_en": "ApplicationData",
                "description": "Определяет необходимость использования хранилища сертификатов в данных приложения. Используется на мобильной платформе. В \"1С:Предприятии\" для персонального компьютера реализовано для совместимости и содержит пустое хранилище сертификатов."
            }
        ]
    },
    {
        "name": "ИспользованиеИнтерактивногоРежимаКриптографии",
        "name_en": "CryptoInteractiveModeUse",
        "description": "Определяет режим интерактивности модуля криптографии.",
        "values": [
            {
                "name": "Использовать",
                "name_en": "Use",
                "description": "Определяет интерактивный режим работы модуля криптографии."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Определяет неинтерактивный режим работы модуля криптографии."
            }
        ]
    },
    {
        "name": "МетодСжатияZIP",
        "name_en": "ZIPCompressionMethod",
        "description": "Содержит варианты методов сжатия записываемых ZIP файлов.",
        "values": [
            {
                "name": "BZIP2",
                "name_en": "BZIP2",
                "description": "Сжатие выполняется с помощью алгоритма BZIP.  Занимает существенно больше времени, при этом данные сжимаются лучше, чем с помощью алгоритма Deflate."
            },
            {
                "name": "Копирование",
                "name_en": "Copy",
                "description": "Файлы при помещении в архив не сжимаются, а копируются. Требуется минимальное время работы."
            },
            {
                "name": "Сжатие",
                "name_en": "Deflate",
                "description": "Осуществляется сжатие 32-битным алгоритмом Deflate.  Требуется больше времени работы, чем при копировании."
            }
        ]
    },
    {
        "name": "МетодШифрованияZIP",
        "name_en": "ZIPEncryptionMethod",
        "description": "Содержит варианты методов шифрования ZIP файлов.",
        "values": [
            {
                "name": "AES128",
                "name_en": "AES128",
                "description": "Шифрование методом AES 128-бит. Не совместимо со старыми версиями ZIP."
            },
            {
                "name": "AES192",
                "name_en": "AES192",
                "description": "Шифрование методом AES 192-бит. Не совместимо со старыми версиями ZIP."
            },
            {
                "name": "AES256",
                "name_en": "AES256",
                "description": "Шифрование методом AES 256-бит. Не совместимо со старыми версиями ZIP."
            },
            {
                "name": "Zip20",
                "name_en": "Zip20",
                "description": "Шифрование методом ZIP версии 2.0. Совместимо со всеми сторонними программами."
            }
        ]
    },
    {
        "name": "РежимВосстановленияПутейФайловZIP",
        "name_en": "ZIPRestoreFilePathsMode",
        "description": "Содержит варианты восстановления путей файлов при извлечении из архива.",
        "values": [
            {
                "name": "Восстанавливать",
                "name_en": "Restore",
                "description": "Требуется восстанавливать пути при извлечении элемента из архива."
            },
            {
                "name": "НеВосстанавливать",
                "name_en": "DontRestore",
                "description": "При извлечении из архива пути файлов игнорируются."
            }
        ]
    },
    {
        "name": "РежимОбработкиПодкаталоговZIP",
        "name_en": "ZIPSubDirProcessingMode",
        "description": "Содержит варианты обработки масок файлов в именах для упаковки в ZIP архив.",
        "values": [
            {
                "name": "НеОбрабатывать",
                "name_en": "DontProcess",
                "description": "При задании маски в качестве имени для архивации подкаталоги не будут обработаны."
            },
            {
                "name": "ОбрабатыватьРекурсивно",
                "name_en": "ProcessRecursively",
                "description": "При задании маски в качестве пути для архивации подкаталоги также будут рекурсивно обработаны."
            }
        ]
    },
    {
        "name": "РежимСохраненияПутейZIP",
        "name_en": "ZIPStorePathMode",
        "description": "Содержит варианты методов сохранения путей файлов при помещении их в архив.",
        "values": [
            {
                "name": "НеСохранятьПути",
                "name_en": "DontStorePath",
                "description": "Не сохранять пути."
            },
            {
                "name": "СохранятьОтносительныеПути",
                "name_en": "StoreRelativePath",
                "description": "При помещении в архив сохраняются относительные пути от указанного каталога."
            },
            {
                "name": "СохранятьПолныеПути",
                "name_en": "StoreFullPath",
                "description": "При помещении в архив сохраняются полные пути файлов."
            }
        ]
    },
    {
        "name": "УровеньСжатияZIP",
        "name_en": "ZIPCompressionLevel",
        "description": "Содержит варианты степени сжатия ZIP файлов.",
        "values": [
            {
                "name": "Максимальный",
                "name_en": "Maximum",
                "description": "Максимальное сжатие - меньший размер, большее время работы."
            },
            {
                "name": "Минимальный",
                "name_en": "Minimum",
                "description": "Минимальный уровень сжатия и время работы."
            },
            {
                "name": "Оптимальный",
                "name_en": "Optimal",
                "description": "Оптимальное сжатие - оптимальный размер, оптимальное время работы."
            }
        ]
    },
    {
        "name": "КодировкаИменФайловВZipФайле",
        "name_en": "FileNamesEncodingInZipFile",
        "description": "Содержит варианты кодировки имен файлов внутри архива.",
        "values": [
            {
                "name": "UTF8",
                "name_en": "UTF8",
                "description": "Имена файлов внутри ZIP-файла будут записаны в кодировке UTF8."
            },
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Значение кодировки вычисляется из настроек конфигурационного файла. Если настройки в конфигурационном файле отсутствуют, используется значение UTF8."
            },
            {
                "name": "КодировкаОСДополнительноUTF8",
                "name_en": "OSEncodingWithUTF8",
                "description": "Имена файлов внутри ZIP-архива будут записаны в двух кодировках: текущая кодировка операционной системы и UTF8."
            }
        ]
    },
    {
        "name": "РежимБлокировкиДанных",
        "name_en": "DataLockMode",
        "description": "Перечисление режимов блокировки данных.",
        "values": [
            {
                "name": "Исключительный",
                "name_en": "Exclusive",
                "description": "Исключительная блокировка не позволит конкурирующему процессу установить разделяемую или исключительную блокировку по этому же условию."
            },
            {
                "name": "Разделяемый",
                "name_en": "Shared",
                "description": "Разделяемая блокировка позволит конкурирующему процессу установить разделяемую блокировку по этому же условию, но не позволит установить исключительную блокировку."
            }
        ]
    },
    {
        "name": "РежимУправленияБлокировкойДанных",
        "name_en": "DataLockControlMode",
        "description": "Содержит варианты режимов управления блокировкой данных.",
        "values": [
            {
                "name": "Автоматический",
                "name_en": "Automatic",
                "description": "При работе транзакции в этом режиме система автоматически обеспечивает целостность данных, то есть устанавливает все необходимые блокировки."
            },
            {
                "name": "Управляемый",
                "name_en": "Managed",
                "description": "Для правильной работы транзакции в этом режиме может потребоваться установка блокировок в явном виде."
            }
        ]
    },
    {
        "name": "СостояниеФоновогоЗадания",
        "name_en": "BackgroundJobState",
        "description": "Состояние фонового задания.",
        "values": [
            {
                "name": "Активно",
                "name_en": "Active",
                "description": "Задание выполняется."
            },
            {
                "name": "Завершено",
                "name_en": "Completed",
                "description": "Задание выполнено успешно."
            },
            {
                "name": "ЗавершеноАварийно",
                "name_en": "Failed",
                "description": "Задание завершено аварийно."
            },
            {
                "name": "Отменено",
                "name_en": "Canceled",
                "description": "Задание отменено пользователем."
            }
        ]
    },
    {
        "name": "НаправлениеПереходаКСтроке",
        "name_en": "RowGotoDirection",
        "description": "Содержит варианты направлений перехода.",
        "values": [
            {
                "name": "Вверх",
                "name_en": "Up",
                "description": "Перейти вверх."
            },
            {
                "name": "Вниз",
                "name_en": "Down",
                "description": "Перейти вниз."
            }
        ]
    },
    {
        "name": "АвтоПрефиксНомераЗадачи",
        "name_en": "TaskNumberAutoPrefix",
        "description": "Режим использования авто-префикса номера задачи.",
        "values": [
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Префикс не используется."
            },
            {
                "name": "НомерБизнесПроцесса",
                "name_en": "BusinessProcessNumber",
                "description": "Номер бизнес-процесса."
            }
        ]
    },
    {
        "name": "ВариантВстроенногоЯзыка",
        "name_en": "ScriptVariant",
        "description": "Определяет варианты используемого встроенного языка.",
        "values": [
            {
                "name": "Английский",
                "name_en": "English",
                "description": "Английский."
            },
            {
                "name": "Русский",
                "name_en": "Russian",
                "description": "Русский."
            }
        ]
    },
    {
        "name": "РежимПовторногоИспользованияСеансов",
        "name_en": "SessionReuseMode",
        "description": "Режим повторного использования сеансов при вызове веб-сервиса, http-сервиса или интерфейса OData.",
        "values": [
            {
                "name": "Использовать",
                "name_en": "Use",
                "description": "Разрешается управление сеансами с помощью http-заголовка IBSeance."
            },
            {
                "name": "ИспользоватьАвтоматически",
                "name_en": "AutoUse",
                "description": "Автоматическое создание и переиспользование сеансов из пула."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Сеансы не используются повторно."
            }
        ]
    },
    {
        "name": "ВидИерархии",
        "name_en": "HierarchyType",
        "description": "Вид иерархии справочника.",
        "values": [
            {
                "name": "ИерархияГруппИЭлементов",
                "name_en": "HierarchyFoldersAndItems",
                "description": "Все элементы делятся на группы и обычные элементы. В качестве родителей могут выступать только группы."
            },
            {
                "name": "ИерархияЭлементов",
                "name_en": "HierarchyOfItems",
                "description": "Все элементы равноправны. Любой элемент может являться родителем."
            }
        ]
    },
    {
        "name": "ВидРегистраНакопления",
        "name_en": "AccumulationRegisterType",
        "description": "Определяет виды регистров накопления.",
        "values": [
            {
                "name": "Обороты",
                "name_en": "Turnovers",
                "description": "Регистр оборотов."
            },
            {
                "name": "Остатки",
                "name_en": "Balance",
                "description": "Регистр остатков."
            }
        ]
    },
    {
        "name": "ВидЭлементаСтиля",
        "name_en": "StyleElementType",
        "description": "Определяет набор видов элементов стиля.",
        "values": [
            {
                "name": "Рамка",
                "name_en": "Border",
                "description": "Элемент стиля определяет рамку."
            },
            {
                "name": "Цвет",
                "name_en": "Color",
                "description": "Элемент стиля определяет цвет."
            },
            {
                "name": "Шрифт",
                "name_en": "Font",
                "description": "Элемент стиля определяет шрифт."
            }
        ]
    },
    {
        "name": "Индексирование",
        "name_en": "Indexing",
        "description": "Определяет набор вариантов индексирования по реквизиту справочника, документа (а также по реквизиту табличной части), измерению регистра.",
        "values": [
            {
                "name": "Индексировать",
                "name_en": "Index",
                "description": "Индексировать."
            },
            {
                "name": "ИндексироватьСДопУпорядочиванием",
                "name_en": "IndexWithAdditionalOrder",
                "description": "Индексировать с дополнительным упорядочиванием."
            },
            {
                "name": "НеИндексировать",
                "name_en": "DontIndex",
                "description": "Не индексировать."
            }
        ]
    },
    {
        "name": "ИспользованиеПодчинения",
        "name_en": "SubordinationUse",
        "description": "Определяет использование ограничение подчинения для групп и элементов подчиненных справочников.",
        "values": [
            {
                "name": "Группам",
                "name_en": "ToFolders",
                "description": "Устанавливает подчиненность группам."
            },
            {
                "name": "ГруппамИЭлементам",
                "name_en": "ToFoldersAndItems",
                "description": "Устанавливает подчиненность группам и элементам."
            },
            {
                "name": "Элементам",
                "name_en": "ToItems",
                "description": "Устанавливает подчиненность для элементов."
            }
        ]
    },
    {
        "name": "ИспользованиеПолнотекстовогоПоиска",
        "name_en": "UseFullTextSearch",
        "description": "Определяет набор режимов использования полнотекстового поиска.",
        "values": [
            {
                "name": "Использовать",
                "name_en": "Use",
                "description": "Полнотекстовый поиск используется."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Полнотекстовый поиск не используется."
            }
        ]
    },
    {
        "name": "ИспользованиеРеквизита",
        "name_en": "AttributeUse",
        "description": "Определяет набор вариантов использования реквизита справочника для групп и элементов.",
        "values": [
            {
                "name": "ДляГруппы",
                "name_en": "ForFolder",
                "description": "Использовать реквизит только для групп."
            },
            {
                "name": "ДляГруппыИЭлемента",
                "name_en": "ForFolderAndItem",
                "description": "Использовать реквизит для элементов и для групп."
            },
            {
                "name": "ДляЭлемента",
                "name_en": "ForItem",
                "description": "Использовать реквизит только для элементов."
            }
        ]
    },
    {
        "name": "ЗаполнениеПоследовательностей",
        "name_en": "SequenceFilling",
        "description": "Определяет, заполняются ли последовательности автоматически при записи объекта.",
        "values": [
            {
                "name": "ЗаполнятьАвтоматически",
                "name_en": "AutoFill",
                "description": "Последовательности заполняются автоматически при записи."
            },
            {
                "name": "НеЗаполнятьАвтоматически",
                "name_en": "AutoFillOff",
                "description": "При записи последовательности автоматически не заполняются."
            }
        ]
    },
    {
        "name": "ОсновноеПредставлениеВидаХарактеристики",
        "name_en": "CharacteristicTypeMainPresentation",
        "description": "Основное представление плана видов характеристик.",
        "values": [
            {
                "name": "ВВидеКода",
                "name_en": "AsCode",
                "description": "Основное представление в виде кода."
            },
            {
                "name": "ВВидеНаименования",
                "name_en": "AsDescription",
                "description": "Основное представление в виде наименования."
            }
        ]
    },
    {
        "name": "ОсновноеПредставлениеЗадачи",
        "name_en": "TaskMainPresentation",
        "description": "Основное представление задачи.",
        "values": [
            {
                "name": "ВВидеНаименования",
                "name_en": "AsDescription",
                "description": "Основное представление в виде наименования."
            },
            {
                "name": "ВВидеНомера",
                "name_en": "AsNumber",
                "description": "Основное представление в виде номера."
            }
        ]
    },
    {
        "name": "РежимАвтонумерацииОбъектов",
        "name_en": "ObjectAutonumerationMode",
        "description": "Режим автонумерации прикладных объектов конфигурации определяет, переиспользовать или нет автоматически полученные номера объектов, если они не записаны в базу данных.",
        "values": [
            {
                "name": "НеОсвобождатьАвтоматически",
                "name_en": "NotAutoFree",
                "description": "Номер вне транзакции не освобождается автоматически. При откате транзакции номера освобождаются автоматически вне зависимости от режима автонумерации объектов."
            },
            {
                "name": "ОсвобождатьАвтоматически",
                "name_en": "AutoFree",
                "description": "Номер вне транзакции освобождается автоматически. При откате транзакции номера освобождаются автоматически вне зависимости от режима автонумерации объектов."
            }
        ]
    },
    {
        "name": "ОсновноеПредставлениеСправочника",
        "name_en": "CatalogMainPresentation",
        "description": "Определяет варианты основного представления элемента справочника.",
        "values": [
            {
                "name": "ВВидеКода",
                "name_en": "AsCode",
                "description": "Основное представление в виде кода."
            },
            {
                "name": "ВВидеНаименования",
                "name_en": "AsDescription",
                "description": "Основное представление в виде наименования."
            }
        ]
    },
    {
        "name": "РазделениеПользователейОбщегоРеквизита",
        "name_en": "CommonAttributeUsersSeparation",
        "description": "Содержит варианты разделения списка пользователей общим реквизитом.",
        "values": [
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Общий реквизит не разделяет список пользователей."
            },
            {
                "name": "Разделять",
                "name_en": "Separate",
                "description": "Общий реквизит разделяет список пользователей информационной базы. Если сеанс использует разделитель, то доступны только пользователи информационной базы, у которых установлено используемое в сеансе значение разделителя."
            }
        ]
    },
    {
        "name": "ОсновноеПредставлениеСчета",
        "name_en": "AccountMainPresentation",
        "description": "Основное представление счета.",
        "values": [
            {
                "name": "ВВидеКода",
                "name_en": "AsCode",
                "description": "Основное представление счета в виде кода."
            },
            {
                "name": "ВВидеНаименования",
                "name_en": "AsDescription",
                "description": "Основное представление счета в виде наименования."
            }
        ]
    },
    {
        "name": "ОсновноеПредставлениеПланаОбмена",
        "name_en": "DataExchangeMainPresentation",
        "description": "Основное представление плана обмена.",
        "values": [
            {
                "name": "ВВидеКода",
                "name_en": "AsCode",
                "description": "Основное представление плана обмена в виде кода."
            },
            {
                "name": "ВВидеНаименования",
                "name_en": "AsDescription",
                "description": "Основное представление плана обмена в виде наименования."
            }
        ]
    },
    {
        "name": "НазначениеРасширенияКонфигурации",
        "name_en": "ConfigurationExtensionPurpose",
        "description": "Содержит варианты назначения расширения конфигурации.",
        "values": [
            {
                "name": "Адаптация",
                "name_en": "Customization",
                "description": "Расширение для настройки существующих расширений с учетом специфики конкретного внедрения."
            },
            {
                "name": "Дополнение",
                "name_en": "AddOn",
                "description": "Расширение для внесения нового функционала."
            },
            {
                "name": "Исправление",
                "name_en": "Patch",
                "description": "Расширение для корректирования ошибок и неточностей."
            }
        ]
    },
    {
        "name": "ПеремещениеГраницыПриПроведении",
        "name_en": "MoveBoundaryOnPosting",
        "description": "Определяет варианты действий системы с границей последовательности при проведении.",
        "values": [
            {
                "name": "НеПеремещать",
                "name_en": "DontMove",
                "description": "Граница не будет перемещаться при проведении."
            },
            {
                "name": "Перемещать",
                "name_en": "Move",
                "description": "Граница последовательности будет перемещаться при проведении."
            }
        ]
    },
    {
        "name": "ПериодичностьНомераБизнесПроцесса",
        "name_en": "BusinessProcessNumberPeriodicity",
        "description": "Определяет набор вариантов периодичности номеров бизнес-процессов.",
        "values": [
            {
                "name": "Год",
                "name_en": "Year",
                "description": "В пределах года."
            },
            {
                "name": "День",
                "name_en": "Day",
                "description": "В пределах дня."
            },
            {
                "name": "Квартал",
                "name_en": "Quarter",
                "description": "В пределах квартала."
            },
            {
                "name": "Месяц",
                "name_en": "Month",
                "description": "В пределах месяца."
            },
            {
                "name": "Непериодический",
                "name_en": "Nonperiodical",
                "description": "Непериодический."
            }
        ]
    },
    {
        "name": "ПериодичностьНомераДокумента",
        "name_en": "DocumentNumberPeriodicity",
        "description": "Определяет набор вариантов периодичности номеров документов.",
        "values": [
            {
                "name": "Год",
                "name_en": "Year",
                "description": "В пределах года."
            },
            {
                "name": "День",
                "name_en": "Day",
                "description": "В пределах дня."
            },
            {
                "name": "Квартал",
                "name_en": "Quarter",
                "description": "В пределах квартала."
            },
            {
                "name": "Месяц",
                "name_en": "Month",
                "description": "В пределах месяца."
            },
            {
                "name": "Непериодический",
                "name_en": "Nonperiodical",
                "description": "Непериодический."
            }
        ]
    },
    {
        "name": "ПериодичностьРегистраРасчета",
        "name_en": "CalculationRegisterPeriodicity",
        "description": "Задает набор вариантов периодичности регистра расчета.",
        "values": [
            {
                "name": "Год",
                "name_en": "Year",
                "description": "Регистр расчета с годовой периодичностью."
            },
            {
                "name": "День",
                "name_en": "Day",
                "description": "Регистр расчета с дневной периодичностью."
            },
            {
                "name": "Квартал",
                "name_en": "Quarter",
                "description": "Регистр расчета с квартальной периодичностью."
            },
            {
                "name": "Месяц",
                "name_en": "Month",
                "description": "Регистр расчета с месячной периодичностью."
            }
        ]
    },
    {
        "name": "ПериодичностьРегистраСведений",
        "name_en": "InformationRegisterPeriodicity",
        "description": "Определяет набор вариантов периодичности регистра сведений.",
        "values": [
            {
                "name": "Год",
                "name_en": "Year",
                "description": "В пределах года."
            },
            {
                "name": "День",
                "name_en": "Day",
                "description": "В пределах дня."
            },
            {
                "name": "Квартал",
                "name_en": "Quarter",
                "description": "В пределах квартала."
            },
            {
                "name": "Месяц",
                "name_en": "Month",
                "description": "В пределах месяца."
            },
            {
                "name": "Непериодический",
                "name_en": "Nonperiodical",
                "description": "Непериодический."
            },
            {
                "name": "ПозицияРегистратора",
                "name_en": "RecorderPosition",
                "description": "По позиции регистратора. Используется, если запись регистра подчинена регистратору."
            },
            {
                "name": "Секунда",
                "name_en": "Second",
                "description": "В пределах одной секунды."
            }
        ]
    },
    {
        "name": "Проведение",
        "name_en": "Posting",
        "description": "Определяет возможность/невозможность проведения документа.",
        "values": [
            {
                "name": "Запретить",
                "name_en": "Deny",
                "description": "Запретить проведение."
            },
            {
                "name": "Разрешить",
                "name_en": "Allow",
                "description": "Разрешить проведение."
            }
        ]
    },
    {
        "name": "РежимЗаписиРегистра",
        "name_en": "RegisterWriteMode",
        "description": "Определяет варианты режима записи регистра сведений.",
        "values": [
            {
                "name": "Независимый",
                "name_en": "Independent",
                "description": "Независимый режим записи."
            },
            {
                "name": "ПодчинениеРегистратору",
                "name_en": "RecorderSubordinate",
                "description": "Подчиненный регистратору режим записи."
            }
        ]
    },
    {
        "name": "РежимУправленияБлокировкойДанныхПоУмолчанию",
        "name_en": "DefaultDataLockControlMode",
        "description": "Содержит варианты режимов управления блокировкой данных, устанавливаемых по умолчанию.",
        "values": [
            {
                "name": "Автоматический",
                "name_en": "Automatic",
                "description": "Если в свойстве установлен режим управления блокировкой данных конфигурации, то все транзакции, вне зависимости от установок данного свойства для объектов и параметра вызова метода НачатьТранзакцию, будут выполняться в автоматическом режиме. Если установлен у любого другого объекта метаданных, а у конфигурации установлено АвтоматическийИУправляемый, транзакции, создаваемые автоматически системой, будут выполняться в автоматическом режиме."
            },
            {
                "name": "АвтоматическийИУправляемый",
                "name_en": "AutomaticAndManaged",
                "description": "Может быть установлен только в свойстве режим управления блокировкой данных конфигурации. Автоматически создаваемые системой транзакции в этом случае будут выполняться в режиме, определяемом установкой соответствующего свойства объекта метаданных, а начатые вызовом метода НачатьТранзакцию - в режиме, определяемом параметром метода. Следует иметь в виду, что все вложенные транзакции выполняются в режиме \"головной\"."
            },
            {
                "name": "Управляемый",
                "name_en": "Managed",
                "description": "Если в свойстве установлен режим управления блокировкой данных конфигурации, то все транзакции, вне зависимости от установок данного свойства для объектов и параметра вызова метода НачатьТранзакцию, будут выполняться в управляемом режиме. Если установлен у любого другого объекта метаданных, а у конфигурации установлено АвтоматическийИУправляемый, транзакции, создаваемые автоматически системой, будут выполняться в управляемом режиме."
            }
        ]
    },
    {
        "name": "СерииКодовСправочника",
        "name_en": "CatalogCodesSeries",
        "description": "Определяет варианты диапазона проверки кода на уникальность и автоматического присвоения кодов элементов справочника.",
        "values": [
            {
                "name": "ВоВсемСправочнике",
                "name_en": "WholeCatalog",
                "description": "Уникальность кода проверяется среди всех элементов справочника."
            },
            {
                "name": "ВПределахПодчинения",
                "name_en": "WithinSubordination",
                "description": "Уникальность кода проверяется только в пределах подчинения элемента справочника."
            },
            {
                "name": "ВПределахПодчиненияВладельцу",
                "name_en": "WithinOwnerSubordination",
                "description": "В иерархических подчиненных справочниках обеспечивает автоматическую нумерацию и контроль уникальности кодов среди элементов с одинаковым владельцем, но различными родителями."
            }
        ]
    },
    {
        "name": "СерииКодовПланаСчетов",
        "name_en": "CharOfAccountCodeSeries",
        "description": "Определяет варианты диапазона проверки кода на уникальность и автоматического присвоения кодов элементов плана счетов.",
        "values": [
            {
                "name": "ВоВсемПланеСчетов",
                "name_en": "WholeChartOfAccounts",
                "description": "Уникальность кода проверяется среди всех элементов плана счетов."
            },
            {
                "name": "ВПределахПодчинения",
                "name_en": "WithinSubordination",
                "description": "Уникальность кода проверяется только в пределах подчинения элемента плана счетов."
            }
        ]
    },
    {
        "name": "СерииКодовПланаВидовХарактеристик",
        "name_en": "CharacteristicKindCodesSeries",
        "description": "Определяет варианты диапазона проверки кода на уникальность и автоматического присвоения кодов элементов плана видов характеристик.",
        "values": [
            {
                "name": "ВоВсемПланеВидовХарактеристик",
                "name_en": "WholeCharacteristicKind",
                "description": "Уникальность кода проверяется среди всех элементов плана видов характеристик."
            },
            {
                "name": "ВПределахПодчинения",
                "name_en": "WithinSubordination",
                "description": "Уникальность кода проверяется только в пределах подчинения элемента плана видов характеристик."
            }
        ]
    },
    {
        "name": "СпособВыбора",
        "name_en": "ChoiceMode",
        "description": "Задает приоритетный способ выбора для поля ввода.",
        "values": [
            {
                "name": "БыстрыйВыбор",
                "name_en": "QuickChoice",
                "description": "Выбор в поле ввода осуществляется из выпадающего списка."
            },
            {
                "name": "ИзФормы",
                "name_en": "FromForm",
                "description": "Выбор в поле ввода осуществляется из формы."
            },
            {
                "name": "ОбоимиСпособами",
                "name_en": "BothWays",
                "description": "Способ выбора определяется свойством БыстрыйВыбор расширения поля ввода для установленного в поле ввода типа."
            }
        ]
    },
    {
        "name": "СпособРедактирования",
        "name_en": "EditType",
        "description": "Определяет набор вариантов способа ввода и редактирования.",
        "values": [
            {
                "name": "ВДиалоге",
                "name_en": "InDialog",
                "description": "Использовать форму элемента для ввода и редактирования информации."
            },
            {
                "name": "ВСписке",
                "name_en": "InList",
                "description": "Использовать форму списка для ввода и редактирования информации."
            },
            {
                "name": "ОбоимиСпособами",
                "name_en": "BothWays",
                "description": "Можно использовать как форму списка, так и форму элемента для ввода и редактирования информации."
            }
        ]
    },
    {
        "name": "ТипКодаСправочника",
        "name_en": "CatalogCodeType",
        "description": "Определяет варианты типов кода справочника.",
        "values": [
            {
                "name": "Строка",
                "name_en": "String",
                "description": "Строковый."
            },
            {
                "name": "Число",
                "name_en": "Number",
                "description": "Числовой."
            }
        ]
    },
    {
        "name": "ТипКодаПланаВидовРасчета",
        "name_en": "ChartOfCalculationTypesCodeType",
        "description": "Задает тип кода вида расчета.",
        "values": [
            {
                "name": "Строка",
                "name_en": "String",
                "description": "Тип кода вида расчета задается строкой."
            },
            {
                "name": "Число",
                "name_en": "Number",
                "description": "Тип кода вида расчета задается числом."
            }
        ]
    },
    {
        "name": "ТипМакета",
        "name_en": "TemplateType",
        "description": "Описывает тип макета.",
        "values": [
            {
                "name": "ActiveDocument",
                "name_en": "ActiveDocument",
                "description": "Макет представлен ActiveDocument."
            },
            {
                "name": "HTMLДокумент",
                "name_en": "HTMLDocument",
                "description": "Макет представлен HTML документом."
            },
            {
                "name": "ВнешняяКомпонента",
                "name_en": "AddIn",
                "description": "Макет внешней компоненты. Является аналогом двоичных данных, но отличается при обработке выгрузки в мобильное приложение."
            },
            {
                "name": "ГеографическаяСхема",
                "name_en": "GeographicalSchema",
                "description": "Макет представлен географической схемой."
            },
            {
                "name": "ГрафическаяСхема",
                "name_en": "GraphicalSchema",
                "description": "Макет представлен графической схемой."
            },
            {
                "name": "ДвоичныеДанные",
                "name_en": "BinaryData",
                "description": "Макет представлен двоичными данными."
            },
            {
                "name": "МакетОформленияКомпоновкиДанных",
                "name_en": "DataCompositionAppearanceTemplate",
                "description": "Макет представлен макетом оформления компоновки данных."
            },
            {
                "name": "СхемаКомпоновкиДанных",
                "name_en": "DataCompositionSchema",
                "description": "Макет представлен схемой компоновки данных."
            },
            {
                "name": "ТабличныйДокумент",
                "name_en": "SpreadsheetDocument",
                "description": "Макет представлен табличный документом."
            },
            {
                "name": "ТекстовыйДокумент",
                "name_en": "TextDocument",
                "description": "Макет представлен текстовым документом."
            }
        ]
    },
    {
        "name": "ТипНомераБизнесПроцесса",
        "name_en": "BusinessProcessNumberType",
        "description": "Определяет варианты типов номеров бизнес-процессов.",
        "values": [
            {
                "name": "Строка",
                "name_en": "String",
                "description": "Строковый."
            },
            {
                "name": "Число",
                "name_en": "Number",
                "description": "Числовой."
            }
        ]
    },
    {
        "name": "ТипНомераДокумента",
        "name_en": "DocumentNumberType",
        "description": "Определяет варианты типов номеров документов.",
        "values": [
            {
                "name": "Строка",
                "name_en": "String",
                "description": "Строковый."
            },
            {
                "name": "Число",
                "name_en": "Number",
                "description": "Числовой."
            }
        ]
    },
    {
        "name": "ТипНомераЗадачи",
        "name_en": "TaskNumberType",
        "description": "Определяет варианты типов номеров задач.",
        "values": [
            {
                "name": "Строка",
                "name_en": "String",
                "description": "Строковый."
            },
            {
                "name": "Число",
                "name_en": "Number",
                "description": "Числовой."
            }
        ]
    },
    {
        "name": "УдалениеДвижений",
        "name_en": "RegisterRecordsDeletion",
        "description": "Содержит варианты удаления движений документа по регистрам при проведении и отмене проведения.",
        "values": [
            {
                "name": "НеУдалятьАвтоматически",
                "name_en": "AutoDeleteOff",
                "description": "Не удалять движения документа."
            },
            {
                "name": "УдалятьАвтоматически",
                "name_en": "AutoDelete",
                "description": "Автоматически удалять движения документа."
            },
            {
                "name": "УдалятьАвтоматическиПриОтменеПроведения",
                "name_en": "AutoDeleteOnUnpost",
                "description": "Движения удаляются автоматически при отмене проведения. При начале проведения удаления движений не происходит."
            }
        ]
    },
    {
        "name": "ИспользованиеБазыПланаВидовРасчета",
        "name_en": "ChartOfCalculationTypesBaseUse",
        "description": "Варианты использования базовых начислений.",
        "values": [
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "База плана видов расчета не будет использоваться."
            },
            {
                "name": "ПоПериодуДействия",
                "name_en": "OnActionPeriod",
                "description": "База плана видов расчета будет использоваться по периоду действия."
            },
            {
                "name": "ПоПериодуРегистрации",
                "name_en": "OnRegistrationPeriod",
                "description": "База плана видов расчета будет использоваться по периоду регистрации."
            }
        ]
    },
    {
        "name": "ОсновноеПредставлениеВидаРасчета",
        "name_en": "CalculationTypeMainPresentation",
        "description": "Варианты основного представления вида расчета.",
        "values": [
            {
                "name": "ВВидеКода",
                "name_en": "AsCode",
                "description": "Представление в виде кода."
            },
            {
                "name": "ВВидеНаименования",
                "name_en": "AsDescription",
                "description": "Представление в виде наименования."
            }
        ]
    },
    {
        "name": "ОперативноеПроведение",
        "name_en": "RealTimePosting",
        "description": "Варианты доступности оперативного проведения документов.",
        "values": [
            {
                "name": "Запретить",
                "name_en": "Deny",
                "description": "Оперативное проведение запрещено."
            },
            {
                "name": "Разрешить",
                "name_en": "Allow",
                "description": "Оперативное проведение разрешено."
            }
        ]
    },
    {
        "name": "НаправлениеПередачи",
        "name_en": "TransferDirection",
        "description": "Содержит варианты направления передачи параметров.",
        "values": [
            {
                "name": "Входной",
                "name_en": "In",
                "description": "Входной параметр.  Значение изменено не будет."
            },
            {
                "name": "ВходнойВыходной",
                "name_en": "InOut",
                "description": "Параметр является как входным, так и выходным."
            },
            {
                "name": "Выходной",
                "name_en": "Out",
                "description": "Выходной параметр.  Первичная установка значения смысла не имеет."
            }
        ]
    },
    {
        "name": "ЗаписьДвиженийПриПроведении",
        "name_en": "RegisterRecordsWritingOnPost",
        "description": "Содержит варианты поведения системы при создании движений во время проведения документа.",
        "values": [
            {
                "name": "ЗаписыватьВыбранные",
                "name_en": "WriteSelected",
                "description": "Перед началом проведения документ устанавливает всем наборам записей, участвующим в регистрации движений, свойство Записывать в Ложь."
            },
            {
                "name": "ЗаписыватьМодифицированные",
                "name_en": "WriteModified",
                "description": "Все наборы записей, участвующие в регистрации движений документа, имеют значение свойства Записывать установленным системой по умолчанию в Истина."
            }
        ]
    },
    {
        "name": "ПовторноеИспользованиеВозвращаемыхЗначений",
        "name_en": "ReturnValuesReuse",
        "description": "Содержит варианты повторного использования результатов экспортных функций общего модуля.",
        "values": [
            {
                "name": "НаВремяВызова",
                "name_en": "DuringRequest",
                "description": "Повторное использование на время вызова сервера 1С:Предприятия."
            },
            {
                "name": "НаВремяСеанса",
                "name_en": "DuringSession",
                "description": "Повторное использование на время сеанса."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Повторное использование не используется."
            }
        ]
    },
    {
        "name": "РежимСовместимости",
        "name_en": "CompatibilityMode",
        "description": "Некоторые усовершенствования, внесенные в текущую версию, могут вызвать конфликт с существующими конфигурациями, разработанными на более ранних версиях платформы. Использование данного перечисления позволяет отключить эти усовершенствования и использовать ранее разработанные конфигурации без внесения каких-либо исправлений.",
        "values": [
            {
                "name": "Версия8_1",
                "name_en": "Version8_1",
                "description": "Возможности версии 8.2 частично не используются. Гарантируется работа конфигураций, созданных на платформе версии 8.1."
            },
            {
                "name": "Версия8_2_13",
                "name_en": "Version8_2_13",
                "description": "Возможности версии 8.2.14 частично не используются. Гарантируется работа конфигураций, созданных на платформе версии 8.2.13."
            },
            {
                "name": "Версия8_2_16",
                "name_en": "Version8_2_16",
                "description": "Усовершенствования версии 8.3.1 частично не используются, гарантируется работа конфигураций, сделанных на платформе версии 8.2.16."
            },
            {
                "name": "Версия8_3_1",
                "name_en": "Version8_3_1",
                "description": "Усовершенствования версии 8.3.2 частично не используются, гарантируется работа конфигураций, сделанных на платформе версии 8.3.1."
            },
            {
                "name": "Версия8_3_10",
                "name_en": "Version8_3_10",
                "description": "Усовершенствования версии 8.3.11 частично не используются, гарантируется работа конфигураций, сделанных на платформе версии 8.3.10."
            },
            {
                "name": "Версия8_3_11",
                "name_en": "Version8_3_11",
                "description": "Усовершенствования версии 8.3.12 частично не используются, гарантируется работа конфигураций, сделанных на платформе версии 8.3.11."
            },
            {
                "name": "Версия8_3_12",
                "name_en": "Version8_3_12",
                "description": "Усовершенствования версии 8.3.13 частично не используются, гарантируется работа конфигураций, сделанных на платформе версии 8.3.12."
            },
            {
                "name": "Версия8_3_13",
                "name_en": "Version8_3_13",
                "description": "Усовершенствования версии 8.3.14 частично не используются, гарантируется работа конфигураций, сделанных на платформе версии 8.3.13."
            },
            {
                "name": "Версия8_3_14",
                "name_en": "Version8_3_14",
                "description": "Усовершенствования версии 8.3.15 частично не используются, гарантируется работа конфигураций, сделанных на платформе версии 8.3.14."
            },
            {
                "name": "Версия8_3_15",
                "name_en": "Version8_3_15",
                "description": "Усовершенствования версии 8.3.16 частично не используются, гарантируется работа конфигураций, сделанных на платформе версии 8.3.15."
            },
            {
                "name": "Версия8_3_16",
                "name_en": "Version8_3_16",
                "description": "Усовершенствования версии 8.3.17 частично не используются, гарантируется работа конфигураций, сделанных на платформе версии 8.3.16."
            },
            {
                "name": "Версия8_3_2",
                "name_en": "Version8_3_2",
                "description": "Усовершенствования версии 8.3.3 частично не используются, гарантируется работа конфигураций, сделанных на платформе версии 8.3.2."
            },
            {
                "name": "Версия8_3_3",
                "name_en": "Version8_3_3",
                "description": "Усовершенствования версии 8.3.4 частично не используются, гарантируется работа конфигураций, сделанных на платформе версии 8.3.3."
            },
            {
                "name": "Версия8_3_4",
                "name_en": "Version8_3_4",
                "description": "Усовершенствования версии 8.3.5 частично не используются, гарантируется работа конфигураций, сделанных на платформе версии 8.3.4."
            },
            {
                "name": "Версия8_3_5",
                "name_en": "Version8_3_5",
                "description": "Усовершенствования версии 8.3.6 частично не используются, гарантируется работа конфигураций, сделанных на платформе версии 8.3.5."
            },
            {
                "name": "Версия8_3_6",
                "name_en": "Version8_3_6",
                "description": "Усовершенствования версии 8.3.7 частично не используются, гарантируется работа конфигураций, сделанных на платформе версии 8.3.6."
            },
            {
                "name": "Версия8_3_7",
                "name_en": "Version8_3_7",
                "description": "Усовершенствования версии 8.3.8 частично не используются, гарантируется работа конфигураций, сделанных на платформе версии 8.3.7."
            },
            {
                "name": "Версия8_3_8",
                "name_en": "Version8_3_8",
                "description": "Усовершенствования версии 8.3.9 частично не используются, гарантируется работа конфигураций, сделанных на платформе версии 8.3.8."
            },
            {
                "name": "Версия8_3_9",
                "name_en": "Version8_3_9",
                "description": "Усовершенствования версии 8.3.10 частично не используются, гарантируется работа конфигураций, сделанных на платформе версии 8.3.9."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Возможности версии 8.3 используются полностью, работа конфигураций, созданных на платформе версии 8.2, не гарантируется."
            }
        ]
    },
    {
        "name": "ИспользованиеБыстрогоВыбора",
        "name_en": "UseQuickChoice",
        "description": "Используется для определения способа выбора значения в полях ввода.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Способ выбора определяется автоматически."
            },
            {
                "name": "Использовать",
                "name_en": "Use",
                "description": "Для выбора значения используется выпадающий список."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Для выбора объекта используется форма."
            }
        ]
    },
    {
        "name": "ТипФормы",
        "name_en": "FormType",
        "description": "Тип формы (обычная или управляемая). Задается при создании формы и впоследствии не может быть изменен.",
        "values": [
            {
                "name": "Обычная",
                "name_en": "Ordinary",
                "description": "Обычная форма."
            },
            {
                "name": "Управляемая",
                "name_en": "Managed",
                "description": "Форма клиентского приложения."
            }
        ]
    },
    {
        "name": "АвтоИспользованиеОбщегоРеквизита",
        "name_en": "CommonAttributeAutoUse",
        "description": "Содержит варианты включения в состав общего реквизита объекта метаданных из соответствующего элемента состава общего реквизита, если у элемента включение в состав установлено автоматическим.",
        "values": [
            {
                "name": "Использовать",
                "name_en": "Use",
                "description": "Использовать, если для объекта метаданных указано автоматическое использование."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Не использовать, если для объекта метаданных указано автоматическое использование."
            }
        ]
    },
    {
        "name": "РазделениеДанныхОбщегоРеквизита",
        "name_en": "CommonAttributeDataSeparation",
        "description": "Содержит варианты использования общего реквизита в разделении данных.",
        "values": [
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Общий реквизит используется в качестве обычного реквизита."
            },
            {
                "name": "Разделять",
                "name_en": "Separate",
                "description": "Общий реквизит используется в качестве разделителя данных."
            }
        ]
    },
    {
        "name": "ИспользованиеРазделяемыхДанныхОбщегоРеквизита",
        "name_en": "CommonAttributeSeparatedDataUse",
        "description": "Содержит варианты уровней разделения данных общим реквизитом.",
        "values": [
            {
                "name": "Независимо",
                "name_en": "Independently",
                "description": "Фактически делает невидимым этот реквизит на прикладном уровне."
            },
            {
                "name": "НезависимоИСовместно",
                "name_en": "IndependentlyAndSimultaneously",
                "description": "Оставляет реквизит доступным на прикладном уровне."
            }
        ]
    },
    {
        "name": "ИспользованиеОбщегоРеквизита",
        "name_en": "CommonAttributeUse",
        "description": "Определяет вхождение связанного с элементом состава общего реквизита объекта метаданных в состав общего реквизита.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Использование определяется свойством Использовать."
            },
            {
                "name": "Использовать",
                "name_en": "Use",
                "description": "Используется."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Не используется."
            }
        ]
    },
    {
        "name": "РазделениеАутентификацииОбщегоРеквизита",
        "name_en": "CommonAttributeAuthenticationSeparation",
        "description": "Содержит варианты необходимости указания значения разделителя для однозначного определения пользователя информационной базы по имени пользователя.",
        "values": [
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Возможно однозначное определение пользователя информационной базы по его имени без указания значения этого разделителя. Имена пользователей информационной базы уникальны, независимо от значения этого разделителя."
            },
            {
                "name": "Разделять",
                "name_en": "Separate",
                "description": "Для однозначного определения пользователя информационной базы требуется указание значения этого разделителя. Имена пользователей информационной базы должны быть уникальны в разрезе значений этого разделителя, а также среди пользователей, для которых этот разделитель не установлен."
            }
        ]
    },
    {
        "name": "ТипДанныхТаблицыВнешнегоИсточникаДанных",
        "name_en": "ExternalDataSourceTableDataType",
        "description": "Содержит варианты данных таблиц внешних источников данных.",
        "values": [
            {
                "name": "НеобъектныеДанные",
                "name_en": "NonobjectData",
                "description": "Таблица содержит необъектные данные."
            },
            {
                "name": "ОбъектныеДанные",
                "name_en": "ObjectData",
                "description": "Таблица содержит объектные данные."
            }
        ]
    },
    {
        "name": "СпособПоискаСтрокиПриВводеПоСтроке",
        "name_en": "SearchStringModeOnInputByString",
        "description": "Содержит возможные способы ввода по строке.",
        "values": [
            {
                "name": "ЛюбаяЧасть",
                "name_en": "AnyPart",
                "description": "Поиск выполняется в любой части строки."
            },
            {
                "name": "Начало",
                "name_en": "Begin",
                "description": "Поиск выполняется только с начала строки."
            }
        ]
    },
    {
        "name": "ПолнотекстовыйПоискПриВводеПоСтроке",
        "name_en": "FullTextSearchOnInputByString",
        "description": "Содержит варианты использования полнотекстового поиска при вводе по строке.",
        "values": [
            {
                "name": "Использовать",
                "name_en": "Use",
                "description": "Использовать полнотекстовый поиск при вводе по строке."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Не использовать полнотекстовый поиск при вводе по строке."
            }
        ]
    },
    {
        "name": "РежимПолученияДанныхВыбораПриВводеПоСтроке",
        "name_en": "ChoiceDataGetModeOnInputByString",
        "description": "Содержит варианты запуска поиска при вводе по строке.",
        "values": [
            {
                "name": "Непосредственно",
                "name_en": "Directly",
                "description": "Нужно ожидать выполнения поиска."
            },
            {
                "name": "Фоновый",
                "name_en": "Background",
                "description": "Поиск выполняется в фоновом режиме."
            }
        ]
    },
    {
        "name": "СозданиеПриВводе",
        "name_en": "CreateOnInput",
        "description": "Содержит варианты создания нового объекта при вводе.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Участие объекта в механизме создания при вводе не определено."
            },
            {
                "name": "Использовать",
                "name_en": "Use",
                "description": "Объект участвует в механизме создания при вводе."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Объект не участвует в механизме создания при вводе."
            }
        ]
    },
    {
        "name": "РежимИспользованияМодальности",
        "name_en": "ModalityUseMode",
        "description": "Содержит варианты контроля использования методов, которые открывают модальные окна, т.к. реализация веб-клиента для некоторых платформ не поддерживает создания модальных окон.",
        "values": [
            {
                "name": "Использовать",
                "name_en": "Use",
                "description": "Разрешает использование в конфигурации методов, открывающих модальные окна. Если такие методы используются, то конфигурация не будет работать в полном объеме через веб-клиент на тех платформах, где поддержка модальных окон отсутствует."
            },
            {
                "name": "ИспользоватьСПредупреждениями",
                "name_en": "UseWithWarnings",
                "description": "Разрешает использование в конфигурации методов, открывающих модальные окна. Однако при вызове такого метода в окно сообщений будет выведено предупреждение. Если такие методы используются, то конфигурация не будет работать в полном объеме через веб-клиент на тех платформах, где поддержка модальных окон отсутствует."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Запрещает использование в конфигурации методов, открывающих модальные окна. При использовании таких методов в конфигурации в режиме запуска будет сгенерирована ошибка. При сохранении модуля возникнет ошибка, оповещающая об использовании неподдерживаемых методов."
            }
        ]
    },
    {
        "name": "ВидТаблицыВнешнегоИсточникаДанных",
        "name_en": "ExternalDataSourceTableType",
        "description": "Содержит виды таблиц внешних источников данных.",
        "values": [
            {
                "name": "Выражение",
                "name_en": "Expression",
                "description": "Выражение."
            },
            {
                "name": "Таблица",
                "name_en": "Table",
                "description": "Таблица."
            }
        ]
    },
    {
        "name": "HTTPМетод",
        "name_en": "HTTPMethod",
        "description": "Перечисление описывает HTTP-методы.",
        "values": [
            {
                "name": "CONNECT",
                "name_en": "CONNECT",
                "description": "Соответствует HTTP-методу CONNECT. Описан в стандарте RFC 2616 (http://tools.ietf.org/html/rfc2616)."
            },
            {
                "name": "COPY",
                "name_en": "COPY",
                "description": "Соответствует HTTP-методу COPY. Является частью протокола WebDAV. Описан в стандарте RFC 2518 (http://tools.ietf.org/html/rfc2518)."
            },
            {
                "name": "DELETE",
                "name_en": "DELETE",
                "description": "Соответствует HTTP-методу DELETE. Предназначен для удаления данных. Описан в стандарте RFC 2616 (http://tools.ietf.org/html/rfc2616)."
            },
            {
                "name": "GET",
                "name_en": "GET",
                "description": "Соответствует HTTP-методу GET. Предназначен для получения данных. Описан в стандарте RFC 2616 (http://tools.ietf.org/html/rfc2616)."
            },
            {
                "name": "HEAD",
                "name_en": "HEAD",
                "description": "Соответствует HTTP-методу HEAD. Предназначен для получения информации данных (списка заголовков без получения тела). Описан в стандарте RFC 2616 (http://tools.ietf.org/html/rfc2616)."
            },
            {
                "name": "LOCK",
                "name_en": "LOCK",
                "description": "Соответствует HTTP-методу LOCK. Является частью протокола WebDAV. Описан в стандарте RFC 2518 (http://tools.ietf.org/html/rfc2518)."
            },
            {
                "name": "MERGE",
                "name_en": "MERGE",
                "description": "Соответствует HTTP-методу MERGE. Предназначен для дифференциального изменения данных. Описан в http://msdn.microsoft.com/en-us/library/dd541276.aspx.  Аналогичен HTTP-методу PATCH, но является расширением от Microsoft."
            },
            {
                "name": "MKCOL",
                "name_en": "MKCOL",
                "description": "Соответствует HTTP-методу MKCOL. Является частью протокола WebDAV. Описан в стандарт RFC 2518 (http://tools.ietf.org/html/rfc2518)."
            },
            {
                "name": "MOVE",
                "name_en": "MOVE",
                "description": "Соответствует HTTP-методу MOVE. Является частью протокола WebDAV. Описан в стандарте RFC 2518 (http://tools.ietf.org/html/rfc2518)."
            },
            {
                "name": "OPTIONS",
                "name_en": "OPTIONS",
                "description": "Соответствует HTTP-методу OPTIONS. Предназначен для получения информации о способах работы с данным URI (доступные HTTP-методы, форматы представления и т.п.). Описан в стандарте RFC 2616 (http://tools.ietf.org/html/rfc2616)."
            },
            {
                "name": "PATCH",
                "name_en": "PATCH",
                "description": "Соответствует HTTP-методу PATCH. Предназначен для дифференциального изменения данных. Описан в стандарте RFC 5789 http://tools.ietf.org/html/rfc5789."
            },
            {
                "name": "POST",
                "name_en": "POST",
                "description": "Соответствует HTTP-методу POST. Предназначен для создания новой сущности на сервере. Описан в стандарте RFC 2616 (http://tools.ietf.org/html/rfc2616)."
            },
            {
                "name": "PROPFIND",
                "name_en": "PROPFIND",
                "description": "Соответствует HTTP-методу PROPFIND. Является частью протокола WebDAV. Описан в стандарте RFC 2518 (http://tools.ietf.org/html/rfc2518)."
            },
            {
                "name": "PROPPATCH",
                "name_en": "PROPPATCH",
                "description": "Соответствует HTTP-методу PROPPATCH. Является частью протокола WebDAV. Описан в стандарте RFC 2518 (http://tools.ietf.org/html/rfc2518)."
            },
            {
                "name": "PUT",
                "name_en": "PUT",
                "description": "Соответствует HTTP-методу PUT. Предназначен для изменения данных. Описан в стандарте RFC 2616 (http://tools.ietf.org/html/rfc2616)."
            },
            {
                "name": "TRACE",
                "name_en": "TRACE",
                "description": "Соответствует HTTP-методу TRACE. Описан в стандарте RFC 2616 (http://tools.ietf.org/html/rfc2616)."
            },
            {
                "name": "UNLOCK",
                "name_en": "UNLOCK",
                "description": "Соответствует HTTP-методу UNLOCK. Является частью протокола WebDAV. Описан в стандарте RFC 2518 (http://tools.ietf.org/html/rfc2518)."
            },
            {
                "name": "Любой",
                "name_en": "Any",
                "description": "Указывает, что может быть использован любой HTTP-метод из перечисления HTTPМетод."
            }
        ]
    },
    {
        "name": "ПринадлежностьОбъекта",
        "name_en": "ObjectBelonging",
        "description": "Определяет, относится ли объект к данной конфигурации или был заимствован из расширяемой конфигурации.",
        "values": [
            {
                "name": "Заимствованный",
                "name_en": "Adopted",
                "description": "Объект заимствован из основной конфигурации. Такие объекты не доступны во время запуска конфигурации в режиме \"1С:Предприятие\". Они либо расширяют существующие объекты расширяемой конфигурации, либо только используют ссылки на них."
            },
            {
                "name": "Собственный",
                "name_en": "Native",
                "description": "Объект метаданных создан в текущей конфигурации. Для всех объектов метаданных во время запуска конфигурации в режиме \"1С:Предприятие\" свойство ОбъектМетаданных: Куб.ПринадлежностьОбъекта, ОбъектМетаданных: ТаблицаИзмерения.ПринадлежностьОбъекта, ОбъектМетаданных: ВнешнийИсточникДанных.ПринадлежностьОбъекта, ОбъектМетаданных: Поле.ПринадлежностьОбъекта, ОбъектМетаданных: Таблица.ПринадлежностьОбъекта, ОбъектМетаданных: HTTPСервис.ПринадлежностьОбъекта, ОбъектМетаданных: Функция.ПринадлежностьОбъекта, ОбъектМетаданных: ШаблонURLHTTPСервиса.ПринадлежностьОбъекта, ОбъектМетаданных: ОпределяемыйТип.ПринадлежностьОбъекта, ОбъектМетаданных: ПланВидовРасчета.ПринадлежностьОбъекта, ОбъектМетаданных: ПланСчетов.ПринадлежностьОбъекта, ОбъектМетаданных: БизнесПроцесс.ПринадлежностьОбъекта, ОбъектМетаданных: Документ.ПринадлежностьОбъекта, ОбъектМетаданных: ЖурналДокументов.ПринадлежностьОбъекта, ОбъектМетаданных: Задача.ПринадлежностьОбъекта, ОбъектМетаданных: ПланВидовХарактеристик.ПринадлежностьОбъекта, ОбъектМетаданных: ПланОбмена.ПринадлежностьОбъекта, ОбъектМетаданных: РегистрБухгалтерии.ПринадлежностьОбъекта, ОбъектМетаданных: РегистрНакопления.ПринадлежностьОбъекта, ОбъектМетаданных: РегистрРасчета.ПринадлежностьОбъекта, ОбъектМетаданных: РегистрСведений.ПринадлежностьОбъекта, ОбъектМетаданных: Справочник.ПринадлежностьОбъекта, ОбъектМетаданных: ФункциональнаяОпция.ПринадлежностьОбъекта, ОбъектМетаданных: ПараметрФункциональныхОпций.ПринадлежностьОбъекта, ОбъектМетаданных: Команда.ПринадлежностьОбъекта, ОбъектМетаданных: ГруппаКоманд.ПринадлежностьОбъекта, ОбъектМетаданных: ХранилищеНастроек.ПринадлежностьОбъекта, ОбъектМетаданных: ОбщаяКоманда.ПринадлежностьОбъекта, ОбъектМетаданных: СервисИнтеграции.ПринадлежностьОбъекта, ОбъектМетаданных: WebСервис.ПринадлежностьОбъекта, ОбъектМетаданных: WSСсылка.ПринадлежностьОбъекта, ОбъектМетаданных: Интерфейс.ПринадлежностьОбъекта, ОбъектМетаданных: Константа.ПринадлежностьОбъекта, ОбъектМетаданных: КритерийОтбора.ПринадлежностьОбъекта, ОбъектМетаданных: Нумератор.ПринадлежностьОбъекта, ОбъектМетаданных: Обработка.ПринадлежностьОбъекта, ОбъектМетаданных: ОбщаяКартинка.ПринадлежностьОбъекта, ОбъектМетаданных: Макет.ПринадлежностьОбъекта, ОбъектМетаданных: ОбщийМодуль.ПринадлежностьОбъекта, ОбъектМетаданных: Форма .ПринадлежностьОбъекта, ОбъектМетаданных: Стиль.ПринадлежностьОбъекта, ОбъектМетаданных: Язык.ПринадлежностьОбъекта, ОбъектМетаданных: Отчет.ПринадлежностьОбъекта, ОбъектМетаданных: ПакетXDTO.ПринадлежностьОбъекта, ОбъектМетаданных: ПараметрСеанса.ПринадлежностьОбъекта, ОбъектМетаданных: Перечисление.ПринадлежностьОбъекта, ОбъектМетаданных: ПодпискаНаСобытие.ПринадлежностьОбъекта, ОбъектМетаданных: Подсистема.ПринадлежностьОбъекта, ОбъектМетаданных: Последовательность.ПринадлежностьОбъекта, ОбъектМетаданных: РегламентноеЗадание.ПринадлежностьОбъекта, ОбъектМетаданных: Роль.ПринадлежностьОбъекта, ОбъектМетаданных: ЭлементСтиля.ПринадлежностьОбъекта, ОбъектМетаданных: Графа.ПринадлежностьОбъекта, ОбъектМетаданных: Измерение.ПринадлежностьОбъекта, ОбъектМетаданных: ЗначениеПеречисления.ПринадлежностьОбъекта, ОбъектМетаданных: ОперацияWebСервиса.ПринадлежностьОбъекта, ОбъектМетаданных: Перерасчет.ПринадлежностьОбъекта, ОбъектМетаданных: ПараметрWebСервиса.ПринадлежностьОбъекта, ОбъектМетаданных: ПризнакУчетаПланаСчетов.ПринадлежностьОбъекта, ОбъектМетаданных: ПризнакУчетаСубконтоПланаСчетов.ПринадлежностьОбъекта, ОбъектМетаданных: Реквизит.ПринадлежностьОбъекта, ОбъектМетаданных: ТабличнаяЧасть.ПринадлежностьОбъекта, ОбъектМетаданных: Ресурс.ПринадлежностьОбъекта, ОбъектМетаданных: РеквизитАдресации.ПринадлежностьОбъекта, ОбъектМетаданных: КаналСервисаИнтеграции.ПринадлежностьОбъекта, ОбъектМетаданных: ОбщийРеквизит.ПринадлежностьОбъекта будет иметь данное значение."
            }
        ]
    },
    {
        "name": "РазделениеРасширенийКонфигурацииОбщегоРеквизита",
        "name_en": "CommonAttributeConfigurationExtensionsSeparation",
        "description": "Содержит варианты разделения расширений конфигурации общим реквизитом.",
        "values": [
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Данный разделитель не будет влиять на расширения конфигурации, т.е. вне зависимости от значения данного разделителя будет доступен один и тот же набор расширений."
            },
            {
                "name": "Разделять",
                "name_en": "Separate",
                "description": "Данный разделитель влияет на расширения, т.е. для разных значений разделителя доступен свой набор расширений конфигурации."
            }
        ]
    },
    {
        "name": "ИспользованиеИсторииДанных",
        "name_en": "DataHistoryUse",
        "description": "Определяет набор режимов использования истории данных.",
        "values": [
            {
                "name": "Использовать",
                "name_en": "Use",
                "description": "История данных используется."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "История данных не используется."
            }
        ]
    },
    {
        "name": "РежимИспользованияСинхронныхВызововРасширенийПлатформыИВнешнихКомпонент",
        "name_en": "SynchronousPlatformExtensionAndAddInCallUseMode",
        "description": "Содержит варианты проверки использования синхронных методов в конфигурации.",
        "values": [
            {
                "name": "Использовать",
                "name_en": "Use",
                "description": "В режиме конфигуратора и в режиме \"1С:Предприятие\" синхронные методы на клиенте доступны, никакие проверки не выполняются."
            },
            {
                "name": "ИспользоватьСПредупреждениями",
                "name_en": "UseWithWarnings",
                "description": "В режиме \"Конфигуратор\":  - В процессе синтаксического контроля синхронные методы не вызывают ошибки.  - При расширенной проверке конфигурации при обнаружении синхронных методов на клиенте отображается предупреждение. . В режиме \"1С:Предприятие\" при вызове синхронных методов будет отображаться предупреждение."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "В режиме \"Конфигуратор\":  - При синтаксическом контроле из глобального контекста синхронные методы будут удалены.  - Расширенная проверка конфигурации выдает ошибки при обнаружении синхронных методов на клиенте.  - В контекстной подсказке синхронные методы не отображаются. . В режиме \"1С:Предприятие\" при вызове синхронных методов будет генерироваться исключение."
            }
        ]
    },
    {
        "name": "НаправлениеСообщенияКаналаСервисаИнтеграции",
        "name_en": "IntegrationServiceChannelMessageDirection",
        "description": "Содержит варианты направления передачи сообщений в канале сервиса интеграции.",
        "values": [
            {
                "name": "Отправка",
                "name_en": "Send",
                "description": "Отправка сообщений в канал сервиса интеграции."
            },
            {
                "name": "Получение",
                "name_en": "Receive",
                "description": "Получение сообщения из канала сервиса интеграции."
            }
        ]
    },
    {
        "name": "ТипНомераТелефонаДанныхКонтакта",
        "name_en": "ContactDataPhoneNumberType",
        "description": "Содержит типы номеров телефона, используемых в контактах.",
        "values": [
            {
                "name": "iPhone",
                "name_en": "iPhone",
                "description": "iPhone."
            },
            {
                "name": "Домашний",
                "name_en": "Home",
                "description": "Домашний."
            },
            {
                "name": "ДомашнийФакс",
                "name_en": "HomeFax",
                "description": "Факс домашний."
            },
            {
                "name": "Другой",
                "name_en": "Other",
                "description": "Другой тип номера."
            },
            {
                "name": "ДругойФакс",
                "name_en": "OtherFax",
                "description": "Другой факс."
            },
            {
                "name": "Мобильный",
                "name_en": "Mobile",
                "description": "Мобильный."
            },
            {
                "name": "Основной",
                "name_en": "Main",
                "description": "Основной."
            },
            {
                "name": "Рабочий",
                "name_en": "Work",
                "description": "Рабочий."
            },
            {
                "name": "РабочийМобильный",
                "name_en": "WorkMobile",
                "description": "Рабочий мобильный."
            },
            {
                "name": "РабочийФакс",
                "name_en": "WorkFax",
                "description": "Факс рабочий."
            }
        ]
    },
    {
        "name": "ТипАдресаЭлектроннойПочтыДанныхКонтакта",
        "name_en": "ContactDataEmailAddressType",
        "description": "Содержит типы адресов электронной почты, используемых в контактах.",
        "values": [
            {
                "name": "Домашний",
                "name_en": "Home",
                "description": "Домашний адрес."
            },
            {
                "name": "Другой",
                "name_en": "Other",
                "description": "Другой тип адреса."
            },
            {
                "name": "Мобильный",
                "name_en": "Mobile",
                "description": "Мобильный адрес."
            },
            {
                "name": "Рабочий",
                "name_en": "Work",
                "description": "Рабочий адрес."
            }
        ]
    },
    {
        "name": "ТипАдресаДанныхКонтакта",
        "name_en": "ContactDataAddressType",
        "description": "Содержит типы адресов, используемых в контактах.",
        "values": [
            {
                "name": "Домашний",
                "name_en": "Home",
                "description": "Домашний адрес."
            },
            {
                "name": "Другой",
                "name_en": "Other",
                "description": "Другой тип адреса."
            },
            {
                "name": "Рабочий",
                "name_en": "Work",
                "description": "Рабочий адрес."
            }
        ]
    },
    {
        "name": "ТипАдресаМгновенныхСообщенийДанныхКонтакта",
        "name_en": "ContactDataInstantMessagingAddressType",
        "description": "Содержит типы адресов мгновенных сообщений, используемых в контактах.",
        "values": [
            {
                "name": "Домашний",
                "name_en": "Home",
                "description": "Домашний адрес."
            },
            {
                "name": "Другой",
                "name_en": "Other",
                "description": "Другой тип адреса."
            },
            {
                "name": "Рабочий",
                "name_en": "Work",
                "description": "Рабочий адрес."
            }
        ]
    },
    {
        "name": "ТипВебАдресаДанныхКонтакта",
        "name_en": "ContactDataURLType",
        "description": "Содержит варианты типов веб-адресов, используемых в контактах.",
        "values": [
            {
                "name": "FTP",
                "name_en": "FTP",
                "description": "FTP-адрес."
            },
            {
                "name": "Блог",
                "name_en": "Blog",
                "description": "Адрес блога."
            },
            {
                "name": "Домашний",
                "name_en": "Home",
                "description": "Домашний адрес."
            },
            {
                "name": "ДомашняяСтраница",
                "name_en": "HomePage",
                "description": "Домашняя страница."
            },
            {
                "name": "Другой",
                "name_en": "Other",
                "description": "Другой тип адреса."
            },
            {
                "name": "Профиль",
                "name_en": "Profile",
                "description": "Профиль."
            },
            {
                "name": "Рабочий",
                "name_en": "Work",
                "description": "Рабочий адрес."
            }
        ]
    },
    {
        "name": "ТипОтношенийДанныхКонтакта",
        "name_en": "ContactDataRelationshipType",
        "description": "Содержит типы отношений, используемых в контактах.",
        "values": [
            {
                "name": "Брат",
                "name_en": "Brother",
                "description": "Брат."
            },
            {
                "name": "ГражданскийСупруг",
                "name_en": "DomesticPartner",
                "description": "Гражданский супруг."
            },
            {
                "name": "Друг",
                "name_en": "Friend",
                "description": "Друг."
            },
            {
                "name": "Другой",
                "name_en": "Other",
                "description": "Другой."
            },
            {
                "name": "Мать",
                "name_en": "Mother",
                "description": "Мать."
            },
            {
                "name": "Отец",
                "name_en": "Father",
                "description": "Отец."
            },
            {
                "name": "Партнер",
                "name_en": "Partner",
                "description": "Партнер."
            },
            {
                "name": "Помощник",
                "name_en": "Assistant",
                "description": "Помощник."
            },
            {
                "name": "Ребенок",
                "name_en": "Child",
                "description": "Ребенок."
            },
            {
                "name": "Родитель",
                "name_en": "Parent",
                "description": "Родитель."
            },
            {
                "name": "Родственник",
                "name_en": "Relative",
                "description": "Родственник."
            },
            {
                "name": "Руководитель",
                "name_en": "Manager",
                "description": "Руководитель."
            },
            {
                "name": "Сестра",
                "name_en": "Sister",
                "description": "Сестра."
            },
            {
                "name": "Супруг",
                "name_en": "Spouse",
                "description": "Супруг."
            }
        ]
    },
    {
        "name": "ПовторениеСобытияКалендаря",
        "name_en": "CalendarEventRecurrence",
        "description": "Содержит варианты повторения события.",
        "values": [
            {
                "name": "КаждуюНеделю",
                "name_en": "Weekly",
                "description": "Каждую неделю."
            },
            {
                "name": "КаждыйГод",
                "name_en": "Yearly",
                "description": "Каждый год."
            },
            {
                "name": "КаждыйДень",
                "name_en": "Daily",
                "description": "Каждый день."
            },
            {
                "name": "КаждыйМесяц",
                "name_en": "Monthly",
                "description": "Каждый месяц."
            },
            {
                "name": "ОдинРаз",
                "name_en": "Once",
                "description": "Один раз."
            }
        ]
    },
    {
        "name": "ТипЗвонкаЖурналаЗвонков",
        "name_en": "CallLogCallType",
        "description": "Тип звонка из записи журнала звонков.",
        "values": [
            {
                "name": "Входящий",
                "name_en": "Incoming",
                "description": "Входящий звонок."
            },
            {
                "name": "Исходящий",
                "name_en": "Outgoing",
                "description": "Исходящий звонок."
            },
            {
                "name": "Пропущенный",
                "name_en": "Missed",
                "description": "Пропущенный звонок."
            }
        ]
    },
    {
        "name": "ВариантСобытияЗвонкаСредствТелефонии",
        "name_en": "TelephonyToolsCallEventVariant",
        "description": "Содержит варианты событий, по которым вызывается обработчик звонков средств телефонии.",
        "values": [
            {
                "name": "ЗавершениеВходящего",
                "name_en": "EndIncoming",
                "description": "Завершение входящего вызова (вызов прекращен или завершен)."
            },
            {
                "name": "ЗавершениеИсходящего",
                "name_en": "EndOutgoing",
                "description": "Завершение исходящего вызова."
            },
            {
                "name": "НачалоВходящего",
                "name_en": "StartIncoming",
                "description": "Начало входящего вызова (ответ на вызов)."
            },
            {
                "name": "НачалоИсходящего",
                "name_en": "StartOutgoing",
                "description": "Начало исходящего вызова (выполнен набор номера)."
            },
            {
                "name": "НачалоСигналаВходящего",
                "name_en": "StartIncomingRinging",
                "description": "Получение устройством входящего вызова (звонок телефона)."
            }
        ]
    },
    {
        "name": "ТипSMSСредствТелефонии",
        "name_en": "TelephonyToolsSMSType",
        "description": "Содержит возможные типы записей журнала SMS.",
        "values": [
            {
                "name": "ВОчереди",
                "name_en": "Queued",
                "description": "Сообщение находится в очереди на отправку. Сеть не доступна."
            },
            {
                "name": "Входящее",
                "name_en": "Incoming",
                "description": "Входящее сообщение."
            },
            {
                "name": "Исходящее",
                "name_en": "Outgoing",
                "description": "Исходящее сообщение. Данный статус является временным. При отправке статус сообщения изменится на один из статусов: ОшибкаОтправки, ВОчереди, Отправленное."
            },
            {
                "name": "Отправленное",
                "name_en": "Sent",
                "description": "Сообщение отправлено."
            },
            {
                "name": "ОшибкаОтправки",
                "name_en": "Failed",
                "description": "При отправке сообщения сервер вернул ошибку."
            },
            {
                "name": "Черновик",
                "name_en": "Draft",
                "description": "Черновик сообщения."
            }
        ]
    },
    {
        "name": "ТипШтрихКода",
        "name_en": "BarcodeType",
        "description": "Предназначен для определения типов штрихкодов, которые система должна распознавать при вызове сканирования.",
        "values": [
            {
                "name": "Все",
                "name_en": "All",
                "description": "При вызове сканирования система должна распознавать штрихкоды всех типов."
            },
            {
                "name": "Двухмерный",
                "name_en": "Matrix",
                "description": "При вызове сканирования система должна распознавать двухмерные штрихкоды."
            },
            {
                "name": "Линейный",
                "name_en": "Linear",
                "description": "При вызове сканирования система должна распознавать штрихкоды линейного типа."
            }
        ]
    },
    {
        "name": "ТипКамерыУстройства",
        "name_en": "DeviceCameraType",
        "description": "Предназначен для определения типа используемой камеры мобильного устройства.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Тип камеры выбирается автоматически."
            },
            {
                "name": "Задняя",
                "name_en": "Rear",
                "description": "Основная камера мобильного устройства, расположенная с тыльной стороны."
            },
            {
                "name": "Передняя",
                "name_en": "Front",
                "description": "Передняя (фронтальная) камера мобильного устройства."
            }
        ]
    },
    {
        "name": "КачествоВидеозаписи",
        "name_en": "VideoQuality",
        "description": "Предназначен для определения качества видеозаписи.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Качество видеозаписи устанавливается автоматически."
            },
            {
                "name": "Высокое",
                "name_en": "High",
                "description": "Высокое качество."
            },
            {
                "name": "Низкое",
                "name_en": "Low",
                "description": "Низкое качество."
            }
        ]
    },
    {
        "name": "ТипПодсветкиКамеры",
        "name_en": "CameraLightingType",
        "description": "Предназначен для определения типа подсветки (вспышки) камеры устройства.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Необходимость использования вспышки определяется устройством в момент создания снимка, исходя из условий освещенности."
            },
            {
                "name": "Включена",
                "name_en": "Enable",
                "description": "В момент создания снимка вспышка включена принудительно."
            },
            {
                "name": "Выключена",
                "name_en": "Disable",
                "description": "Вспышка выключена."
            }
        ]
    },
    {
        "name": "НаправлениеПорядкаСхемыЗапроса",
        "name_en": "QuerySchemaOrderDirection",
        "description": "Тип направления порядка схемы запроса.",
        "values": [
            {
                "name": "ПоВозрастанию",
                "name_en": "Ascending",
                "description": "Упорядочивание по возрастанию значений. Соответствует ключевому слову ВОЗР указанному в выражении УПОРЯДОЧИТЬ ПО языка запросов."
            },
            {
                "name": "ПоВозрастаниюИерархии",
                "name_en": "HierarchyAscending",
                "description": "Упорядочивание по возрастанию значений иерархии. Соответствует ключевому слову ВОЗР ИЕРАРХИЯ указанному в выражении УПОРЯДОЧИТЬ ПО языка запросов."
            },
            {
                "name": "ПоУбыванию",
                "name_en": "Descending",
                "description": "Упорядочивание по убыванию значений. Соответствует ключевому слову УБЫВ указанному в выражении УПОРЯДОЧИТЬ ПО языка запросов."
            },
            {
                "name": "ПоУбываниюИерархии",
                "name_en": "HierarchyDescending",
                "description": "Упорядочивание по убыванию значений иерархии. Соответствует ключевому слову УБЫВ ИЕРАРХИЯ указанному в предложении УПОРЯДОЧИТЬ ПО языка запросов."
            }
        ]
    },
    {
        "name": "ТипДополненияПериодамиСхемыЗапроса",
        "name_en": "QuerySchemaPeriodAdditionType",
        "description": "Тип дополнения периодами.",
        "values": [
            {
                "name": "БезДополнения",
                "name_en": "NoAddition",
                "description": "Тип дополнения - без дополнения."
            },
            {
                "name": "Год",
                "name_en": "Year",
                "description": "Тип дополнения - год."
            },
            {
                "name": "Декада",
                "name_en": "TenDays",
                "description": "Тип дополнения - декада."
            },
            {
                "name": "День",
                "name_en": "Day",
                "description": "Тип дополнения - день."
            },
            {
                "name": "Квартал",
                "name_en": "Quarter",
                "description": "Тип дополнения - квартал."
            },
            {
                "name": "Месяц",
                "name_en": "Month",
                "description": "Тип дополнения - месяц."
            },
            {
                "name": "Минута",
                "name_en": "Minute",
                "description": "Тип дополнения - минута."
            },
            {
                "name": "Неделя",
                "name_en": "Week",
                "description": "Тип дополнения - неделя."
            },
            {
                "name": "Полугодие",
                "name_en": "HalfYear",
                "description": "Тип дополнение - полугодие."
            },
            {
                "name": "Секунда",
                "name_en": "Second",
                "description": "Тип дополнения - секунда."
            },
            {
                "name": "Час",
                "name_en": "Hour",
                "description": "Тип дополнения - час."
            }
        ]
    },
    {
        "name": "ТипКонтрольнойТочкиСхемыЗапроса",
        "name_en": "QuerySchemaTotalCalculationFieldType",
        "description": "Тип контрольной точки.",
        "values": [
            {
                "name": "Иерархия",
                "name_en": "Hierarchy",
                "description": "Соответствует ключевому слову ИЕРАРХИЯ, указанному у контрольной точки в выражении ИТОГИ ПО языка запросов."
            },
            {
                "name": "ТолькоИерархия",
                "name_en": "HierarchyOnly",
                "description": "Соответствует ключевым словам ТОЛЬКО ИЕРАРХИЯ, указанным у контрольной точки выражения ИТОГИ ПО языка запросов."
            },
            {
                "name": "Элементы",
                "name_en": "Items",
                "description": "Соответствует отсутствию указания типа контрольной точки в выражении ИТОГИ ПО."
            }
        ]
    },
    {
        "name": "ТипОбъединенияСхемыЗапроса",
        "name_en": "QuerySchemaUnionType",
        "description": "Тип объединения схемы запроса.",
        "values": [
            {
                "name": "Объединить",
                "name_en": "Union",
                "description": "Соответствует выражению ОБЪЕДИНИТЬ языка запросов."
            },
            {
                "name": "ОбъединитьВсе",
                "name_en": "UnionAll",
                "description": "Соответствует выражению ОБЪЕДИНИТЬ ВСЕ языка запросов."
            }
        ]
    },
    {
        "name": "ТипПараметраДоступнойТаблицыСхемыЗапроса",
        "name_en": "QuerySchemaAvailableTableParameterType",
        "description": "Тип параметра доступной таблицы.",
        "values": [
            {
                "name": "Вариант",
                "name_en": "Variant",
                "description": "В параметре указывается один из возможных вариантов. Возможные варианты получаются из свойства Варианты объекта типа ПараметрДоступнойТаблицыСхемыЗапроса."
            },
            {
                "name": "Значение",
                "name_en": "Value",
                "description": "Свойство содержит выражение, по которому вычисляется значение параметра."
            },
            {
                "name": "Массив",
                "name_en": "Array",
                "description": "В параметре указывается массив значений."
            },
            {
                "name": "Порядок",
                "name_en": "Order",
                "description": "В параметре указывается список полей для упорядочивания с указанием типа упорядочивания. Поля, которые можно использовать в параметре содержатся в свойстве ДоступныеПоля объекта типа ПараметрДоступнойТаблицыСхемыЗапроса."
            },
            {
                "name": "СписокПолей",
                "name_en": "FieldList",
                "description": "В параметре указывается список полей. Поля, которые можно использовать в параметре содержатся в свойстве ДоступныеПоля объекта типа ПараметрДоступнойТаблицыСхемыЗапроса."
            },
            {
                "name": "Условие",
                "name_en": "Where",
                "description": "В параметре указывается выражение условия, которое будет проверяться при выполнении запроса. Поля, которые можно использовать в условии, содержатся в свойстве ДоступныеПоля объекта типа ПараметрДоступнойТаблицыСхемыЗапроса."
            }
        ]
    },
    {
        "name": "ТипСоединенияСхемыЗапроса",
        "name_en": "QuerySchemaJoinType",
        "description": "Тип cоединения таблиц в схеме запроса.",
        "values": [
            {
                "name": "Внутреннее",
                "name_en": "Inner",
                "description": "Внутреннее соединение. Соответствует ключевому слову ВНУТРЕННЕЕ в выражении ИЗ языка запросов."
            },
            {
                "name": "ЛевоеВнешнее",
                "name_en": "LeftOuter",
                "description": "Левое соединение. Соответствует ключевому слову ЛЕВОЕ из выражения ИЗ языка запросов."
            },
            {
                "name": "ПолноеВнешнее",
                "name_en": "FullOuter",
                "description": "Полное соединение. Соответствует ключевому словую ПОЛНОЕ в выражении ИЗ языка запросов."
            },
            {
                "name": "ПравоеВнешнее",
                "name_en": "RightOuter",
                "description": "Правое соединение. Соответствует ключевому слову ПРАВОЕ в выражении ИЗ языка запросов."
            }
        ]
    },
    {
        "name": "ТипПодписчикаДоставляемыхУведомлений",
        "name_en": "DeliverableNotificationSubscriberType",
        "description": "Определяет сервис доставки уведомлений, используемый данным подписчиком.",
        "values": [
            {
                "name": "APNS",
                "name_en": "APNS",
                "description": "Apple Push Notification Service. Сервис, используемый для доставки push-уведомлений на устройства под управлением iOS."
            },
            {
                "name": "FCM",
                "name_en": "FCM",
                "description": "Firebase Cloud Messaging. Сервис, используемый для доставки push-уведомлений на устройства под управлением ОС Android."
            },
            {
                "name": "WNS",
                "name_en": "WNS",
                "description": "Windows Notification Services. Сервис, используемый для доставки push-уведомлений на устройства под управлением ОС Windows."
            }
        ]
    },
    {
        "name": "ЗвуковоеОповещение",
        "name_en": "SoundAlert",
        "description": "Перечисление стандартных звуков, используемых в доставляемом уведомлении.",
        "values": [
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Уведомление без звука."
            },
            {
                "name": "ПоУмолчанию",
                "name_en": "Default",
                "description": "Установленный в системе звук уведомления."
            }
        ]
    },
    {
        "name": "ТипОшибкиОтправкиДоставляемогоУведомления",
        "name_en": "DeliverableNotificationSendErrorType",
        "description": "Содержит варианты возможных ошибок отправки уведомлений.",
        "values": [
            {
                "name": "НеизвестнаяОшибка",
                "name_en": "UnknownError",
                "description": "Неизвестная ошибка."
            },
            {
                "name": "ОшибкаДанныхАутентификации",
                "name_en": "AuthenticationDataError",
                "description": "Ошибка данных аутентификации (в файле сертификата, необходимом для подключения к службе доставки \"Apple Push Notification Service\", либо строке с ключом авторизации для подключения к службе доставки \"Google Cloud Messaging\")."
            },
            {
                "name": "ОшибкаИдентификатораПодписчика",
                "name_en": "SubscriberIDError",
                "description": "Ошибка идентификатора подписчика доставляемых уведомлений."
            },
            {
                "name": "ОшибкаПодключенияКСервисуДоставляемыхУведомлений",
                "name_en": "DeliverableNotificationServiceConnectionError",
                "description": "Ошибка подключения к сервису доставки уведомлений."
            },
            {
                "name": "ОшибкаСервисаДоставляемыхУведомлений",
                "name_en": "DeliverableNotificationServiceError",
                "description": "Ошибка сервиса доставки уведомлений."
            },
            {
                "name": "ОшибкаТелаУведомления",
                "name_en": "NotificationBodyError",
                "description": "Ошибка тела (body) уведомления."
            },
            {
                "name": "ПревышенЛимитОтправкиУведомлений",
                "name_en": "NotificationsLimitExceeded",
                "description": "Превышен лимит отправки уведомлений."
            }
        ]
    },
    {
        "name": "ОтображениеРекламногоБаннера",
        "name_en": "AdBannerRepresentation",
        "description": "Определяет набор вариантов отображения рекламного баннера.",
        "values": [
            {
                "name": "Верх",
                "name_en": "Top",
                "description": "Рекламный баннер отображается сверху формы."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Рекламный баннер скрыт."
            },
            {
                "name": "Низ",
                "name_en": "Bottom",
                "description": "Рекламный баннер отображается в нижней части формы."
            }
        ]
    },
    {
        "name": "СтатусРекламы",
        "name_en": "AdStatus",
        "description": "Содержит варианты текущего статуса конкретной рекламной сущности (баннер, полноэкранная реклама, видеообъявление).",
        "values": [
            {
                "name": "ГотоваКОтображению",
                "name_en": "ReadyToDisplay",
                "description": "Реклама загружена. При вызове метода ПоказатьВидеообъявлениеСВознаграждениемили ПоказатьПолноэкраннуюРекламу реклама будет показана без задержки."
            },
            {
                "name": "Загружается",
                "name_en": "Downloading",
                "description": "Реклама находится в процессе загрузки."
            },
            {
                "name": "НеЗагружена",
                "name_en": "NotDownloaded",
                "description": "Реклама не загружена или загрузка завершилась ошибкой."
            },
            {
                "name": "Отображается",
                "name_en": "Displayed",
                "description": "Реклама отображается пользователю в данный момент."
            }
        ]
    },
    {
        "name": "СервисВстроенныхПокупок",
        "name_en": "InAppPurchaseService",
        "description": "Содержит варианты используемых сервисов встроенных покупок.",
        "values": [
            {
                "name": "AppleInAppPurchase",
                "name_en": "AppleInAppPurchase",
                "description": "Использовать сервис Apple In-App Purchase."
            },
            {
                "name": "GooglePlayInAppBilling",
                "name_en": "GooglePlayInAppBilling",
                "description": "Использовать сервис Google Play In-App Billing."
            },
            {
                "name": "WindowsInAppPurchase",
                "name_en": "WindowsInAppPurchase",
                "description": "Использовать сервис Windows In-App Purchase."
            }
        ]
    },
    {
        "name": "УровеньИспользованияЗащищенногоСоединенияFTP",
        "name_en": "FTPSecureConnectionUsageLevel",
        "description": "Определяет требования клиента по использованию защищенного соединения с сервером FTP.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Уровень использования защищенного соединения определяется автоматически:  - Если параметр ЗащищенноеСоединение не задан, то производится попытка подключиться по защищенному каналу, если это возможно. Если сервер не поддерживает защищенное соединение, передача данных происходит по открытому каналу.  - Если параметр ЗащищенноеСоединение задан, то защищенное соединение требуется и как для управляющих команд, так и для данных."
            },
            {
                "name": "ИспользоватьЕслиВозможно",
                "name_en": "UseIfPossible",
                "description": "Использовать защищенное SSL-соединение, если возможно. Фактический уровень защиты определяется сервером."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Не использовать защищенное соединение. Вся информация передается по открытым каналам."
            },
            {
                "name": "Требовать",
                "name_en": "Require",
                "description": "Для передачи управляющих команд и данных требуется использование защищенного SSL-соединения."
            },
            {
                "name": "ТребоватьДляУправления",
                "name_en": "RequireForControl",
                "description": "Для передачи управляющих команд требуется использование защищенного (TLS) соединения. Данные при этом могут передаваться как по открытому, так и по защищенному каналу, в зависимости от настроек сервера."
            }
        ]
    },
    {
        "name": "ТипИнтернетСоединения",
        "name_en": "InternetConnectionType",
        "description": "Типы интернет-соединений.",
        "values": [
            {
                "name": "WiFi",
                "name_en": "WiFi",
                "description": "Wi-Fi соединение."
            },
            {
                "name": "ЛокальнаяСеть",
                "name_en": "LAN",
                "description": "Соединение по локальной сети."
            },
            {
                "name": "НетСоединения",
                "name_en": "NoConnection",
                "description": "Соединение отсутствует."
            },
            {
                "name": "СотовыеДанные",
                "name_en": "CellularData",
                "description": "Сотовая сеть."
            }
        ]
    },
    {
        "name": "ИспользованиеРоуминга",
        "name_en": "RoamingUsage",
        "description": "Варианты использования роуминга.",
        "values": [
            {
                "name": "Используется",
                "name_en": "Used",
                "description": "Соединение установлено в роуминговой сети."
            },
            {
                "name": "Неизвестно",
                "name_en": "Unknown",
                "description": "Для подключение использовано Wi-Fi соединение, локальной сети, или подключение не установлено."
            },
            {
                "name": "НеИспользуется",
                "name_en": "NotUsed",
                "description": "Роуминг не используется. Трафик учитывается согласно тарифу оператора."
            }
        ]
    },
    {
        "name": "ПорядокБайтов",
        "name_en": "ByteOrder",
        "description": "Формат представления целых чисел в память компьютера.",
        "values": [
            {
                "name": "BigEndian",
                "name_en": "BigEndian",
                "description": "Порядок от старшего к младшему (от наиболее значимого байта к наименее значимому)."
            },
            {
                "name": "LittleEndian",
                "name_en": "LittleEndian",
                "description": "Порядок от младшего к старшему (от наименее значимого байта к наиболее значимому) . Этот порядок записи принят в памяти персональных компьютеров с процессорами архитектуры x86."
            }
        ]
    },
    {
        "name": "ПозицияВПотоке",
        "name_en": "PositionInStream",
        "description": "Определяет начальную позицию при позиционировании в потоке.",
        "values": [
            {
                "name": "Конец",
                "name_en": "End",
                "description": "Смещение позиции отсчитывается с конца потока."
            },
            {
                "name": "Начало",
                "name_en": "Begin",
                "description": "Смещение позиции отсчитывается с начала потока."
            },
            {
                "name": "Текущая",
                "name_en": "Current",
                "description": "Смещение позиции отсчитывается с текущей позиции в потоке."
            }
        ]
    },
    {
        "name": "ВидИзмененияСтрокиДанных",
        "name_en": "DataLineChangeType",
        "description": "Содержит варианты вида изменений строки данных.",
        "values": [
            {
                "name": "Добавление",
                "name_en": "Add",
                "description": "Новая строка данных."
            },
            {
                "name": "Изменение",
                "name_en": "Update",
                "description": "Строка данных изменена."
            },
            {
                "name": "Перемещение",
                "name_en": "Move",
                "description": "Изменена позиция строки данных."
            },
            {
                "name": "Удаление",
                "name_en": "Delete",
                "description": "Строка данных удалена."
            }
        ]
    },
    {
        "name": "ТипФайлаПакетаОтображаемыхДокументов",
        "name_en": "RepresentableDocumentBatchFileType",
        "description": "Типы файла для сохранения пакета отображаемых документов.",
        "values": [
            {
                "name": "DOCX",
                "name_en": "DOCX",
                "description": "Формат файла DOCX (Word 2007)."
            },
            {
                "name": "HTML4",
                "name_en": "HTML4",
                "description": "Формат файла HTML версии 4."
            },
            {
                "name": "HTML5",
                "name_en": "HTML5",
                "description": "Формат файла HTML версии 5."
            },
            {
                "name": "ODS",
                "name_en": "ODS",
                "description": "Формат файла электронной таблицы ODF (OpenOffice)."
            },
            {
                "name": "PDF",
                "name_en": "PDF",
                "description": "Формат файла PDF стандарта ISO 32000-1:2008."
            },
            {
                "name": "TXT",
                "name_en": "TXT",
                "description": "Формат текстового файла."
            },
            {
                "name": "XLS",
                "name_en": "XLS",
                "description": "Файл в формате MS Excel. Сохранение в данном формате выполняет сохранение в формате MS Excel, используемом по умолчанию (эквивалентно XLS97)."
            },
            {
                "name": "XLSX",
                "name_en": "XLSX",
                "description": "Формат файла XLSX Excel 2007."
            }
        ]
    },
    {
        "name": "СостояниеАгентаКлиентскогоПриложения",
        "name_en": "ClientApplicationAgentState",
        "description": "Содержит варианты состояния агента клиентского приложения.",
        "values": [
            {
                "name": "НеЗапущен",
                "name_en": "NotStarted",
                "description": "Агент не запущен."
            },
            {
                "name": "Отключен",
                "name_en": "Disconnected",
                "description": "Агент запущен, но клиентское приложение не подключено к нему."
            },
            {
                "name": "Подключен",
                "name_en": "Connected",
                "description": "Агент запущен, и клиентское приложение к нему подключено."
            }
        ]
    },
    {
        "name": "ТипСУБДКопииБазыДанных",
        "name_en": "DatabaseCopyDBMSType",
        "description": "Содержит варианты поддерживаемых типов СУБД копии базы данных.",
        "values": [
            {
                "name": "MSSQLServer",
                "name_en": "MSSQLServer",
                "description": "Microsoft SQL Server."
            },
            {
                "name": "OracleDatabase",
                "name_en": "OracleDatabase",
                "description": "Oracle Database."
            },
            {
                "name": "PostgreSQL",
                "name_en": "PostgreSQL",
                "description": "PostgreSQL."
            }
        ]
    },
    {
        "name": "ТипРепликацииКопииБазыДанных",
        "name_en": "DatabaseCopyReplicationType",
        "description": "Содержит варианты типов репликации копии базы данных.",
        "values": [
            {
                "name": "Внешняя",
                "name_en": "External",
                "description": "Внешняя репликация используется для копий, в которых копирование данных и обновление выполняется сторонними средствами (например, СУБД).  При использовании внешней репликации считается, что данные в таблицах копии актуальны всегда."
            },
            {
                "name": "Стандартная",
                "name_en": "Standard",
                "description": "Стандартная репликация используется для копий, в которых копирование данных и обновление выполняется платформой. При использовании стандартной репликации данные в копии могут быть неактуальными до следующего обновления."
            }
        ]
    },
    {
        "name": "ТребуемаяАктуальностьДанных",
        "name_en": "RequiredDataRelevance",
        "description": "Содержит варианты типов требуемой актуальности данных.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Для запросов используется значение Актуальные. Для отчетов системы компоновки данных - Любые. Используется по умолчанию."
            },
            {
                "name": "Актуальные",
                "name_en": "Relevant",
                "description": "Используются только актуальные данные. Запрос выполняется только на основной базе данных."
            },
            {
                "name": "Любые",
                "name_en": "Any",
                "description": "Требование по актуальности уточняется с помощью параметра ТребуемоеВремяАктуальностиДанных. Запрос может выполняться как на основной базе данных, так и на копии."
            }
        ]
    },
    {
        "name": "ТипВыводаАктуальностиДанныхКомпоновкиДанных",
        "name_en": "DataCompositionDataRelevanceOutputType",
        "description": "Содержит варианты вывода времени актуальности полученных данных.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Значение по умолчанию. Время актуальности будет выведено в заголовок отчета, если полученные данные не актуальны. При получении актуальных данных время актуальности не выводится."
            },
            {
                "name": "Выводить",
                "name_en": "Output",
                "description": "Выводить время актуальности полученных данных."
            },
            {
                "name": "НеВыводить",
                "name_en": "DontOutput",
                "description": "Не выводить время актуальности полученных данных."
            }
        ]
    },
    {
        "name": "ИспользованиеПоляЭлементаСоставаКопииБазыДанных",
        "name_en": "DatabaseCopyContentItemFieldUse",
        "description": "Содержит варианты использования поля элемента состава копии базы данных.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Значение по умолчанию. Использование и значение поля вычисляется, начиная с собственного свойства поля в порядке Поле - Элемент состава - Копия. Вычисление останавливается, если значение установлено явно. Если значение свойства установлено явно, то получается оно. Если свойство поля установлено в значение Авто, то проверяется свойство ИспользованиеПоляЭлементаСоставаКопииБазыДанных. В зависимости от типа поля проверяется следующее свойство:  - Для табличной части - ИспользованиеТабличныхЧастей,  - Для простых полей в зависимости от типа:  - ХранилищеЗначения - ИспользованиеХранилищЗначения,  - Строка неограниченной длины - ИспользованиеСтрокНеограниченнойДлины,  - Прочие типы - ИспользованиеПрочихПолей. Если свойство установлено явно, то берется оно. Если установлено значение Авто, то проверяется аналогичное свойство копии: если оно установлено явно, то берется оно. Если поле в копии имеет значение Авто, то применяются следующие правила вычисления использования для полей:  - Копия со стандартной репликацией:  - Поле - табличная часть, реквизит типа ХранилищеЗначения – НеИспользовать.  - Прочие типы – Использовать.  - Копия с внешней репликацией:  - Для всех полей – Использовать."
            },
            {
                "name": "Использовать",
                "name_en": "Use",
                "description": "Использовать поле элемента состава."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Не использовать поле элемента состава."
            }
        ]
    },
    {
        "name": "ИсточникКомандСистемыВзаимодействия",
        "name_en": "CollaborationSystemCommandSource",
        "description": "Содержит варианты элементов сообщения, для которых вызывается обработчик, установленный при вызове метода",
        "values": [
            {
                "name": "Вложение",
                "name_en": "Attachment",
                "description": "Источником команды является вложение."
            },
            {
                "name": "Действие",
                "name_en": "Action",
                "description": "Источником команды является гиперссылка на действие в тексте сообщения."
            },
            {
                "name": "НавигационнаяСсылка",
                "name_en": "URL",
                "description": "Источником команды является навигационная ссылка в тексте сообщения."
            },
            {
                "name": "Сообщение",
                "name_en": "Message",
                "description": "Источником команды является само сообщение системы взаимодействия."
            }
        ]
    },
    {
        "name": "СтандартнаяКомандаСистемыВзаимодействия",
        "name_en": "CollaborationSystemStandardCommand",
        "description": "Содержит варианты стандартных команд системы взаимодействия.",
        "values": [
            {
                "name": "ВыполнитьДействие",
                "name_en": "ExecuteAction",
                "description": "Команда выполнения действия."
            },
            {
                "name": "КопироватьНавигационнуюСсылку",
                "name_en": "CopyURL",
                "description": "Команда копирования адреса навигационной ссылки."
            },
            {
                "name": "КопироватьПредставлениеНавигационнойСсылки",
                "name_en": "CopyURLPresentation",
                "description": "Команда копирования представления навигационной ссылки."
            },
            {
                "name": "КопироватьСообщение",
                "name_en": "CopyMessage",
                "description": "Команда копирования сообщения."
            },
            {
                "name": "ОткрытьВложение",
                "name_en": "OpenAttachment",
                "description": "Команда открытия вложения."
            },
            {
                "name": "ПерейтиПоНавигационнойСсылке",
                "name_en": "GotoURL",
                "description": "Команда перехода по навигационной ссылке."
            },
            {
                "name": "ПолучитьНавигационнуюСсылкуСообщения",
                "name_en": "GetMessageURL",
                "description": "Команда получения навигационной ссылки на сообщение системы взаимодействия."
            },
            {
                "name": "РедактироватьСообщение",
                "name_en": "EditMessage",
                "description": "Команда редактирования сообщения."
            },
            {
                "name": "СохранитьВложение",
                "name_en": "SaveAttachment",
                "description": "Команда сохранения вложения."
            },
            {
                "name": "УдалитьСообщение",
                "name_en": "DeleteMessage",
                "description": "Команда удаления сообщения."
            }
        ]
    },
    {
        "name": "ОтображениеОповещенийСистемыВзаимодействия",
        "name_en": "CollaborationSystemNotificationRepresentation",
        "description": "Содержит варианты режимов отображения оповещений системы взаимодействия.",
        "values": [
            {
                "name": "НеБеспокоить",
                "name_en": "DontDisturb",
                "description": "При получении нового сообщения всплывающее оповещение не отображается и звук не воспроизводится."
            },
            {
                "name": "Обычное",
                "name_en": "Normal",
                "description": "При получении нового сообщения отображается всплывающее оповещение и воспроизводится звук."
            }
        ]
    },
    {
        "name": "НазначениеВыбораПользователейСистемыВзаимодействия",
        "name_en": "CollaborationSystemUsersChoicePurpose",
        "description": "Задает назначение вызова событий выбора пользователей системы взаимодействия.",
        "values": [
            {
                "name": "ПолучательСообщения",
                "name_en": "MessageRecipient",
                "description": "Выбор получателя сообщения системы взаимодействия."
            },
            {
                "name": "УчастникВидеоКонференции",
                "name_en": "VideoConferenceMember",
                "description": "Выбор участника видеоконференции системы взаимодействия."
            },
            {
                "name": "УчастникОбсуждения",
                "name_en": "ConversationMember",
                "description": "Выбор участника обсуждения системы взаимодействия."
            }
        ]
    },
    {
        "name": "АдминистрированиеПриоритетВыбораПроцесса",
        "name_en": "AdministrationProcessChoicePriority",
        "description": "Определяет приоритет выбора рабочего процесса.",
        "values": [
            {
                "name": "ПоПамяти",
                "name_en": "ByMemory",
                "description": "Рабочий процесс выбирается по доступной памяти."
            },
            {
                "name": "ПоПроизводительности",
                "name_en": "ByPerformance",
                "description": "Рабочий процесс выбирается по доступной производительности."
            }
        ]
    },
    {
        "name": "АдминистрированиеСостояниеРабочегоПроцесса",
        "name_en": "AdministrationWorkProcessStatus",
        "description": "Определяет использование рабочего процесса кластером.",
        "values": [
            {
                "name": "Используется",
                "name_en": "Used",
                "description": "Рабочий процесс используется."
            },
            {
                "name": "НеИспользуется",
                "name_en": "NotUsed",
                "description": "Рабочий процесс не используется."
            },
            {
                "name": "Резервный",
                "name_en": "Reserve",
                "description": "Использовать рабочий процесс как резервный."
            }
        ]
    },
    {
        "name": "АдминистрированиеТипГруппировкиСчетчикаПотребленияРесурсов",
        "name_en": "AdministrationResourceConsumptionCounterGroupType",
        "description": "Определяет тип группировки счетчика потребления ресурсов.",
        "values": [
            {
                "name": "Пользователи",
                "name_en": "Users",
                "description": "Группировать значения счетчика потребления ресурсов по пользователям."
            },
            {
                "name": "РазделениеДанных",
                "name_en": "DataSeparation",
                "description": "Группировать значения счетчиков потребления ресурсов по значениям разделителей данных."
            }
        ]
    },
    {
        "name": "АдминистрированиеТипОтбораСчетчикаПотребленияРесурсов",
        "name_en": "AdministrationResourceConsumptionCounterFilterType",
        "description": "Определяет тип отбора счетчика потребления ресурсов.",
        "values": [
            {
                "name": "Все",
                "name_en": "All",
                "description": "Счетчик потребления ресурсов будет использовать свойства всех сеансов."
            },
            {
                "name": "ВсеВыбранные",
                "name_en": "AllSelected",
                "description": "Счетчик потребления ресурсов будет использовать свойства всех выбранных сеансов."
            },
            {
                "name": "ВсеКромеВыбранных",
                "name_en": "AllButSelected",
                "description": "Счетчик потребления ресурсов будет использовать свойства всех сеансов, кроме выбранных."
            }
        ]
    },
    {
        "name": "АдминистрированиеДействиеПриПревышенииОграниченияПотребленияРесурсов",
        "name_en": "AdministrationActionOnResourceConsumptionLimitExcess",
        "description": "Определяет тип действия при превышении предельных значений, указанных в ограничении потребления ресурсов.",
        "values": [
            {
                "name": "ЗавершитьСеанс",
                "name_en": "TerminateSession",
                "description": "Завершить сеанс при превышении значений, указанных в ограничении."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "При превышении предельных значений, указанных в ограничении потребления ресурсов, никакие действия не выполняются."
            },
            {
                "name": "ПрерватьТекущийСерверныйВызов",
                "name_en": "InterruptCurrentServerCall",
                "description": "Прервать выполнение текущего серверного вызова при превышении значений, указанных в ограничении."
            },
            {
                "name": "УстановитьНизкийПриоритетПотока",
                "name_en": "SetThreadLowPriority",
                "description": "Установить низкий приоритет потока при превышении значений, указанных в ограничении потребления ресурсов."
            }
        ]
    },
    {
        "name": "АдминистрированиеУровеньБезопасностиСоединений",
        "name_en": "AdministrationConnectionSecurityLevel",
        "description": "Определяет уровень безопасности соединений.",
        "values": [
            {
                "name": "Защищенное",
                "name_en": "Secure",
                "description": "Защищенное соединение в течение всего сеанса."
            },
            {
                "name": "ЗащищенноеПриУстановкеСоединения",
                "name_en": "SecureOnConnect",
                "description": "Использовать защищенное соединение только в процессе аутентификации администратора."
            },
            {
                "name": "Незащищенное",
                "name_en": "Unsecure",
                "description": "Используется незащищенное соединение."
            }
        ]
    },
    {
        "name": "АдминистрированиеТипТребованияНазначения",
        "name_en": "AdministrationAssignmentRuleType",
        "description": "Определяет действие требования назначения.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Рабочий сервер может быть использован для обслуживания объекта требования в том случае, если нет рабочего сервера с явным указанием необходимости использования."
            },
            {
                "name": "Назначать",
                "name_en": "Assign",
                "description": "Рабочий сервер, для которого создано данное требование, будет являться одним из кандидатов на обслуживание данного объекта требования (если рабочих серверов будет несколько)."
            },
            {
                "name": "НеНазначать",
                "name_en": "DontAssign",
                "description": "Рабочий сервер, для которого создано данное требование, не будет назначен для обслуживания объекта требования, подходящего под условия, заданные в требовании."
            }
        ]
    },
    {
        "name": "АдминистрированиеРежимУдаленияИнформационнойБазы",
        "name_en": "AdministrationInfoBaseDeletionMode",
        "description": "Определяет режим удаления информационной базы.",
        "values": [
            {
                "name": "НеВыполнятьДействийСБазойДанных",
                "name_en": "DontPerformActionsWithDatabase",
                "description": "При удалении информационной базы, состояние базы данных не изменится."
            },
            {
                "name": "ОчиститьБазуДанных",
                "name_en": "ClearDatabase",
                "description": "При удалении информационной базы, база данных будет очищена."
            },
            {
                "name": "УдалитьБазуДанных",
                "name_en": "DeleteDatabase",
                "description": "При удалении информационной базы будет удалена база данных."
            }
        ]
    },
    {
        "name": "СпособПолученияКомпонентСвязностиРасчетаСистемЛинейныхУравнений",
        "name_en": "ConnectedComponentsTypeOfSystemOfLinearEquationsCalculationGetMethod",
        "description": "Содержит варианты типа рассчитываемых компонент связности.",
        "values": [
            {
                "name": "КомпонентыСильнойСвязности",
                "name_en": "StronglyConnectedComponents",
                "description": "Расчет компонент сильной связности. Под компонентами сильной связности понимаются максимальные по включению компоненты графа (подграфы), такие, что из любой вершины компоненты (подграфа) существует путь в любую другую вершину этой компоненты (подграфа). Путь строится с учетом ориентации ребер."
            },
            {
                "name": "КомпонентыСильнойСвязностиБезТребованияСвязиВнутриКомпонент",
                "name_en": "StronglyConnectedComponentsWithNoInnerConnectionRequired",
                "description": "Расчет компонент связности, наиболее оптимальных для анализа и отладки механизма решения систем линейных уравнений.  Возвращаются такие компоненты (подграфы), у которых для любой вершины из одной компоненты не существует пути в любую другую вершину любой другой компоненты."
            },
            {
                "name": "КомпонентыСлабойСвязности",
                "name_en": "WeaklyConnectedComponents",
                "description": "Расчет компонент слабой связности. Под компонентами слабой связности понимаются максимальные по включению компоненты графа (подграфы), такие, что из любой вершины компоненты (подграфа) существует путь в любую другую вершину этой компоненты (подграфа). Ориентация ребер графа игнорируется (ориентированные ребра рассматриваются как неориентированные)."
            }
        ]
    },
    {
        "name": "ТипОбработкиНастроекВторогоФактораАутентификации",
        "name_en": "SecondAuthenticationFactorSettingsProcessingType",
        "description": "Содержит варианты типа настроек второго фактора аутентификации.",
        "values": [
            {
                "name": "ИспользоватьСледующуюПриОшибке",
                "name_en": "UseNextIfFailed",
                "description": "Переходить к следующему провайдеру при возврате ошибки от текущего."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Второй фактор аутентификации не используется."
            }
        ]
    },
    {
        "name": "СпособЗащитыДоступаБезопасногоХранилища",
        "name_en": "SecureStorageAccessProtectionMethod",
        "description": "Содержит варианты защиты доступа к данным в безопасном хранилище.",
        "values": [
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Защита не используется. Данные доступны всегда."
            },
            {
                "name": "ТребуетсяДополнительнаяПроверкаПользователя",
                "name_en": "AdditionalUserVerificationRequired",
                "description": "Для сохранения и чтения данных требуется, чтобы пользователь успешно прошел процедуру проверки."
            },
            {
                "name": "ТребуетсяРазблокировкаЭкрана",
                "name_en": "ScreenUnlockRequired",
                "description": "Для сохранения и чтения данных требуется, чтобы экран устройства был разблокирован при помощи пин-кода или ключа, или биометрии."
            }
        ]
    },
    {
        "name": "СпособДополнительнойПроверкиПользователя",
        "name_en": "AdditionalUserVerificationMethod",
        "description": "Содержит варианты дополнительной проверки пользователя.",
        "values": [
            {
                "name": "БиометрическаяИлиВводПароля",
                "name_en": "BiometricsOrPassword",
                "description": "Проверка пользователя осуществляется либо биометрическим способом, либо вводом пароля."
            },
            {
                "name": "ТолькоБиометрическая",
                "name_en": "BiometricsOnly",
                "description": "Проверка пользователя осуществляется только биометрическим способом."
            }
        ]
    },
    {
        "name": "СпособБиометрическойПроверки",
        "name_en": "BiometricVerificationMethod",
        "description": "Содержит варианты способов биометрической проверки пользователя.",
        "values": [
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Биометрическая проверка не выполняется."
            },
            {
                "name": "РаспознаваниеЛица",
                "name_en": "FaceRecognition",
                "description": "Распознавание лица."
            },
            {
                "name": "РаспознаваниеОтпечаткаПальца",
                "name_en": "FingerprintRecognition",
                "description": "Распознавание отпечатка пальца."
            },
            {
                "name": "РаспознаваниеРадужнойОболочкиГлаза",
                "name_en": "IrisRecognition",
                "description": "Распознавание радужной оболочки глаза."
            }
        ]
    },
    {
        "name": "КатегорияОшибки",
        "name_en": "ErrorCategory",
        "description": "Содержит варианты категории ошибки.",
        "values": [
            {
                "name": "ВсеОшибки",
                "name_en": "AllErrors",
                "description": "Все категории ошибок."
            },
            {
                "name": "ИсключениеВызванноеИзВстроенногоЯзыка",
                "name_en": "ExceptionRaisedFromScript",
                "description": "Ошибка была вызвана из встроенного языка c помощью оператора &ВызватьИсключение."
            },
            {
                "name": "НарушениеПравДоступа",
                "name_en": "AccessViolation",
                "description": "Ошибка является ошибкой доступа."
            },
            {
                "name": "ОшибкаВнешнегоИсточникаДанных",
                "name_en": "ExternalDataSourceError",
                "description": "Ошибка является ошибкой внешнего источника данных."
            },
            {
                "name": "ОшибкаВоВремяВыполненияВстроенногоЯзыка",
                "name_en": "ScriptRuntimeError",
                "description": "Ошибка возникла во время выполнения кода на встроенном языке."
            },
            {
                "name": "ОшибкаДоступаКЛокальномуФайлу",
                "name_en": "LocalFileAccessError",
                "description": "Ошибка является ошибкой доступа к локальному файлу."
            },
            {
                "name": "ОшибкаИспользованияВстроенногоЯзыка",
                "name_en": "ScriptUseError",
                "description": "Во время выполнения встроенного языка произошла ошибка, связанная с неправильным использованием встроенного языка. Например:  - неправильный тип параметра,  - обращение к неизвестному свойству,  - вызов неизвестного метода,  - попытка записи в свойство только для чтения,  - ошибка преобразования типов,  - и т.д."
            },
            {
                "name": "ОшибкаКомпиляцииВстроенногоЯзыка",
                "name_en": "ScriptCompileError",
                "description": "Ошибка возникла при компиляции модуля на встроенном языке."
            },
            {
                "name": "ОшибкаНастроекКомпоновкиДанных",
                "name_en": "DataCompositionSettingsError",
                "description": "Ошибка является ошибкой настроек системы компоновки данных."
            },
            {
                "name": "ОшибкаПереходаПоНавигационнойСсылке",
                "name_en": "GotoURLError",
                "description": "Ошибка является ошибкой перехода по ссылке."
            },
            {
                "name": "ОшибкаПолнотекстовогоПоиска",
                "name_en": "FullTextSearchError",
                "description": "Ошибка является ошибкой полнотекстового поиска."
            },
            {
                "name": "ОшибкаРаботыСПринтером",
                "name_en": "PrinterError",
                "description": "Ошибка является ошибкой работы с принтером."
            },
            {
                "name": "ОшибкаСеанса",
                "name_en": "SessionError",
                "description": "Ошибка является ошибкой сеанса."
            },
            {
                "name": "ОшибкаСети",
                "name_en": "NetworkError",
                "description": "Ошибка является ошибкой сети."
            },
            {
                "name": "ОшибкаСистемыВзаимодействия",
                "name_en": "CollaborationSystemError",
                "description": "Ошибка является ошибкой системы взаимодействия."
            },
            {
                "name": "ОшибкаХранимыхДанных",
                "name_en": "StoredDataError",
                "description": "Ошибка связана с данными, хранящимися в базе данных."
            },
            {
                "name": "ПрочаяОшибка",
                "name_en": "OtherError",
                "description": "Ошибка не относится ни к одной из известных категорий."
            }
        ]
    },
    {
        "name": "ВариантОтображенияСообщенияОбОшибке",
        "name_en": "ErrorMessageDisplayVariant",
        "description": "Содержит варианты отображения сообщения об ошибке.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Если используется в качестве параметра метода ПоказатьИнформациюОбОшибке, то означает, что будет использовано значение из настроек данного пользователя.  Если же &Авто получено из настроек, то в режиме совместимости с 8.3.16 означает КраткоеПредставлениеОшибки, иначе - СообщениеОбОшибкеДляПользователя."
            },
            {
                "name": "КраткоеПредставлениеОшибки",
                "name_en": "BriefErrorDescription",
                "description": "Отображается текст ошибки."
            },
            {
                "name": "ПодробноеПредставлениеОшибки",
                "name_en": "DetailErrorDescription",
                "description": "Отображается текст всех ошибок, в том числе и вложенных."
            },
            {
                "name": "СообщениеОбОшибкеДляПользователя",
                "name_en": "ErrorMessageForUser",
                "description": "Отображается сообщение об ошибке для пользователя. Дополнительно может выводиться текст, помогающий пользователю исправить ошибку"
            }
        ]
    },
    {
        "name": "РежимОтправкиИнформацииОбОшибке",
        "name_en": "ErrorReportingMode",
        "description": "Содержит варианты режима отправки различной информации об ошибке.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "В настройках пользователя указывает, что будет использовано значение из общих настроек. Если из общих параметров получено значение &Авто, то пользователю будет задан вопрос."
            },
            {
                "name": "НеОтправлять",
                "name_en": "DontSend",
                "description": "Информация не отправляется."
            },
            {
                "name": "Отправлять",
                "name_en": "Send",
                "description": "Информация отправляется автоматически."
            },
            {
                "name": "СпрашиватьПользователя",
                "name_en": "AskUser",
                "description": "Перед отправкой у пользователя запрашивается разрешение на отправку."
            }
        ]
    },
    {
        "name": "ИспользуемыйСервер",
        "name_en": "UsedServer",
        "description": "Перечисление серверов, доступных для работы автономного клиента.",
        "values": [
            {
                "name": "Автономный",
                "name_en": "Standalone",
                "description": "Используется автономный сервер."
            },
            {
                "name": "Основной",
                "name_en": "Main",
                "description": "Используется основной сервер."
            }
        ]
    },
    {
        "name": "ПоведениеПриНедоступностиОсновногоСервера",
        "name_en": "OnMainServerUnavalableBehavior",
        "description": "Перечисление содержит варианты поведения автономного объекта (общей команды, команды объекта конфигурации, команды или элемента формы) при недоступности основного сервера.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "При недоступности основного сервера, если форма была открыта с автономного сервера, элементы формы, связанные с внешними ссылками, становятся недоступными. Остальные элементы формы остаются доступными."
            },
            {
                "name": "НеИзменятьПоведение",
                "name_en": "DontChangeBehavior",
                "description": "При недоступности основного сервера, если форма была открыта с автономного сервера:  - Доступные элементы и команды формы остаются доступными,  - При обращении к элементам, связанным с внешними объектами, их доступность будет зависеть от конфигурации. Стандартная обработка выбора приведет к генерации ошибки, но обработку можно переопределить."
            },
            {
                "name": "ОтключитьДоступность",
                "name_en": "MakeDisable",
                "description": "При недоступности основного сервера, если форма была открыта с автономного сервера, команда или элемент формы становится недоступным."
            }
        ]
    },
    {
        "name": "ВариантГраницыИнтервала",
        "name_en": "IntervalBoundVariant",
        "description": "Определяет набор вариантов границы интервала, используемых объектом",
        "values": [
            {
                "name": "БезОграничения",
                "name_en": "WithoutRestriction",
                "description": "Начало или конец интервала не ограничиваются."
            },
            {
                "name": "Год",
                "name_en": "Year",
                "description": "Начало интервала задается датой начала года рабочей даты, конец интервала - датой конца года рабочей даты."
            },
            {
                "name": "Квартал",
                "name_en": "Quarter",
                "description": "Начало интервала задается датой начала квартала рабочей даты, конец интервала - датой конца квартала рабочей даты."
            },
            {
                "name": "КонкретнаяДата",
                "name_en": "SpecificDate",
                "description": "Начало или конец интервала задаются конкретной датой."
            },
            {
                "name": "Месяц",
                "name_en": "Month",
                "description": "Начало интервала задается датой начала месяца рабочей даты, конец интервала - датой конца месяца рабочей даты."
            },
            {
                "name": "Неделя",
                "name_en": "Week",
                "description": "Начало интервала задается датой начала недели рабочей даты, конец интервала - датой конца недели рабочей даты."
            },
            {
                "name": "РабочаяДата",
                "name_en": "WorkingDate",
                "description": "Начало интервала задается датой началом дня рабочей даты, конец интервала - концом дня рабочей даты."
            },
            {
                "name": "Смещение",
                "name_en": "BeforeAfter",
                "description": "Начало интервала задается датой за несколько дней до рабочей даты, конец интервала - через несколько дней после рабочей даты."
            }
        ]
    },
    {
        "name": "ВариантНастройкиПериода",
        "name_en": "PeriodSettingsVariant",
        "description": "Определяет виды закладок диалога настройки периода.",
        "values": [
            {
                "name": "Интервал",
                "name_en": "Interval",
                "description": "Закладка \"Интервал\"."
            },
            {
                "name": "Период",
                "name_en": "Period",
                "description": "Закладка \"Период\"."
            }
        ]
    },
    {
        "name": "ВариантПериода",
        "name_en": "PeriodVariant",
        "description": "Определяет набор вариантов задания периода, используемого объектом",
        "values": [
            {
                "name": "Год",
                "name_en": "Year",
                "description": "Период задан годом."
            },
            {
                "name": "День",
                "name_en": "Day",
                "description": "Период задан одним днем."
            },
            {
                "name": "ДеньСНачалаГода",
                "name_en": "DayFromBegOfYear",
                "description": "Период с начала года до заданного дня."
            },
            {
                "name": "ДеньСНачалаКвартала",
                "name_en": "DayFromBegOfQuarter",
                "description": "Период с начала квартала до заданного дня."
            },
            {
                "name": "ДеньСНачалаМесяца",
                "name_en": "DayFromBegOfMonth",
                "description": "Период с начала месяца до заданного дня."
            },
            {
                "name": "Квартал",
                "name_en": "Quarter",
                "description": "Период задан кварталом."
            },
            {
                "name": "КварталСНачалаГода",
                "name_en": "QuarterFromBegOfYear",
                "description": "Период с начала года до конца заданного квартала."
            },
            {
                "name": "Месяц",
                "name_en": "Month",
                "description": "Период задан месяцем."
            },
            {
                "name": "МесяцСНачалаГода",
                "name_en": "MonthFromBegOfYear",
                "description": "Период с начала года до конца заданного месяца."
            },
            {
                "name": "МесяцСНачалаКвартала",
                "name_en": "MonthFromBegOfQuarter",
                "description": "Период с начала квартала до конца заданного месяца."
            },
            {
                "name": "ПроизвольныйИнтервал",
                "name_en": "AnyInterval",
                "description": "Период задан произвольным интервалом."
            }
        ]
    },
    {
        "name": "ВидГраницы",
        "name_en": "BoundaryType",
        "description": "Определяет набор видов границ по отношению к граничному значению. Используется для определения значения свойства",
        "values": [
            {
                "name": "Включая",
                "name_en": "Including",
                "description": "Граница включает граничное значение."
            },
            {
                "name": "Исключая",
                "name_en": "Excluding",
                "description": "Граница исключает граничное значение."
            }
        ]
    },
    {
        "name": "ВидКартинки",
        "name_en": "PictureType",
        "description": "Определяет набор видов картинок.",
        "values": [
            {
                "name": "Абсолютная",
                "name_en": "Absolute",
                "description": "Картинка, хранящаяся в объекте встроенного языка."
            },
            {
                "name": "ИзБиблиотеки",
                "name_en": "FromLib",
                "description": "Картинка из библиотеки картинок."
            },
            {
                "name": "Пустая",
                "name_en": "Empty",
                "description": "Пустая картинка."
            }
        ]
    },
    {
        "name": "ВидРамки",
        "name_en": "BorderType",
        "description": "Определяет способы задания рамки. Используется для определения свойства",
        "values": [
            {
                "name": "Абсолютная",
                "name_en": "Absolute",
                "description": "Рамка задается абсолютными параметрами: типом и толщиной."
            },
            {
                "name": "ЭлементСтиля",
                "name_en": "StyleItem",
                "description": "Рамка задается как элемент стиля."
            }
        ]
    },
    {
        "name": "ВидСравнения",
        "name_en": "ComparisonType",
        "description": "Определяет набор видов сравнения, которые могут быть использованы в условиях отбора. Используется для определения свойства ВидСравнения.",
        "values": [
            {
                "name": "Больше",
                "name_en": "Greater",
                "description": "Сравниваемое значение больше заданного в условии."
            },
            {
                "name": "БольшеИлиРавно",
                "name_en": "GreaterOrEqual",
                "description": "Сравниваемое значение больше или равно заданному в условии."
            },
            {
                "name": "ВИерархии",
                "name_en": "InHierarchy",
                "description": "Проверка того, что сравниваемое значение принадлежит иерархии заданного значения. Имеет смысл при сравнении для иерархических объектов (справочников, планов видов характеристик, планов счетов)."
            },
            {
                "name": "ВСписке",
                "name_en": "InList",
                "description": "Проверка того, что сравниваемое значение входит в список."
            },
            {
                "name": "ВСпискеПоИерархии",
                "name_en": "InListByHierarchy",
                "description": "Проверка того, что сравниваемое значение входит в список с учетом иерархии."
            },
            {
                "name": "Интервал",
                "name_en": "Interval",
                "description": "Сравниваемое значение лежит в заданном интервале, не включая границы интервала."
            },
            {
                "name": "ИнтервалВключаяГраницы",
                "name_en": "IntervalIncludingBounds",
                "description": "Сравниваемое значение лежит в заданном интервале, включая границы интервала."
            },
            {
                "name": "ИнтервалВключаяНачало",
                "name_en": "IntervalIncludingLowerBound",
                "description": "Сравниваемое значение лежит в заданном интервале, включая начальную и не включая конечную границу интервала."
            },
            {
                "name": "ИнтервалВключаяОкончание",
                "name_en": "IntervalIncludingUpperBound",
                "description": "Сравниваемое значение лежит в заданном интервале, не включая начальную и включая конечную границу интервала."
            },
            {
                "name": "Меньше",
                "name_en": "Less",
                "description": "Сравниваемое значение меньше заданного в условии."
            },
            {
                "name": "МеньшеИлиРавно",
                "name_en": "LessOrEqual",
                "description": "Сравниваемое значение меньше или равно заданному в условии."
            },
            {
                "name": "НеВИерархии",
                "name_en": "NotInHierarchy",
                "description": "Проверка того, что сравниваемое значение не принадлежит иерархии заданного значения. Имеет смысл при сравнении для иерархических объектов (справочников, планов видов характеристик, планов счетов)."
            },
            {
                "name": "НеВСписке",
                "name_en": "NotInList",
                "description": "Проверка того, что сравниваемое значение не входит в список."
            },
            {
                "name": "НеВСпискеПоИерархии",
                "name_en": "NotInListByHierarchy",
                "description": "Проверка того, что сравниваемое значение не входит в список с учетом иерархии."
            },
            {
                "name": "НеРавно",
                "name_en": "NotEqual",
                "description": "Проверка на неравенство. Для строковых значений регистр символов не учитывается."
            },
            {
                "name": "НеСодержит",
                "name_en": "NotContains",
                "description": "Сравниваемое значение не содержит подстроку, заданную в условии сравнения."
            },
            {
                "name": "Равно",
                "name_en": "Equal",
                "description": "Проверка на равенство. Для строковых значений регистр символов не учитывается."
            },
            {
                "name": "Содержит",
                "name_en": "Contains",
                "description": "Сравниваемое значение содержит подстроку, заданную в условии сравнения."
            }
        ]
    },
    {
        "name": "ВидЦвета",
        "name_en": "ColorType",
        "description": "Определяет набор значений видов цветов. Используется для определения вида цвета объекта типа",
        "values": [
            {
                "name": "WebЦвет",
                "name_en": "WebColor",
                "description": "Цвет задан одним из web-цветов."
            },
            {
                "name": "WindowsЦвет",
                "name_en": "WindowsColor",
                "description": "Цвет задан одним из цветов палитры Windows."
            },
            {
                "name": "Абсолютный",
                "name_en": "Absolute",
                "description": "Цвет задается абсолютным значением, то есть сочетанием красной, зеленой и синей составляющих."
            },
            {
                "name": "АвтоЦвет",
                "name_en": "AutoColor",
                "description": "Цвет может быть установлен у свойств формы или элемента формы. Если данное значение установлено у свойства формы, то это означает что реальный цвет будет получен из стиля формы. Элемент стиля, который будет использоваться для получения реального цвета зависит от свойства.  Если данное значение устанавливается у элемента формы, то это означает что реальный цвет будет получен от панели в которую вставлен данный элемент. Если элемент вставлен в главную панель, то цвет будет получен от формы."
            },
            {
                "name": "ЭлементСтиля",
                "name_en": "StyleItem",
                "description": "Цвет задается одним из цветов элементов стиля."
            }
        ]
    },
    {
        "name": "ВидШрифта",
        "name_en": "FontType",
        "description": "Определяет набор значений видов шрифтов. Используется для определения вида шрифта объекта типа",
        "values": [
            {
                "name": "WindowsШрифт",
                "name_en": "WindowsFont",
                "description": "Шрифт задается одним из шрифтов Windows."
            },
            {
                "name": "Абсолютный",
                "name_en": "Absolute",
                "description": "Шрифт задается абсолютными характеристиками: именем шрифта, размером и другими."
            },
            {
                "name": "АвтоШрифт",
                "name_en": "AutoFont",
                "description": "Шрифт может быть установлен у свойств формы или элемента формы. Если данное значение установлено у свойства формы, то это означает что реальный шрифт будет получен из стиля формы. Элемент стиля, который будет использоваться для получения реального шрифта зависит от свойства.  Если данное значение устанавливается у элемента формы, то это означает что реальный шрифт будет получен от панели в которую вставлен данный элемент. Если элемент вставлен в главную панель, то шрифт будет получен от формы."
            },
            {
                "name": "ЭлементСтиля",
                "name_en": "StyleItem",
                "description": "Шрифт задается одним из шрифтов элементов стиля."
            }
        ]
    },
    {
        "name": "ДопустимаяДлина",
        "name_en": "AllowedLength",
        "description": "Определяет варианты ограничений длины строки. Используется для определения свойства",
        "values": [
            {
                "name": "Переменная",
                "name_en": "Variable",
                "description": "Строка имеет переменную длину. Если длина присваиваемой строки будет меньше установленной, то строка не будет дополняться пробелами до необходимой длины. Если длина присваиваемой строки будет больше установленной, строка будет обрезаться."
            },
            {
                "name": "Фиксированная",
                "name_en": "Fixed",
                "description": "Строка имеет фиксированную длину. Если длина присваиваемой строки будет меньше установленной, то строка будет дополняться пробелами справа до необходимой длины. Если длина присваиваемой строки будет больше установленной, строка будет обрезаться."
            }
        ]
    },
    {
        "name": "ДопустимыйЗнак",
        "name_en": "AllowedSign",
        "description": "Определяет набор допустимых знаков числа. Используется для определения свойства",
        "values": [
            {
                "name": "Любой",
                "name_en": "Any",
                "description": "Число может иметь любой знак (положительный или отрицательный)."
            },
            {
                "name": "Неотрицательный",
                "name_en": "Nonnegative",
                "description": "Число должно быть строго неотрицательным."
            }
        ]
    },
    {
        "name": "Клавиша",
        "name_en": "Key",
        "description": "Определяет набор клавиш, которые могут быть использованы в качестве основной клавиши в объекте",
        "values": [
            {
                "name": "_0",
                "name_en": "_0",
                "description": "Цифровые клавиши на основной части клавиатуры."
            },
            {
                "name": "_1",
                "name_en": "_1",
                "description": "Цифровые клавиши на основной части клавиатуры."
            },
            {
                "name": "_2",
                "name_en": "_2",
                "description": "Цифровые клавиши на основной части клавиатуры."
            },
            {
                "name": "_3",
                "name_en": "_3",
                "description": "Цифровые клавиши на основной части клавиатуры."
            },
            {
                "name": "_4",
                "name_en": "_4",
                "description": "Цифровые клавиши на основной части клавиатуры."
            },
            {
                "name": "_5",
                "name_en": "_5",
                "description": "Цифровые клавиши на основной части клавиатуры."
            },
            {
                "name": "_6",
                "name_en": "_6",
                "description": "Цифровые клавиши на основной части клавиатуры."
            },
            {
                "name": "_7",
                "name_en": "_7",
                "description": "Цифровые клавиши на основной части клавиатуры."
            },
            {
                "name": "_8",
                "name_en": "_8",
                "description": "Цифровые клавиши на основной части клавиатуры."
            },
            {
                "name": "_9",
                "name_en": "_9",
                "description": "Цифровые клавиши на основной части клавиатуры."
            },
            {
                "name": "A",
                "name_en": "A",
                "description": "Буквенные клавиши. Используется латинское обозначение."
            },
            {
                "name": "B",
                "name_en": "B",
                "description": "Буквенные клавиши. Используется латинское обозначение."
            },
            {
                "name": "BackSpace",
                "name_en": "BackSpace",
                "description": "BackSpace."
            },
            {
                "name": "Break",
                "name_en": "Break",
                "description": "Приостановка."
            },
            {
                "name": "C",
                "name_en": "C",
                "description": "Буквенные клавиши. Используется латинское обозначение."
            },
            {
                "name": "D",
                "name_en": "D",
                "description": "Буквенные клавиши. Используется латинское обозначение."
            },
            {
                "name": "E",
                "name_en": "E",
                "description": "Буквенные клавиши. Используется латинское обозначение."
            },
            {
                "name": "F",
                "name_en": "F",
                "description": "Буквенные клавиши. Используется латинское обозначение."
            },
            {
                "name": "F1",
                "name_en": "F1",
                "description": "Функциональные клавиши."
            },
            {
                "name": "F10",
                "name_en": "F10",
                "description": "Функциональные клавиши."
            },
            {
                "name": "F11",
                "name_en": "F11",
                "description": "Функциональные клавиши."
            },
            {
                "name": "F12",
                "name_en": "F12",
                "description": "Функциональные клавиши."
            },
            {
                "name": "F2",
                "name_en": "F2",
                "description": "Функциональные клавиши."
            },
            {
                "name": "F3",
                "name_en": "F3",
                "description": "Функциональные клавиши."
            },
            {
                "name": "F4",
                "name_en": "F4",
                "description": "Функциональные клавиши."
            },
            {
                "name": "F5",
                "name_en": "F5",
                "description": "Функциональные клавиши."
            },
            {
                "name": "F6",
                "name_en": "F6",
                "description": "Функциональные клавиши."
            },
            {
                "name": "F7",
                "name_en": "F7",
                "description": "Функциональные клавиши."
            },
            {
                "name": "F8",
                "name_en": "F8",
                "description": "Функциональные клавиши."
            },
            {
                "name": "F9",
                "name_en": "F9",
                "description": "Функциональные клавиши."
            },
            {
                "name": "G",
                "name_en": "G",
                "description": "Буквенные клавиши. Используется латинское обозначение."
            },
            {
                "name": "H",
                "name_en": "H",
                "description": "Буквенные клавиши. Используется латинское обозначение."
            },
            {
                "name": "I",
                "name_en": "I",
                "description": "Буквенные клавиши. Используется латинское обозначение."
            },
            {
                "name": "J",
                "name_en": "J",
                "description": "Буквенные клавиши. Используется латинское обозначение."
            },
            {
                "name": "K",
                "name_en": "K",
                "description": "Буквенные клавиши. Используется латинское обозначение."
            },
            {
                "name": "L",
                "name_en": "L",
                "description": "Буквенные клавиши. Используется латинское обозначение."
            },
            {
                "name": "M",
                "name_en": "M",
                "description": "Буквенные клавиши. Используется латинское обозначение."
            },
            {
                "name": "N",
                "name_en": "N",
                "description": "Буквенные клавиши. Используется латинское обозначение."
            },
            {
                "name": "Num0",
                "name_en": "Num0",
                "description": "Цифровые клавиши на дополнительной части клавиатуры."
            },
            {
                "name": "Num1",
                "name_en": "Num1",
                "description": "Цифровые клавиши на дополнительной части клавиатуры."
            },
            {
                "name": "Num2",
                "name_en": "Num2",
                "description": "Цифровые клавиши на дополнительной части клавиатуры."
            },
            {
                "name": "Num3",
                "name_en": "Num3",
                "description": "Цифровые клавиши на дополнительной части клавиатуры."
            },
            {
                "name": "Num4",
                "name_en": "Num4",
                "description": "Цифровые клавиши на дополнительной части клавиатуры."
            },
            {
                "name": "Num5",
                "name_en": "Num5",
                "description": "Цифровые клавиши на дополнительной части клавиатуры."
            },
            {
                "name": "Num6",
                "name_en": "Num6",
                "description": "Цифровые клавиши на дополнительной части клавиатуры."
            },
            {
                "name": "Num7",
                "name_en": "Num7",
                "description": "Цифровые клавиши на дополнительной части клавиатуры."
            },
            {
                "name": "Num8",
                "name_en": "Num8",
                "description": "Цифровые клавиши на дополнительной части клавиатуры."
            },
            {
                "name": "Num9",
                "name_en": "Num9",
                "description": "Цифровые клавиши на дополнительной части клавиатуры."
            },
            {
                "name": "NumAdd",
                "name_en": "NumAdd",
                "description": "Плюс на дополнительной части клавиатуры."
            },
            {
                "name": "NumDecimal",
                "name_en": "NumDecimal",
                "description": "Точка на дополнительной части клавиатуры."
            },
            {
                "name": "NumDivide",
                "name_en": "NumDivide",
                "description": "Деление на дополнительной части клавиатуры."
            },
            {
                "name": "NumMultiply",
                "name_en": "NumMultiply",
                "description": "Умножение на дополнительной части клавиатуры."
            },
            {
                "name": "NumSubtract",
                "name_en": "NumSubtract",
                "description": "Минус на дополнительной части клавиатуры."
            },
            {
                "name": "O",
                "name_en": "O",
                "description": "Буквенные клавиши. Используется латинское обозначение."
            },
            {
                "name": "P",
                "name_en": "P",
                "description": "Буквенные клавиши. Используется латинское обозначение."
            },
            {
                "name": "Q",
                "name_en": "Q",
                "description": "Буквенные клавиши. Используется латинское обозначение."
            },
            {
                "name": "R",
                "name_en": "R",
                "description": "Буквенные клавиши. Используется латинское обозначение."
            },
            {
                "name": "S",
                "name_en": "S",
                "description": "Буквенные клавиши. Используется латинское обозначение."
            },
            {
                "name": "Space",
                "name_en": "Space",
                "description": "Пробел."
            },
            {
                "name": "T",
                "name_en": "T",
                "description": "Буквенные клавиши. Используется латинское обозначение."
            },
            {
                "name": "U",
                "name_en": "U",
                "description": "Буквенные клавиши. Используется латинское обозначение."
            },
            {
                "name": "V",
                "name_en": "V",
                "description": "Буквенные клавиши. Используется латинское обозначение."
            },
            {
                "name": "W",
                "name_en": "W",
                "description": "Буквенные клавиши. Используется латинское обозначение."
            },
            {
                "name": "X",
                "name_en": "X",
                "description": "Буквенные клавиши. Используется латинское обозначение."
            },
            {
                "name": "Y",
                "name_en": "Y",
                "description": "Буквенные клавиши. Используется латинское обозначение."
            },
            {
                "name": "Z",
                "name_en": "Z",
                "description": "Буквенные клавиши. Используется латинское обозначение."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Нет клавиши."
            }
        ]
    },
    {
        "name": "КодВозвратаДиалога",
        "name_en": "DialogReturnCode",
        "description": "Определяет набор вариантов ответа пользователя на стандартный вопрос. Используется в качестве возвращаемого значения функции",
        "values": [
            {
                "name": "Да",
                "name_en": "Yes",
                "description": "Выбрана кнопка \"Да\"."
            },
            {
                "name": "Нет",
                "name_en": "No",
                "description": "Выбрана кнопка \"Нет\"."
            },
            {
                "name": "ОК",
                "name_en": "OK",
                "description": "Выбрана кнопка \"ОК\"."
            },
            {
                "name": "Отмена",
                "name_en": "Cancel",
                "description": "Выбрана кнопка \"Отмена\"."
            },
            {
                "name": "Повторить",
                "name_en": "Retry",
                "description": "Выбрана кнопка \"Повторить\"."
            },
            {
                "name": "Прервать",
                "name_en": "Abort",
                "description": "Выбрана кнопка \"Прервать\"."
            },
            {
                "name": "Пропустить",
                "name_en": "Ignore",
                "description": "Выбрана кнопка \"Пропустить\"."
            },
            {
                "name": "Таймаут",
                "name_en": "Timeout",
                "description": "Закончилось время ожидания ответа."
            }
        ]
    },
    {
        "name": "КодировкаXBase",
        "name_en": "XBaseEncoding",
        "description": "Содержит варианты кодировок XBase.",
        "values": [
            {
                "name": "ANSI",
                "name_en": "ANSI",
                "description": "База в формате Windows."
            },
            {
                "name": "OEM",
                "name_en": "OEM",
                "description": "База в формате DOS."
            }
        ]
    },
    {
        "name": "ИсточникРасширенийКонфигурации",
        "name_en": "ConfigExtensionsSource",
        "description": "Определяет источник получения списка расширений.",
        "values": [
            {
                "name": "БазаДанных",
                "name_en": "Database",
                "description": "Расширения в базе данных."
            },
            {
                "name": "СеансАктивные",
                "name_en": "SessionApplied",
                "description": "Расширения, действующие в текущем сеансе."
            },
            {
                "name": "СеансОтключенные",
                "name_en": "SessionDisabled",
                "description": "Расширения, не примененные в текущем сеансе."
            }
        ]
    },
    {
        "name": "КодировкаТекста",
        "name_en": "TextEncoding",
        "description": "Определяет набор допустимых кодировок текстовых файлов.",
        "values": [
            {
                "name": "ANSI",
                "name_en": "ANSI",
                "description": "Файл в формате ANSI."
            },
            {
                "name": "OEM",
                "name_en": "OEM",
                "description": "Файл в формате DOS."
            },
            {
                "name": "UTF16",
                "name_en": "UTF16",
                "description": "Файл в формате UTF-16."
            },
            {
                "name": "UTF8",
                "name_en": "UTF8",
                "description": "Файл в формате UTF-8."
            },
            {
                "name": "Системная",
                "name_en": "System",
                "description": "Кодировка текста, соответствующая системным установкам."
            }
        ]
    },
    {
        "name": "НаправлениеСортировки",
        "name_en": "SortDirection",
        "description": "Определяет возможные способы сортировки.",
        "values": [
            {
                "name": "Возр",
                "name_en": "Asc",
                "description": "Сортировка по возрастанию."
            },
            {
                "name": "Убыв",
                "name_en": "Desc",
                "description": "Сортировка по убыванию."
            }
        ]
    },
    {
        "name": "РежимДиалогаВопрос",
        "name_en": "QuestionDialogMode",
        "description": "Определяет набор вариантов состава кнопок окна диалога вопроса. Используется в качестве параметра функции",
        "values": [
            {
                "name": "ДаНет",
                "name_en": "YesNo",
                "description": "Кнопки \"Да\" и \"Нет\"."
            },
            {
                "name": "ДаНетОтмена",
                "name_en": "YesNoCancel",
                "description": "Кнопки \"Да\", \"Нет\" и \"Отмена\"."
            },
            {
                "name": "ОК",
                "name_en": "OK",
                "description": "Кнопка \"ОК\"."
            },
            {
                "name": "ОКОтмена",
                "name_en": "OKCancel",
                "description": "Кнопки \"ОК\" и \"Отмена\"."
            },
            {
                "name": "ПовторитьОтмена",
                "name_en": "RetryCancel",
                "description": "Кнопки \"Повторить\" и \"Отмена\"."
            },
            {
                "name": "ПрерватьПовторитьПропустить",
                "name_en": "AbortRetryIgnore",
                "description": "Кнопки \"Прервать\", \"Повторить\" и \"Пропустить\"."
            }
        ]
    },
    {
        "name": "РежимОкругления",
        "name_en": "RoundMode",
        "description": "Определяет режим округления.",
        "values": [
            {
                "name": "Окр15как10",
                "name_en": "Round15as10",
                "description": "При округлении 1.5 будет округлено до 1."
            },
            {
                "name": "Окр15как20",
                "name_en": "Round15as20",
                "description": "При округлении 1.5 будет округлено до 2."
            }
        ]
    },
    {
        "name": "РежимПолнотекстовогоПоиска",
        "name_en": "FullTextSearchMode",
        "description": "Разрешает (запрещает) все операции полнотекстового поиска: обновление индексов, очистка индексов, поиск.",
        "values": [
            {
                "name": "Запретить",
                "name_en": "Disable",
                "description": "Запретить полнотекстовый поиск."
            },
            {
                "name": "Разрешить",
                "name_en": "Enable",
                "description": "Разрешить полнотекстовый поиск."
            }
        ]
    },
    {
        "name": "ВидОтображенияПолнотекстовогоПоиска",
        "name_en": "FullTextSearchRepresentationType",
        "description": "Содержит варианты представления полнотекстового поиска.",
        "values": [
            {
                "name": "HTMLТекст",
                "name_en": "HTMLText",
                "description": "В формате HTML."
            },
            {
                "name": "XML",
                "name_en": "XML",
                "description": "В формате XML."
            }
        ]
    },
    {
        "name": "РежимРабочейДаты",
        "name_en": "WorkingDateMode",
        "description": "Определяет набор вариантов использования рабочей даты в глобальном контексте. Используется для определения свойства",
        "values": [
            {
                "name": "ИспользоватьТекущуюДату",
                "name_en": "UseCurrentDate",
                "description": "Использовать текущую дату в качестве рабочей. В этом режиме рабочая дата не может быть изменена ни интерактивно, ни программно."
            },
            {
                "name": "Назначать",
                "name_en": "Assign",
                "description": "Назначать рабочую дату программно или интерактивно."
            }
        ]
    },
    {
        "name": "СтатусСообщения",
        "name_en": "MessageStatus",
        "description": "Определяет набор статусов сообщений, обозначаемых пиктограммами при выводе сообщений в окно сообщений.",
        "values": [
            {
                "name": "БезСтатуса",
                "name_en": "WithoutStatus",
                "description": "Без пиктограммы."
            },
            {
                "name": "Важное",
                "name_en": "Important",
                "description": "Пиктограмма - два красных восклицательных знака."
            },
            {
                "name": "Внимание",
                "name_en": "Attention",
                "description": "Пиктограмма - красный восклицательный знак."
            },
            {
                "name": "Информация",
                "name_en": "Information",
                "description": "Пиктограмма - символ \"i\"."
            },
            {
                "name": "Обычное",
                "name_en": "Ordinary",
                "description": "Пиктограмма - синий треугольник."
            },
            {
                "name": "ОченьВажное",
                "name_en": "VeryImportant",
                "description": "Пиктограмма - три красных восклицательных знака."
            }
        ]
    },
    {
        "name": "ВариантСтандартнойДатыНачала",
        "name_en": "StandardBeginningDateVariant",
        "description": "Содержит возможные варианты стандартных дат начала.",
        "values": [
            {
                "name": "НачалоПрошлогоГода",
                "name_en": "BeginningOfLastYear",
                "description": "Начало прошлого года."
            },
            {
                "name": "НачалоПрошлогоДня",
                "name_en": "BeginningOfLastDay",
                "description": "Начало вчерашнего дня."
            },
            {
                "name": "НачалоПрошлогоКвартала",
                "name_en": "BeginningOfLastQuarter",
                "description": "Начало прошлого квартала."
            },
            {
                "name": "НачалоПрошлогоМесяца",
                "name_en": "BeginningOfLastMonth",
                "description": "Начало прошлого месяца."
            },
            {
                "name": "НачалоПрошлогоПолугодия",
                "name_en": "BeginningOfLastHalfYear",
                "description": "Начало прошлого полугодия."
            },
            {
                "name": "НачалоПрошлойДекады",
                "name_en": "BeginningOfLastTenDays",
                "description": "Начало прошлой декады."
            },
            {
                "name": "НачалоПрошлойНедели",
                "name_en": "BeginningOfLastWeek",
                "description": "Начало прошлой недели."
            },
            {
                "name": "НачалоСледующегоГода",
                "name_en": "BeginningOfNextYear",
                "description": "Начало следующего года."
            },
            {
                "name": "НачалоСледующегоДня",
                "name_en": "BeginningOfNextDay",
                "description": "Начало завтрашнего дня."
            },
            {
                "name": "НачалоСледующегоКвартала",
                "name_en": "BeginningOfNextQuarter",
                "description": "Начало следующего квартала."
            },
            {
                "name": "НачалоСледующегоМесяца",
                "name_en": "BeginningOfNextMonth",
                "description": "Начало следующего месяца."
            },
            {
                "name": "НачалоСледующегоПолугодия",
                "name_en": "BeginningOfNextHalfYear",
                "description": "Начало следующего полугодия."
            },
            {
                "name": "НачалоСледующейДекады",
                "name_en": "BeginningOfNextTenDays",
                "description": "Начало следующей декады."
            },
            {
                "name": "НачалоСледующейНедели",
                "name_en": "BeginningOfNextWeek",
                "description": "Начало следующей недели."
            },
            {
                "name": "НачалоЭтогоГода",
                "name_en": "BeginningOfThisYear",
                "description": "Начало текущего года."
            },
            {
                "name": "НачалоЭтогоДня",
                "name_en": "BeginningOfThisDay",
                "description": "Начало текущего дня."
            },
            {
                "name": "НачалоЭтогоКвартала",
                "name_en": "BeginningOfThisQuarter",
                "description": "Начало текущего квартала."
            },
            {
                "name": "НачалоЭтогоМесяца",
                "name_en": "BeginningOfThisMonth",
                "description": "Начало текущего месяца."
            },
            {
                "name": "НачалоЭтогоПолугодия",
                "name_en": "BeginningOfThisHalfYear",
                "description": "Начало текущего полугодия."
            },
            {
                "name": "НачалоЭтойДекады",
                "name_en": "BeginningOfThisTenDays",
                "description": "Начало текущей декады."
            },
            {
                "name": "НачалоЭтойНедели",
                "name_en": "BeginningOfThisWeek",
                "description": "Начало текущей недели."
            },
            {
                "name": "ПроизвольнаяДата",
                "name_en": "Custom",
                "description": "В качестве значения даты будет использована установленная дата."
            }
        ]
    },
    {
        "name": "ВариантСтандартногоПериода",
        "name_en": "StandardPeriodVariant",
        "description": "Содержит возможные варианты стандартного периода компоновки данных.",
        "values": [
            {
                "name": "Вчера",
                "name_en": "Yesterday",
                "description": "С начала вчерашнего дня до конца вчерашнего дня."
            },
            {
                "name": "ДоКонцаЭтогоГода",
                "name_en": "TillEndOfThisYear",
                "description": "С начала текущего дня до конца текущего года."
            },
            {
                "name": "ДоКонцаЭтогоКвартала",
                "name_en": "TillEndOfThisQuarter",
                "description": "С начала текущего дня до конца текущего квартала."
            },
            {
                "name": "ДоКонцаЭтогоМесяца",
                "name_en": "TillEndOfThisMonth",
                "description": "С начала текущего дня до конца текущего месяца."
            },
            {
                "name": "ДоКонцаЭтогоПолугодия",
                "name_en": "TillEndOfThisHalfYear",
                "description": "С начала текущего дня до конца текущего полугодия."
            },
            {
                "name": "ДоКонцаЭтойДекады",
                "name_en": "TillEndOfThisTenDays",
                "description": "С начала текущего дня до конца текущей декады."
            },
            {
                "name": "ДоКонцаЭтойНедели",
                "name_en": "TillEndOfThisWeek",
                "description": "С начала сегодняшнего дня до конца текущей недели."
            },
            {
                "name": "Завтра",
                "name_en": "Tomorrow",
                "description": "С начала завтрашнего дня до его конца."
            },
            {
                "name": "Месяц",
                "name_en": "Month",
                "description": "При выборе данного варианта начальная дата периода становится равной текущей дате плюс один день и минус один месяц, начало дня. Конечной датой периода становится конец текущего дня."
            },
            {
                "name": "Последние7Дней",
                "name_en": "Last7Days",
                "description": "Начальная дата периода равна началу дня (текущая дата - 6 дней). Конец периода - конец текущего дня."
            },
            {
                "name": "ПроизвольныйПериод",
                "name_en": "Custom",
                "description": "Использовать даты, установленные в качестве периода."
            },
            {
                "name": "ПрошлаяДекада",
                "name_en": "LastTenDays",
                "description": "С начала прошлой декады до ее конца."
            },
            {
                "name": "ПрошлаяДекадаДоТакогоЖеНомераДня",
                "name_en": "LastTenDaysTillSameDayNumber",
                "description": "С начала прошлой декады до конца дня в прошлой декаде с таким же номером, как у текущего дня в текущей декаде."
            },
            {
                "name": "ПрошлаяНеделя",
                "name_en": "LastWeek",
                "description": "С начала прошлой недели до ее конца."
            },
            {
                "name": "ПрошлаяНеделяДоТакогоЖеДняНедели",
                "name_en": "LastWeekTillSameWeekDay",
                "description": "С начала прошлой недели до конца текущего дня недели."
            },
            {
                "name": "ПрошлоеПолугодие",
                "name_en": "LastHalfYear",
                "description": "С начала прошлого полугодия до его конца."
            },
            {
                "name": "ПрошлоеПолугодиеДоТакойЖеДаты",
                "name_en": "LastHalfYearTillSameDate",
                "description": "С начала прошлого полугодия до конца дня с порядковым номером месяца в полугодии и номером дня в месяца, как у текущей даты."
            },
            {
                "name": "ПрошлыйГод",
                "name_en": "LastYear",
                "description": "С начала прошлого года до его конца."
            },
            {
                "name": "ПрошлыйГодДоТакойЖеДаты",
                "name_en": "LastYearTillSameDate",
                "description": "С начала прошлого года до конца дня с таким же месяцем и номером дня, как у текущей даты."
            },
            {
                "name": "ПрошлыйКвартал",
                "name_en": "LastQuarter",
                "description": "С начала прошлого квартала до его конца."
            },
            {
                "name": "ПрошлыйКварталДоТакойЖеДаты",
                "name_en": "LastQuarterTillSameDate",
                "description": "С начала прошлого квартала до конца дня прошлого квартала с таким же порядковым номером месяца в квартале и номером дня в месяце, как у текущей даты."
            },
            {
                "name": "ПрошлыйМесяц",
                "name_en": "LastMonth",
                "description": "С начала прошлого месяца до его конца."
            },
            {
                "name": "ПрошлыйМесяцДоТакойЖеДаты",
                "name_en": "LastMonthTillSameDate",
                "description": "С начала прошлого месяца до конца такого же числа прошлого месяца, как текущее число."
            },
            {
                "name": "Сегодня",
                "name_en": "Today",
                "description": "С начала сегодняшнего дня до его конца."
            },
            {
                "name": "СледующаяДекада",
                "name_en": "NextTenDays",
                "description": "С начала следующей декады до ее конца."
            },
            {
                "name": "СледующаяДекадаДоТакогоЖеНомераДня",
                "name_en": "NextTenDaysTillSameDayNumber",
                "description": "С начала следующей декады до конца дня с тем же номером, что и номер текущего дня в текущей декаде."
            },
            {
                "name": "СледующаяНеделя",
                "name_en": "NextWeek",
                "description": "С начала следующей недели до ее конца."
            },
            {
                "name": "СледующаяНеделяДоТакогоЖеДняНедели",
                "name_en": "NextWeekTillSameWeekDay",
                "description": "С начала следующего дня до конца такого же дня недели, что и текущий день."
            },
            {
                "name": "СледующееПолугодие",
                "name_en": "NextHalfYear",
                "description": "С начала следующего полугодия до его конца."
            },
            {
                "name": "СледующееПолугодиеДоТакойЖеДаты",
                "name_en": "NextHalfYearTillSameDate",
                "description": "С начала следующего полугодия до конца дня с тем же номером и днем относительно начала полугодия, что и текущий день."
            },
            {
                "name": "Следующие7Дней",
                "name_en": "Next7Days",
                "description": "Начальная дата периода равна началу текущего дня. Конечная дата периода - конец дня (текущая дата + 6 дней)."
            },
            {
                "name": "СледующийГод",
                "name_en": "NextYear",
                "description": "С начала следующего года до его конца."
            },
            {
                "name": "СледующийГодДоТакойЖеДаты",
                "name_en": "NextYearTillSameDate",
                "description": "С начала следующего года до конца дня, у которого месяц и день совпадают с текущим днем."
            },
            {
                "name": "СледующийКвартал",
                "name_en": "NextQuarter",
                "description": "С начала следующего квартала до его конца."
            },
            {
                "name": "СледующийКварталДоТакойЖеДаты",
                "name_en": "NextQuarterTillSameDate",
                "description": "С начала следующего квартала до конца дня с таким же месяцем и днем месяца относительно начала квартала, что и у текущей даты."
            },
            {
                "name": "СледующийМесяц",
                "name_en": "NextMonth",
                "description": "С начала следующего месяца до ее конца."
            },
            {
                "name": "СледующийМесяцДоТакойЖеДаты",
                "name_en": "NextMonthTillSameDate",
                "description": "С начала следующего месяца до конца дня следующего месяца с таким же числом, что и у текущей даты."
            },
            {
                "name": "СНачалаЭтогоГода",
                "name_en": "FromBeginningOfThisYear",
                "description": "С начала текущего года до конца текущего дня."
            },
            {
                "name": "СНачалаЭтогоКвартала",
                "name_en": "FromBeginningOfThisQuarter",
                "description": "С начала текущего квартала до конца текущего дня."
            },
            {
                "name": "СНачалаЭтогоМесяца",
                "name_en": "FromBeginningOfThisMonth",
                "description": "С начала текущего месяца до конца текущего дня."
            },
            {
                "name": "СНачалаЭтогоПолугодия",
                "name_en": "FromBeginningOfThisHalfYear",
                "description": "С начала текущего полугодия до конца сегодняшнего дня."
            },
            {
                "name": "СНачалаЭтойДекады",
                "name_en": "FromBeginningOfThisTenDays",
                "description": "С начала текущей декады до конца текущего дня."
            },
            {
                "name": "СНачалаЭтойНедели",
                "name_en": "FromBeginningOfThisWeek",
                "description": "С начала текущей недели до конца текущего дня."
            },
            {
                "name": "ЭтаДекада",
                "name_en": "ThisTenDays",
                "description": "С начала текущей декады до ее конца."
            },
            {
                "name": "ЭтаНеделя",
                "name_en": "ThisWeek",
                "description": "С начала текущей недели до ее конца."
            },
            {
                "name": "ЭтоПолугодие",
                "name_en": "ThisHalfYear",
                "description": "С начала текущего полугодия до его окончания."
            },
            {
                "name": "ЭтотГод",
                "name_en": "ThisYear",
                "description": "С начала текущего года до его конца."
            },
            {
                "name": "ЭтотКвартал",
                "name_en": "ThisQuarter",
                "description": "С начала текущего квартала до его конца."
            },
            {
                "name": "ЭтотМесяц",
                "name_en": "ThisMonth",
                "description": "С начала текущего месяца до его конца."
            }
        ]
    },
    {
        "name": "ТипПоведенияКлавишиEnter",
        "name_en": "EnterKeyBehaviorType",
        "description": "Определяет набор типов поведения формы при нажатии клавиши Enter. Используется для определения свойства",
        "values": [
            {
                "name": "КнопкаПоУмолчанию",
                "name_en": "DefaultButton",
                "description": "Нажатие клавиши Enter воспринимается как нажатие кнопки по умолчанию."
            },
            {
                "name": "ПереходПоЭлементамФормы",
                "name_en": "ControlNavigation",
                "description": "При нажатии Enter происходит переход к следующему элементу управления по порядку обхода."
            }
        ]
    },
    {
        "name": "ЧастиДаты",
        "name_en": "DateFractions",
        "description": "Определяет набор вариантов использования значений типа",
        "values": [
            {
                "name": "Время",
                "name_en": "Time",
                "description": "Значение состоит только из времени (без даты)."
            },
            {
                "name": "Дата",
                "name_en": "Date",
                "description": "Значение состоит только из даты (без времени)."
            },
            {
                "name": "ДатаВремя",
                "name_en": "DateTime",
                "description": "Значение состоит из даты и времени."
            }
        ]
    },
    {
        "name": "ПроверкаЗаполнения",
        "name_en": "FillChecking",
        "description": "Содержит варианты проверки заполнения реквизитов.",
        "values": [
            {
                "name": "ВыдаватьОшибку",
                "name_en": "ShowError",
                "description": "Если для проверяемого значения метод ЗначениеЗаполнено вернет Ложь, значение будет считаться незаполненным и пользователю будет выдано соответствующее сообщение с указанием места исправления."
            },
            {
                "name": "НеПроверять",
                "name_en": "DontCheck",
                "description": "Проверка заполнения реквизитов не выполняется."
            }
        ]
    },
    {
        "name": "РежимЗапускаКлиентскогоПриложения",
        "name_en": "ClientRunMode",
        "description": "Содержит варианты режимов запуска клиентского приложения.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Режим запуска определяется автоматически, как определено в конфигурации в свойстве \"Основной режим запуска\"."
            },
            {
                "name": "ОбычноеПриложение",
                "name_en": "OrdinaryApplication",
                "description": "Определяет режим запуска клиентского приложения \"Обычное приложение\"."
            },
            {
                "name": "УправляемоеПриложение",
                "name_en": "ManagedApplication",
                "description": "Запуск клиентского приложения осуществляется в режиме приложения."
            }
        ]
    },
    {
        "name": "РежимОткрытияФормПриложения",
        "name_en": "ApplicationFormsOpenningMode",
        "description": "Содержит варианты открытия форм приложения.",
        "values": [
            {
                "name": "Закладки",
                "name_en": "Tabs",
                "description": "Формы открываются в закладках."
            },
            {
                "name": "ОтдельныеОкна",
                "name_en": "SingleWindows",
                "description": "Формы открываются в отдельных окнах."
            }
        ]
    },
    {
        "name": "ОтображениеПанелиРазделов",
        "name_en": "SectionsPanelRepresentation",
        "description": "Содержит варианты режимов отображения панели разделов приложения.",
        "values": [
            {
                "name": "Картинка",
                "name_en": "Picture",
                "description": "Разделы в панели разделов отображаются только картинкой."
            },
            {
                "name": "КартинкаИТекст",
                "name_en": "PictureAndText",
                "description": "Разделы в панели разделов отображаются картинкой и текстом."
            },
            {
                "name": "КартинкаСверхуИТекст",
                "name_en": "PictureOnTopAndText",
                "description": "Разделы в панели разделов отображаются картинкой, расположенной над текстом."
            },
            {
                "name": "КартинкаСлеваИТекст",
                "name_en": "PictureOnLeftAndText",
                "description": "Разделы в панели разделов отображаются картинкой, расположенной слева от текста."
            },
            {
                "name": "Текст",
                "name_en": "Text",
                "description": "Разделы в панели разделов отображаются только текстом."
            }
        ]
    },
    {
        "name": "ВариантОсновногоШрифтаКлиентскогоПриложения",
        "name_en": "ClientApplicationBaseFontVariant",
        "description": "Содержит варианты основного шрифта приложения.",
        "values": [
            {
                "name": "Крупный",
                "name_en": "Large",
                "description": "Крупный шрифт."
            },
            {
                "name": "Обычный",
                "name_en": "Normal",
                "description": "Обычный шрифт."
            }
        ]
    },
    {
        "name": "ТипПлатформы",
        "name_en": "PlatformType",
        "description": "Содержит возможные типы платформы.",
        "values": [
            {
                "name": "Linux_x86",
                "name_en": "Linux_x86",
                "description": "Linux с архитектурой i386."
            },
            {
                "name": "Linux_x86_64",
                "name_en": "Linux_x86_64",
                "description": "64-битный Linux с архитектурой x86-64."
            },
            {
                "name": "MacOS_x86",
                "name_en": "MacOS_x86",
                "description": "32-битный macOS с архитектурой x86."
            },
            {
                "name": "MacOS_x86_64",
                "name_en": "MacOS_x86_64",
                "description": "64-битный macOS с архитектурой x86-64."
            },
            {
                "name": "Windows_x86",
                "name_en": "Windows_x86",
                "description": "32-х битная платформа Windows."
            },
            {
                "name": "Windows_x86_64",
                "name_en": "Windows_x86_64",
                "description": "64-битная Windows."
            }
        ]
    },
    {
        "name": "ТипВнешнейКомпоненты",
        "name_en": "AddInType",
        "description": "Содержит типы реализации внешнего компонента.",
        "values": [
            {
                "name": "COM",
                "name_en": "COM",
                "description": "Компонент, реализованный с использованием технологии COM."
            },
            {
                "name": "Native",
                "name_en": "Native",
                "description": "Компонент, реализованный с использованием Native API."
            }
        ]
    },
    {
        "name": "СкоростьКлиентскогоСоединения",
        "name_en": "ClientConnectionSpeed",
        "description": "Содержит варианты скорости клиентского соединения.",
        "values": [
            {
                "name": "Низкая",
                "name_en": "Low",
                "description": "Низкая скорость."
            },
            {
                "name": "Обычная",
                "name_en": "Normal",
                "description": "Обычная скорость."
            }
        ]
    },
    {
        "name": "ОбновлениеПриИзмененииДанных",
        "name_en": "UpdateOnDataChange",
        "description": "Содержит варианты режимов обновления элемента формы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Автоматическое обновление."
            },
            {
                "name": "НеОбновлять",
                "name_en": "DontUpdate",
                "description": "Элемент не обновляется после изменения или добавления в него данных."
            }
        ]
    },
    {
        "name": "СостояниеВнешнегоИсточникаДанных",
        "name_en": "ExternalDataSourceState",
        "description": "Содержит возможные состояния внешнего источника данных.",
        "values": [
            {
                "name": "Отключен",
                "name_en": "Disconnected",
                "description": "Ко внешнему источнику не выполнено подключение."
            },
            {
                "name": "Подключен",
                "name_en": "Connected",
                "description": "К источнику выполнено соединение."
            }
        ]
    },
    {
        "name": "СостояниеОбновленияКонфигурацииБазыДанных",
        "name_en": "DataBaseConfigurationUpdateState",
        "description": "Содержит варианты текущих фаз обновления конфигурации базы данных.",
        "values": [
            {
                "name": "ВыполняетсяАктуализация",
                "name_en": "RefreshInProgress",
                "description": "Фоновое обновление конфигурации базы данных выполняется, происходит фаза актуализация измененных данных."
            },
            {
                "name": "ВыполняетсяОбработка",
                "name_en": "ProcessingInProgress",
                "description": "Фоновое обновление конфигурации базы данных выполняется, происходит фаза начальной обработки."
            },
            {
                "name": "Неактивно",
                "name_en": "NotActive",
                "description": "Фоновое обновление конфигурации базы данных не активно (либо не запущено, либо завершено с ошибкой)."
            }
        ]
    },
    {
        "name": "ТипЭлементаИнформацииОВыполненииОбновленияКонфигурацииБазыДанных",
        "name_en": "DataBaseConfigurationUpdateExecutionInformationItemType",
        "description": "Содержит типы элементов информации о выполнении обновления конфигурации базы данных.",
        "values": [
            {
                "name": "Информация",
                "name_en": "Information",
                "description": "Указывает, что данный элемент информации о выполнении обновления конфигурации базы данных относится к информационным элементам."
            },
            {
                "name": "Ошибка",
                "name_en": "Error",
                "description": "Указывает, что данный элемент информации о выполнении обновления конфигурации базы данных относится к ошибкам."
            },
            {
                "name": "Предупреждение",
                "name_en": "Warning",
                "description": "Указывает, что данный элемент информации о выполнении обновления конфигурации базы данных относится к предупреждениям."
            }
        ]
    },
    {
        "name": "СпособВыбораСертификатаWindows",
        "name_en": "WindowsCertificateSelectMode",
        "description": "Содержит варианты способов выбора клиентского сертификата из подходящих сертификатов, установленных в системном хранилище сертификатов операционной системы MS Windows.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Подбирать подходящий клиентский сертификат автоматически."
            },
            {
                "name": "Выбирать",
                "name_en": "Choose",
                "description": "При наличии более чем одного подходящего клиентского сертификата предоставлять выбор через системный диалог выбора сертификатов."
            }
        ]
    },
    {
        "name": "ХешФункция",
        "name_en": "HashFunction",
        "description": "Варианты типов хеш-функции. Определяет способ вычисления хеш-суммы и тип вычисляемого значения.",
        "values": [
            {
                "name": "CRC32",
                "name_en": "CRC32",
                "description": "Вычислять значение CRC32."
            },
            {
                "name": "MD5",
                "name_en": "MD5",
                "description": "Вычислять значение MD5."
            },
            {
                "name": "SHA1",
                "name_en": "SHA1",
                "description": "Вычислять значение SHA-1."
            },
            {
                "name": "SHA256",
                "name_en": "SHA256",
                "description": "Вычислять значение SHA-256."
            }
        ]
    },
    {
        "name": "СпособКодированияСтроки",
        "name_en": "StringEncodingMethod",
        "description": "Варианты кодирования строк.",
        "values": [
            {
                "name": "URLВКодировкеURL",
                "name_en": "URLInURLEncoding",
                "description": "Кодировать (раскодировать) строку URL в URL кодировке. Спецсимволы URL ( !#$%'()*+,/:;=?@[] ) не кодируются."
            },
            {
                "name": "КодировкаURL",
                "name_en": "URLEncoding",
                "description": "Кодировать (раскодировать) в URL кодировке."
            }
        ]
    },
    {
        "name": "ИспользованиеМетаданныхПолнотекстовогоПоиска",
        "name_en": "FullTextSearchMetadataUse",
        "description": "Содержит возможные варианты использования метаданных при полнотекстовом поиске.",
        "values": [
            {
                "name": "Использовать",
                "name_en": "Use",
                "description": "Использовать метаданные при поиске."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Не использовать метаданные при поиске."
            }
        ]
    },
    {
        "name": "УровеньИзоляцииТранзакций",
        "name_en": "TransactionsIsolationLevel",
        "description": "Содержит варианты уровней изоляции транзакций внешних источников данных.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Указывает, что фактический уровень транзакции выбирается в зависимости от параметра РежимБлокировок метода НачатьТранзакцию."
            },
            {
                "name": "ПовторяемоеЧтение",
                "name_en": "RepeatableRead",
                "description": "Уровень изоляции транзакций внешнего источника данных, при котором операция чтения возвращает данные, зафиксированные в других транзакциях на момент начала транзакции, операция записи на измененных в других транзакциях данных завершается с ошибкой (в зависимости от внешнего источника данных, может быть обеспечено поведение уровня Упорядочиваемость)."
            },
            {
                "name": "Упорядочиваемость",
                "name_en": "Serializable",
                "description": "Уровень изоляции транзакций внешнего источника данных, при котором операция чтения возвращает данные и выборку строк, зафиксированные в других транзакциях на момент начала транзакции. Операция записи на измененных в других транзакциях данных завершается с ошибкой."
            },
            {
                "name": "ЧтениеЗафиксированных",
                "name_en": "ReadCommitted",
                "description": "Уровень изоляции транзакций внешнего источника данных, при котором операция чтения возвращает данные, зафиксированные в других транзакциях на момент чтения данных, операция записи на измененных в других транзакциях данных перезаписывает данные (может быть обеспечено поведение уровня ПовторяемоеЧтение или выше, зависит от внешнего источника данных)."
            },
            {
                "name": "ЧтениеНезафиксированных",
                "name_en": "ReadUncommitted",
                "description": "Уровень изоляции транзакций внешнего источника данных, при котором операция чтения возвращает данные, не зафиксированные в других транзакциях на момент начала транзакции, операция записи на измененных в других транзакциях данных перезаписывает данные (может быть обеспечено поведение уровня ЧтениеЗафиксированных или выше, зависит от внешнего источника данных)."
            }
        ]
    },
    {
        "name": "ВариантИнтерфейсаКлиентскогоПриложения",
        "name_en": "ClientApplicationInterfaceVariant",
        "description": "Вариант интерфейса клиентского приложения.",
        "values": [
            {
                "name": "Версия8_2",
                "name_en": "Version8_2",
                "description": "Интерфейс версии 8.2."
            },
            {
                "name": "Такси",
                "name_en": "Taxi",
                "description": "Интерфейс \"Такси\"."
            }
        ]
    },
    {
        "name": "РежимСовместимостиИнтерфейса",
        "name_en": "InterfaceCompatibilityMode",
        "description": "Содержит возможные варианты режима интерфейса клиентского приложения.",
        "values": [
            {
                "name": "Версия8_2",
                "name_en": "Version8_2",
                "description": "Клиентское приложение работает в интерфейсе Версия8_2. Изменение режима не возможно."
            },
            {
                "name": "Версия8_2РазрешитьТакси",
                "name_en": "Version8_2EnableTaxi",
                "description": "Клиентское приложение по умолчанию использует интерфейс Версия8_2. Возможно изменение режима через НастройкиКлиентскогоПриложения или параметр строки запуска."
            },
            {
                "name": "Такси",
                "name_en": "Taxi",
                "description": "Клиентское приложение работает в интерфейсе \"Такси\"."
            },
            {
                "name": "ТаксиРазрешитьВерсия8_2",
                "name_en": "TaxiEnableVersion8_2",
                "description": "Клиентское приложение по умолчанию использует интерфейс \"Такси\". Возможно изменение режима через НастройкиКлиентскогоПриложения или параметр строки запуска."
            }
        ]
    },
    {
        "name": "ВариантМасштабаФормКлиентскогоПриложения",
        "name_en": "ClientApplicationFormScaleVariant",
        "description": "Содержит варианты масштаба отображения форм в клиентском приложении.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Масштаб отображения форм определяется автоматически."
            },
            {
                "name": "Компактный",
                "name_en": "Compact",
                "description": "Формы отображаются в компактном виде."
            },
            {
                "name": "Обычный",
                "name_en": "Normal",
                "description": "Формы отображаются в обычном масштабе."
            }
        ]
    },
    {
        "name": "НаправлениеПоиска",
        "name_en": "SearchDirection",
        "description": "Определяет направление поиска подстроки в строке.",
        "values": [
            {
                "name": "СКонца",
                "name_en": "FromEnd",
                "description": "Задает направление поиска от конца строки к ее началу."
            },
            {
                "name": "СНачала",
                "name_en": "FromBegin",
                "description": "Задает направление поиска от начала строки в концу."
            }
        ]
    },
    {
        "name": "ИспользованиеByteOrderMark",
        "name_en": "ByteOrderMarkUse",
        "description": "Содержит варианты использования метки порядка байтов ( от англ. Byte Order Mark (BOM)) при кодировании строк.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Автоматическое определение необходимости использования метки порядка байтов при кодировании строк в зависимости от кодировки. Метка используется для кодировок UTF-16 и UTF-32, и не используется для UTF-8, UTF-16LE/UTF-16BE, UTF-32LE/UTF-32BE и др."
            },
            {
                "name": "Использовать",
                "name_en": "Use",
                "description": "Использовать метку порядка байтов (BOM) при кодировании строк."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Не использовать метку порядка байтов (BOM) при кодировании строк."
            }
        ]
    },
    {
        "name": "ОбновлениеПредопределенныхДанных",
        "name_en": "PredefinedDataUpdate",
        "description": "Определяет режим обновления предопределенных данных.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Режим обновления предопределенных данных зависит от установленного значения свойства объекта конфигурации ОбновлениеПредопределенныхДанных:  - Если Авто, проверяется значение, установленное для всей информационной базы  - Если Авто, проверяется вид узла распределенной информационной базы.  - Для корневого узла и нераспределенной информационной базы - ОбновлятьАвтоматически,  - Для подчиненного узла распределенной информационной базы - НеОбновлятьАвтоматически."
            },
            {
                "name": "НеОбновлятьАвтоматически",
                "name_en": "DontAutoUpdate",
                "description": "Обновление предопределенных данных не выполняется автоматически. Разработчик должен обеспечить актуализацию предопределенных данных."
            },
            {
                "name": "ОбновлятьАвтоматически",
                "name_en": "AutoUpdate",
                "description": "Обновление предопределенных данных выполняется автоматически."
            }
        ]
    },
    {
        "name": "ВажностьПроблемыПримененияРасширенияКонфигурации",
        "name_en": "ConfigurationExtensionApplicationIssueSeverity",
        "description": "Уровни важности проблемы применения расширения конфигурации.",
        "values": [
            {
                "name": "Критичная",
                "name_en": "Critical",
                "description": "Критичная проблема применения расширения конфигурации. При наличии такой проблемы расширение не пройдет контроль применимости во время выполнения и не будет использовано."
            },
            {
                "name": "Низкая",
                "name_en": "Low",
                "description": "Проблема применения расширения конфигурации с низкой важностью. Наличие такой проблемы может возникнуть, например, после установки свойства Активно в значение Ложь."
            },
            {
                "name": "Обычная",
                "name_en": "Moderate",
                "description": "Некритичная проблема применения расширения конфигурации. Наличие таких предупреждений не блокирует подключение расширения конфигурации."
            }
        ]
    },
    {
        "name": "ПоложениеОтносительноГеозоны",
        "name_en": "LocationRelativeToGeofence",
        "description": "Описывает положение точки относильно геозоны.",
        "values": [
            {
                "name": "Внутри",
                "name_en": "Inside",
                "description": "Точка расположена внутри геозоны."
            },
            {
                "name": "Снаружи",
                "name_en": "Outside",
                "description": "Точка расположена снаружи геозоны."
            }
        ]
    },
    {
        "name": "ВидЧисловогоЗначения",
        "name_en": "NumericValueType",
        "description": "Содержит виды числовых значений.",
        "values": [
            {
                "name": "Количественное",
                "name_en": "Cardinal",
                "description": "Количественное числительное (например: один, восемьдесят, и т.д.)."
            },
            {
                "name": "Порядковое",
                "name_en": "Ordinal",
                "description": "Порядковое числительное (например: первый, десятый, и т.д.)."
            }
        ]
    },
    {
        "name": "ОбластьДействияРасширенияКонфигурации",
        "name_en": "ConfigurationExtensionScope",
        "description": "Содержит варианты возможных областей действия расширения конфигурации.",
        "values": [
            {
                "name": "ИнформационнаяБаза",
                "name_en": "InfoBase",
                "description": "Расширение конфигурации действует для всей информационной базы."
            },
            {
                "name": "РазделениеДанных",
                "name_en": "DataSeparation",
                "description": "Расширение конфигурации действует только в области, в которой оно подключено."
            }
        ]
    },
    {
        "name": "РежимРазделенияСоставныхСлов",
        "name_en": "CompositeWordsSeparationMode",
        "description": "Содержит варианты режимов использования механизма разделения слов на значащие части при построении индекса полнотекстового поиска.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "В индекс полнотекстового поиска включаются значащие части составных слов и в результатах поиска подсвечиваются все найденные вхождения, в том числе, в частях слова если задан русский язык в настройке информационной базы."
            },
            {
                "name": "Использовать",
                "name_en": "Use",
                "description": "В индекс полнотекстового поиска включаются значащие части составных слов, и по ним в дальнейшем возможен поиск. В результатах поиска подсвечиваются все найденные вхождения, в том числе, в частях слова."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "В индекс полнотекстового поиска значащие части составных слов не включаются. Подсветка в результатах поиска не меняет поведение."
            }
        ]
    },
    {
        "name": "ВидКлючаДинамическогоСписка",
        "name_en": "DynamicListKeyType",
        "description": "Содержит варианты видов ключа динамического списка.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Вид ключа определяется по следующему правилу:  - Если у динамического списка указана основная таблица - фактически используемый вид ключа определяется основной таблицей.  - Если основная таблица не указана - вид ключа определяется в зависимости от количества указанных ключевых полей:  - ни одного поля - НомерСтроки,  - одно поле - ЗначениеПоля,  - более одного поля - КлючЗаписи."
            },
            {
                "name": "ЗначениеПоля",
                "name_en": "Simple",
                "description": "Данный вид ключа используется, если у динамического списка одно ключевое поле и значения этого поля используются в качестве значения свойства ТекущаяСтрока. Если поле имеет значение Неопределено, то при считывании данных списка будет сгенерировано исключение."
            },
            {
                "name": "КлючСтроки",
                "name_en": "Composite",
                "description": "Используется, если у динамического списка несколько ключевых полей. В качестве значений свойства ТекущаяСтрока используются значения типа КлючСтрокиДинамическогоСписка."
            },
            {
                "name": "НомерСтроки",
                "name_en": "RowNumber",
                "description": "Используется, если в динамическом поле отсутствуют ключевые поля. В качестве значений ТекущаяСтрока используются числа - порядковые номера записей от начала выборки.  При использовании ключей такого вида, функциональность динамического списка ограничена. Перед использованием такого вида ключей, рекомендуется рассмотреть варианты использования видов ключей КлючСтроки или ЗначениеПоля."
            }
        ]
    },
    {
        "name": "СпособВыбораСертификатаMacOS",
        "name_en": "MacOSCertificateSelectMode",
        "description": "Содержит варианты способов выбора клиентского сертификата из подходящих сертификатов, установленных в системном хранилище сертификатов операционной системы macOS.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Подбирать подходящий клиентский сертификат автоматически."
            },
            {
                "name": "Выбирать",
                "name_en": "Choose",
                "description": "При наличии более чем одного подходящего клиентского сертификата предоставлять выбор через системный диалог выбора сертификатов."
            }
        ]
    },
    {
        "name": "СтандартныйВидГлобальногоПоиска",
        "name_en": "StandardGlobalSearchType",
        "description": "Содержит варианты стандартных элементов плана глобального поиска.",
        "values": [
            {
                "name": "ВсеФункции",
                "name_en": "AllFunctions",
                "description": "Поиск по представлениям функций в меню \"Все функции\"."
            },
            {
                "name": "Выражение",
                "name_en": "Expression",
                "description": "Вычисление выражения."
            },
            {
                "name": "ГлобальныеСтандартныеКоманды",
                "name_en": "GlobalStandardCommands",
                "description": "Поиск по стандартным командам:  - Календарь,  - Калькулятор,  - Изменить масштаб,  - Настройка панелей,  - Настройка начальной страницы,  - Настройка панели разделов,  - Параметры,  - О программе,  - Функции для технического специалиста,  - Избранное,  - История,  - Оповещения."
            },
            {
                "name": "Данные",
                "name_en": "Data",
                "description": "Полнотекстовый поиск по данным."
            },
            {
                "name": "ИзбранноеРаботыПользователя",
                "name_en": "UserWorkFavorites",
                "description": "Поиск по представлениям в избранном работы пользователя."
            },
            {
                "name": "ИсторияРаботыПользователя",
                "name_en": "UserWorkHistory",
                "description": "Поиск по представлениям в истории работы пользователя."
            },
            {
                "name": "МенюФункций",
                "name_en": "FunctionMenu",
                "description": "Поиск по представлениям функций (команд) в меню функций."
            },
            {
                "name": "НавигационнаяСсылка",
                "name_en": "URL",
                "description": "Переход по навигационной ссылке."
            },
            {
                "name": "ОбсужденияСистемыВзаимодействия",
                "name_en": "CollaborationSystemConversations",
                "description": "Поиск по представлениям и именам пользователей в обсуждениях системы взаимодействия."
            },
            {
                "name": "СообщенияСистемыВзаимодействия",
                "name_en": "CollaborationSystemMessages",
                "description": "Поиск по тексту сообщений системы взаимодействия."
            },
            {
                "name": "Справка",
                "name_en": "Help",
                "description": "Поиск по тексту справочной информации."
            },
            {
                "name": "ФункцииДляТехническогоСпециалиста",
                "name_en": "FunctionsForTechnicalSpecialist",
                "description": "Поиск по представлениям функций в меню \"Функции для технического специалиста\"."
            }
        ]
    },
    {
        "name": "ТипСвязиВложенияPDF",
        "name_en": "PDFAttachmentRelationshipType",
        "description": "Содержит варианты типов взаимоотношения между вложенным файлом и содержимым документа PDF.",
        "values": [
            {
                "name": "Альтернатива",
                "name_en": "Alternative",
                "description": "Спецификация файла является альтернативной репрезентацией содержания, например, аудиофайл."
            },
            {
                "name": "Данные",
                "name_en": "Data",
                "description": "Спецификация файла представляет информацию, используемую для вывода визуального представления, например, в виде таблицы или графа."
            },
            {
                "name": "Дополнение",
                "name_en": "Supplement",
                "description": "Спецификация файла представляет дополнительную репрезентацию исходного источника или данных, которые могут быть использованы (например, формулы, таблицы отчетов)."
            },
            {
                "name": "Источник",
                "name_en": "Source",
                "description": "Спецификация файла является исходным материалом источника для ассоциированного содержания."
            },
            {
                "name": "НеУстановлено",
                "name_en": "Unspecified",
                "description": "Взаимоотношение между вложенным файлом и содержимым документа PDF неизвестно или не может быть описано одним значением."
            }
        ]
    },
    {
        "name": "ТипПодписиPDF",
        "name_en": "PDFSignatureType",
        "description": "Содержит варианты типа подписи документа PDF.",
        "values": [
            {
                "name": "Сертифицирующая",
                "name_en": "Certifying",
                "description": "Позволяет внести допустимые типы изменений, при которых документ останется достоверным. Например, заполнение формы или установка подписей."
            },
            {
                "name": "Утверждающая",
                "name_en": "Approving",
                "description": "Позволяет только добавлять подписи или заблокировать документ."
            }
        ]
    },
    {
        "name": "РазрешенияДоступаИзмененияPDF",
        "name_en": "PDFModificationAccessPermissions",
        "description": "Содержит варианты разрешения доступа на изменение PDF-документа. Используется только для сертифицирующей подписи.",
        "values": [
            {
                "name": "ЗаполнениеПодписание",
                "name_en": "FillingSigning",
                "description": "Разрешено заполнение форм и добавление подписей; любые другие изменения в документе делают подпись недействительной."
            },
            {
                "name": "ЗаполнениеПодписаниеАннотирование",
                "name_en": "FillingSigningAnnotation",
                "description": "Разрешено заполнение форм, добавление подписей и аннотаций; любые другие изменения в документе делают подпись недействительной."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Изменения запрещены. Все изменения в документе делают подпись недействительной."
            }
        ]
    },
    {
        "name": "ВидПодписейКДиаграмме",
        "name_en": "ChartLabelType",
        "description": "Содержит варианты видов подписей к областям круговых диаграмм, а также видов подсказки к областям. Если размеры диаграммы не позволяют разместить диаграмму с указанным форматом подписей, видов подписей автоматически перейдёт в режим \"Нет\". При этом подсказки не изменятся.",
        "values": [
            {
                "name": "Значение",
                "name_en": "Value",
                "description": "В качестве подписи выводится значение в серии."
            },
            {
                "name": "ЗначениеПроцент",
                "name_en": "ValuePercent",
                "description": "В качестве подписи выводится строка, состоящая из значения в серии и процента от общей суммы."
            },
            {
                "name": "ЗначениеРазмер",
                "name_en": "ValueSize",
                "description": "В качестве подписи выводится значение серии в точке, дополнительно в пузырьковой диаграмме выводится значение размера."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Нет подписей и подсказок."
            },
            {
                "name": "Процент",
                "name_en": "Percent",
                "description": "В качестве подписи выводится процент от общей суммы."
            },
            {
                "name": "Серия",
                "name_en": "Series",
                "description": "В качестве подписи выводится имя серии."
            },
            {
                "name": "СерияЗначение",
                "name_en": "SeriesValue",
                "description": "В качестве подписи выводится строка, состоящая из имени серии и значения в серии."
            },
            {
                "name": "СерияЗначениеПроцент",
                "name_en": "SeriesValuePercent",
                "description": "В качестве подписи выводится строка, состоящая из имени серии, значения в серии и процента от общей суммы."
            },
            {
                "name": "СерияЗначениеРазмер",
                "name_en": "SeriesValueSize",
                "description": "В качестве подписи выводится представление серии и значение серии в точке, дополнительно в пузырьковой диаграмме выводится значение размера пузырька."
            },
            {
                "name": "СерияПроцент",
                "name_en": "SeriesPercent",
                "description": "В качестве подписи выводится строка, состоящая из имени серии и процента от общей суммы."
            },
            {
                "name": "СерияРазмер",
                "name_en": "SeriesSize",
                "description": "В качестве подписи отображается представление сери, дополнительно в пузырьковой диаграмме выводится значение размера."
            },
            {
                "name": "СерияТочка",
                "name_en": "SeriesPoint",
                "description": "В качестве подписи выводится представление серии плюс представление точки."
            },
            {
                "name": "СерияТочкаЗначение",
                "name_en": "SeriesPointValue",
                "description": "В качестве подписи выводится представление серии плюс представление точки плюс значение серии в точке."
            },
            {
                "name": "СерияТочкаЗначениеПроцент",
                "name_en": "SeriesPointValuePercent",
                "description": "В качестве подписи выводится представление серии плюс представление точки плюс значение серии в точке плюс процент от общей суммы."
            },
            {
                "name": "СерияТочкаЗначениеРазмер",
                "name_en": "SeriesPointValueSize",
                "description": "В качестве подписи выводится представление серии, представление точки, значение серии в точке. Дополнительно в пузырьковой диаграмме выводится значение размера."
            },
            {
                "name": "СерияТочкаПроцент",
                "name_en": "SeriesPointPercent",
                "description": "В качестве подписи выводится представление серии плюс представление точки плюс процент от общей суммы."
            },
            {
                "name": "СерияТочкаРазмер",
                "name_en": "SeriesPointSize",
                "description": "В качестве подписи выводится представление серии плюс представление точки, дополнительно в пузырьковой диаграмме выводится значение размера пузырька."
            },
            {
                "name": "Точка",
                "name_en": "Point",
                "description": "В качестве подписи выводится представление точки."
            },
            {
                "name": "ТочкаЗначение",
                "name_en": "PointValue",
                "description": "В качестве подписи выводится представление точки плюс значение серии в точке."
            },
            {
                "name": "ТочкаЗначениеПроцент",
                "name_en": "PointValuePercent",
                "description": "В качестве подписи выводится представление точки плюс значение серии в точке плюс процент от общей суммы."
            },
            {
                "name": "ТочкаЗначениеРазмер",
                "name_en": "PointValueSize",
                "description": "В качестве подписи выводится представление точки и серии в точке, дополнительно в пузырьковой диаграмме выводится значение размера."
            },
            {
                "name": "ТочкаПроцент",
                "name_en": "PointPercent",
                "description": "В качестве подписи выводится представление точки плюс процент от общей суммы."
            },
            {
                "name": "ТочкаРазмер",
                "name_en": "PointSize",
                "description": "В качестве подписи выводится представление точки, дополнительно в пузырьковой диаграмме выводится значение размера."
            }
        ]
    },
    {
        "name": "МаксимумСерий",
        "name_en": "MaxSeries",
        "description": "Содержит варианты режимов ограничения количества серий в диаграмме. Используется для определения свойства",
        "values": [
            {
                "name": "НеЗадано",
                "name_en": "NotDefined",
                "description": "Отображать все серии."
            },
            {
                "name": "Ограничено",
                "name_en": "Limited",
                "description": "Отображается не более определенного количества серий. Количество серий определяется свойством МаксимумСерийКоличество объекта Диаграмма."
            },
            {
                "name": "Процент",
                "name_en": "Percent",
                "description": "Отображаются только те серии, чей максимум больше или равен заданному проценту от абсолютного. Для этого для каждой серии находится максимальное абсолютное значение и абсолютный максимум по всем сериям. Процент определяется значением свойства МаксимумСерийПроцент объекта Диаграмма."
            }
        ]
    },
    {
        "name": "ОриентацияДиаграммы",
        "name_en": "ChartOrientation",
        "description": "Содержит варианты ориентации изометрических диаграмм. Используется для определения свойства",
        "values": [
            {
                "name": "ЮгВосток",
                "name_en": "SouthEast",
                "description": "Ориентация диаграммы \"Юг - Восток\"."
            },
            {
                "name": "ЮгЗапад",
                "name_en": "SouthWest",
                "description": "Ориентация диаграммы \"Юг - Запад\"."
            }
        ]
    },
    {
        "name": "РежимПробеловДиаграммы",
        "name_en": "ChartSpaceMode",
        "description": "Содержит варианты выбора расстояния между группами серий в гистограммах, а также между значениями в изометрических диаграммах.",
        "values": [
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Не использовать пробелы."
            },
            {
                "name": "ПолнаяШирина",
                "name_en": "Full",
                "description": "Пробел в половину ширины фигуры."
            },
            {
                "name": "ПоловинаШирины",
                "name_en": "Half",
                "description": "Пробел в половину ширины фигуры."
            }
        ]
    },
    {
        "name": "ТипДиаграммы",
        "name_en": "ChartType",
        "description": "Содержит типы диаграмм. Используется для определения свойства",
        "values": [
            {
                "name": "Биржевая",
                "name_en": "Stock",
                "description": "Биржевая диаграмма строится для данных, представленных одной серией значений по четыре значения на точку. Одна точка диаграммы определяется группой из четырех значений (точек): цена открытия, максимальная, минимальная, цена закрытия. Параметры для отображения (текст и расшифровка) берутся из первых точек каждой группы (т.е. из точек 0, 4, 8 ...). Группы, имеющие меньше четырех значений, не учитываются при построении. Значения цены открытия и цены закрытия отмечаются горизонтальными линиями, интервал между максимальной и минимальной ценой отмечается вертикальной линией."
            },
            {
                "name": "БиржеваяСвеча",
                "name_en": "OpenHighLowClose",
                "description": "Биржевая \"свеча\". Отличается от биржевой диаграммы тем, что интервал между ценой открытия и ценой закрытия отмечается прямоугольником."
            },
            {
                "name": "ВогнутаяПоверхность",
                "name_en": "ConcaveSurface",
                "description": "Вогнутая поверхность, описанная треугольниками."
            },
            {
                "name": "Водопад",
                "name_en": "Waterfall",
                "description": "Содержит вариант изометрической непрерывной диаграммы, для которой серии не имеют толщины."
            },
            {
                "name": "Воронка",
                "name_en": "Funnel",
                "description": "Вид диаграммы \"Воронка\"."
            },
            {
                "name": "ВоронкаНормированная",
                "name_en": "NormalizedFunnel",
                "description": "Вид диаграммы \"Воронка нормированная\", по смыслу эквивалентен виду \"Гистограмма нормированная\".  Для одной выбранной точки с визуальным представлением в форме \"воронки\" (вместо \"столбика\"), при котором значения серий в выбранной точке нормируются и отображаются шириной сегментов."
            },
            {
                "name": "ВоронкаНормированнаяОбъемная",
                "name_en": "NormalizedFunnel3D",
                "description": "Трехмерный вариант диаграммы \"Воронка нормированная\"."
            },
            {
                "name": "ВоронкаОбъемная",
                "name_en": "Funnel3D",
                "description": "3х-мерный вариант диаграммы \"Воронка\"."
            },
            {
                "name": "ВыпуклаяПоверхность",
                "name_en": "ConvexSurface",
                "description": "Выпуклая поверхность, описанная треугольниками."
            },
            {
                "name": "Гистограмма",
                "name_en": "Column",
                "description": "Вертикальная гистограмма. Строится на основании данных, аналогичных данным диаграммы вида График."
            },
            {
                "name": "ГистограммаГоризонтальная",
                "name_en": "Bar",
                "description": "Горизонтальная гистограмма. Строится на основании данных, аналогичных данным диаграммы вида График."
            },
            {
                "name": "ГистограммаГоризонтальнаяОбъемная",
                "name_en": "Bar3D",
                "description": "Горизонтальная объемная гистограмма. Строится на основании данных, аналогичных данным диаграммы вида График."
            },
            {
                "name": "ГистограммаНормированная",
                "name_en": "NormalizedColumn",
                "description": "Нормированная гистограмма."
            },
            {
                "name": "ГистограммаНормированнаяГоризонтальная",
                "name_en": "NormalizedBar",
                "description": "Гистограмма горизонтальная нормированная."
            },
            {
                "name": "ГистограммаНормированнаяГоризонтальнаяОбъемная",
                "name_en": "NormalizedBar3D",
                "description": "Гистограмма нормированная горизонтальная объемная."
            },
            {
                "name": "ГистограммаНормированнаяОбъемная",
                "name_en": "NormalizedColumn3D",
                "description": "Гистограмма нормированная объемная."
            },
            {
                "name": "ГистограммаОбъемная",
                "name_en": "Column3D",
                "description": "Вертикальная объемная гистограмма. Строится на основании данных, аналогичных данным диаграммы вида График."
            },
            {
                "name": "ГистограммаСНакоплением",
                "name_en": "StackedColumn",
                "description": "Вертикальная гистограмма с накоплением: значения в каждой серии суммируются со значениями в предыдущих. Строится на основании данных, аналогичных данным диаграммы вида График."
            },
            {
                "name": "ГистограммаСНакоплениемГоризонтальная",
                "name_en": "StackedBar",
                "description": "Горизонтальная гистограмма с накоплением: значения в каждой серии суммируются со значениями в предыдущих. Строится на основании данных, аналогичных данным диаграммы вида График."
            },
            {
                "name": "ГистограммаСНакоплениемГоризонтальнаяОбъемная",
                "name_en": "StackedBar3D",
                "description": "Горизонтальная объемная гистограмма с накоплением: значения в каждой серии суммируются со значениями в предыдущих. Строится на основании данных, аналогичных данным диаграммы вида График."
            },
            {
                "name": "ГистограммаСНакоплениемОбъемная",
                "name_en": "StackedColumn3D",
                "description": "Вертикальная объемная гистограмма с накоплением: значения в каждой серии суммируются со значениями в предыдущих. Строится на основании данных, аналогичных данным диаграммы вида График."
            },
            {
                "name": "График",
                "name_en": "Line",
                "description": "Линейный график. Соседние значения внутри одной серии соединяются прямыми линиями, значения в точках могут быть отмечены маркерами. Строится на основании данных, представленных одной или несколькими сериями значений для нескольких точек."
            },
            {
                "name": "ГрафикПоШагам",
                "name_en": "Step",
                "description": "Линейный график ступенями. Значения внутри одной серии в соседних точках соединены между собой горизонтальными линиями. Строится на основании данных, аналогичных данным диаграммы вида График."
            },
            {
                "name": "ГрафикСНакоплением",
                "name_en": "StackedLine",
                "description": "График с накоплением."
            },
            {
                "name": "ГрафикСОбластями",
                "name_en": "Area",
                "description": "Линейный график с закрашиванием области между линией графика и линией базового значения. Разные серии перекрывают друг друга. Строится на основании данных, аналогичных данным диаграммы вида График."
            },
            {
                "name": "ГрафикСОбластямиИНакоплением",
                "name_en": "StackedArea",
                "description": "Линейный график с закрашиванием области и накоплением. Значения в каждой серии суммируются со значениями в предыдущих, поэтому области разных серий не перекрывают друг друга. Строится на основании данных, аналогичных данным диаграммы вида График."
            },
            {
                "name": "ГрафикСОбластямиНормированный",
                "name_en": "NormalizedArea",
                "description": "Нормированный график с областями."
            },
            {
                "name": "ЗатененнаяПоверхность",
                "name_en": "ShadedSurface",
                "description": "Поверхность, описанная полигонами."
            },
            {
                "name": "Измерительная",
                "name_en": "Gauge",
                "description": "Измерительная диаграмма."
            },
            {
                "name": "Изометрическая",
                "name_en": "BarGraph",
                "description": "Изометрическая прямоугольная диаграмма (\"Манхеттен\"). Значения отмечаются прямоугольными параллелепипедами разной высоты. Строится на основании данных, аналогичных данным диаграммы вида График."
            },
            {
                "name": "ИзометрическаяЛента",
                "name_en": "TapeGraph",
                "description": "Изометрическая диаграмма, значения внутри одной серии объединяются лентой. Строится на основании данных, аналогичных данным диаграммы вида График."
            },
            {
                "name": "ИзометрическаяНепрерывная",
                "name_en": "CeilGraph",
                "description": "Изометрическая непрерывная диаграмма. Значения внутри одной серии объединяются лентой, области от лент до плоскости базового значения заполняются. Строится на основании данных, аналогичных данным диаграммы вида График."
            },
            {
                "name": "ИзометрическаяПирамида",
                "name_en": "PyramidGraph",
                "description": "Изометрическая диаграмма. Значения отмечаются пирамидами разной высоты. Строится на основании данных, аналогичных данным диаграммы вида График."
            },
            {
                "name": "КаркаснаяПоверхность",
                "name_en": "WireframeSurface",
                "description": "Проволочная диаграмма."
            },
            {
                "name": "Кольцевая",
                "name_en": "Donut",
                "description": "Кольцевая диаграмма. Позволяет выводить несколько точек и задавать внутренний радиус."
            },
            {
                "name": "КольцеваяОбъемная",
                "name_en": "Donut3D",
                "description": "Кольцевая объемная диаграмма. Позволяет выводить несколько точек и задавать внутренний радиус."
            },
            {
                "name": "Круговая",
                "name_en": "Pie",
                "description": "Круговая диаграмма. Строится на основании данных, представленных набором серий значений для одной точки."
            },
            {
                "name": "КруговаяОбъемная",
                "name_en": "Pie3D",
                "description": "Круговая объемная диаграмма. Строится на основании данных, представленных набором серий значений для одной точки."
            },
            {
                "name": "Поверхность",
                "name_en": "Surface",
                "description": "Многоцветная поверхность."
            },
            {
                "name": "Пузырьковая",
                "name_en": "Bubble",
                "description": "Пузырьковая диаграмма. Строится на основании данных, аналогичных данным диаграммы вида График."
            },
            {
                "name": "РадарныйГрафик",
                "name_en": "RadarLine",
                "description": "Простой график на радарной (лепестковой) шкале."
            },
            {
                "name": "РадарныйГрафикСНакоплением",
                "name_en": "RadarStackedLine",
                "description": "График с накоплением на радарной (лепестковой) шкале."
            },
            {
                "name": "РадарныйГрафикСОбластями",
                "name_en": "RadarArea",
                "description": "График с областями на радарной (лепестковой) шкале."
            },
            {
                "name": "РадарныйГрафикСОбластямиИНакоплением",
                "name_en": "RadarStackedArea",
                "description": "График с областями и накоплением на радарной (лепестковой) шкале."
            },
            {
                "name": "РадарныйГрафикСОбластямиНормированный",
                "name_en": "RadarNormalizedArea",
                "description": "График с областями нормированный на радарной (лепестковой) шкале."
            },
            {
                "name": "Сотовая",
                "name_en": "Honeycomb",
                "description": "Сотовая поверхностная диаграмма."
            },
            {
                "name": "Точечная",
                "name_en": "Scatter",
                "description": "Точечная диаграмма. Строится на основании данных, представленных одной или несколькими сериями значений для нескольких точек."
            }
        ]
    },
    {
        "name": "ТипМаркераДиаграммы",
        "name_en": "ChartMarkerType",
        "description": "Содержит типы маркера, которым отмечаются значения в точках для диаграммы",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Маркер устанавливается автоматически:  - для серий - Чередование,  - для линий тренда - результирующий маркер из серии,  - для области уравнения - результирующий маркер из линии тренда."
            },
            {
                "name": "Квадрат",
                "name_en": "Rect",
                "description": "Квадратный маркер."
            },
            {
                "name": "Круг",
                "name_en": "Circle",
                "description": "Круглый маркер."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Нет маркера."
            },
            {
                "name": "Ромб",
                "name_en": "Rhomb",
                "description": "Ромбический маркер."
            },
            {
                "name": "Чередование",
                "name_en": "Alternation",
                "description": "Типы маркера чередуются в пределах объектов одного типа."
            }
        ]
    },
    {
        "name": "ТипЛинииДиаграммы",
        "name_en": "ChartLineType",
        "description": "Содержит варианты стилей линий, используемых при рисовании диаграмм.",
        "values": [
            {
                "name": "НетЛинии",
                "name_en": "None",
                "description": "Линия отсутствует."
            },
            {
                "name": "Пунктир",
                "name_en": "Dashed",
                "description": "Пунктирная линия."
            },
            {
                "name": "ПунктирТочка",
                "name_en": "DashDotted",
                "description": "Линия \"пунктир - точка\"."
            },
            {
                "name": "ПунктирТочкаТочка",
                "name_en": "DashDottedDotted",
                "description": "Линия \"пунктир - точка - точка\"."
            },
            {
                "name": "Сплошная",
                "name_en": "Solid",
                "description": "Сплошная линия."
            },
            {
                "name": "Точечная",
                "name_en": "Dotted",
                "description": "Точечная линия."
            }
        ]
    },
    {
        "name": "АвтоРаздвижениеСерий",
        "name_en": "AutoSeriesSeparation",
        "description": "Содержит варианты режимов автоматического раздвижения серий для круговых диаграмм.",
        "values": [
            {
                "name": "Все",
                "name_en": "All",
                "description": "Раздвигать все серии."
            },
            {
                "name": "Максимум",
                "name_en": "Maximum",
                "description": "Выдвигать максимальную серию."
            },
            {
                "name": "Минимум",
                "name_en": "Minimum",
                "description": "Выдвигать минимальную серию."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Не раздвигать серии автоматически."
            }
        ]
    },
    {
        "name": "ПоложениеПодписейКДиаграмме",
        "name_en": "ChartLabelLocation",
        "description": "Определяет положение подписей в диаграмме. Для гистограмм с накоплением и нормированных гистограмм всегда используется вариант",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Место для расположения подписи подбирается автоматически:  - для уравнения линии тренда - СвободноеМесто,  - для столбца диаграммы - КрайАвто."
            },
            {
                "name": "Край",
                "name_en": "Edge",
                "description": "Подпись располагается с краю значений."
            },
            {
                "name": "КрайАвто",
                "name_en": "EdgeAuto",
                "description": "Подписи отображаются аналогично КрайВнутри если места достаточно, в противном случае поведение аналогично Край."
            },
            {
                "name": "КрайВнутри",
                "name_en": "EdgeInside",
                "description": "Подпись располагается с краю, но внутри значений."
            },
            {
                "name": "ЛевоВерх",
                "name_en": "TopLeft",
                "description": "Подпись располагается в верхнем левом углу доступной области."
            },
            {
                "name": "ЛевоНиз",
                "name_en": "BottomLeft",
                "description": "Подпись располагается в нижнем левом углу доступной области."
            },
            {
                "name": "ПравоВерх",
                "name_en": "TopRight",
                "description": "Подпись располагается в правом верхнем углу доступной области."
            },
            {
                "name": "ПравоНиз",
                "name_en": "BottomRight",
                "description": "Подпись располагается в правом нижнем углу доступной области."
            },
            {
                "name": "СвободноеМесто",
                "name_en": "EmptySpace",
                "description": "Подпись располагается в свободном месте рядом с линией и не пересекая другие элементы диаграммы."
            },
            {
                "name": "УказываетсяЛевоИВерх",
                "name_en": "TopAndLeftSpecified",
                "description": "Расположение подписи устанавливается с помощью координат. Если объект не имеет свойств, отвечающих за координаты подписи, то поведение аналогично Центр."
            },
            {
                "name": "Центр",
                "name_en": "Center",
                "description": "Подпись располагается в центре значений."
            }
        ]
    },
    {
        "name": "ТипШкалыРадарнойДиаграммы",
        "name_en": "RadarChartScaleType",
        "description": "Определяет способ отображения линий в шкале радарных диаграмм.",
        "values": [
            {
                "name": "Окружность",
                "name_en": "Circle",
                "description": "Отображение шкалы в виде окружности."
            },
            {
                "name": "Полигон",
                "name_en": "Polygon",
                "description": "Отображение шкалы в виде полигона."
            }
        ]
    },
    {
        "name": "ОтображениеЗначенияИзмерительнойДиаграммы",
        "name_en": "GaugeChartValueRepresentation",
        "description": "Определяет способ отображения значений в измерительной диаграмме.",
        "values": [
            {
                "name": "Сектор",
                "name_en": "Sector",
                "description": "Отображение значения серии измерительной диаграммы в виде сектора."
            },
            {
                "name": "Стрелка",
                "name_en": "Needle",
                "description": "Отображение значения серии измерительной диаграммы в виде стрелки."
            }
        ]
    },
    {
        "name": "ПоложениеПодписейШкалыЗначенийИзмерительнойДиаграммы",
        "name_en": "GaugeChartValuesScaleLabelsLocation",
        "description": "Определяет положение подписей к шкале измерительной диаграммы.",
        "values": [
            {
                "name": "ВнутриШкалы",
                "name_en": "InsideScale",
                "description": "Подписи к измерительной диаграмме располагаются внутри шкалы."
            },
            {
                "name": "НаШкале",
                "name_en": "AtScale",
                "description": "Подписи к измерительной диаграмме располагаются на шкале."
            }
        ]
    },
    {
        "name": "ПалитраЦветовДиаграммы",
        "name_en": "ChartColorPalette",
        "description": "Содержит варианты палитр цветов, которые могут использоваться диаграммой при создании новых серий.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Используется значение МягкаяАдаптивная. В режиме совместимости Версия8_3_10 - Палитра32."
            },
            {
                "name": "Градиентная",
                "name_en": "Gradient",
                "description": "Градиентная палитра. Используются цвета из свойств диаграммы ЦветНачалаГрадиентнойПалитры и ЦветКонцаГрадиентнойПалитры."
            },
            {
                "name": "Желтая",
                "name_en": "Yellow",
                "description": "Градиентная палитра цветов от темно-желтого до светло-желтого."
            },
            {
                "name": "Зеленая",
                "name_en": "Green",
                "description": "Градиентная палитра цветов от темно-зеленого до светло-зеленого."
            },
            {
                "name": "Мягкая",
                "name_en": "Soft",
                "description": "Палитра с мягкими цветами."
            },
            {
                "name": "МягкаяАдаптивная",
                "name_en": "SoftAdaptive",
                "description": "Адаптивная палитра на основе мягкой палитры. Для линий используются более яркие цвета."
            },
            {
                "name": "Оранжевая",
                "name_en": "Orange",
                "description": "Градиентная палитра цветов от темно-оранжевого до светло-оранжевого."
            },
            {
                "name": "Палитра32",
                "name_en": "Palette32",
                "description": "Используется расширенная палитра из 32 цветов."
            },
            {
                "name": "Палитра8",
                "name_en": "Palette8",
                "description": "Используется стандартная палитра из 8 цветов."
            },
            {
                "name": "Пастельная",
                "name_en": "Pastel",
                "description": "Палитра из пастельных цветов."
            },
            {
                "name": "Произвольная",
                "name_en": "Custom",
                "description": "Палитра устанавливается с помощью метода диаграммы УстановитьПалитру."
            },
            {
                "name": "Серая",
                "name_en": "Gray",
                "description": "Градиентная палитра цветов от темно-серого до светло-серого."
            },
            {
                "name": "Синяя",
                "name_en": "Blue",
                "description": "Градиентная палитра цветов от темно-синего до светло-синего."
            },
            {
                "name": "Теплая",
                "name_en": "Warm",
                "description": "Палитра из теплых цветов."
            },
            {
                "name": "Холодная",
                "name_en": "Cold",
                "description": "Палитра из холодных цветов."
            },
            {
                "name": "Яркая",
                "name_en": "Bright",
                "description": "Палитра из ярких цветов."
            }
        ]
    },
    {
        "name": "ОриентацияПодписейДиаграммы",
        "name_en": "ChartLabelsOrientation",
        "description": "Содержит варианты ориентации меток диаграммы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Автоматическое определение ориентации. Выводятся горизонтально, если позволяет место, иначе вертикально."
            },
            {
                "name": "Вертикально",
                "name_en": "Vertical",
                "description": "Метки выводятся вертикально."
            },
            {
                "name": "Горизонтально",
                "name_en": "Horizontal",
                "description": "Метки выводятся горизонтально."
            },
            {
                "name": "ПроизвольныйУголНаклона",
                "name_en": "CustomAngle",
                "description": "Наклон подписей устанавливается отдельно, с помощью соответствующего свойства объекта, для которого изменяется угол наклона подписей."
            }
        ]
    },
    {
        "name": "РежимСглаживанияДиаграммы",
        "name_en": "ChartSplineMode",
        "description": "Содержит режимы использования сплайнов (\"гладких\" кривых) в диаграммах \"непрерывного\" вида для визуализации соединений между точками серий.",
        "values": [
            {
                "name": "ГладкаяКривая",
                "name_en": "SmoothCurve",
                "description": "Режим сплайна, проходящего через все точки. Строится гладкая кривая, соединяющая все точки серии."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Режим сплайнов - \"сглаживания\" отключен. Соединения между точками визуализируются на основе прямых линий."
            }
        ]
    },
    {
        "name": "РежимПолупрозрачностиДиаграммы",
        "name_en": "ChartSemitransparencyMode",
        "description": "Содержит режимы полупрозрачности диаграмм, с помощью которых выполняется управление полупрозрачностью перекрывающихся элементов диаграмм.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Автоматический выбор режима прозрачности:  - РежимПовторногоИспользованияСеансов - если возможно,  - НеИспользовать - если не возможно."
            },
            {
                "name": "АвтоматическийРасчет",
                "name_en": "AutoCalculate",
                "description": "Автоматический режим управления полупрозрачностью, определяемой значением, установленнным пользователем с поправками на характеристики цвета, Z-order области, типа диаграммы и т.п."
            },
            {
                "name": "Использовать",
                "name_en": "Use",
                "description": "Использовать \"ручной\" режим полупрозрачности, полностью определяемой значением, устанавливаемым пользователем."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Полупрозрачность не используется. Все элементы непрозрачны."
            }
        ]
    },
    {
        "name": "ТипСоединенияЗначенийПоСериямДиаграммы",
        "name_en": "ChartValuesBySeriesConnectionType",
        "description": "Содержит варианты типов соединения значений по сериям в гистограммах с накоплением.",
        "values": [
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Соединения отсутствуют."
            },
            {
                "name": "СоединениеКраев",
                "name_en": "EdgesConnection",
                "description": "Края \"столбиков\", соответствующих значениям точек одной серий, соединяются прямыми линиями."
            }
        ]
    },
    {
        "name": "АнимацияДиаграммы",
        "name_en": "ChartAnimation",
        "description": "Содержит варианты анимации диаграммы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Необходимость использования анимации при отображении диаграммы будет определена автоматически."
            },
            {
                "name": "Использовать",
                "name_en": "Use",
                "description": "Использовать анимацию при отображении диаграммы."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Не использовать анимацию при отображении диаграммы."
            }
        ]
    },
    {
        "name": "ТипАппроксимацииЛинииТрендаДиаграммы",
        "name_en": "ChartTrendlineApproximationType",
        "description": "Содержит варианты алгоритма аппроксимации линии тренда.",
        "values": [
            {
                "name": "Линейный",
                "name_en": "Linear",
                "description": "Линейная аппроксимация."
            },
            {
                "name": "Логарифмический",
                "name_en": "Logarithmic",
                "description": "Логарифмическая аппроксимация. Все значения данных по оси Х должны быть строго больше нуля, в противном случае линия тренда не будет построена."
            },
            {
                "name": "Полиномиальный",
                "name_en": "Polynomial",
                "description": "Полиномиальная аппроксимация."
            },
            {
                "name": "Степенной",
                "name_en": "Power",
                "description": "Степенная аппроксимация. Все значения данных по оси Y и по оси X должны быть строго больше нуля, в противном случае линия тренда не будет построена."
            },
            {
                "name": "Экспоненциальный",
                "name_en": "Exponential",
                "description": "Экспоненциальная аппроксимация. Все значения данных по оси Y должны быть строго больше нуля, в противном случае линия тренда не будет построена."
            }
        ]
    },
    {
        "name": "ФакторЛинииТрендаДиаграммы",
        "name_en": "ChartTrendlineFactor",
        "description": "Содержит варианты фактора линии тренда.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Фактор устанавливается автоматически в зависимости от значения всех точек диаграммы. Если значения всех точек являются датами или числами, то используется ЗначениеТочки. В противном случае используется НомерТочки."
            },
            {
                "name": "ЗначениеТочки",
                "name_en": "PointValue",
                "description": "В качестве фактора линии тренда (значения по оси ординат) используется значение точки, приведённое к типу Число. Даты переводятся в числа как количество дней (суток), прошедшее с минимальной для данной диаграммы даты. Количество дней может быть дробным. Если значение нельзя преобразовать в число, то при построении линии тренда точка игнорируется."
            },
            {
                "name": "НомерТочки",
                "name_en": "PointNumber",
                "description": "В качестве фактора линии тренда (значения по оси ординат) используется номер точки. Нумерация точек начинается с 1."
            }
        ]
    },
    {
        "name": "ИспользуемоеЗначениеТочкиБиржевойДиаграммы",
        "name_en": "StockChartUsedPointValue",
        "description": "Содержит варианты выбора значения в биржевой диаграмме для линий тренда.",
        "values": [
            {
                "name": "Закрытие",
                "name_en": "Close",
                "description": "В качестве значения в точке используется цена закрытия."
            },
            {
                "name": "Максимальное",
                "name_en": "High",
                "description": "В качестве значения в точке используется максимальная цена."
            },
            {
                "name": "Минимальное",
                "name_en": "Low",
                "description": "В качестве значения в точке используется минимальная цена."
            },
            {
                "name": "Открытие",
                "name_en": "Open",
                "description": "В качестве значения в точке используется цена открытия."
            },
            {
                "name": "СреднееОткрытияИЗакрытия",
                "name_en": "OpenCloseAverage",
                "description": "В качестве значения в точке используется среднее арифметическое цен открытия и закрытия."
            }
        ]
    },
    {
        "name": "ОтображениеВДиаграмме",
        "name_en": "ShowInChart",
        "description": "Содержит варианты режимов отображения серии при отрисовке диаграммы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Отображение серии зависит от свойства диаграммы МаксимумСерий: отображается, если режим ограничения по сериям отключен."
            },
            {
                "name": "НеОтображать",
                "name_en": "DontShow",
                "description": "Серия не отображается."
            },
            {
                "name": "Отображать",
                "name_en": "Show",
                "description": "Серия отображается независимо от значения свойства диаграммы МаксимумСерий."
            }
        ]
    },
    {
        "name": "ОтображениеВЛегендеДиаграммы",
        "name_en": "ShowInChartLegend",
        "description": "Предназначен для управления режимом отображения серии в легенде диаграммы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Если серия отображается при отрисовке диаграммы, то она отображается и в легенде, в противном случае - не отображается."
            },
            {
                "name": "НеОтображать",
                "name_en": "DontShow",
                "description": "Серия в легенде не отображается никогда."
            },
            {
                "name": "Отображать",
                "name_en": "Show",
                "description": "Серия отображается в легенде всегда."
            }
        ]
    },
    {
        "name": "ПорядокСерийВЛегендеДиаграммы",
        "name_en": "ChartSeriesOrderInLegend",
        "description": "Содержит варианты порядка расположения серий в легенде.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Порядок серий в легенде рассчитывается в зависимости от типа диаграммы:  - обратный порядок используется для типов:  - ГистограммаГоризонтальная,  - ГистограммаГоризонтальнаяОбъемная,  - ГрафикСНакоплением,  - ГрафикСОбластямиИНакоплением,  - ГрафикСОбластямиНормированный,  - ГистограммаСНакоплением,  - ГистограммаСНакоплениемОбъемная,  - ГистограммаНормированная,  - ГистограммаНормированнаяОбъемная.  - для остальных типов используется прямой порядок."
            },
            {
                "name": "Обратный",
                "name_en": "Reverse",
                "description": "Серии отображаются в обратном порядке относительно их номеров."
            },
            {
                "name": "Прямой",
                "name_en": "Direct",
                "description": "Серии отображаются в легенде в соответствии с их порядковым номером."
            }
        ]
    },
    {
        "name": "ИсточникЗначенийОсиТочекДиаграммы",
        "name_en": "ChartPointsAxisValuesSource",
        "description": "Содержит варианты источника данных, откладываемых на оси точек.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Источник значений выбирается автоматически:  - если серия значений одна, на оси точек откладываются точки,  - если серии две или больше, на оси точек откладывается серия, указанная в свойстве СерияНаОсиТочек."
            },
            {
                "name": "Серия",
                "name_en": "Series",
                "description": "Источником значений для оси точек является серия данных."
            },
            {
                "name": "Точки",
                "name_en": "Points",
                "description": "Источником значения для оси точек являются точки."
            }
        ]
    },
    {
        "name": "ИсточникЗначенияРазмераПузырькаДиаграммы",
        "name_en": "ChartBubbleSizeValueSource",
        "description": "Содержит варианты источника значений размера пузырька диаграммы.",
        "values": [
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Все пузырьки отображаются одинакового размера."
            },
            {
                "name": "ОбщаяСерия",
                "name_en": "CommonSeries",
                "description": "В качестве источника значений размера пузырьков используется выбранная серия."
            },
            {
                "name": "СледующаяСерия",
                "name_en": "NextSeries",
                "description": "В качестве источника размера используются значения следующей серии (серия, используемая для размера, не выводится на диаграмме)."
            }
        ]
    },
    {
        "name": "ВлияниеРазмераНаПузырекДиаграммы",
        "name_en": "ChartBubbleSizing",
        "description": "Содержит варианты зависимости размера пузырька от значения размера точки.",
        "values": [
            {
                "name": "УвеличениеДиаметра",
                "name_en": "IncreaseDiameter",
                "description": "Диаметр пузырька пропорционально изменяется от минимального размера до максимального."
            },
            {
                "name": "УвеличениеПлощади",
                "name_en": "IncreaseArea",
                "description": "Площадь пузырька пропорционально изменяется от минимального размера до максимального."
            },
            {
                "name": "УменьшениеДиаметра",
                "name_en": "DecreaseDiameter",
                "description": "Диаметр пузырька обратно пропорционально изменяется от минимального размера точки до максимального."
            },
            {
                "name": "УменьшениеПлощади",
                "name_en": "DecreaseArea",
                "description": "Площадь пузырька обратно пропорционально изменяется от минимального размера точки до максимального."
            }
        ]
    },
    {
        "name": "ОтображениеОтрицательныхЗначенийПузырьковойДиаграммы",
        "name_en": "BubbleChartNegativeValuesShowMode",
        "description": "Содержит варианты отображения пузырьков с отрицательными значениями размера.",
        "values": [
            {
                "name": "ИнвертированныйЦветФона",
                "name_en": "InvertedBackColor",
                "description": "Размер пузырька рассчитывается по модулю, но пузырек закрашивается инвертированным цветом."
            },
            {
                "name": "НеОтображать",
                "name_en": "DontShow",
                "description": "Пузырьки с отрицательным размером не отображаются на диаграмме."
            },
            {
                "name": "ПоМодулю",
                "name_en": "Abs",
                "description": "Отрицательные значения размера пузырька заменяются на их модуль."
            },
            {
                "name": "ПрозрачныйФон",
                "name_en": "Transparent",
                "description": "Размер пузырька рассчитывается по модулю, но пузырек не закрашивается."
            }
        ]
    },
    {
        "name": "ТипСоединенияТочекДиаграммы",
        "name_en": "ChartPointsConnectionType",
        "description": "Содержит варианты соединения точек диаграммы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Точки в диаграмме соединяются в зависимости от типа диаграммы:  - В точечной и пузырьковой - НеСоединять,  - В остальных - Соединять."
            },
            {
                "name": "НеСоединять",
                "name_en": "DontConnect",
                "description": "Точки в диаграмме не соединяются линиями."
            },
            {
                "name": "Соединять",
                "name_en": "Connect",
                "description": "Точки в диаграмме соединяются линиями, стиль которых зависит от серии."
            }
        ]
    },
    {
        "name": "СпособОпределенияОграничивающегоЗначенияДиаграммы",
        "name_en": "ChartBoundaryDetectionMethod",
        "description": "Содержит варианты расчета ограничивающего значения диаграммы.",
        "values": [
            {
                "name": "АвтоОпределение",
                "name_en": "AutoDetect",
                "description": "Ограничивающее значение рассчитывается автоматически на основе данных диаграммы."
            },
            {
                "name": "ИспользоватьЗначение",
                "name_en": "UseValue",
                "description": "Используется указанное значение."
            },
            {
                "name": "ИспользоватьЗначениеСОграничением",
                "name_en": "UseValueWithLimitations",
                "description": "Ограничивающее значение используется, если оно не сокращает диапазон данных. В противном случае в качестве ограничивающего используется максимальное или минимальное значение из данных."
            }
        ]
    },
    {
        "name": "ПорядокОтображенияТочекГоризонтальнойГистограммы",
        "name_en": "BarChartPointsOrder",
        "description": "Содержит варианты порядка вывода точек в горизонтальных гистограммах.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Если режим совместимости не установлен, используется значение СверхуВниз. В режиме совместимости Версия8_3_9 - СнизуВверх."
            },
            {
                "name": "СверхуВниз",
                "name_en": "TopToBottom",
                "description": "Первая точка отображается в верхней части поля диаграммы, следующие располагаются под ней."
            },
            {
                "name": "СнизуВверх",
                "name_en": "BottomToTop",
                "description": "Первая точка отображается в нижней части поля диаграммы, следующие располагаются над ней."
            }
        ]
    },
    {
        "name": "СпособЗаполненияТекстаЗаголовкаШкалыДиаграммы",
        "name_en": "ChartScaleTitleTextSource",
        "description": "Содержит варианты получения текста для заголовка шкалы диаграммы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Если установлен текст, то используется значение ИспользоватьТекст. Иначе, используется текст, сгенерированный автоматически."
            },
            {
                "name": "АвтоТекст",
                "name_en": "AutoText",
                "description": "Текст будет сгенерирован на основе данных диаграммы."
            },
            {
                "name": "ИспользоватьТекст",
                "name_en": "UseText",
                "description": "Используется текст, установленный пользователем."
            }
        ]
    },
    {
        "name": "ОтображениеЗаголовкаШкалыДиаграммы",
        "name_en": "ShowChartScaleTitle",
        "description": "Определяет варианты отображения заголовка шкалы диаграммы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Заголовок отображается, если есть не пустой текст, который можно вывести (установленный пользователем или сгенерированный автоматически)."
            },
            {
                "name": "НеОтображать",
                "name_en": "DontShow",
                "description": "Заголовок не отображается."
            },
            {
                "name": "Отображать",
                "name_en": "Show",
                "description": "Заголовок отображается."
            }
        ]
    },
    {
        "name": "РасположениеЗаголовкаШкалыДиаграммы",
        "name_en": "ChartScaleTitlePlacement",
        "description": "Содержит варианты расположения области заголовка шкалы диаграммы.",
        "values": [
            {
                "name": "ВВыделеннойОбласти",
                "name_en": "SpecialArea",
                "description": "Заголовок располагается в выделенной области: для горизонтальной оси - снизу, для вертикальной оси - слева."
            },
            {
                "name": "ВОбластиПостроения",
                "name_en": "PlotArea",
                "description": "Заголовок располагается в любом месте области построения."
            },
            {
                "name": "РядомСОсью",
                "name_en": "WithAxis",
                "description": "Заголовок располагается рядом с осью."
            }
        ]
    },
    {
        "name": "ОтображениеЛинийСеткиДиаграммы",
        "name_en": "ChartGridLinesShowMode",
        "description": "Содержит варианты отображения линий сетки диаграммы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Способ отображения линий определяется автоматически:  - Для шкалы значений - Отображать.  - Для шкалы точек в точечной и пузырьковой диаграммах - Отображать.  - Во всех остальных случаях - НеОтображать."
            },
            {
                "name": "НеОтображать",
                "name_en": "DontShow",
                "description": "Линии не отображаются."
            },
            {
                "name": "Отображать",
                "name_en": "Show",
                "description": "Линии отображаются."
            }
        ]
    },
    {
        "name": "ПоложениеШкалыДиаграммы",
        "name_en": "ChartScaleLocation",
        "description": "Содержит варианты положения шкалы диаграммы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Положение выбирается автоматически:  - для шкалы значений - Край,  - для шкалы точек в точечной и пузырьковой диаграммах - Край,  - во всех остальных случаях - БазовоеЗначение."
            },
            {
                "name": "БазовоеЗначение",
                "name_en": "BaseValue",
                "description": "Шкала отображается на базовом значении перпендикулярной оси (для шкалы точек - на базовом значении оси значений, для шкалы значений – на базовом значении оси точек)."
            },
            {
                "name": "Край",
                "name_en": "Edge",
                "description": "Вертикальная шкала отображается слева от диаграммы, горизонтальная - под диаграммой."
            }
        ]
    },
    {
        "name": "ПоложениеОтметокШкалыДиаграммы",
        "name_en": "ChartScaleMarkLocation",
        "description": "Содержит варианты положения отметок на шкале диаграммы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Положение отметок определяется автоматически:  - если подписи диаграммы отображаются снаружи -- Снаружи,  - если подписи диаграммы отображаются внутри -- Внутри."
            },
            {
                "name": "Внутри",
                "name_en": "Inside",
                "description": "Отметки располагаются внутри диаграммы."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Отметки делений не отображаются."
            },
            {
                "name": "Снаружи",
                "name_en": "Outside",
                "description": "Отметки шкалы располагаются снаружи диаграммы."
            },
            {
                "name": "Центр",
                "name_en": "Center",
                "description": "Отметки делений пересекают шкалу и отображаются как внутри, так и снаружи диаграммы."
            }
        ]
    },
    {
        "name": "ПоложениеПодписейШкалыДиаграммы",
        "name_en": "ChartScaleLabelLocation",
        "description": "Определяет положение подписей шкалы в диаграмме.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Подписи к диаграмме располагаются:  - для горизонтальной шкалы - снизу,  - для вертикальной шкалы - слева."
            },
            {
                "name": "Внутри",
                "name_en": "Inside",
                "description": "Подписи к диаграмме располагаются:  - для горизонтальной шкалы - сверху,  - для вертикальной шкалы - справа."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Подписи к шкале не отображаются."
            },
            {
                "name": "Снаружи",
                "name_en": "Outside",
                "description": "Подписи к диаграмме располагаются:  - для горизонтальной шкалы - снизу,  - для вертикальной шкалы - слева."
            }
        ]
    },
    {
        "name": "РасположениеЛегендыДиаграммы",
        "name_en": "ChartLegendPlacement",
        "description": "Содержит варианты расположения легенды диаграммы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Легенда отображается справа от области построения диаграммы."
            },
            {
                "name": "Верх",
                "name_en": "Top",
                "description": "Легенда располагается над областью построения диаграммы."
            },
            {
                "name": "Лево",
                "name_en": "Left",
                "description": "Легенда располагается слева от области построения диаграммы."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Легенда не отображается."
            },
            {
                "name": "Низ",
                "name_en": "Bottom",
                "description": "Легенда диаграммы располагается под областью построения диаграммы."
            },
            {
                "name": "Право",
                "name_en": "Right",
                "description": "Легенда отображается справа от области построения диаграммы."
            },
            {
                "name": "УказываетсяРасположение",
                "name_en": "UseCoordinates",
                "description": "Расположение легенды указывается с помощью свойств Лево, Верх, Низ и Право области легенды."
            }
        ]
    },
    {
        "name": "РасположениеОбластиПостроенияДиаграммы",
        "name_en": "ChartPlotAreaPlacement",
        "description": "Содержит варианты расположения области построения диаграммы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Расположение области построения рассчитывается на основе положения области легенды и области заголовка, аналогично варианту СвободноеМесто."
            },
            {
                "name": "СвободноеМесто",
                "name_en": "EmptySpace",
                "description": "Расположение области построения рассчитывается на основе положения области легенды и области заголовка."
            },
            {
                "name": "УказываетсяРасположение",
                "name_en": "UseCoordinates",
                "description": "Расположение области построения задается с помощью свойств Верх, Низ, Лево и Право области построения."
            }
        ]
    },
    {
        "name": "РасположениеОбластиЗаголовкаДиаграммы",
        "name_en": "ChartTitleAreaPlacement",
        "description": "Содержит варианты расположения области заголовка диаграммы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Расположение области заголовка зависит от положения и размеров легенды диаграммы:  - Верх - если легенда отображается над или под областью построения диаграммы, или не отображается;  - ЛевоВерх - если легенда отображается слева от области построения;  - ПравоВерх - если легенда отображается справа от области построения."
            },
            {
                "name": "Верх",
                "name_en": "Top",
                "description": "Заголовок располагается над областью построения диаграммы."
            },
            {
                "name": "ЛевоВерх",
                "name_en": "LeftTop",
                "description": "Заголовок располагается слева сверху от области построения."
            },
            {
                "name": "ЛевоНиз",
                "name_en": "LeftBottom",
                "description": "Заголовок располагается слева внизу от области построения."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Заголовок не отображается."
            },
            {
                "name": "Низ",
                "name_en": "Bottom",
                "description": "Заголовок располагается под областью построения."
            },
            {
                "name": "ПравоВерх",
                "name_en": "RightTop",
                "description": "Заголовок располагается справа сверху от области построения."
            },
            {
                "name": "ПравоНиз",
                "name_en": "RightBottom",
                "description": "Заголовок располагается справа снизу от области построения."
            },
            {
                "name": "УказываетсяРасположение",
                "name_en": "UseCoordinates",
                "description": "Расположение заголовка указывается с помощью свойств Верх, Лево, Низ и Право области заголовка."
            }
        ]
    },
    {
        "name": "ПоложениеИнформационнойЛинииДиаграммы",
        "name_en": "ChartReferenceLinePosition",
        "description": "Варианты расположения информационной линии в точках диаграммы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Расположение линии зависит от типа диаграммы:  - в гистограммах - МеждуЗначениями,  - в графиках и радарных графиках - ВЗначении."
            },
            {
                "name": "ВЗначении",
                "name_en": "OnValue",
                "description": "Информационная линия отображается в значении."
            },
            {
                "name": "МеждуЗначениями",
                "name_en": "BetweenValues",
                "description": "Информационная линия отображается между значениями."
            }
        ]
    },
    {
        "name": "ПоложениеГраницыИнформационногоИнтервалаДиаграммы",
        "name_en": "ChartReferenceBandBorderPosition",
        "description": "Содержит варианты расположения границы информационного интервала в точках диаграммы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Расположение границы интервала зависит от типа диаграммы:  - в гистограммах - МеждуЗначениями,  - в графиках и радарных графиках - ВЗначении."
            },
            {
                "name": "ВЗначении",
                "name_en": "OnValue",
                "description": "Границы интервала отображаются в значении."
            },
            {
                "name": "МеждуЗначениями",
                "name_en": "BetweenValues",
                "description": "Границы интервала отображаются между значениями."
            }
        ]
    },
    {
        "name": "ИспользованиеНечисловыхЗначенийДиаграммы",
        "name_en": "NonnumericChartValueUse",
        "description": "Содержит варианты режима использования значений диаграммы, которые не приводятся к числу.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Режим использования нечисловых значений определяется автоматически: интепретируется как КакНоль."
            },
            {
                "name": "КакНоль",
                "name_en": "AsZero",
                "description": "Значения, которые не приводятся к числу, интерпретируются как 0."
            },
            {
                "name": "Пропускать",
                "name_en": "Skip",
                "description": "Значения, которые не приводятся к числу, пропускаются при отрисовке."
            }
        ]
    },
    {
        "name": "ТипСоединенияТочекПриПропущенныхЗначенияхДиаграммы",
        "name_en": "PointsConnectionAcrossSkippedChartValuesType",
        "description": "Содержит варианты соединения точек при пропущенных значениях диаграммы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Тип соединения выбирается автоматически."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Точки, между которыми есть пропущенные значения, не соединяются."
            },
            {
                "name": "СоединениеНеПропущенных",
                "name_en": "ConnectUnskippedValues",
                "description": "Точки, между которыми есть пропущенные значения, соединяются между собой."
            },
            {
                "name": "СоединениеСБазовымЗначением",
                "name_en": "ConnectWithBaseValue",
                "description": "Точки, между которыми есть пропущенные значения, соединяются с точками с базовым значением."
            }
        ]
    },
    {
        "name": "РежимВыделенияДиаграммы",
        "name_en": "ChartSelectionMode",
        "description": "Содержит варианты режимов выделения диаграммы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Используется значение ВыделениеЗначений. В режиме совместимости Версия8_3_13 и ниже - Нет."
            },
            {
                "name": "ВыделениеЗначений",
                "name_en": "ValuesSelection",
                "description": "Позволяет выделять серии и значения диаграммы с помощью мыши."
            },
            {
                "name": "ВыделениеТочек",
                "name_en": "PointsSelection",
                "description": "Позволяет выделять точки диаграммы с помощью мыши. Данный режим доступен только для диаграмм, поддерживающих ось точек и не поддерживающих ось серий (графики, гистограммы, радарные, биржевые). В диаграммах остальных типов интепретируется как Нет."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "В диаграмме нельзя изменить выделение с помощью мыши."
            }
        ]
    },
    {
        "name": "ЗаполнениеПодсказкиЗначенийДиаграммы",
        "name_en": "ChartValuesToolTipFillType",
        "description": "Содержит варианты заполнения подсказки для значений диаграммы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Интерпретируется как ОдноЗначение."
            },
            {
                "name": "ВсеЗначенияТочки",
                "name_en": "AllPointValues",
                "description": "Всплывающая подсказка отображается для всех значений в данной точке."
            },
            {
                "name": "ОдноЗначение",
                "name_en": "SingleValue",
                "description": "Всплывающая подсказка отображается для одного значения в данной точке."
            }
        ]
    },
    {
        "name": "ОтображатьВсплывающуюИнформационнуюЛиниюДиаграммы",
        "name_en": "ShowChartPopupReferenceLine",
        "description": "Содержит варианты отображения всплывающей информационной линии диаграммы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Интерпретируется как НеОтображать."
            },
            {
                "name": "НеОтображать",
                "name_en": "DontShow",
                "description": "Всплывающая информационная линия не отображается при отображении подсказки."
            },
            {
                "name": "Отображать",
                "name_en": "Show",
                "description": "Всплывающая информационная линия отображается при отображении подсказки."
            }
        ]
    },
    {
        "name": "ОтображениеПодсказкиЗначенийДиаграммы",
        "name_en": "ChartValuesToolTipShowMode",
        "description": "Определяет набор режимов отображения всплывающей подсказки для значений диаграммы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "В графиках (обычных, с областями и радарных) и точечной диаграмме интерпретируется как ОтображатьДляБлижайшего, во всех остальных типах диаграмм - ОтображатьПриНаведении."
            },
            {
                "name": "НеОтображать",
                "name_en": "DontShow",
                "description": "Всплывающая подсказка для значений не отображается."
            },
            {
                "name": "ОтображатьДляБлижайшего",
                "name_en": "ShowForNearestValue",
                "description": "Всплывающая подсказка отображается для ближайшего значения. Подсказка располагается около значения. При перемещении курсора, подсказка перемещается с анимацией от предыдущего значения к следующему."
            },
            {
                "name": "ОтображатьПриНаведении",
                "name_en": "ShowOnHover",
                "description": "Всплывающая подсказка отображается при непосредственном наведении курсора на значение.  Во время движения курсора подсказка не показывается."
            }
        ]
    },
    {
        "name": "ТипГрафическогоПредставленияСерииДиаграммы",
        "name_en": "ChartSeriesGraphicalRepresentationType",
        "description": "Содержит варианты отображения серии в диаграмме.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Для отображения серии используется тип диаграммы."
            },
            {
                "name": "Гистограмма",
                "name_en": "Column",
                "description": "Серия отображается в виде столбика."
            },
            {
                "name": "ГистограммаОбъемная",
                "name_en": "Column3D",
                "description": "Серия отображается объемным столбиком."
            },
            {
                "name": "График",
                "name_en": "Line",
                "description": "Серия отображается линией."
            },
            {
                "name": "ГрафикПоШагам",
                "name_en": "Step",
                "description": "Серия отображается линией по шагам."
            },
            {
                "name": "ГрафикСОбластями",
                "name_en": "Area",
                "description": "Серия отображается областью от предыдущей серии до своих значений."
            }
        ]
    },
    {
        "name": "ТипНакопленияСерииДиаграммы",
        "name_en": "ChartSeriesStackType",
        "description": "Задает тип накопления серии, отличный от типа накопления диаграммы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Тип накопления серии соответствует типу диаграммы."
            },
            {
                "name": "БезНакопления",
                "name_en": "Unstacked",
                "description": "Серия откладывается от базового значения."
            },
            {
                "name": "СНакоплением",
                "name_en": "Stacked",
                "description": "Серия накапливается относительно предыдущей серии с такой же группой накопления."
            },
            {
                "name": "СНакоплениемНормированная",
                "name_en": "StackedNormalized",
                "description": "Серия накапливается в процентном соотношении с предыдущей серией с такой же группой накопления."
            }
        ]
    },
    {
        "name": "ИспользуемаяОсьЗначенийДиаграммы",
        "name_en": "UsedChartValuesAxis",
        "description": "Задает ось значений, на которой строится серия диаграммы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Ось значений зависит от типа накопления диаграммы.  Если тип накопления серии - нормированный, а тип диаграммы не нормированный или наоборот, то интерпретируется как Дополнительная. Во всех остальных случаях используется значение Основная."
            },
            {
                "name": "Дополнительная",
                "name_en": "Additional",
                "description": "Серия откладывается на дополнительной шкале."
            },
            {
                "name": "Основная",
                "name_en": "Main",
                "description": "Серия откладывается на основной шкале."
            }
        ]
    },
    {
        "name": "РежимРедактированияЗначенийДиаграммы",
        "name_en": "ChartValuesEditMode",
        "description": "Содержит варианты режима редактирования значений диаграммы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Для диаграммы используется значение НеИспользовать. Для СерияДиаграммы и ЗначениеДиаграммы - значение получается от родительского объекта."
            },
            {
                "name": "Использовать",
                "name_en": "Use",
                "description": "Значение редактируется."
            },
            {
                "name": "НеИспользовать",
                "name_en": "DontUse",
                "description": "Значение не редактируется."
            }
        ]
    },
    {
        "name": "СостояниеРедактированияЗначенияДиаграммы",
        "name_en": "ChartValueEditState",
        "description": "Содержит варианты состояния редактирования значения диаграммы.",
        "values": [
            {
                "name": "Завершено",
                "name_en": "Finished",
                "description": "Редактирование завершено."
            },
            {
                "name": "НеЗавершено",
                "name_en": "NotFinished",
                "description": "Редактирование еще не закончено."
            },
            {
                "name": "Отменено",
                "name_en": "Canceled",
                "description": "Редактирование отменено."
            }
        ]
    },
    {
        "name": "ТипЕдиницыШкалыВремени",
        "name_en": "TimeScaleUnitType",
        "description": "Содержит варианты единиц измерения шкалы времени диаграммы Ганта.",
        "values": [
            {
                "name": "Год",
                "name_en": "Year",
                "description": "Единица измерения шкалы времени \"Год\"."
            },
            {
                "name": "День",
                "name_en": "Day",
                "description": "Единица измерения шкалы времени \"День\"."
            },
            {
                "name": "Квартал",
                "name_en": "Quarter",
                "description": "Единица измерения шкалы времени \"Квартал\"."
            },
            {
                "name": "Месяц",
                "name_en": "Month",
                "description": "Единица измерения шкалы времени \"Месяц\"."
            },
            {
                "name": "Минута",
                "name_en": "Minute",
                "description": "Единица измерения шкалы времени \"Минута\"."
            },
            {
                "name": "Неделя",
                "name_en": "Week",
                "description": "Единица измерения шкалы времени \"Неделя\"."
            },
            {
                "name": "Секунда",
                "name_en": "Second",
                "description": "Единица измерения шкалы времени \"Секунда\"."
            },
            {
                "name": "Час",
                "name_en": "Hour",
                "description": "Единица измерения шкалы времени \"Час\"."
            }
        ]
    },
    {
        "name": "ПоложениеШкалыВремени",
        "name_en": "TimeScalePosition",
        "description": "Содержит варианты положения шкалы времени диаграммы Ганта.",
        "values": [
            {
                "name": "Верх",
                "name_en": "Top",
                "description": "Положение шкалы времени в верхней части области отображения."
            },
            {
                "name": "Лево",
                "name_en": "Left",
                "description": "Шкала времени расположена в левой части области отображения диаграммы."
            },
            {
                "name": "Низ",
                "name_en": "Bottom",
                "description": "Положение шкалы времени в нижней части области отображения."
            },
            {
                "name": "Право",
                "name_en": "Right",
                "description": "Шкала времени расположена в правой части области отображения диаграммы."
            }
        ]
    },
    {
        "name": "ПоддержкаМасштабаДиаграммыГанта",
        "name_en": "GanttChartScaleKeeping",
        "description": "Содержит варианты поддержки масштаба шкалы времени в видимой области диаграммы Ганта.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Масштаб автоматически вычисляется исходя из минимального элемента шкалы времени, даже если он невидим."
            },
            {
                "name": "ВсеДанные",
                "name_en": "AllData",
                "description": "Всегда показывается полный интервал в видимой области без горизонтальной прокрутки."
            },
            {
                "name": "Период",
                "name_en": "Period",
                "description": "В видимой области отображается определённый временной период."
            },
            {
                "name": "Фиксированная",
                "name_en": "Fixed",
                "description": "Задается определенный масштаб (в символах на единицу времени), который не меняется при изменении размеров окна."
            }
        ]
    },
    {
        "name": "ФорматДняШкалыВремени",
        "name_en": "TimeScaleDayFormat",
        "description": "Содержит варианты предпочтительного формата дня для элемента шкалы времени с единицей времени",
        "values": [
            {
                "name": "ДеньМесяца",
                "name_en": "MonthDay",
                "description": "Предпочтительный формат дня для элемента шкалы времени может быть описан как \"ДЛФ=ДД\". Например, дата 20.11.2004 будет представлена как \"20 ноября 2004\"."
            },
            {
                "name": "ДеньМесяцаДеньНедели",
                "name_en": "MonthDayWeekDay",
                "description": "Предпочтительный формат дня для элемента шкалы времени может быть представлен как ДеньМесяца + ДеньНедели."
            },
            {
                "name": "ДеньНедели",
                "name_en": "WeekDay",
                "description": "Предпочтительный формат дня для элемента шкалы времени может быть описан как \"ДФ=дддд\". Например, дата 20.11.2004 будет представлена как \"четверг\"."
            },
            {
                "name": "ДеньНеделиДеньМесяца",
                "name_en": "WeekDayMonthDay",
                "description": "Предпочтительный формат дня для элемента шкалы времени может быть представлен как ДеньНедели + ДеньМесяца."
            }
        ]
    },
    {
        "name": "ОтображениеИнтервалаДиаграммыГанта",
        "name_en": "GanttChartIntervalRepresentation",
        "description": "Содержит варианты видов интервалов при отображении.",
        "values": [
            {
                "name": "Градиент",
                "name_en": "Gradient",
                "description": "\"Градиентный\" вид отображения интервалов."
            },
            {
                "name": "Объемный",
                "name_en": "ThreeDimensional",
                "description": "\"Объемный\" вид отображения интервалов."
            },
            {
                "name": "Плоский",
                "name_en": "Flat",
                "description": "\"Плоский\" вид отображения интервалов."
            },
            {
                "name": "Ромб",
                "name_en": "Rhomb",
                "description": "Интервалы отображаются в стиле \"Ромб\"."
            }
        ]
    },
    {
        "name": "РастягиваниеПоВертикалиДиаграммыГанта",
        "name_en": "GanttChartVerticalStretch",
        "description": "Содержит варианты способов масштабирования строк.",
        "values": [
            {
                "name": "НеРастягивать",
                "name_en": "None",
                "description": "Запрещает масштабирование."
            },
            {
                "name": "РастягиватьСтроки",
                "name_en": "StretchRows",
                "description": "Задает масштабирование растягиванием только строк."
            },
            {
                "name": "РастягиватьСтрокиИДанные",
                "name_en": "StretchRowsAndData",
                "description": "Задает масштабирование растягиванием строк и данных."
            }
        ]
    },
    {
        "name": "ОтображениеТекстаЗначенияДиаграммыГанта",
        "name_en": "GanttChartValueTextRepresentation",
        "description": "Содержит варианты отображения текста значения диаграммы Ганта.",
        "values": [
            {
                "name": "НеОтображать",
                "name_en": "None",
                "description": "Текст значения диаграммы Ганта не отображается."
            },
            {
                "name": "Право",
                "name_en": "Right",
                "description": "Текст значения диаграммы Ганта отображается справа от интервала."
            }
        ]
    },
    {
        "name": "ТипСвязиДиаграммыГанта",
        "name_en": "GanttChartLinkType",
        "description": "Тип связи между интервалами диаграммы Ганта.",
        "values": [
            {
                "name": "КонецКонец",
                "name_en": "EndEnd",
                "description": "Связь указывается линией, выходящей из конца первого интервала в конец второго."
            },
            {
                "name": "КонецНачало",
                "name_en": "EndBegin",
                "description": "Связь указывается линией, выходящей из конца первого интервала в начало второго."
            },
            {
                "name": "НачалоКонец",
                "name_en": "BeginEnd",
                "description": "Связь указывается линией, выходящей из начала первого интервала в конец второго."
            },
            {
                "name": "НачалоНачало",
                "name_en": "BeginBegin",
                "description": "Связь указывается линией, выходящей из начала первого интервала в начало второго."
            }
        ]
    },
    {
        "name": "ОриентацияДендрограммы",
        "name_en": "DendrogramOrientation",
        "description": "Содержит варианты ориентации связей дендрограммы. Метки будут располагаться противоположно ориентации связей. Например: если для связей задана ориентация",
        "values": [
            {
                "name": "Верх",
                "name_en": "Top",
                "description": "Связи дендрограммы ориентированы вверх."
            },
            {
                "name": "Лево",
                "name_en": "Left",
                "description": "Связи дендрограммы ориентированы влево."
            },
            {
                "name": "Низ",
                "name_en": "Bottom",
                "description": "Связи дендрограммы ориентированы вниз."
            },
            {
                "name": "Право",
                "name_en": "Right",
                "description": "Связи дендрограммы ориентированы вправо."
            }
        ]
    },
    {
        "name": "ПоддержкаМасштабаДендрограммы",
        "name_en": "DendrogramScaleKeeping",
        "description": "Содержит варианты способов поддержки масштаба (количества одновременно отображаемых значений) при изменении размеров области построения.",
        "values": [
            {
                "name": "ВсеЭлементы",
                "name_en": "AllItems",
                "description": "В видимой области будут отображаться все элементы дендрограммы. Прокрутка не применяется."
            },
            {
                "name": "КоличествоЭлементов",
                "name_en": "ItemCount",
                "description": "Содержит заданное количество элементов, отображаемых в видимой области. Если элементов больше, используется прокрутка."
            },
            {
                "name": "МинимальнаяШирина",
                "name_en": "MinimumWidth",
                "description": "Содержит минимальную ширину элемента (задается в символах). Минимальная ширина определяется в зависимости от размеров шрифта. Если количество значений не позволяет их отобразить с шириной каждого не меньше заданной, то используется прокрутка."
            }
        ]
    },
    {
        "name": "ОтображениеЗначенийСводнойДиаграммы",
        "name_en": "PivotChartValuesShowMode",
        "description": "Содержит варианты способов представления иерархических измерений в сводной диаграмме.",
        "values": [
            {
                "name": "ВсеЗначения",
                "name_en": "AllValues",
                "description": "Самостоятельно отображать все значения независимо от положения в иерархии."
            },
            {
                "name": "ЗначенияПоследнегоУровня",
                "name_en": "LastLevelValues",
                "description": "Самостоятельно отображать только значения последнего раскрытого уровня."
            }
        ]
    },
    {
        "name": "ПоддержкаМасштабаСводнойДиаграммы",
        "name_en": "PivotChartScaleKeeping",
        "description": "Содержит варианты способов поддержки масштаба (количества одновременно отображаемых значений) при изменении размеров области построения.",
        "values": [
            {
                "name": "ВсеЗначения",
                "name_en": "AllValues",
                "description": "В видимой области отображаются все значения без прокрутки."
            },
            {
                "name": "КоличествоЗначений",
                "name_en": "ValuesCount",
                "description": "Содержит заданное количество значений, отображаемых в видимой области. Если значений больше, используется прокрутка."
            },
            {
                "name": "МинимальнаяШирина",
                "name_en": "MinimumWidth",
                "description": "Содержит минимальную ширину элемента (задается в символах). Минимальная ширина определяется в зависимости от размеров шрифта. Если количество значений не позволяет их отобразить с шириной каждого не меньше заданной, то используется прокрутка."
            }
        ]
    },
    {
        "name": "ТипСводнойДиаграммы",
        "name_en": "PivotChartType",
        "description": "Содержит варианты типов сводных диаграмм. Используется для определения свойства",
        "values": [
            {
                "name": "Гистограмма",
                "name_en": "Column",
                "description": "Гистограмма."
            },
            {
                "name": "ГистограммаОбъемная",
                "name_en": "Column3D",
                "description": "Гистограмма объемная."
            }
        ]
    },
    {
        "name": "ОриентацияМетокСводнойДиаграммы",
        "name_en": "PivotChartLabelsOrientation",
        "description": "Содержит варианты ориентации меток сводной диаграммы.",
        "values": [
            {
                "name": "ВерхниеУровниВертикально",
                "name_en": "TopLevelsVertical",
                "description": "Заданное количество верхних уровней меток. Уровни меток отображаются вертикально. Последний (нижний) уровень всегда отображается горизонтально. Если необходимая высота (с учетом длины меток) превышает половину высоты области построения сводной диаграммы, может автоматически переключаться на горизонтальное отображение."
            },
            {
                "name": "ВсеУровниВертикально",
                "name_en": "AllLevelsVertical",
                "description": "Все уровни меток отображаются вертикально. Если необходимая высота (с учетом длины меток) превышает половину высоты области построения сводной диаграммы, может автоматически переключаться на горизонтальное отображение."
            },
            {
                "name": "ВсеУровниГоризонтально",
                "name_en": "AllLevelsHorizontal",
                "description": "Все уровни меток отображаются горизонтально."
            }
        ]
    },
    {
        "name": "ТипЛинииГеографическойСхемы",
        "name_en": "GeographicalSchemaLineType",
        "description": "Содержит типы линий, которыми рисуются полилинейные объекты географической схемы.",
        "values": [
            {
                "name": "НетЛинии",
                "name_en": "None",
                "description": "Линия отсутствует."
            },
            {
                "name": "Пунктир",
                "name_en": "Dashed",
                "description": "Пунктирная линия."
            },
            {
                "name": "ПунктирТочка",
                "name_en": "DashDotted",
                "description": "Линия \"пунктир - точка\"."
            },
            {
                "name": "ПунктирТочкаТочка",
                "name_en": "DashDottedDotted",
                "description": "Линия \"пунктир - точка - точка\"."
            },
            {
                "name": "Сплошная",
                "name_en": "Solid",
                "description": "Сплошная линия."
            },
            {
                "name": "Точечная",
                "name_en": "Dotted",
                "description": "Точечная линия."
            }
        ]
    },
    {
        "name": "ТипОтображенияТочечногоОбъектаГеографическойСхемы",
        "name_en": "GeographicalSchemaPointObjectDrawingType",
        "description": "Содержит способ отображения точечного и многоточечного объекта географической схемы.",
        "values": [
            {
                "name": "Картинка",
                "name_en": "Picture",
                "description": "Изображение будет формироваться на основе свойства Картинка объекта."
            },
            {
                "name": "Маркер",
                "name_en": "Marker",
                "description": "Изображение будет формироваться на основе свойства Маркер объекта."
            },
            {
                "name": "Символ",
                "name_en": "Char",
                "description": "Изображение будет формироваться на основе свойства Символ объекта."
            }
        ]
    },
    {
        "name": "ТипОтображенияСерииСлояГеографическойСхемы",
        "name_en": "GeographicalSchemaLayerSeriesShowMode",
        "description": "Содержит типы отображения серии слоя географической схемы.",
        "values": [
            {
                "name": "Гистограмма",
                "name_en": "Column",
                "description": "Серия будет отображаться в виде гистограммы."
            },
            {
                "name": "Картинка",
                "name_en": "Picture",
                "description": "Серия будет отображаться в виде картинки, которая выбирается по значению серии. Значение серии должно иметь тип Картинка."
            },
            {
                "name": "Круговая",
                "name_en": "Pie",
                "description": "Серии отображаются круговой диаграммой."
            },
            {
                "name": "КруговаяСРазмером",
                "name_en": "SizedPie",
                "description": "Режим отображения серии круговой диаграммой, при которой размеры секторов в диаграмме пропорциональны значениям серий, а величина диаметра диаграммы зависит суммы значений."
            },
            {
                "name": "НеОтображать",
                "name_en": "DontShow",
                "description": "Серия не будет отображаться."
            },
            {
                "name": "ОттенокЦветаФигуры",
                "name_en": "ShapeColorHue",
                "description": "Серия будет отображаться в виде круга, имеющего цвет, оттенок которого зависит от значения серии."
            },
            {
                "name": "РазмерФигуры",
                "name_en": "ShapeSize",
                "description": "Серия будет отображаться в виде круга, диаметр которого будет рассчитываться по значению серии."
            },
            {
                "name": "Текст",
                "name_en": "Text",
                "description": "Серия будет отображаться в виде текста."
            },
            {
                "name": "ЦветФигуры",
                "name_en": "ShapeColor",
                "description": "Серия будет отображаться в виде круга, имеющего цвет, заданный значением серии."
            }
        ]
    },
    {
        "name": "ТипОрганизацииИсточникаДанныхГеографическойСхемы",
        "name_en": "GeographicalSchemaDataSourceOrganizationType",
        "description": "Определяет тип организации содержимого источника данных слоя географической схемы.",
        "values": [
            {
                "name": "ВСтроке",
                "name_en": "AtRow",
                "description": "Данные располагаются в строках Объект1, Серия1, Значение Объект1, Серия2, Значение Объект2, Серия1, Значение Объект2, Серия2, Значение и т.д."
            },
            {
                "name": "НаПересечении",
                "name_en": "AtIntersection",
                "description": "Данные располагаются на пересечении строк и колонок  Серия1,  Серия2   и т.д. Объект1, Значение, Значение Объект2, Значение, Значение Объект1, Значение, Значение Объект2, Значение, Значение и т.д."
            }
        ]
    },
    {
        "name": "ПоложениеОпорнойТочкиОтрисовки",
        "name_en": "PaintingReferencePointPosition",
        "description": "Определяет, относительно какой точки будет рисоваться картинка, если точечный объект отображается в режиме картинки.",
        "values": [
            {
                "name": "ЛевоВерх",
                "name_en": "LeftTop",
                "description": "Опорная точка будет расположена в левом верхнем углу картинки."
            },
            {
                "name": "ЛевоНиз",
                "name_en": "LeftBottom",
                "description": "Опорная точка будет расположена в левом нижнем углу картинки."
            },
            {
                "name": "ЛевоЦентр",
                "name_en": "LeftCenter",
                "description": "Опорная точка будет расположена по центру левой стороны картинки."
            },
            {
                "name": "ПравоВерх",
                "name_en": "RightTop",
                "description": "Опорная точка будет расположена в правом верхнем углу картинки."
            },
            {
                "name": "ПравоНиз",
                "name_en": "RightBottom",
                "description": "Опорная точка будет расположена в правом нижнем углу картинки."
            },
            {
                "name": "ПравоЦентр",
                "name_en": "RightCenter",
                "description": "Опорная точка будет расположена по центру правой стороны картинки."
            },
            {
                "name": "Центр",
                "name_en": "Center",
                "description": "Опорная точка будет расположена в центре картинки."
            },
            {
                "name": "ЦентрВерх",
                "name_en": "CenterTop",
                "description": "Опорная точка будет расположена по центру верхней стороны картинки."
            },
            {
                "name": "ЦентрНиз",
                "name_en": "CenterBottom",
                "description": "Опорная точка будет расположена по центру нижней стороны картинки."
            }
        ]
    },
    {
        "name": "ТипМаркераГеографическойСхемы",
        "name_en": "GeographicalSchemaMarkerType",
        "description": "Содержит вид маркера точечного или многоточечного объекта. Цвет маркера задается в свойстве Цвет объекта.",
        "values": [
            {
                "name": "БольшойКвадрат",
                "name_en": "BigSquare",
                "description": "Маркер в виде большого квадрата."
            },
            {
                "name": "БольшойКруг",
                "name_en": "BigCircle",
                "description": "Маркер в виде большого круга."
            },
            {
                "name": "БольшойТреугольник",
                "name_en": "BigTriangle",
                "description": "Маркер в виде большого треугольника."
            },
            {
                "name": "ВосклицательныйЗнак",
                "name_en": "ExclamationPoint",
                "description": "Маркер в виде восклицательного знака."
            },
            {
                "name": "Дартс",
                "name_en": "Darts",
                "description": "Маркер в виде стрелки дартс."
            },
            {
                "name": "ЗнакВопроса",
                "name_en": "QuestionMark",
                "description": "Маркер в виде знака вопроса."
            },
            {
                "name": "Кнопка",
                "name_en": "Pin",
                "description": "Маркер в виде канцелярской кнопки."
            },
            {
                "name": "МаленькийКвадрат",
                "name_en": "LittleSquare",
                "description": "Маркер в виде маленького квадрата."
            },
            {
                "name": "МаленькийКруг",
                "name_en": "LittleCircle",
                "description": "Маркер в виде маленького круга."
            },
            {
                "name": "МаленькийТреугольник",
                "name_en": "LittleTriangle",
                "description": "Маркер в виде маленького треугольника."
            },
            {
                "name": "Нет",
                "name_en": "None",
                "description": "Нет маркера."
            }
        ]
    },
    {
        "name": "РежимОтображенияГеографическойСхемы",
        "name_en": "GeographicalSchemaShowMode",
        "description": "Содержит режимы масштабирования географической схемы.",
        "values": [
            {
                "name": "ВсеДанные",
                "name_en": "AllData",
                "description": "Поле географической схемы отображает все данные на экране."
            },
            {
                "name": "ЗадаетсяМасштабом",
                "name_en": "ScaleDefined",
                "description": "Режим отображения области поля географической схемы задается масштабом."
            },
            {
                "name": "ЗаданнаяОбласть",
                "name_en": "SpecifiedArea",
                "description": "Поле географической схемы отображает на экране только указанную область."
            }
        ]
    },
    {
        "name": "Символы",
        "name_en": "Chars",
        "description": "Определяет набор специальных символов. Значения этого набора имеют тип",
        "values": [
            {
                "name": "ВК",
                "name_en": "CR",
                "description": "Возврат каретки."
            },
            {
                "name": "ВТаб",
                "name_en": "VTab",
                "description": "Символ табуляции (вертикальной)."
            },
            {
                "name": "НПП",
                "name_en": "NBSp",
                "description": "Неразрывный пробел. Пробел, по которому не должен выполняться перенос на другую строку или другое разбиение текста при форматировании."
            },
            {
                "name": "ПС",
                "name_en": "LF",
                "description": "Перевод строки."
            },
            {
                "name": "ПФ",
                "name_en": "FF",
                "description": "Перевод формы (страницы)."
            },
            {
                "name": "Таб",
                "name_en": "Tab",
                "description": "Символ табуляции (горизонтальной)."
            }
        ]
    },
    {
        "name": "ТипИмпортаСерийСлояГеографическойСхемы",
        "name_en": "GeographicalSchemaLayerSeriesImportModeType",
        "description": "Определяет тип импорта серий слоя географической схемы.",
        "values": [
            {
                "name": "ИмпортироватьВсе",
                "name_en": "ImportAll",
                "description": "При импорте шейп-файла импортируются все серии данных.  Используется по умолчанию."
            },
            {
                "name": "НеИмпортировать",
                "name_en": "DontImport",
                "description": "При импорте шейп-файла никакие связанные данные не импортируются."
            }
        ]
    },
    {
        "name": "ТипПоискаОбъектовГеографическойСхемы",
        "name_en": "GeographicalSchemaObjectFindType",
        "description": "Определяет тип поиска объектов географической схемы.",
        "values": [
            {
                "name": "Включает",
                "name_en": "Included",
                "description": "Поиск объектов, которые входят хотя бы частью в переданный объект."
            },
            {
                "name": "ВключаетПолностью",
                "name_en": "IncludedWholly",
                "description": "Поиск объектов, которые полностью входят в указанный объект."
            },
            {
                "name": "Включают",
                "name_en": "Includes",
                "description": "Поиск объектов, которые перекрывают хотя бы часть переданного объекта."
            },
            {
                "name": "ВключаютПолностью",
                "name_en": "IncludesWholly",
                "description": "Поиск объектов, которые полностью покрывают в указанный объект."
            }
        ]
    },
    {
        "name": "ТипОтображенияШкалыЭлементаЛегендыГеографическойСхемы",
        "name_en": "GeographicalSchemaLegendItemShowScaleType",
        "description": "Определяет тип отображения шкалы элемент легенды географической схемы.",
        "values": [
            {
                "name": "НеОтображать",
                "name_en": "DontShow",
                "description": "Не показывать шкалу для элемента легенды."
            },
            {
                "name": "ОтображатьПоЗначениям",
                "name_en": "ShowByValues",
                "description": "Показывать шкалу для элемента легенды. Шкала рисуется по максимальному, минимальному и среднему значению серии."
            }
        ]
    },
    {
        "name": "РежимОтображенияЗначенийСерии",
        "name_en": "SeriesValuesDrawingMode",
        "description": "Содержит варианты режимов отображения значений в гистограммах.",
        "values": [
            {
                "name": "ОтображатьКакДолю",
                "name_en": "ShowAsPart",
                "description": "Значения в гистограмме отображаются как доли."
            },
            {
                "name": "ОтображатьКакЗначение",
                "name_en": "ShowAsValue",
                "description": "Значения в гистограмме отображаются как значения."
            }
        ]
    },
    {
        "name": "ТипПроекцииГеографическойСхемы",
        "name_en": "GeographicalSchemaProjection",
        "description": "Содержит варианты проекций для отображения географической схемы.",
        "values": [
            {
                "name": "АзимутальнаяПроекцияАитофа",
                "name_en": "AzimuthalAitoffProjection"
            },
            {
                "name": "АзимутальнаяПроекцияВагнера7",
                "name_en": "AzimuthalWagner7Projection"
            },
            {
                "name": "АзимутальнаяПроекцияВинкеляТрипеля",
                "name_en": "AzimuthalWinkelTripelProjection"
            },
            {
                "name": "АзимутальнаяПроекцияРавныхПлощадейЛамберта",
                "name_en": "AzimuthalLambertEqualAreaProjection"
            },
            {
                "name": "АзимутальнаяПроекцияХамера",
                "name_en": "AzimuthalHammerProjection"
            },
            {
                "name": "АзимутальнаяРавноудаленнаяПроекция",
                "name_en": "AzimuthalEquidistantProjection"
            },
            {
                "name": "КоническаяПроекцияРавныхПлощадейЛамберта",
                "name_en": "ConicLambertEqualAreaProjection"
            },
            {
                "name": "ПрочаяОвальнаяПроекцияОртелиуса",
                "name_en": "MiscellaneousOrteliusOvalProjection"
            },
            {
                "name": "ПрочаяПроекцияВанДерГринтена1",
                "name_en": "MiscellaneousVanDerGrinten1Projection"
            },
            {
                "name": "ПрочаяПроекцияВанДерГринтена2",
                "name_en": "MiscellaneousVanDerGrinten2Projection"
            },
            {
                "name": "ПрочаяПроекцияВанДерГринтена3",
                "name_en": "MiscellaneousVanDerGrinten3Projection"
            },
            {
                "name": "ПрочаяСотоваяШаровая1Проекция",
                "name_en": "MiscellaneousApianGlobular1Projection"
            },
            {
                "name": "ПрочаяШароваяПроекцияБекона",
                "name_en": "MiscellaneousBaconGlobularProjection"
            },
            {
                "name": "ПрочаяШароваяПроекцияНиколоси",
                "name_en": "MiscellaneousNicolosiGlobularProjection"
            },
            {
                "name": "ПрочаяЭпициклоидальнаяПроекцияАвгуста",
                "name_en": "MiscellaneousAugustEpicycloidalProjection"
            },
            {
                "name": "ПсевдоцилиндрическаяНормальнаяПроекцияБоггса",
                "name_en": "PseudoCylindricalBoggsEumorphicProjection"
            },
            {
                "name": "ПсевдоцилиндрическаяПлоскоПолярнаяПараболическаяПроекцияМакБрайдаТомаса",
                "name_en": "PseudoCylindricalMcBrydeThomasFlatPolarParabolicProjection"
            },
            {
                "name": "ПсевдоцилиндрическаяПлоскоПолярнаяПроекцияЧетвертогоПорядкаМакБрайдаТомаса",
                "name_en": "PseudoCylindricalMcBrydeThomasFlatPolarQuarticProjection"
            },
            {
                "name": "ПсевдоцилиндрическаяПлоскоПолярнаяСинусоидальнаяПроекцияМакБрайдаТомаса",
                "name_en": "PseudoCylindricalMcBrydeThomasFlatPolarSinusoidalProjection"
            },
            {
                "name": "ПсевдоцилиндрическаяПроекцияВинкеля1",
                "name_en": "PseudoCylindricalWinkel1Projection"
            },
            {
                "name": "ПсевдоцилиндрическаяПроекцияЛоксимутала",
                "name_en": "PseudoCylindricalLoximutalProjection"
            },
            {
                "name": "ПсевдоцилиндрическаяПроекцияМолвейда",
                "name_en": "PseudoCylindricalMollweideProjection"
            },
            {
                "name": "ПсевдоцилиндрическаяПроекцияНесимметричныхРавныхОбластейХатано",
                "name_en": "PseudoCylindricalHatanoAsymetricalEqualAreaProjection"
            },
            {
                "name": "ПсевдоцилиндрическаяПроекцияПутнинаP2",
                "name_en": "PseudoCylindricalPutninP2Projection"
            },
            {
                "name": "ПсевдоцилиндрическаяПроекцияПутнинаP5",
                "name_en": "PseudoCylindricalPutninP5Projection"
            },
            {
                "name": "ПсевдоцилиндрическаяПроекцияРобинсона",
                "name_en": "PseudoCylindricalRobinsonProjection"
            },
            {
                "name": "ПсевдоцилиндрическаяПроекцияЭкерта1",
                "name_en": "PseudoCylindricalEckert1Projection"
            },
            {
                "name": "ПсевдоцилиндрическаяПроекцияЭкерта2",
                "name_en": "PseudoCylindricalEckert2Projection"
            },
            {
                "name": "ПсевдоцилиндрическаяПроекцияЭкерта3",
                "name_en": "PseudoCylindricalEckert3Projection"
            },
            {
                "name": "ПсевдоцилиндрическаяПроекцияЭкерта4",
                "name_en": "PseudoCylindricalEckert4Projection"
            },
            {
                "name": "ПсевдоцилиндрическаяПроекцияЭкерта5",
                "name_en": "PseudoCylindricalEckert5Projection"
            },
            {
                "name": "ПсевдоцилиндрическаяПроекцияЭкерта6",
                "name_en": "PseudoCylindricalEckert6Projection"
            },
            {
                "name": "ПсевдоцилиндрическаяСинусоидальнаяПроекция",
                "name_en": "PseudoCylindricalSinusoidalProjection"
            },
            {
                "name": "ЦилиндрическаяПроекцияМиллера",
                "name_en": "CylindricalMillerProjection"
            },
            {
                "name": "ЦилиндрическаяПроекцияРавныхОбластейЛамберта",
                "name_en": "CylindricalLambertEqualAreaProjection"
            },
            {
                "name": "ЦилиндрическаяРавноудаленнаяПроекция",
                "name_en": "CylindricalEquidistantProjection"
            },
            {
                "name": "ЦилиндрическаяСтереографическаяПроекцияГалла",
                "name_en": "CylindricalGallStereographicProjection"
            }
        ]
    },
    {
        "name": "ПоложениеИтоговСтрокСводнойТаблицы",
        "name_en": "PivotTableRowTotalPosition",
        "description": "Содержит варианты положения итоговых строк в строках сводной таблицы.",
        "values": [
            {
                "name": "Верх",
                "name_en": "Top",
                "description": "Итоги в строках отображаются перед детальными строками."
            },
            {
                "name": "Низ",
                "name_en": "Bottom",
                "description": "Итоги в строках отображаются после детальных строк."
            }
        ]
    },
    {
        "name": "ПоложениеИтоговКолонокСводнойТаблицы",
        "name_en": "PivotTableColumnTotalPosition",
        "description": "Содержит варианты положения итоговых колонок в колонках сводной таблицы.",
        "values": [
            {
                "name": "Лево",
                "name_en": "Left",
                "description": "Итоги в колонках отображаются слева от детальных колонок."
            },
            {
                "name": "Право",
                "name_en": "Right",
                "description": "Итоги в колонках отображаются справа от детальных колонок."
            }
        ]
    },
    {
        "name": "ТипОтображенияЛинийСводнойТаблицы",
        "name_en": "PivotTableLinesShowType",
        "description": "Перечисление, содержащее возможные типы вывода линий сводной таблицы.",
        "values": [
            {
                "name": "Авто",
                "name_en": "Auto",
                "description": "Необходимость вывода линий определяется автоматически. Линии будут выводиться для группировок, в которые вложены другие группировки."
            },
            {
                "name": "Всегда",
                "name_en": "Always",
                "description": "Линии выводятся всегда."
            }
        ]
    }]

const symbols: TypeDefinition[] = []
GlobalScope.registerGlobalSymbols(definition.map(d => {
    const t = new PredefinedType(d.name_en, d.values.map(v => {
        return {
            name: v.name,
            kind: SymbolType.property, type: 'unknown'
        }
    }))
    symbols.push(t)
    return {
        name: d.name,
        kind: SymbolType.enum,
        type: d.name_en
    }
}))

GlobalScope.registerTypes(symbols)
