var App = App || {};

App.main_modules = {
	// Core modules
	'cs': 'cs',
	'coffee-script': 'coffee-script',
	'constants': 'modules/constants',
	'interceptor': 'core/interceptor',
	'loader': 'core/loader',
	'logger': 'core/logging/server_logger',
	'logger_store': 'core/logging/logger_store',
	'module': 'core/module',
	'auth': 'core/auth',
	'base_model': 'core/base_model',
	'base_collection': 'core/base_collection',
	'layout': 'core/layout',
	'scrollable_widget': 'core/scrollable_widget',
	'widget': 'core/widget',
	'modal_widget': 'core/modal_widget',
	'widget_starter': 'core/widget_starter',
	'channels_utils': 'core/channels_utils',
	'datasource': 'core/datasource',
	'pubsub': 'core/pubsub',
	'router': 'core/router',
	'controller': 'core/controller',
	'utils': 'core/utils',
	'utils/urls': 'core/utils/urls',
	'utils/time': 'core/utils/time',
	'fixtures': 'core/fixtures-loader',
	'loading_animation': 'core/loading_animation',
	'modal_window': 'core/modal_window',
	'application_controller': 'core/application_controller',
	'context_processors': 'core/context_processors',

	// Core collections
	'collection/raw_data': 'core/raw_data',

	// Core widgets
	'widget/base_form': 'core/widgets/base_form',
	'widget/delete_form': 'core/widgets/delete_form',
	'widget/update_form': 'core/widgets/update_form',
	'widget/item_count': 'core/widgets/item_count',
	'widget/order_by': 'core/widgets/order_by',
	'widget/url': 'core/widgets/url',
	'widget/mediator_widget': 'core/widgets/mediator_widget',
	'widget/translate_text': 'core/widgets/translate_text',
	'widget/notifications': 'modules/base/widgets/notifications',
	'widget/form': 'core/widgets/form',
	'widget/wizard': 'core/widgets/wizard',
	'widget/autocomplete': 'modules/base/widgets/autocomplete',
	'widget/list': 'core/widgets/list'
};

if (typeof module != 'undefined') {
	module.exports.core_modules = App.main_modules;
}
