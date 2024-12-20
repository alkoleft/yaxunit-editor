import { SymbolType } from "../../scope/Scope"
import GlobalScope from "../../scope/globalScope"

const definition = [
    {
        "name": "WSСсылки",
        "name_en": "WSReferences",
        "description": "Содержит менеджер ссылок на внешние Web-сервисы."
    },
    {
        "name": "АгентКлиентскогоПриложения",
        "name_en": "ClientApplicationAgent",
        "description": "Используется для доступа к функциям работы с агентом клиентского приложения."
    },
    {
        "name": "БезопасноеХранилище",
        "name_en": "SecureStorage",
        "description": "Используется для доступа к безопасному хранилищу."
    },
    {
        "name": "БиблиотекаКартинок",
        "name_en": "PictureLib",
        "description": "Используется для доступа к библиотеке картинок."
    },
    {
        "name": "БиблиотекаМакетовОформленияКомпоновкиДанных",
        "name_en": "DataCompositionAppearanceTemplateLib",
        "description": "Библиотека макетов оформления компоновки данных. Доступны следующие предопределенные макеты оформления: Основной(Main), Яркий(Gaudy), Море(Sea), Арктика(Arctic), Зеленый(Green), Античный(Antique)."
    },
    {
        "name": "БиблиотекаСтилей",
        "name_en": "StyleLib",
        "description": "Используется для доступа к определенным в конфигурации стилям."
    },
    {
        "name": "БизнесПроцессы",
        "name_en": "BusinessProcesses",
        "description": "Используется для доступа к определенным в конфигурации бизнес-процессам."
    },
    {
        "name": "БлокировкаАутентификации",
        "name_en": "AuthenticationLock",
        "description": "Предоставляет доступ к управлению блокировками аутентификации."
    },
    {
        "name": "ВнешниеИсточникиДанных",
        "name_en": "ExternalDataSources",
        "description": "Содержит объект для управления внешними источниками данных."
    },
    {
        "name": "ВнешниеОбработки",
        "name_en": "ExternalDataProcessors",
        "description": "Используется для доступа к внешним обработкам."
    },
    {
        "name": "ВнешниеОтчеты",
        "name_en": "ExternalReports",
        "description": "Используется для доступа к внешним отчетам."
    },
    {
        "name": "ВстроенныеПокупки",
        "name_en": "InAppPurchases",
        "description": "Предоставляет доступ к средствам работы со встроенными покупками."
    },
    {
        "name": "ГлавныйИнтерфейс",
        "name_en": "MainInterface",
        "description": "Используется для доступа к определенным в конфигурации пользовательским интерфейсам."
    },
    {
        "name": "ГлавныйСтиль",
        "name_en": "MainStyle",
        "description": "Управляет стилем всего приложения, аналогично тому, как это происходит при установке стиля приложения в режиме Конфигуратор.  Может быть установлено в одно из значений коллекции стилей глобального контекста или в значение стиля по умолчанию (стиль \"Авто\").  В обычном режиме доступно для записи до открытия главного окна приложения, для чтения доступно всегда. В управляемом режиме доступно для записи в обработчике УстановкаПараметровСеанса, для чтения доступно всегда."
    },
    {
        "name": "ГлобальныйПоиск",
        "name_en": "GlobalSearch",
        "description": "Используется для управления и использования глобального поиска."
    },
    {
        "name": "Документы",
        "name_en": "Documents",
        "description": "Используется для доступа к определенным в конфигурации документам."
    },
    {
        "name": "ДополнительнаяПроверкаПользователя",
        "name_en": "AdditionalUserVerification",
        "description": "Используется для доступа к функционалу дополнительной проверки пользователя."
    },
    {
        "name": "ДоставляемыеУведомления",
        "name_en": "DeliverableNotifications",
        "description": "Используется для доступа к менеджеру доставляемых уведомлений."
    },
    {
        "name": "ЖурналыДокументов",
        "name_en": "DocumentJournals",
        "description": "Используется для доступа к определенным в конфигурации журналам документов."
    },
    {
        "name": "Задачи",
        "name_en": "Tasks",
        "description": "Используется для доступа к определенным в конфигурации задачам."
    },
    {
        "name": "ИнформацияОбИнтернетСоединении",
        "name_en": "InternetConnectionInformation",
        "description": "Предоставляет доступ к информации об интернет-соединении."
    },
    {
        "name": "ИспользованиеРабочейДаты",
        "name_en": "WorkingDateUse",
        "description": "Определяет режим использования рабочей даты."
    },
    {
        "name": "ИсторияДанных",
        "name_en": "DataHistory",
        "description": "Используется для доступа к функциям работы с историей данных."
    },
    {
        "name": "ИсторияРаботыПользователя",
        "name_en": "UserWorkHistory",
        "description": "Используется для управления историей работы пользователя. Для использования свойства требуется, чтобы для пользователя было доступно право \"СохранениеДанныхПользователя\"."
    },
    {
        "name": "КлиентскоеПриложение",
        "name_en": "ClientApplication",
        "description": "Предоставляет доступ к клиентским настройкам приложения."
    },
    {
        "name": "Константы",
        "name_en": "Constants",
        "description": "Используется для доступа к определенным в конфигурации константам."
    },
    {
        "name": "КопииБазыДанных",
        "name_en": "DatabaseCopies",
        "description": "Используется для доступа к копиям базы данных."
    },
    {
        "name": "КритерииОтбора",
        "name_en": "FilterCriteria",
        "description": "Используется для доступа к определенным в конфигурации критериям отбора."
    },
    {
        "name": "Метаданные",
        "name_en": "Metadata",
        "description": "Используется для доступа к структуре метаданных конфигурации."
    },
    {
        "name": "ОбработкаОшибок",
        "name_en": "ErrorProcessing",
        "description": "Используется для настройки обработки ошибок."
    },
    {
        "name": "Обработки",
        "name_en": "DataProcessors",
        "description": "Используется для доступа к определенным в конфигурации обработкам."
    },
    {
        "name": "ОкноВнешнегоСайта",
        "name_en": "ExternalSiteWindow",
        "description": "Используется для доступа к функциям окна внешнего сайта, когда веб-клиент интегрирован в него."
    },
    {
        "name": "ОсновнойСервер",
        "name_en": "MainServer",
        "description": "Используется для доступа мобильного клиента с автономного сервера к основному серверу."
    },
    {
        "name": "ОтображениеРекламы",
        "name_en": "AdRepresentation",
        "description": "Предоставляет доступ к средствам отображения рекламы в мобильном приложении."
    },
    {
        "name": "ОтправкаДоставляемыхУведомлений",
        "name_en": "DeliverableNotificationSend",
        "description": "Используется для доступа к менеджеру отправки уведомлений."
    },
    {
        "name": "Отчеты",
        "name_en": "Reports",
        "description": "Используется для доступа к определенным в конфигурации отчетам."
    },
    {
        "name": "ПанельЗадачОС",
        "name_en": "OSTaskbar",
        "description": "Используется для управления кнопкой программы на панели задач. Функционал работает в ОС Windows 7 и выше, а также в Ubuntu Unity. Не влияет на поведение в других операционных системах."
    },
    {
        "name": "ПараметрЗапуска",
        "name_en": "LaunchParameter",
        "description": "Используется для доступа к параметру запуска, передаваемому через ключ командной строки /C."
    },
    {
        "name": "ПараметрыСеанса",
        "name_en": "SessionParameters",
        "description": "Используется для доступа к параметрам сеанса."
    },
    {
        "name": "Перечисления",
        "name_en": "Enums",
        "description": "Используется для доступа к определенным в конфигурации перечислениям."
    },
    {
        "name": "ПланыВидовРасчета",
        "name_en": "ChartsOfCalculationTypes",
        "description": "Используется для доступа к менеджеру всех планов видов расчета."
    },
    {
        "name": "ПланыВидовХарактеристик",
        "name_en": "ChartsOfCharacteristicTypes",
        "description": "Используется для доступа к планам видов характеристик."
    },
    {
        "name": "ПланыОбмена",
        "name_en": "ExchangePlans",
        "description": "Используется для доступа к планам обмена."
    },
    {
        "name": "ПланыСчетов",
        "name_en": "ChartsOfAccounts",
        "description": "Используется для доступа к планам счетов."
    },
    {
        "name": "ПолнотекстовыйПоиск",
        "name_en": "FullTextSearch",
        "description": "Используется для управления и использования полнотекстового поиска."
    },
    {
        "name": "ПользователиИнформационнойБазы",
        "name_en": "InfoBaseUsers",
        "description": "Используется для управления списком пользователей информационной базы."
    },
    {
        "name": "Последовательности",
        "name_en": "Sequences",
        "description": "Используется для доступа к определенным в конфигурации последовательностям."
    },
    {
        "name": "ПроверкаВстроенныхПокупок",
        "name_en": "InAppPurchasesValidation",
        "description": "Предоставляет доступ к средствам проверки квитанций встроенных покупок."
    },
    {
        "name": "РабочаяДата",
        "name_en": "WorkingDate",
        "description": "Содержит рабочую дату, используемую в текущем сеансе работы с конфигурацией. Доступно для записи в случае, если свойство ИспользованиеРабочейДаты имеет значение Назначать."
    },
    {
        "name": "РасширенияКонфигурации",
        "name_en": "ConfigurationExtensions",
        "description": "Предоставляет доступ к управлению расширениями конфигурации."
    },
    {
        "name": "РегистрыБухгалтерии",
        "name_en": "AccountingRegisters",
        "description": "Используется для доступа к регистрам бухгалтерии."
    },
    {
        "name": "РегистрыНакопления",
        "name_en": "AccumulationRegisters",
        "description": "Используется для доступа к определенным в конфигурации регистрам накопления."
    },
    {
        "name": "РегистрыРасчета",
        "name_en": "CalculationRegisters",
        "description": "Используется для доступа к менеджеру всех регистров расчета."
    },
    {
        "name": "РегистрыСведений",
        "name_en": "InformationRegisters",
        "description": "Используется для доступа к определенным в конфигурации регистрам сведений."
    },
    {
        "name": "РегламентныеЗадания",
        "name_en": "ScheduledJobs",
        "description": "Используется для доступа к регламентным заданиям."
    },
    {
        "name": "СервисыИнтеграции",
        "name_en": "IntegrationServices",
        "description": "Предоставляет доступ к сервисам интеграции, описанным в конфигурации."
    },
    {
        "name": "СериализаторXDTO",
        "name_en": "XDTOSerializer",
        "description": "Сериализатор XDTO, соответствующий глобальной фабрике XDTO."
    },
    {
        "name": "СистемаАналитики",
        "name_en": "AnalyticsSystem",
        "description": "Предоставляет доступ к функциям системы аналитики."
    },
    {
        "name": "СистемаВзаимодействия",
        "name_en": "CollaborationSystem",
        "description": "Предоставляет доступ к функциям системы взаимодействия."
    },
    {
        "name": "Справочники",
        "name_en": "Catalogs",
        "description": "Используется для доступа к определенным в конфигурации справочникам."
    },
    {
        "name": "СредстваГеопозиционирования",
        "name_en": "LocationTools",
        "description": "Используется для доступа к средствам геопозиционирования мобильной платформы."
    },
    {
        "name": "СредстваКриптографии",
        "name_en": "CryptoTools",
        "description": "Свойство предоставляет доступ к менеджеру средств криптографии."
    },
    {
        "name": "СредстваМультимедиа",
        "name_en": "MultimediaTools",
        "description": "Используется для доступа к определенным в конфигурации средствам мультимедиа мобильной платформы."
    },
    {
        "name": "СредстваОтображенияРекламы",
        "name_en": "AdvertisingPresentationTools",
        "description": "Предоставляет доступ к средствам отображения рекламы на мобильной платформе."
    },
    {
        "name": "СредстваПочты",
        "name_en": "MailTools",
        "description": "Предоставляет доступ к средствам почты мобильной платформы."
    },
    {
        "name": "СредстваТелефонии",
        "name_en": "TelephonyTools",
        "description": "Предоставляет доступ к средствам телефонии мобильной платформы."
    },
    {
        "name": "СредстваУстройства",
        "name_en": "DeviceTools",
        "description": "Предоставляет доступ к средствам устройства."
    },
    {
        "name": "СтатистикаИспользованияПриложения",
        "name_en": "ApplicationUsageStatistics",
        "description": "Используется для управления механизмом статистики использования приложения"
    },
    {
        "name": "ФабрикаXDTO",
        "name_en": "XDTOFactory",
        "description": "Фабрика XDTO, содержащая все пакеты XDTO, имеющиеся в конфигурации, а также предопределенные пакеты (например, пакет типов XML схемы).",
        "ref": "classes.ФабрикаXDTO"
    },
    {
        "name": "ФайловыеПотоки",
        "name_en": "FileStreams",
        "description": "Предоставляет доступ к менеджеру файловых потоков."
    },
    {
        "name": "ФоновыеЗадания",
        "name_en": "BackgroundJobs",
        "description": "Используется для доступа к фоновым заданиям."
    },
    {
        "name": "ХранилищаНастроек",
        "name_en": "SettingsStorages",
        "description": "Предназначено для доступа к хранилищам настроек, которые созданы в конфигурации."
    },
    {
        "name": "ХранилищеВариантовОтчетов",
        "name_en": "ReportsVariantsStorage",
        "description": "Содержит объект, с помощью которого осуществляется чтение, изменение, добавление и удаление настроек вариантов отчета.  Если в свойстве конфигурации \"ХранилищеВариантовОтчетов\" не указано хранилище, то содержит объект СтандартноеХранилищеНастроекМенеджер, предназначенный для чтения, изменения, добавления и удаления настроек вариантов отчетов. Если в свойстве конфигурации \"ХранилищеВариантовОтчетов\" указано хранилище, созданное в конфигурации, то содержит объект ХранилищеНастроекМенеджер..  Для чтения, изменения, добавления и удаления настроек следует в параметрах методов объектов СтандартноеХранилищеНастроекМенеджер и ХранилищеНастроекМенеджер. использовать следующие значения:  - Ключ объекта – указывается полное имя отчета. Например: \"Отчет.Продажи\".  - Ключ настройки – указывается текстовый идентификатор варианта. Например: \"ПродажиПоРегионам\". Тип сохраняемого значения – НастройкиКомпоновкиДанных."
    },
    {
        "name": "ХранилищеНастроекДанныхФорм",
        "name_en": "FormDataSettingsStorage",
        "description": "Содержит объект, с помощью которого осуществляется чтение, изменение, добавление и удаление настроек данных форм.  Если в свойстве конфигурации \"ХранилищеНастроекДанныхФорм\" не указано хранилище, то содержит объект СтандартноеХранилищеНастроекМенеджер, предназначенный для чтения, изменения, добавления и удаления настроек данных форм. Если в свойстве конфигурации \"ХранилищеНастроекДанныхФорм\" указано хранилище, созданное в конфигурации, то содержит объект ХранилищеНастроекМенеджер.."
    },
    {
        "name": "ХранилищеОбщихНастроек",
        "name_en": "CommonSettingsStorage",
        "description": "Содержит объект, с помощью которого осуществляется чтение, изменение, добавление и удаление общих настроек.  Если в свойстве конфигурации \"ХранилищеОбщихНастроек\" не указано хранилище, то содержит объект СтандартноеХранилищеНастроекМенеджер, предназначенный для чтения, изменения, добавления и удаления вариантов отчетов. Если в свойстве конфигурации \"ХранилищеОбщихНастроек\" указано хранилище, созданное в конфигурации, то содержит объект ХранилищеНастроекМенеджер.."
    },
    {
        "name": "ХранилищеПользовательскихНастроекДинамическихСписков",
        "name_en": "DynamicListsUserSettingsStorage",
        "description": "Содержит объект, с помощью которого осуществляется чтение, изменение, добавление и удаление настроек динамических списков.  Если в свойстве конфигурации \"ХранилищеПользовательскихНастроекДинамическихСписков\" не указано хранилище, то содержит объект СтандартноеХранилищеНастроекМенеджер, предназначенный для чтения, изменения, добавления и удаления настроек динамических списков. Если в свойстве конфигурации \"ХранилищеПользовательскихНастроекДинамическихСписков\" указано хранилище, созданное в конфигурации, то содержит объект ХранилищеНастроекМенеджер.."
    },
    {
        "name": "ХранилищеПользовательскихНастроекОтчетов",
        "name_en": "ReportsUserSettingsStorage",
        "description": "Содержит объект, с помощью которого осуществляется чтение, изменение, добавление и удаление настроек отчетов.  Если в свойстве конфигурации \"ХранилищеПользовательскихНастроекОтчетов\" не указано хранилище, то содержит объект СтандартноеХранилищеНастроекМенеджер, предназначенный для чтения, изменения, добавления и удаления настроек вариантов отчетов. Если в свойстве конфигурации \"ХранилищеПользовательскихНастроекОтчетов\" указано хранилище, созданное в конфигурации, то содержит объект ХранилищеНастроекМенеджер.."
    },
    {
        "name": "ХранилищеСистемныхНастроек",
        "name_en": "SystemSettingsStorage",
        "description": "Содержит объект менеджера стандартного хранилища настроек, предназначенный для доступа к системным настройкам."
    },
    {
        "name": "ШаблоныНастроекВторогоФактораАутентификации",
        "name_en": "SecondAuthenticationFactorSettingsTemplates",
        "description": "Используется для доступа к шаблонам настроек второго фактора аутентификации."
    }
]

GlobalScope.registerGlobalSymbols(definition.map(d => {
    return {
        name: d.name,
        kind: SymbolType.property,
        type: d.name_en
    }
}))