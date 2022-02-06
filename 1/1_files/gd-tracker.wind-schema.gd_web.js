;(function () {
  window.GDT_WIND_SCHEMA = [
    {
      id: 1,
      n: 'page_visit',
      d: [
        { fn: 'sort', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'candidate_id', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'category_id', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'color_hex', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'id', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'platform', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'queryStr', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'ratios', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'scene', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'scene_id', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'styles', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'tag_id', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'themes', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'type', tp: 'string', dt: 'page_params', rq: 0 }
      ],
      iid: 64
    },
    {
      id: 2,
      n: 'login',
      d: [{ fn: 'login_channel_type', tp: 'string', dt: 'detail', rq: 0 }],
      iid: 65
    },
    {
      id: 3,
      n: 'regist',
      d: [
        { fn: 'regist_channel_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'regist_cust_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'telephone', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 66
    },
    {
      id: 5,
      n: 'write',
      d: [
        { fn: 'platform_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_classify', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_nature', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_scen', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_suit_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 1 }
      ],
      iid: 68
    },
    {
      id: 7,
      n: 'user_profile',
      d: [
        { fn: 'first_regist_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'first_visit_channel', tp: 'string', dt: 'detail', rq: 1 }
      ],
      iid: 70
    },
    {
      id: 31,
      n: 'edit_template',
      d: [
        { fn: 'edit_type', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'platform_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_classify', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_nature', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_scen', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_suit_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 93
    },
    {
      id: 32,
      n: 'expose',
      d: [
        { fn: 'category_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'filter_terms', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'platform_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'scene_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'search_terms', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'tag_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_classify', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_location', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_nature', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_scen', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_suit_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'themes', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'id', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'page_num', tp: 'string', dt: 'page_params', rq: 0 }
      ],
      iid: 95
    },
    {
      id: 33,
      n: 'click',
      d: [
        { fn: 'category_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'filter_terms', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'platform_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'scene_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'search_terms', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'tag_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_classify', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_location', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_nature', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_scen', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_suit_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'themes', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'id', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'page_num', tp: 'string', dt: 'page_params', rq: 0 }
      ],
      iid: 96
    },
    {
      id: 34,
      n: 'edit_template',
      d: [
        { fn: 'picture_size', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'picture_upload_time', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'source_from', tp: 'integer', dt: 'detail', rq: 0 }
      ],
      iid: 97
    },
    {
      id: 36,
      n: 'matting_complete',
      d: [
        { fn: 'auto_clip', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'eraser_num', tp: 'integer', dt: 'detail', rq: 1 },
        { fn: 'remove_num', tp: 'integer', dt: 'detail', rq: 1 },
        { fn: 'reserve_num', tp: 'integer', dt: 'detail', rq: 1 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 99
    },
    {
      id: 37,
      n: 'search',
      d: [
        { fn: 'is_hand_search', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'search_result_number', tp: 'integer', dt: 'detail', rq: 1 },
        { fn: 'search_terms', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'type', tp: 'integer', dt: 'detail', rq: 0 }
      ],
      iid: 100
    },
    {
      id: 38,
      n: 'click',
      d: [
        { fn: 'click_source', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'direction', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'special_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'topic_location', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'topic_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'scene', tp: 'string', dt: 'page_params', rq: 0 }
      ],
      iid: 101
    },
    {
      id: 39,
      n: 'expose',
      d: [
        { fn: 'special_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'topic_location', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'topic_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'scene', tp: 'string', dt: 'page_params', rq: 0 }
      ],
      iid: 102
    },
    {
      id: 40,
      n: 'write_typeface',
      d: [
        { fn: 'change_typeface', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'end_typeface', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'start_typeface', tp: 'array/string', dt: 'detail', rq: 0 }
      ],
      iid: 137
    },
    {
      id: 42,
      n: 'page_visit',
      d: [
        { fn: 'from', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'id', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'image', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'page_params', rq: 0 }
      ],
      iid: 148
    },
    {
      id: 44,
      n: 'wap_edit_template',
      d: [
        { fn: 'edit_type', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'platform_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_classify', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_nature', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_scen', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_suit_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 1 }
      ],
      iid: 150
    },
    {
      id: 45,
      n: 'wap_regist',
      d: [
        { fn: 'regist_channel_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'telephone', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 151
    },
    {
      id: 46,
      n: 'wap_write',
      d: [
        { fn: 'platform_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_classify', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_nature', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_scen', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_suit_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 1 }
      ],
      iid: 152
    },
    {
      id: 47,
      n: 'add_hot_saved',
      d: [
        { fn: 'platform_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_classify', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_nature', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_scen', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_suit_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 1 }
      ],
      iid: 153
    },
    {
      id: 48,
      n: 'put_in_tbtm',
      d: [
        { fn: 'platform_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_classify', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_nature', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_scen', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_suit_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 1 }
      ],
      iid: 154
    },
    {
      id: 49,
      n: 'put_in_public',
      d: [
        { fn: 'platform_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_classify', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_nature', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_scen', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_suit_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 1 }
      ],
      iid: 155
    },
    {
      id: 51,
      n: 'exopse_nps',
      d: [{ fn: 'expose_object_type', tp: 'integer', dt: 'detail', rq: 1 }],
      iid: 157
    },
    {
      id: 52,
      n: 'banner_expose',
      d: [
        { fn: 'banner_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'banner_location', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'scene', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 172
    },
    {
      id: 53,
      n: 'banner_click',
      d: [
        { fn: 'banner_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'banner_location', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'scene', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'type', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 173
    },
    {
      id: 55,
      n: 'action_btn_click',
      d: [
        { fn: 'action_btn_name', tp: 'integer', dt: 'detail', rq: 1 },
        { fn: 'action_name', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'click_status', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 175
    },
    {
      id: 56,
      n: 'preference_tc_expose',
      d: [{ fn: 'step', tp: 'integer', dt: 'detail', rq: 0 }],
      iid: 195
    },
    {
      id: 57,
      n: 'preference_tc_click',
      d: [
        { fn: 'content', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'step', tp: 'integer', dt: 'detail', rq: 0 }
      ],
      iid: 196
    },
    {
      id: 58,
      n: 'preference_tc_finished_click',
      d: [
        { fn: 'second_page_detail', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'second_page_total', tp: 'integer', dt: 'detail', rq: 0 }
      ],
      iid: 197
    },
    {
      id: 59,
      n: 'click',
      d: [{ fn: 'title', tp: 'string', dt: 'detail', rq: 1 }],
      iid: 198
    },
    {
      id: 60,
      n: 'expose',
      d: [{ fn: 'title', tp: 'string', dt: 'detail', rq: 1 }],
      iid: 199
    },
    {
      id: 61,
      n: 'auto_poster_generate',
      d: [
        { fn: 'filter_terms', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'generate_result_number', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'input_image_number', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'is_matting', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'is_tailor', tp: 'integer', dt: 'detail', rq: 0 }
      ],
      iid: 200
    },
    {
      id: 62,
      n: 'action_tc_expose',
      d: [
        { fn: 'action_name', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'tc_status', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'tc_type', tp: 'integer', dt: 'detail', rq: 0 }
      ],
      iid: 201
    },
    {
      id: 64,
      n: 'click',
      d: [{ fn: 'name', tp: 'string', dt: 'detail', rq: 0 }],
      iid: 204
    },
    {
      id: 65,
      n: 'click',
      d: [
        { fn: 'first_tab', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'second_tab', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'third_tab', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 205
    },
    {
      id: 66,
      n: 'click',
      d: [
        { fn: 'day', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'tab_name', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 216
    },
    {
      id: 73,
      n: 'material_expand',
      d: [
        { fn: 'material_template_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_category_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_scene_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'integer', dt: 'detail', rq: 0 }
      ],
      iid: 234
    },
    {
      id: 74,
      n: 'material_template_category_expand',
      d: [
        { fn: 'template_category_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_platform_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_scene_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'integer', dt: 'detail', rq: 0 }
      ],
      iid: 235
    },
    {
      id: 75,
      n: 'material_template_category_change',
      d: [
        { fn: 'material_category_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_category_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_platform_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_scene_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'type', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 236
    },
    {
      id: 76,
      n: 'material_template_dialog_expose',
      d: [
        { fn: 'material_template_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_category_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_platform_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_scene_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'type', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 237
    },
    {
      id: 77,
      n: 'material_template_dialog_click',
      d: [
        { fn: 'click_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_template_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_category_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_platform_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_scene_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'type', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 238
    },
    {
      id: 78,
      n: 'material_template_search',
      d: [
        { fn: 'material_category_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'query', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_category_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_platform_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_scene_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'type', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 239
    },
    {
      id: 79,
      n: 'material_template_search_history_clear',
      d: [
        { fn: 'template_category_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_platform_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_scene_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'integer', dt: 'detail', rq: 0 }
      ],
      iid: 240
    },
    {
      id: 70,
      n: 'material_template_click',
      d: [
        { fn: 'click_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'material_category_id', tp: 'number', dt: 'detail', rq: 1 },
        { fn: 'material_template_id', tp: 'integer', dt: 'detail', rq: 1 },
        { fn: 'template_category_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_platform_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_scene_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 241
    },
    {
      id: 71,
      n: 'material_template_switch',
      d: [
        { fn: 'template_category_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_platform_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_scene_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 1 }
      ],
      iid: 242
    },
    {
      id: 72,
      n: 'material_template_detail_click',
      d: [
        { fn: 'click_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'material_category_id', tp: 'integer', dt: 'detail', rq: 1 },
        { fn: 'material_template_id', tp: 'integer', dt: 'detail', rq: 1 },
        { fn: 'template_category_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_platform_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_scene_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 1 }
      ],
      iid: 243
    },
    {
      id: 80,
      n: 'click',
      d: [{ fn: 'name', tp: 'string', dt: 'detail', rq: 0 }],
      iid: 252
    },
    {
      id: 82,
      n: 'click',
      d: [{ fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 }],
      iid: 254
    },
    {
      id: 83,
      n: 'click',
      d: [{ fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 }],
      iid: 255
    },
    {
      id: 84,
      n: 'printing_pay_success',
      d: [
        { fn: 'order_no', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 256
    },
    {
      id: 86,
      n: 'editor_template_loaded',
      d: [
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'load_elapsed_time', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_category_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_platform_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_scene_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 261
    },
    {
      id: 87,
      n: 'editor_export_completed',
      d: [
        { fn: 'atlas', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'auto_clip', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'batch_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'download_approach', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'export_elapsed_time', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'export_next', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'export_target_auth', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'export_target_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'has_three_text', tp: 'boolean', dt: 'detail', rq: 0 },
        { fn: 'has_user_materials', tp: 'boolean', dt: 'detail', rq: 0 },
        { fn: 'is_client_export', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'matting_ai_use_tool', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'matting_background', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'matting_complete_use_tool', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'matting_crop_size', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'matting_crop_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'num', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_category_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_platform_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_scene_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'mode', tp: 'string', dt: 'page_params', rq: 0 }
      ],
      iid: 262
    },
    {
      id: 88,
      n: 'editor_init',
      d: [
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'init_elapsed_time', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_category_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_platform_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_scene_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 268
    },
    {
      id: 89,
      n: 'editor_template_changed',
      d: [
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_category_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_platform_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_scene_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 269
    },
    {
      id: 90,
      n: 'editor_export_start',
      d: [
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'edit_elapsed_time', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'export_next', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'export_target_auth', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'export_target_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'is_client_export', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_category_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_platform_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_scene_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 270
    },
    {
      id: 91,
      n: 'video_compose_complete',
      d: [
        { fn: 'compose_elapsed_time', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_category_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_platform_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_scene_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 1 }
      ],
      iid: 271
    },
    {
      id: 92,
      n: 'user_export_start',
      d: [
        { fn: 'template_category_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_platform_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_scene_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'video_click_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 1 }
      ],
      iid: 272
    },
    {
      id: 93,
      n: 'user_template_download',
      d: [
        { fn: 'download_approach', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_category_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_platform_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_scene_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 1 }
      ],
      iid: 273
    },
    {
      id: 94,
      n: 'mg_pc2wap_transform_click',
      d: [{ fn: 'url', tp: 'string', dt: 'detail', rq: 1 }],
      iid: 283
    },
    {
      id: 95,
      n: 'mg_pc2wap_transform_error',
      d: [
        { fn: 'type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'url', tp: 'string', dt: 'detail', rq: 1 }
      ],
      iid: 284
    },
    {
      id: 96,
      n: 'mg_carousel_code_btn',
      d: [{ fn: 'type', tp: 'string', dt: 'detail', rq: 0 }],
      iid: 285
    },
    {
      id: 97,
      n: 'mg_hot_zone_go_old',
      d: [{ fn: 'type', tp: 'string', dt: 'detail', rq: 1 }],
      iid: 286
    },
    {
      id: 99,
      n: 'mg_hot_zone_pc_code',
      d: [{ fn: 'shopType', tp: 'string', dt: 'detail', rq: 1 }],
      iid: 288
    },
    {
      id: 101,
      n: 'editor_mg_code_copy',
      d: [{ fn: 'platform', tp: 'string', dt: 'detail', rq: 1 }],
      iid: 291
    },
    {
      id: 107,
      n: 'editor_template_switch',
      d: [
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_category_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_platform_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_scene_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 305
    },
    {
      id: 108,
      n: 'editor_export_error',
      d: [
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'export_elapsed_time', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'export_next', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'export_target_auth', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'export_target_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'is_client_export', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_category_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_platform_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_scene_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 308
    },
    {
      id: 109,
      n: 'editor_exit',
      d: [
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'atlas', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'editor_elapsed_time', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'is_exported', tp: 'boolean', dt: 'detail', rq: 0 },
        { fn: 'template_category_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_platform_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_scene_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 309
    },
    {
      id: 112,
      n: 'tfboys_click',
      d: [{ fn: 'location', tp: 'string', dt: 'detail', rq: 1 }],
      iid: 334
    },
    {
      id: 113,
      n: 'wap_expose',
      d: [
        { fn: 'category_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'platform_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'scene_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'search_terms', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'tag_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_classify', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_location', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_nature', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_scen', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_suit_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'themes', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 345
    },
    {
      id: 115,
      n: 'wap_click_save',
      d: [
        { fn: 'from', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'source_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 1 }
      ],
      iid: 347
    },
    {
      id: 116,
      n: 'wap_longpress_save',
      d: [
        { fn: 'from', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'source_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 1 }
      ],
      iid: 349
    },
    {
      id: 117,
      n: 'wap_share',
      d: [{ fn: 'type', tp: 'string', dt: 'detail', rq: 0 }],
      iid: 351
    },
    {
      id: 102,
      n: 'material_category_expand',
      d: [
        { fn: 'material_category_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_category_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_platform_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_scene_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 352
    },
    {
      id: 103,
      n: 'material_theme_expand',
      d: [
        { fn: 'material_category_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_theme_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_category_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_platform_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_scene_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 353
    },
    {
      id: 104,
      n: 'material_click',
      d: [
        { fn: 'material_category_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_theme_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_category_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_platform_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_scene_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 354
    },
    {
      id: 105,
      n: 'material_record_when_templet_export',
      d: [
        { fn: 'export_next', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'from_user', tp: 'boolean', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'material_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_category_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_platform_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_scene_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 355
    },
    {
      id: 106,
      n: 'material_record_when_templet_import',
      d: [
        { fn: 'from_user', tp: 'boolean', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'material_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_category_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_group_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_platform_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_scene_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 356
    },
    {
      id: 110,
      n: 'ad_click',
      d: [
        { fn: 'ad_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'ad_location', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 360
    },
    {
      id: 111,
      n: 'ad_expose',
      d: [
        { fn: 'ad_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'ad_location', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 361
    },
    {
      id: 121,
      n: 'editor_export_cancel',
      d: [
        { fn: 'edit_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'export_target_auth', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'export_target_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 363
    },
    {
      id: 125,
      n: 'abtest_track',
      d: [{ fn: 'abtest_expr', tp: 'array/string', dt: 'detail', rq: 0 }],
      iid: 377
    },
    {
      id: 126,
      n: 'click',
      d: [
        { fn: 'name', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'order', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'type', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 393
    },
    {
      id: 127,
      n: 'expose',
      d: [
        { fn: 'name', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'order', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'type', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 394
    },
    {
      id: 134,
      n: 'click',
      d: [
        { fn: 'name', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'type', tp: 'string', dt: 'detail', rq: 1 }
      ],
      iid: 403
    },
    {
      id: 135,
      n: 'click',
      d: [
        { fn: 'location', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'num', tp: 'integer', dt: 'detail', rq: 0 }
      ],
      iid: 410
    },
    {
      id: 137,
      n: 'click',
      d: [{ fn: 'direction', tp: 'string', dt: 'detail', rq: 0 }],
      iid: 412
    },
    {
      id: 138,
      n: 'click',
      d: [{ fn: 'type', tp: 'string', dt: 'detail', rq: 0 }],
      iid: 413
    },
    {
      id: 139,
      n: 'click',
      d: [{ fn: 'num', tp: 'integer', dt: 'detail', rq: 0 }],
      iid: 414
    },
    {
      id: 140,
      n: 'cutout_completed',
      d: [
        { fn: 'atlas', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'num', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'time', tp: 'integer', dt: 'detail', rq: 0 }
      ],
      iid: 415
    },
    {
      id: 142,
      n: 'click',
      d: [{ fn: 'type', tp: 'string', dt: 'detail', rq: 0 }],
      iid: 464
    },
    {
      id: 143,
      n: 'topic_nav_click',
      d: [
        { fn: 'nav_index', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'nav_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 470
    },
    {
      id: 144,
      n: 'topic_pagination_click',
      d: [
        { fn: 'module_page', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'module_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 471
    },
    {
      id: 145,
      n: 'topic_footer_expose',
      d: [{ fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 }],
      iid: 472
    },
    {
      id: 146,
      n: 'topic_footer_click',
      d: [
        { fn: 'click_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 1 }
      ],
      iid: 473
    },
    {
      id: 147,
      n: 'topic_recommend_click',
      d: [
        { fn: 'click_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'page', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 474
    },
    {
      id: 118,
      n: 'text_style_click',
      d: [
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 475
    },
    {
      id: 119,
      n: 'text_style_color_expose',
      d: [
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 476
    },
    {
      id: 120,
      n: 'text_style_param_change',
      d: [
        { fn: 'detail', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'param_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 477
    },
    {
      id: 129,
      n: 'user_pictiure_login_click',
      d: [
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 478
    },
    {
      id: 130,
      n: 'user_picture_remove',
      d: [
        { fn: 'is_multiple', tp: 'boolean', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 479
    },
    {
      id: 131,
      n: 'user_picture_click',
      d: [
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 480
    },
    {
      id: 132,
      n: 'user_picture_out_of_limit_expose',
      d: [
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 481
    },
    {
      id: 133,
      n: 'user_picture_go_to_remove',
      d: [
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 482
    },
    {
      id: 128,
      n: 'user_picture_upload',
      d: [
        { fn: 'is_multiple', tp: 'boolean', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 483
    },
    {
      id: 149,
      n: 'activity_receive_btn_click',
      d: [{ fn: 'btn_type', tp: 'number', dt: 'detail', rq: 0 }],
      iid: 528
    },
    {
      id: 150,
      n: 'activity_receive_btn_expose',
      d: [{ fn: 'btn_type', tp: 'number', dt: 'detail', rq: 0 }],
      iid: 529
    },
    {
      id: 151,
      n: 'activity_template_click',
      d: [{ fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 }],
      iid: 530
    },
    {
      id: 160,
      n: 'material_close',
      d: [
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 1 }
      ],
      iid: 538
    },
    {
      id: 161,
      n: 'material_page_click',
      d: [
        { fn: 'click_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 539
    },
    {
      id: 162,
      n: 'click',
      d: [{ fn: 'location', tp: 'string', dt: 'detail', rq: 0 }],
      iid: 543
    },
    {
      id: 163,
      n: 'click',
      d: [{ fn: 'type', tp: 'string', dt: 'detail', rq: 0 }],
      iid: 544
    },
    {
      id: 164,
      n: 'repair_completed',
      d: [{ fn: 'atlas', tp: 'array/string', dt: 'detail', rq: 0 }],
      iid: 545
    },
    {
      id: 168,
      n: 'odyssey_share',
      d: [{ fn: 'id', tp: 'string', dt: 'detail', rq: 0 }],
      iid: 699
    },
    {
      id: 165,
      n: 'editor_element_select',
      d: [
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 702
    },
    {
      id: 166,
      n: 'panel_tab_click',
      d: [
        { fn: 'element_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'tab', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 703
    },
    {
      id: 167,
      n: 'image_filter_apply',
      d: [
        { fn: 'filter_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'strong', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 704
    },
    {
      id: 171,
      n: 'editor_nav_click',
      d: [
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 724
    },
    {
      id: 172,
      n: 'editor_image_upload',
      d: [
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 725
    },
    {
      id: 173,
      n: 'editor_element_add',
      d: [
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'element_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'element_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 726
    },
    {
      id: 174,
      n: 'editor_table_add',
      d: [
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'table_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 727
    },
    {
      id: 175,
      n: 'editor_layout_contextmenu_trigger',
      d: [
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 728
    },
    {
      id: 176,
      n: 'editor_layout_contextmenu_item_click',
      d: [
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'menu_item', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 729
    },
    {
      id: 177,
      n: 'editor_layout_add',
      d: [
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 730
    },
    {
      id: 178,
      n: 'editor_psd_import',
      d: [
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 731
    },
    {
      id: 179,
      n: 'editor_multi_style_change',
      d: [
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 732
    },
    {
      id: 180,
      n: 'editor_work_copy',
      d: [
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 733
    },
    {
      id: 170,
      n: 'measure_service',
      d: [
        { fn: 'category', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'type', tp: 'string', dt: 'detail', rq: 1 }
      ],
      iid: 734
    },
    {
      id: 2202,
      n: 'pay_vip_personal_pull_down_click',
      d: [{ fn: 'type', tp: 'string', dt: 'detail', rq: 0 }],
      iid: 736
    },
    {
      id: 2203,
      n: 'pay_vip_index_bottom_click',
      d: [{ fn: 'type', tp: 'string', dt: 'detail', rq: 0 }],
      iid: 737
    },
    {
      id: 2205,
      n: 'pay_vip_power_click',
      d: [{ fn: 'type', tp: 'string', dt: 'detail', rq: 0 }],
      iid: 739
    },
    {
      id: 2206,
      n: 'vip_buy_dialog_expose',
      d: [{ fn: 'type', tp: 'string', dt: 'detail', rq: 0 }],
      iid: 740
    },
    {
      id: 2207,
      n: 'vip_buy_dialog_order',
      d: [
        { fn: 'duration', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'order_no', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'type', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 741
    },
    {
      id: 2208,
      n: 'vip_buy_dialog_pay_completed',
      d: [
        { fn: 'duration', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'order_no', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'type', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 743
    },
    {
      id: 2101,
      n: 'editor_pay_vip_button_click',
      d: [
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'is_renew', tp: 'boolean', dt: 'detail', rq: 0 },
        { fn: 'name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'next', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'long', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'long', dt: 'detail', rq: 0 }
      ],
      iid: 744
    },
    {
      id: 2102,
      n: 'editor_vip_buy_dialog_expose',
      d: [
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 745
    },
    {
      id: 2103,
      n: 'editor_vip_buy_dialog_order',
      d: [
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'duration', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'order_no', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 746
    },
    {
      id: 2104,
      n: 'editor_vip_buy_dialog_pay_completed',
      d: [
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'duration', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'order_no', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 747
    },
    {
      id: 2301,
      n: 'template_expose',
      d: [
        { fn: 'module_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'module_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'search_terms', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_location', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'design_cid', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'id', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'industry_cid', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'scene', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'tag_id', tp: 'string', dt: 'page_params', rq: 0 }
      ],
      iid: 766
    },
    {
      id: 2302,
      n: 'template_click',
      d: [
        { fn: 'module_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'module_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'search_terms', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_location', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'channel_cid', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'design_cid', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'id', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'industry_cid', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'scene', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'tag_id', tp: 'string', dt: 'page_params', rq: 0 }
      ],
      iid: 767
    },
    {
      id: 2901,
      n: 'page_visit',
      d: [
        { fn: 'tab', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'channel_cid', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'colors', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'design_cid', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'filter_id', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'id', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'industry_cid', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'querystring', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'scene', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'sort', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'styles', tp: 'string', dt: 'page_params', rq: 0 }
      ],
      iid: 768
    },
    {
      id: 2903,
      n: 'action_click',
      d: [
        { fn: 'action_name', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'object_click', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 775
    },
    {
      id: 2904,
      n: 'action_tc_expose',
      d: [{ fn: 'action_name', tp: 'string', dt: 'detail', rq: 1 }],
      iid: 776
    },
    {
      id: 2906,
      n: 'chart_type_click',
      d: [
        { fn: 'chart_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 801
    },
    {
      id: 2907,
      n: 'expose',
      d: [
        { fn: 'banner_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'banner_location', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'recommend_filiter', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 807
    },
    {
      id: 2908,
      n: 'click',
      d: [
        { fn: 'banner_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'banner_location', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'recommend_filiter', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 808
    },
    {
      id: 2909,
      n: 'click',
      d: [{ fn: 'button_name', tp: 'string', dt: 'detail', rq: 0 }],
      iid: 809
    },
    {
      id: 2910,
      n: 'search',
      d: [
        { fn: 'filter_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'search_result_number', tp: 'integer', dt: 'detail', rq: 1 },
        { fn: 'type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'word', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'scene', tp: 'string', dt: 'page_params', rq: 0 }
      ],
      iid: 810
    },
    {
      id: 2210,
      n: 'matting_buy_dialog_order',
      d: [
        { fn: 'enter_source', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'order_no', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'price', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'spu_code', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'spu_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'title', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 817
    },
    {
      id: 2211,
      n: 'matting_buy_dialog_pay_completed',
      d: [
        { fn: 'enter_source', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'order_no', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'price', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'spu_code', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'spu_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'title', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 818
    },
    {
      id: 2913,
      n: 'editor_preview',
      d: [
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 894
    },
    {
      id: 2914,
      n: 'editor_publish',
      d: [
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'action_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 895
    },
    {
      id: 2915,
      n: 'editor_endpoint_dropdown_item_clicked',
      d: [
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'option_name', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 896
    },
    {
      id: 2303,
      n: 'team_template_expose',
      d: [{ fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 }],
      iid: 916
    },
    {
      id: 2304,
      n: 'team_template_click',
      d: [{ fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 }],
      iid: 917
    },
    {
      id: 2305,
      n: 'team_material_expose',
      d: [{ fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 }],
      iid: 918
    },
    {
      id: 2306,
      n: 'delete_template',
      d: [
        { fn: 'id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'type', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 920
    },
    {
      id: 2106,
      n: 'editor_ppt_play',
      d: [
        { fn: 'action_name', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'action_value', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 923
    },
    {
      id: 2917,
      n: 'home_shortcut_enter',
      d: [
        { fn: 'scene', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'name', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 925
    },
    {
      id: 2921,
      n: 'set_team_templet',
      d: [
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'folder_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'team_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 940
    },
    {
      id: 2922,
      n: 'material_team_switch',
      d: [
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'team_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 941
    },
    {
      id: 2107,
      n: 'photo_search',
      d: [
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'search_result_number', tp: 'integer', dt: 'detail', rq: 1 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'word', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 946
    },
    {
      id: 2108,
      n: 'photo_expose',
      d: [
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'photo_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'photo_location', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'search_terms', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 948
    },
    {
      id: 2109,
      n: 'photo_click',
      d: [
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'photo_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'photo_location', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'search_terms', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 950
    },
    {
      id: 2308,
      n: 'team_material_click',
      d: [{ fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 }],
      iid: 951
    },
    {
      id: 2926,
      n: 'editor_publish_after_preview',
      d: [
        { fn: 'mode', tp: 'string', dt: 'page_params', rq: 0 },
        { fn: 'action_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 952
    },
    {
      id: 2918,
      n: 'editor_font_family_change',
      d: [
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'element_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'font_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'is_business', tp: 'boolean', dt: 'detail', rq: 1 },
        { fn: 'is_vip', tp: 'boolean', dt: 'detail', rq: 1 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 1 }
      ],
      iid: 960
    },
    {
      id: 2919,
      n: 'record_font_when_templet_export',
      d: [
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'font_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'is_business', tp: 'boolean', dt: 'detail', rq: 1 },
        { fn: 'is_vip', tp: 'boolean', dt: 'detail', rq: 1 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 961
    },
    {
      id: 2920,
      n: 'editor_font_family_expose',
      d: [
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'element_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 962
    },
    {
      id: 2927,
      n: 'matting_tool_click',
      d: [
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'type', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 976
    },
    {
      id: 2929,
      n: 'chart_table_click',
      d: [{ fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 }],
      iid: 992
    },
    {
      id: 2110,
      n: 'chart_table_save',
      d: [
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 995
    },
    {
      id: 2930,
      n: 'order_abtest',
      d: [
        { fn: 'type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'amount', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'app_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'channel_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'currency_code', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'invoice_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'is_virtual', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'order_no', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'original_amount', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'status', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'status_code', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1007
    },
    {
      id: 2931,
      n: 'order_abtest_new',
      d: [
        { fn: 'amount', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'app_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'channel_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'currency_code', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'invoice_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'is_virtual', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'order_no', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'original_amount', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'status', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'status_code', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'type', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1009
    },
    {
      id: 2932,
      n: 'order_abtest_3',
      d: [
        { fn: 'amount', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'app_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'channel_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'currency_code', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'invoice_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'is_virtual', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'order_no', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'original_amount', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'status', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'status_code', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'type', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1011
    },
    {
      id: 2923,
      n: 'material_team_templet_click',
      d: [
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'team_folder_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'team_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'team_templet_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1016
    },
    {
      id: 2924,
      n: 'material_team_material_click',
      d: [
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'team_folder_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'team_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'team_material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1017
    },
    {
      id: 2933,
      n: 'home_page_banner_click',
      d: [{ fn: 'banner_id', tp: 'string', dt: 'detail', rq: 0 }],
      iid: 1019
    },
    {
      id: 2111,
      n: 'editor_top_click',
      d: [
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'level', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1020
    },
    {
      id: 2113,
      n: 'editor_module_inner_button_click',
      d: [
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1023
    },
    {
      id: 2114,
      n: 'editor_autoclip',
      d: [
        { fn: 'is_autoclip', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'change_clip', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'is_autoclip_user', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'is_expected', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'offset_value', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'offset_x', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'offset_y', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'reset_times', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'scale_value', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1033
    },
    {
      id: 2115,
      n: 'editor_header_nav_click',
      d: [
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'action_name', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1049
    },
    {
      id: 2116,
      n: 'editor_file_menu_use',
      d: [
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'button_name', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1050
    },
    {
      id: 2117,
      n: 'editor_left_lib_use',
      d: [
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'lib_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1051
    },
    {
      id: 2118,
      n: 'editor_component_use',
      d: [
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'component_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1052
    },
    {
      id: 2119,
      n: 'matting_tailor_size',
      d: [{ fn: 'size', tp: 'string', dt: 'detail', rq: 1 }],
      iid: 1083
    },
    {
      id: 2120,
      n: 'video_cover_entrance_click',
      d: [
        { fn: 'channel_category_id', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'channel_category_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'design_category_id', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'design_category_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'industry_category_id', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'industry_category_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1094
    },
    {
      id: 2121,
      n: 'video_cover_entrance_upload_click',
      d: [
        { fn: 'channel_category_id', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'channel_category_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'design_category_id', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'design_category_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'industry_category_id', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'industry_category_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1095
    },
    {
      id: 2122,
      n: 'video_cover_confirm_click',
      d: [
        { fn: 'channel_category_id', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'channel_category_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'cover_click_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'design_category_id', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'design_category_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'industry_category_id', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'industry_category_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1096
    },
    {
      id: 2123,
      n: 'video_remind_expose',
      d: [
        { fn: 'channel_category_id', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'channel_category_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'design_category_id', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'design_category_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'industry_category_id', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'industry_category_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1097
    },
    {
      id: 2124,
      n: 'video_remind_close',
      d: [
        { fn: 'channel_category_id', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'channel_category_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'design_category_id', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'design_category_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'industry_category_id', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'industry_category_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'triger_type', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1098
    },
    {
      id: 2125,
      n: 'video_download_page_click',
      d: [
        { fn: 'channel_category_id', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'channel_category_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'compose_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'design_category_id', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'design_category_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'industry_category_id', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'industry_category_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1099
    },
    {
      id: 2126,
      n: 'id_card_photo_information',
      d: [
        { fn: 'bg_colour', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'id_card_type', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1131
    },
    {
      id: 2127,
      n: 'editor_tool_click',
      d: [
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'tool_type', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1134
    },
    {
      id: 2128,
      n: 'editor_material_choose',
      d: [
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'object_desc', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'tool_type', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1135
    },
    {
      id: 2129,
      n: 'quick_cut_widget',
      d: [
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'operate_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1150
    },
    {
      id: 35001,
      n: 'resource_loc_expose',
      d: [
        { fn: 'banner_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'banner_location', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'banner_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'click_source', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'design_category_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'design_category_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'filter_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'filter_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'hot_word_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'hot_word_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'notice_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'position', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'resource_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'resource_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'resource_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'search_terms', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'topic_location', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'words_titles', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'scene', tp: 'string', dt: 'page_params', rq: 0 }
      ],
      iid: 1321
    },
    {
      id: 35002,
      n: 'resource_loc_click',
      d: [
        { fn: 'click_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'banner_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'banner_location', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'banner_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'click_source', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'design_category_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'design_category_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'filter_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'filter_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'hot_word_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'hot_word_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'notice_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'resource_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'resource_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'resource_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'search_terms', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'topic_location', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'scene', tp: 'string', dt: 'page_params', rq: 0 }
      ],
      iid: 1322
    },
    {
      id: 39005,
      n: 'search',
      d: [
        { fn: 'channel_titles', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'color', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'design_category_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'design_category_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'design_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'filter_five', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'filter_four', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'filter_id', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'filter_one', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'filter_six', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'filter_three', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'filter_two', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'format', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'industry_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'industry_titles', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'position', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'search_picture_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'search_result_number', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'search_source', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'search_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'search_word', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'search_word_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'sort_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'style', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'scene', tp: 'string', dt: 'page_params', rq: 0 }
      ],
      iid: 1323
    },
    {
      id: 31001,
      n: 'editor_init',
      d: [
        { fn: 'editor_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'batch_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'canvas_number', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'init_elapsed_time', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'load_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_ids', tp: 'array/string', dt: 'detail', rq: 0 }
      ],
      iid: 1329
    },
    {
      id: 31005,
      n: 'editor_export_start',
      d: [
        { fn: 'editor_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'batch_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'canvas_number', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'edit_elapsed_time', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'export_next', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'export_target_auth', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'export_target_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'load_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 },
        {
          fn: 'template_material_ids',
          tp: 'array/string',
          dt: 'detail',
          rq: 0
        },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_ids', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'work_material_ids', tp: 'array/string', dt: 'detail', rq: 0 }
      ],
      iid: 1387
    },
    {
      id: 31002,
      n: 'editor_template_loaded',
      d: [
        { fn: 'editor_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'batch_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'canvas_number', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'is_switch_material', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'load_elapsed_time', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'load_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'source_material_id', tp: 'string', dt: 'detail', rq: 0 },
        {
          fn: 'template_material_ids',
          tp: 'array/string',
          dt: 'detail',
          rq: 0
        },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_ids', tp: 'array/string', dt: 'detail', rq: 0 }
      ],
      iid: 1438
    },
    {
      id: 31003,
      n: 'editor_save_start',
      d: [
        { fn: 'editor_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'batch_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'canvas_number', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'is_auto_save', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'load_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 },
        {
          fn: 'template_material_ids',
          tp: 'array/string',
          dt: 'detail',
          rq: 0
        },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_ids', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'work_material_ids', tp: 'array/string', dt: 'detail', rq: 0 }
      ],
      iid: 1439
    },
    {
      id: 31006,
      n: 'editor_export_completed',
      d: [
        { fn: 'editor_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'atlas', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'batch_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'batch_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'canvas_number', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'download_approach', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'export_elapsed_time', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'export_next', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'export_target_auth', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'export_target_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'functions_used', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'has_three_text', tp: 'boolean', dt: 'detail', rq: 0 },
        { fn: 'has_user_materials', tp: 'boolean', dt: 'detail', rq: 0 },
        { fn: 'is_auto_clip', tp: 'boolean', dt: 'detail', rq: 0 },
        { fn: 'is_client_export', tp: 'boolean', dt: 'detail', rq: 0 },
        { fn: 'load_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'matting_ai_use_tool', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'matting_background', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'matting_complete_use_tool', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'matting_crop_size', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'matting_crop_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'matting_num', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 },
        {
          fn: 'template_material_ids',
          tp: 'array/string',
          dt: 'detail',
          rq: 0
        },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_export_compress_qua', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_export_file_size', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'work_export_size', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_ids', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'work_material_ids', tp: 'array/string', dt: 'detail', rq: 0 }
      ],
      iid: 1440
    },
    {
      id: 31007,
      n: 'editor_alert',
      d: [
        { fn: 'editor_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'alert_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'canvas_number', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'export_elapsed_time', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'export_next', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'export_target_auth', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'export_target_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'is_client_export', tp: 'boolean', dt: 'detail', rq: 0 },
        { fn: 'load_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1441
    },
    {
      id: 31008,
      n: 'editor_exit',
      d: [
        { fn: 'editor_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'atlas', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'canvas_number', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'editor_elapsed_time', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'is_exported', tp: 'boolean', dt: 'detail', rq: 0 },
        { fn: 'load_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1442
    },
    {
      id: 31004,
      n: 'editor_save_completed',
      d: [
        { fn: 'editor_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'batch_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'canvas_number', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'is_auto_save', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'load_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'save_elapsed_time', tp: 'integer', dt: 'detail', rq: 0 },
        {
          fn: 'template_material_ids',
          tp: 'array/string',
          dt: 'detail',
          rq: 0
        },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_ids', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'work_material_ids', tp: 'array/string', dt: 'detail', rq: 0 }
      ],
      iid: 1443
    },
    {
      id: 31010,
      n: 'editor_common_fun_tab_upload_action',
      d: [
        { fn: 'editor_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'action_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'delete_num', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'is_success', tp: 'boolean', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'upload_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'upload_num', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1456
    },
    {
      id: 31011,
      n: 'editor_common_fun_tab_material_action',
      d: [
        { fn: 'action_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'element_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'element_type_desc', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'element_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1462
    },
    {
      id: 31015,
      n: 'editor_common_fun_tab_component_action',
      d: [
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'component_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'action_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1464
    },
    {
      id: 31017,
      n: 'editor_odyssey_fun_tab_click',
      d: [
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'action_object', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1466
    },
    {
      id: 31018,
      n: 'editor_odyssey_preview_action',
      d: [
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'action_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1468
    },
    {
      id: 31019,
      n: 'editor_odyssey_publish_action',
      d: [
        { fn: 'action_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'record_event_name', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1470
    },
    {
      id: 31020,
      n: 'editor_odyssey_layout_action',
      d: [
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'is_upload_success', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'action_menu', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'action_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1471
    },
    {
      id: 31021,
      n: 'editor_odyssey_header_menu_action',
      d: [
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'action_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1472
    },
    {
      id: 31022,
      n: 'editor_odyssey_other_action',
      d: [
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'action_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1473
    },
    {
      id: 33001,
      n: 'material_expose',
      d: [
        { fn: 'editor_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'base_score', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'dist_code', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'dist_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'expose_source', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'expose_source_editor', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'expose_source_fun_tab', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'expose_source_label', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'expose_source_label_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'expose_source_topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'expose_source_topic_loc', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'expose_source_topic_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'filter_five', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'filter_four', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'filter_one', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'filter_six', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'filter_three', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'filter_two', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_location', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'picture_url', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'position', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'ratio_bucket', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'score', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'search_terms', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'search_word_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'sort_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'scene', tp: 'string', dt: 'page_params', rq: 0 }
      ],
      iid: 1522
    },
    {
      id: 31027,
      n: 'editor_common_fun_tab_crop_action',
      d: [
        { fn: 'is_batch', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'canvas_number', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'action_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'crop_size', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'height', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'is_locked', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'pre_size_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'width', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1585
    },
    {
      id: 31028,
      n: 'editor_pic_mark_fun_tab_adj_action',
      d: [
        { fn: 'is_batch', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'canvas_number', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'action_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'brightness', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'color_temperature', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'color_tone', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'contrast', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'saturation', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'sharpness', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1586
    },
    {
      id: 31029,
      n: 'editor_matting_fun_tab_click',
      d: [
        { fn: 'batch_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'action_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'load_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1602
    },
    {
      id: 31030,
      n: 'editor_matting_fun_tab_tool_action',
      d: [
        { fn: 'batch_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'action_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_enter_channel', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1604
    },
    {
      id: 31032,
      n: 'editor_common_fun_tab_mosaic_action',
      d: [
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'action_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'shape_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'style_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1640
    },
    {
      id: 31026,
      n: 'editor_pic_mark_fun_tab_click',
      d: [
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'action_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1641
    },
    {
      id: 31024,
      n: 'editor_common_fun_tab_scrawl_action',
      d: [
        { fn: 'fillet_value', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'action_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'shape_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'style_border_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'style_color_value', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'style_thickness_value', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1642
    },
    {
      id: 31023,
      n: 'editor_common_fun_tab_watermark_action',
      d: [
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'action_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'is_tiled', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'element_loc', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'transparency', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'style_color', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'style_font', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1643
    },
    {
      id: 31009,
      n: 'editor_common_search_action',
      d: [
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'fun_tab', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'search_word_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'search_word', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'search_result_number', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'load_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1644
    },
    {
      id: 31033,
      n: 'editor_common_fun_tab_filter_action',
      d: [
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'filter_strength', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'filter_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'action_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 1 }
      ],
      iid: 1646
    },
    {
      id: 31035,
      n: 'editor_upload',
      d: [
        { fn: 'upload_elapsed_time', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'upload_num', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'downstream_web', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'file_size', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'upload_location', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'upload_state', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'upload_type', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1665
    },
    {
      id: 39013,
      n: 'dialog_action',
      d: [
        { fn: 'store_num', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'action_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'dialog_content', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'notice_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'source', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'source_location', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'title', tp: 'string', dt: 'detail', rq: 1 }
      ],
      iid: 1725
    },
    {
      id: 39012,
      n: 'dialog_expose',
      d: [
        { fn: 'dialog_expose_time', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'notice_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'source', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'source_location', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'title', tp: 'string', dt: 'detail', rq: 1 }
      ],
      iid: 1729
    },
    {
      id: 32001,
      n: 'order_pay_expose',
      d: [
        { fn: 'business_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_ids', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'order_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'source', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'source_location', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'spu', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1786
    },
    {
      id: 32002,
      n: 'order_pay_action',
      d: [
        { fn: 'business_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'action_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_ids', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'order_no', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'order_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'pay_amount', tp: 'number', dt: 'detail', rq: 0 },
        { fn: 'sku', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'source', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'source_location', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'spu', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'status', tp: 'boolean', dt: 'detail', rq: 0 },
        { fn: 'type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1787
    },
    {
      id: 39006,
      n: 'activity_expose',
      d: [
        { fn: 'activity_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'activity_title', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'activity_status', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1993
    },
    {
      id: 39007,
      n: 'activity_click',
      d: [
        { fn: 'activity_title', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'activity_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'action_type', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 1994
    },
    {
      id: 39003,
      n: 'page_visit',
      d: [
        { fn: 'sub_page_nm', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'page_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'page_nm', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 2096
    },
    {
      id: 39017,
      n: 'dynamic_publish',
      d: [{ fn: 'dynamic_num', tp: 'integer', dt: 'detail', rq: 0 }],
      iid: 2098
    },
    {
      id: 31040,
      n: 'editor_add_matertial',
      d: [
        { fn: 'add_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'edit_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'filter_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'filter_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'first_fun_tab', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'second_fun_tab', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'third_fun_tab', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 2283
    },
    {
      id: 31039,
      n: 'editor_recording',
      d: [
        { fn: 'action_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'recording_time', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 2284
    },
    {
      id: 31038,
      n: 'editor_video_fun_tab_zoomout_action',
      d: [
        { fn: 'action_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'action_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 2285
    },
    {
      id: 31037,
      n: 'editor_fun_tab_action',
      d: [
        { fn: 'editor_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'first_fun_tab', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'second_fun_tab', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'template_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'third_fun_tab', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 2286
    },
    {
      id: 39001,
      n: 'login',
      d: [
        { fn: 'client_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'is_cache_login', tp: 'boolean', dt: 'detail', rq: 0 },
        { fn: 'is_verify_code_login', tp: 'boolean', dt: 'detail', rq: 0 },
        { fn: 'login_type', tp: 'string', dt: 'detail', rq: 1 }
      ],
      iid: 2307
    },
    {
      id: 39004,
      n: 'regist',
      d: [
        { fn: 'regist_channel_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'regist_cust_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'telephone', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 2308
    },
    {
      id: 39022,
      n: 'page_duration',
      d: [
        { fn: 'set_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'active_duration', tp: 'long', dt: 'detail', rq: 1 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'visit_duration', tp: 'long', dt: 'detail', rq: 1 }
      ],
      iid: 2644
    },
    {
      id: 34001,
      n: 'work_expose',
      d: [
        { fn: 'search_word', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'page_num', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'type_filter_title', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'from_filter_title', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'format_filter_title', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'tag_filter_title', tp: 'array/string', dt: 'detail', rq: 0 },
        {
          fn: 'material_filter_title',
          tp: 'array/string',
          dt: 'detail',
          rq: 0
        },
        { fn: 'work_location', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'expose_source', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'work_id', tp: 'long', dt: 'detail', rq: 0 }
      ],
      iid: 2812
    },
    {
      id: 34002,
      n: 'work_click',
      d: [
        { fn: 'search_word', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'page_num', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'type_filter_title', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'from_filter_title', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'format_filter_title', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'tag_filter_title', tp: 'array/string', dt: 'detail', rq: 0 },
        {
          fn: 'material_filter_title',
          tp: 'array/string',
          dt: 'detail',
          rq: 0
        },
        { fn: 'work_location', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'click_source', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'work_id', tp: 'long', dt: 'detail', rq: 0 }
      ],
      iid: 2813
    },
    {
      id: 31041,
      n: 'editor_material_upload_action',
      d: [
        { fn: 'action_module', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'action_result', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 2822
    },
    {
      id: 39024,
      n: 'button_expose',
      d: [
        { fn: 'button_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'browser_language', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'button_page', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'button_source', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 2883
    },
    {
      id: 39026,
      n: 'activity_page_visit',
      d: [
        { fn: 'module_key', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'channel_code', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'activity_url', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'activity_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'activity_id', tp: 'integer', dt: 'detail', rq: 1 }
      ],
      iid: 2950
    },
    {
      id: 39027,
      n: 'activity_page_click',
      d: [
        { fn: 'module_key', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'activity_url', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'channel_code', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'activity_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'click_result', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'activity_click_title', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'activity_id', tp: 'string', dt: 'detail', rq: 1 }
      ],
      iid: 2956
    },
    {
      id: 39028,
      n: 'questionnaire_click',
      d: [
        { fn: 'click_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'fourth_filter_title', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'options_location', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'options_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'post_page', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'primary_filter_title', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'questionnaire_id', tp: 'long', dt: 'detail', rq: 1 },
        { fn: 'questionnaire_score', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'questionnaire_souce', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'questionnaire_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'questionnaire_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'search_word', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'search_word_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'second_filter_title', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'third_filter_title', tp: 'array/string', dt: 'detail', rq: 0 }
      ],
      iid: 3138
    },
    {
      id: 39029,
      n: 'questionnaire_expose',
      d: [
        { fn: 'fourth_filter_title', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'third_filter_title', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'post_page', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'primary_filter_title', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'questionnaire_id', tp: 'long', dt: 'detail', rq: 1 },
        { fn: 'questionnaire_souce', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'questionnaire_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'questionnaire_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'search_word', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'search_word_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'second_filter_title', tp: 'array/string', dt: 'detail', rq: 0 }
      ],
      iid: 3140
    },
    {
      id: 31042,
      n: 'editor_video_fun_tab_timeaxis_action',
      d: [
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'event', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'event_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'function_used', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_type', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 3153
    },
    {
      id: 39032,
      n: 'smart_video_export',
      d: [
        { fn: 'work_ids', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'batch_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'canvas_number', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'work_export_file_size', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'matting_num', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'export_elapsed_time', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'export_results', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'download_approach', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 3215
    },
    {
      id: 33002,
      n: 'material_click',
      d: [
        { fn: 'editor_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'base_score', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'canvas_number', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'click_source', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'click_source_editor', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'click_source_fun_tab', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'click_source_label', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'click_source_label_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'click_source_topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'click_source_topic_loc', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'click_source_topic_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'click_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'dist_code', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'dist_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'filter_five', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'filter_four', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'filter_one', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'filter_six', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'filter_three', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'filter_two', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'is_batch', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_location', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'picture_url', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'position', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'ratio_bucket', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'score', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'search_terms', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'search_word_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'sort_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'scene', tp: 'string', dt: 'page_params', rq: 0 }
      ],
      iid: 3224
    },
    {
      id: 39008,
      n: 'button_click',
      d: [
        { fn: 'button_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'button_page', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'button_set1', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'button_set2', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'button_source', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'editor_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'is_effective', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'material_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'phone_num_exist', tp: 'boolean', dt: 'detail', rq: 0 },
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'user_type', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 3249
    },
    {
      id: 39033,
      n: 'H5work_resources_expose',
      d: [
        { fn: 'ref_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'resource_page_location', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'resource_source', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'resource_title', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 3281
    },
    {
      id: 39034,
      n: 'H5work_resources_click',
      d: [
        { fn: 'ref_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'resource_page_location', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'resource_source', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'resource_title', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 3282
    },
    {
      id: 39035,
      n: 'label_collect',
      d: [
        { fn: 'channel_content', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'label_content', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'action', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'source', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 3356
    },
    {
      id: 31031,
      n: 'editor_inpaint_fun_tab_repair_action',
      d: [
        { fn: 'project_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'action_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'work_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_version', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 3373
    },
    {
      id: 23001,
      n: 'material_expose',
      d: [
        { fn: 'editor_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'article_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'article_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'color', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'dist_code', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'expose_source_fun_tab', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'expose_source_label', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'filter_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'filter_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'first_filter_titles', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'format', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'highlight_filter_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'highlight_filter_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'material_location', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'material_source', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_url', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'module_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'module_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'pre_module', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'primary_filter_title', tp: 'string', dt: 'detail', rq: 0 },
        {
          fn: 'primary_highlight_filter_id',
          tp: 'integer',
          dt: 'detail',
          rq: 0
        },
        {
          fn: 'primary_highlight_filter_title',
          tp: 'string',
          dt: 'detail',
          rq: 0
        },
        { fn: 'resource_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'scene_tab', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'scene_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'search_word', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'search_word_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'second_filter_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'second_filter_titles', tp: 'array/string', dt: 'detail', rq: 0 },
        {
          fn: 'second_highlight_filter_id',
          tp: 'integer',
          dt: 'detail',
          rq: 0
        },
        {
          fn: 'second_highlight_filter_title',
          tp: 'string',
          dt: 'detail',
          rq: 0
        },
        { fn: 'second_topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'second_topic_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'solution_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'sort_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'source_page_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'style', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'tab_location', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'third_filter_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'third_filter_titles', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_title', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 3411
    },
    {
      id: 23001,
      n: 'material_expose',
      d: [
        { fn: 'editor_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'article_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'article_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'color', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'dist_code', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'expose_source_fun_tab', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'expose_source_label', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'filter_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'filter_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'first_filter_titles', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'format', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'highlight_filter_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'highlight_filter_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'material_location', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'material_source', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_url', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'module_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'module_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'pre_module', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'primary_filter_title', tp: 'string', dt: 'detail', rq: 0 },
        {
          fn: 'primary_highlight_filter_id',
          tp: 'integer',
          dt: 'detail',
          rq: 0
        },
        {
          fn: 'primary_highlight_filter_title',
          tp: 'string',
          dt: 'detail',
          rq: 0
        },
        { fn: 'resource_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'scene_tab', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'scene_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'search_word', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'search_word_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'second_filter_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'second_filter_titles', tp: 'array/string', dt: 'detail', rq: 0 },
        {
          fn: 'second_highlight_filter_id',
          tp: 'integer',
          dt: 'detail',
          rq: 0
        },
        {
          fn: 'second_highlight_filter_title',
          tp: 'string',
          dt: 'detail',
          rq: 0
        },
        { fn: 'second_topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'second_topic_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'solution_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'sort_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'source_page_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'style', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'tab_location', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'third_filter_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'third_filter_titles', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_title', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 3414
    },
    {
      id: 23002,
      n: 'material_click',
      d: [
        { fn: 'editor_mode', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'article_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'article_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'click_source_fun_tab', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'click_source_label', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'color', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'dist_code', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'editor_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'filter_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'filter_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'first_filter_titles', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'format', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'highlight_filter_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'highlight_filter_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_id', tp: 'string', dt: 'detail', rq: 1 },
        { fn: 'material_location', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'material_source', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'material_url', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'module_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'module_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'pre_module', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'primary_filter_title', tp: 'string', dt: 'detail', rq: 0 },
        {
          fn: 'primary_highlight_filter_id',
          tp: 'integer',
          dt: 'detail',
          rq: 0
        },
        {
          fn: 'primary_highlight_filter_title',
          tp: 'string',
          dt: 'detail',
          rq: 0
        },
        { fn: 'resource_id', tp: 'integer', dt: 'detail', rq: 0 },
        { fn: 'scene_tab', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'scene_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'search_word', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'search_word_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'second_filter_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'second_filter_titles', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'second_highlight_filter_id', tp: 'string', dt: 'detail', rq: 0 },
        {
          fn: 'second_highlight_filter_title',
          tp: 'string',
          dt: 'detail',
          rq: 0
        },
        { fn: 'second_topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'second_topic_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'solution_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'sort_type', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'source_page_name', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'style', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'tab_location', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'third_filter_title', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'third_filter_titles', tp: 'array/string', dt: 'detail', rq: 0 },
        { fn: 'topic_id', tp: 'string', dt: 'detail', rq: 0 },
        { fn: 'topic_title', tp: 'string', dt: 'detail', rq: 0 }
      ],
      iid: 3416
    }
  ]
})()
