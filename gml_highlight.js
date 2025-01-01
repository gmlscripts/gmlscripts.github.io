gml_string.API.loadFromString(
`
//////////////
// Chapter 401
//////////////

// # = constant
// * = readonly
// @ = instance variable
// & = obsolete
// $ = US spelling
// £ = UK spelling
// ! = disallowed in free
// % = property
// ? = struct variable
// ^ = do not add to autocomplete
// ^feature_flag = do not add to autocomplete if the feature flag is disabled
// [name] = optional argument

argument_relative&
argument
argument0
argument1
argument2
argument3
argument4
argument5
argument6
argument7
argument8
argument9
argument10
argument11
argument12
argument13
argument14
argument15
argument_count
self#
other#
all#
noone#
global#
undefined#
pointer_invalid#
pointer_null#

path_action_stop#
path_action_restart#
path_action_continue#
path_action_reverse#


//////////////
// Chapter 402
//////////////

// section 2.1

true#
false#
pi#
NaN#
infinity#
GM_build_date#
GM_version#
GM_runtime_version#
GM_project_filename#
GM_build_type#
GM_is_sandboxed#
_GMLINE_#
_GMFILE_#
_GMFUNCTION_#
nameof(name)
// section 2.2

is_real(val)
is_numeric(val)
is_string(val)
is_array(val)
is_undefined(val)
is_int32(val)
is_int64(val)
is_ptr(val)
is_bool(val)
is_nan(val)
is_infinity(val)
is_struct(val)
is_method(val)
is_instanceof(struct, constructor_name)
is_callable(val)
is_handle(val)
static_get(struct_or_func_name)
static_set(struct, struct)
typeof(val)
instanceof(struct)
exception_unhandled_handler(user_handler)
variable_global_exists(name)
variable_global_get(name)
variable_global_set(name,val)
variable_instance_exists(id,name)
variable_instance_get(id,name)
variable_instance_set(id,name,val)
variable_instance_get_names(id)
variable_instance_names_count(id)
variable_struct_exists(struct,name)
variable_struct_get(struct,name)
variable_struct_set(struct,name,val)
variable_struct_get_names(struct)
variable_struct_names_count(struct)
variable_struct_remove(struct,name)
variable_get_hash(name)
variable_clone(var,[depth])
struct_exists(struct,name)
struct_exists_from_hash(struct,hash)
struct_get(struct,name)
struct_set(struct,name,val)
struct_get_names(struct)
struct_names_count(struct)
struct_remove(struct,name)
struct_remove_from_hash(struct,hash)
struct_foreach(struct,func)
struct_get_from_hash(struct,hash)
struct_set_from_hash(struct,hash,val)
array_length(variable)
array_length_1d(variable)&
array_length_2d(variable, index)&
array_height_2d(variable)&
array_equals(var1,var2)
array_create(size, [value])
array_copy(dest,dest_index,src,src_index,length)
array_resize(variable,newsize)
array_get(variable,index)
array_set(variable,index,val)
array_push(array,val,...)
array_pop(array)
array_shift(array)
array_insert(array,index,val,...)
array_delete(array,index,number)
array_sort(array,sortType_or_function)
array_shuffle(array,[offset],[length])
array_shuffle_ext(array,[offset],[length])
array_get_index(array,value,[offset],[length])
array_contains(array,value,[offset],[length])
array_contains_ext(array,values,[matchAll],[offset],[length])
array_first(array)
array_last(array)
array_create_ext(size,function)
array_find_index(array,function,[offset],[length])
array_any(array,function,[offset],[length])
array_all(array,function,[offset],[length])
array_foreach(array,function,[offset],[length])
array_reduce(array,function,[init_value],[offset],[length])
array_filter(array,function,[offset],[length])
array_filter_ext(array,function,[offset],[length])
array_map(array,function,[offset],[length])
array_map_ext(array,function,[offset],[length])
array_copy_while(array,function,[offset],[length])
array_unique(array,[offset],[length])
array_unique_ext(array,[offset],[length])
array_reverse(array,[offset],[length])
array_reverse_ext(array,[offset],[length])
array_concat(array0,array1,...)
array_union(array0,array1,...)
array_intersection(array0,array1,...)
random(x)
random_range(x1,x2)
irandom(x)
irandom_range(x1,x2)
random_set_seed(seed)
random_get_seed()
randomize()$
randomise()£
choose(x1,x2,x3,...)
abs(x)
round(x)
floor(x)
ceil(x)
sign(x)
frac(x)
sqrt(x)
sqr(x)
exp(x)
ln(x)
log2(x)
log10(x)
sin(radian_angle)
cos(radian_angle)
tan(radian_angle)
arcsin(x)
arccos(x)
arctan(x)
arctan2(y,x)
dsin(degree_angle)
dcos(degree_angle)
dtan(degree_angle)
darcsin(x)
darccos(x)
darctan(x)
darctan2(y,x)
degtorad(x)
radtodeg(x)
power(x,n)
logn(n,x)
min(x1,x2,x3,...)
max(x1,x2,x3,...)
mean(x1,x2,x3,...)
median(x1,x2,x3,...)
clamp(val,min,max)
lerp(val1,val2,amount)
dot_product(x1,y1,x2,y2)
dot_product_3d(x1,y1,z1,x2,y2,z2)
dot_product_normalised(x1,y1,x2,y2)£
dot_product_3d_normalised(x1,y1,z1,x2,y2,z2)£
dot_product_normalized(x1,y1,x2,y2)$
dot_product_3d_normalized(x1,y1,z1,x2,y2,z2)$
math_set_epsilon(new_epsilon)
math_get_epsilon()
angle_difference(dest,src)
point_distance_3d(x1,y1,z1,x2,y2,z2)
point_distance(x1,y1,x2,y2)
point_direction(x1,y1,x2,y2)
lengthdir_x(len,dir)
lengthdir_y(len,dir)

// section 2.3

real(val)
bool(val)
string(val_or_template,val0,...)
int64(val)
ptr(val)
handle_parse(val_string)
string_format(val,total,dec)
chr(val)
ansi_char(val)
ord(char)
method(struct_ref_or_instance_id,func)
method_get_index(method)
method_get_self(method)
string_length(str)
string_byte_length(str)
string_pos(substr,str)
string_pos_ext(substr,str,startpos)
string_last_pos(substr,str)
string_last_pos_ext(substr,str,startpos)
string_copy(str,index,count)
string_char_at(str,index)
string_ord_at(str,index)
string_byte_at(str,index)
string_set_byte_at(str,index,val)
string_delete(str,index,count)
string_insert(substr,str,index)
string_lower(str)
string_upper(str)
string_repeat(str,count)
string_letters(str)
string_digits(str)
string_lettersdigits(str)
string_replace(str,substr,newstr)
string_replace_all(str,substr,newstr)
string_count(substr,str)
string_hash_to_newline(str)

string_ext(format,arg_array)
string_trim_start(str, [substrs])
string_trim_end(str, [substrs])
string_trim(str, [substrs])
string_starts_with(str,substr)
string_ends_with(str,substr)
string_split(str,delim,[remove_empty],[max_splits])
string_split_ext(str,delim_array,[remove_empty],[max_splits])
string_join(delim,arg0,arg1,...)
string_join_ext(delim,val_array,[offset],[length])
string_concat(arg0,arg1,arg2,...)
string_concat_ext(val_array,[offset],[length])
string_foreach(str,func,[pos],[length])

clipboard_has_text()
clipboard_set_text(str)
clipboard_get_text()

// section 2.4

date_current_datetime()
date_create_datetime(year,month,day,hour,minute,second)
date_valid_datetime(year,month,day,hour,minute,second)
date_inc_year(date,amount)
date_inc_month(date,amount)
date_inc_week(date,amount)
date_inc_day(date,amount)
date_inc_hour(date,amount)
date_inc_minute(date,amount)
date_inc_second(date,amount)
date_get_year(date)
date_get_month(date)
date_get_week(date)
date_get_day(date)
date_get_hour(date)
date_get_minute(date)
date_get_second(date)
date_get_weekday(date)
date_get_day_of_year(date)
date_get_hour_of_year(date)
date_get_minute_of_year(date)
date_get_second_of_year(date)
date_year_span(date1,date2)
date_month_span(date1,date2)
date_week_span(date1,date2)
date_day_span(date1,date2)
date_hour_span(date1,date2)
date_minute_span(date1,date2)
date_second_span(date1,date2)
date_compare_datetime(date1,date2)
date_compare_date(date1,date2)
date_compare_time(date1,date2)
date_date_of(date)
date_time_of(date)
date_datetime_string(date)
date_date_string(date)
date_time_string(date)
date_days_in_month(date)
date_days_in_year(date)
date_leap_year(date)
date_is_today(date)

date_set_timezone(timezone)
date_get_timezone()
timezone_local#
timezone_utc#

game_set_speed(value,type)
game_get_speed(type)
gamespeed_fps#
gamespeed_microseconds#

//////////////
// Chapter 403
//////////////

// section 3.1

x@
y@
xprevious@
yprevious@
xstart@
ystart@
hspeed@
vspeed@
direction@
speed@
friction@
gravity@
gravity_direction@
in_collision_tree@
motion_set(dir,speed)
motion_add(dir,speed)
place_free(x,y)
place_empty(x,y,obj*,...)
place_meeting(x,y,obj)
place_snapped(hsnap,vsnap)
move_random(hsnap,vsnap)
move_snap(hsnap,vsnap)
move_towards_point(x,y,sp)
move_contact_solid(dir,maxdist)
move_contact_all(dir,maxdist)
move_outside_solid(dir,maxdist)
move_outside_all(dir,maxdist)
move_bounce_solid(advanced)
move_bounce_all(advanced)
move_wrap(hor,vert,margin)
move_and_collide(dx,dy,obj,[num_iterations], [xoff],[yoff],[max_x_move],[max_y_move])
distance_to_point(x,y)
distance_to_object(obj)
position_empty(x,y)
position_meeting(x,y,obj)

// section 3.2

path_start(path,speed,endaction,absolute)
path_end()
path_index*@
path_position@
path_positionprevious@
path_speed@
path_scale@
path_orientation@
path_endaction@

// section 3.3

mp_linear_step(x,y,speed,checkall)
mp_potential_step(x,y,speed,checkall)
mp_linear_step_object(x,y,speed,obj)
mp_potential_step_object(x,y,speed,obj)
mp_potential_settings(maxrot,rotstep,ahead,onspot)
mp_linear_path(path,xg,yg,stepsize,checkall)
mp_potential_path(path,xg,yg,stepsize,factor,checkall)
mp_linear_path_object(path,xg,yg,stepsize,obj)
mp_potential_path_object(path,xg,yg,stepsize,factor,obj)
mp_grid_create(left,top,hcells,vcells,cellwidth,cellheight)
mp_grid_destroy(id)
mp_grid_clear_all(id)
mp_grid_clear_cell(id,h,v)
mp_grid_clear_rectangle(id,left,top,right,bottom)
mp_grid_add_cell(id,h,v)
mp_grid_get_cell(id,h,v)
mp_grid_add_rectangle(id,left,top,right,bottom)
mp_grid_add_instances(id,obj,prec)
mp_grid_path(id,path,xstart,ystart,xgoal,ygoal,allowdiag)
mp_grid_draw(id)
mp_grid_to_ds_grid(src,dest)

// section 3.4

collision_point(x,y,obj,prec,notme)
collision_rectangle(x1,y1,x2,y2,obj,prec,notme)
collision_circle(x1,y1,radius,obj,prec,notme)
collision_ellipse(x1,y1,x2,y2,obj,prec,notme)
collision_line(x1,y1,x2,y2,obj,prec,notme)

collision_point_list(x,y,obj,prec,notme,list,ordered)
collision_rectangle_list(x1,y1,x2,y2,obj,prec,notme,list,ordered)
collision_circle_list(x1,y1,radius,obj,prec,notme,list,ordered)
collision_ellipse_list(x1,y1,x2,y2,obj,prec,notme,list,ordered)
collision_line_list(x1,y1,x2,y2,obj,prec,notme,list,ordered)
instance_position_list(x,y,obj,list,ordered)
instance_place_list(x,y,obj,list,ordered)

point_in_rectangle(px,py,x1,y1,x2,y2)
point_in_triangle(px,py,x1,y1,x2,y2,x3,y3)
point_in_circle(px,py,cx,cy,rad)
rectangle_in_rectangle(sx1,sy1,sx2,sy2,dx1,dy1,dx2,dy2)
rectangle_in_triangle(sx1,sy1,sx2,sy2,x1,y1,x2,y2,x3,y3)
rectangle_in_circle(sx1,sy1,sx2,sy2,cx,cy,rad)


// section 3.5

object_index*@
id*@
solid@
persistent@
managed*@^rollback
mask_index@
instance_count*@
instance_id*@
instance_find(obj,n)
instance_exists(obj)
instance_number(obj)
instance_position(x,y,obj)
instance_nearest(x,y,obj)
instance_furthest(x,y,obj)
instance_place(x,y,obj)
instance_create_depth(x,y,depth,obj,var_struct*,...)
instance_create_layer(x,y,layer_id_or_name,obj,var_struct*,...)
instance_copy(performevent)
instance_change(obj,performevents)
instance_destroy(id*,execute_event_flag*,...)
position_destroy(x,y)
position_change(x,y,obj,performevents)
instance_id_get(index)

// section 3.6

instance_deactivate_all(notme)
instance_deactivate_object(obj)
instance_deactivate_region(left,top,width,height,inside,notme)
instance_activate_all()
instance_activate_object(obj)
instance_activate_region(left,top,width,height,inside)

// section 3.7

room_speed
fps*
fps_real*
current_time*
current_year*
current_month*
current_day*
current_weekday*
current_hour*
current_minute*
current_second*
alarm[0..11]@
timeline_index@
timeline_position@
timeline_speed@
timeline_running@
timeline_loop@

// section 3.8

room
room_first*
room_last*
room_width*
room_height*
room_caption&
room_persistent
room_goto(numb)
room_goto_previous()
room_goto_next()
room_previous(numb)
room_next(numb)
room_restart()
game_end([return_code])
game_restart()
game_load(filename)
game_save(filename)
game_save_buffer(buffer)
game_load_buffer(buffer)
game_change(working_directory,launch_parameters)

scheduler_resolution_set(milliseconds)
scheduler_resolution_get()

// section 3.9

score
lives
health
show_score&
show_lives&
show_health&
caption_score&
caption_lives&
caption_health&

// section 3.10

event_perform(type,numb)
event_perform_async(type,ds_map)
event_user(numb)
event_perform_object(obj,type,numb)
event_inherited()
event_type*
event_number*
event_object*
event_action*
ev_create#
ev_pre_create#
ev_destroy#
ev_step#
ev_alarm#
ev_keyboard#
ev_mouse#
ev_collision#
ev_other#
ev_draw#
ev_draw_begin#
ev_draw_end#
ev_draw_pre#
ev_draw_post#
ev_draw_normal#
ev_keypress#
ev_keyrelease#
ev_trigger#
ev_left_button#
ev_right_button#
ev_middle_button#
ev_no_button#
ev_left_press#
ev_right_press#
ev_middle_press#
ev_left_release#
ev_right_release#
ev_middle_release#
ev_mouse_enter#
ev_mouse_leave#
ev_mouse_wheel_up#
ev_mouse_wheel_down#
ev_global_left_button#
ev_global_right_button#
ev_global_middle_button#
ev_global_left_press#
ev_global_right_press#
ev_global_middle_press#
ev_global_left_release#
ev_global_right_release#
ev_global_middle_release#
ev_joystick1_left#
ev_joystick1_right#
ev_joystick1_up#
ev_joystick1_down#
ev_joystick1_button1#
ev_joystick1_button2#
ev_joystick1_button3#
ev_joystick1_button4#
ev_joystick1_button5#
ev_joystick1_button6#
ev_joystick1_button7#
ev_joystick1_button8#
ev_joystick2_left#
ev_joystick2_right#
ev_joystick2_up#
ev_joystick2_down#
ev_joystick2_button1#
ev_joystick2_button2#
ev_joystick2_button3#
ev_joystick2_button4#
ev_joystick2_button5#
ev_joystick2_button6#
ev_joystick2_button7#
ev_joystick2_button8#
ev_outside#
ev_boundary#
ev_game_start#
ev_game_end#
ev_room_start#
ev_room_end#
ev_no_more_lives#
ev_animation_end#
ev_end_of_path#
ev_no_more_health#
ev_close_button&
ev_user0#
ev_user1#
ev_user2#
ev_user3#
ev_user4#
ev_user5#
ev_user6#
ev_user7#
ev_user8#
ev_user9#
ev_user10#
ev_user11#
ev_user12#
ev_user13#
ev_user14#
ev_user15#
ev_outside_view0#
ev_outside_view1#
ev_outside_view2#
ev_outside_view3#
ev_outside_view4#
ev_outside_view5#
ev_outside_view6#
ev_outside_view7#
ev_boundary_view0#
ev_boundary_view1#
ev_boundary_view2#
ev_boundary_view3#
ev_boundary_view4#
ev_boundary_view5#
ev_boundary_view6#
ev_boundary_view7#
ev_animation_update#
ev_animation_event#
ev_web_image_load#
ev_web_sound_load#
ev_web_async#
ev_dialog_async#
ev_web_iap#
ev_web_cloud#
ev_web_networking#
ev_web_steam#
ev_social#
ev_push_notification#
ev_async_save_load#
ev_audio_recording#
ev_audio_playback#
ev_audio_playback_ended#
ev_system_event#
ev_broadcast_message#
ev_step_normal#
ev_step_begin#
ev_step_end#
ev_gui#
ev_gui_begin#
ev_gui_end#
ev_cleanup#

ev_gesture#

ev_gesture_tap#
ev_gesture_double_tap#
ev_gesture_drag_start#
ev_gesture_dragging#
ev_gesture_drag_end#
ev_gesture_flick#
ev_gesture_pinch_start#
ev_gesture_pinch_in#
ev_gesture_pinch_out#
ev_gesture_pinch_end#
ev_gesture_rotate_start#
ev_gesture_rotating#
ev_gesture_rotate_end#

ev_global_gesture_tap#
ev_global_gesture_double_tap#
ev_global_gesture_drag_start#
ev_global_gesture_dragging#
ev_global_gesture_drag_end#
ev_global_gesture_flick#
ev_global_gesture_pinch_start#
ev_global_gesture_pinch_in#
ev_global_gesture_pinch_out#
ev_global_gesture_pinch_end#
ev_global_gesture_rotate_start#
ev_global_gesture_rotating#
ev_global_gesture_rotate_end#

ev_async_web_image_load#
//ev_async_web_sound_load#//event not exists
ev_async_web#
ev_async_dialog#
ev_async_web_iap#
ev_async_web_cloud#
ev_async_web_networking#
ev_async_web_steam#
ev_async_social#
ev_async_push_notification#
ev_async_save_load#
ev_async_audio_recording#
ev_async_audio_playback#
ev_async_audio_playback_ended#
ev_async_system_event#


// section 3.11

application_surface*
gamemaker_pro&
gamemaker_registered&
gamemaker_version&
error_occurred&
error_last&
show_debug_message(val_or_format,val0,val1,...)
show_debug_message_ext(format,array_value)
show_debug_overlay(enable,[minimised],[scale],[alpha],...)
is_debug_overlay_open()
is_mouse_over_debug_overlay()
is_keyboard_used_debug_overlay()
show_debug_log(enable)
debug_mode*
debug_event(str,...)
debug_get_callstack([maxdepth],...)
alarm_get(index)
alarm_set(index,count)
dbg_view(name,visible,[x],[y],[width],[height],...)
dbg_section(name,[open])
dbg_view_delete(viewPTR)
dbg_view_exists(viewPTR)
dbg_section_delete(sectionPTR)
dbg_section_exists(sectionPTR)
dbg_slider(dbgRefOrArrayOfDbgRef,[minimum],[maximum],[label],[step]...)
dbg_slider_int(dbgRefOrArrayOfDbgRef,[minimum],[maximum],[label],[step]...)
dbg_drop_down(dbgRefOrArrayOfDbgRef,specifierOrArrayValues,[labelOrArrayLabels],[label]...)
dbg_watch(dbgRefOrArrayOfDbgRef,[label],...)
dbg_text(dbgRefOrArrayOfDbgRefOrString)
dbg_text_separator(dbgRefOrArrayOfDbgRefOrString,[align])
dbg_sprite(dbgRefSpriteOrArrayOfDbgRef,dbgRefSpriteIndexOrArrayOfDbgRef,[label],[width],[height]...)
dbg_text_input(dbgRefOrArrayOfDbgRef,[label],[type]...)
dbg_checkbox(dbgRefOrArrayOfDbgRef,[label],...)
dbg_colour(dbgRefOrArrayOfDbgRef,[label],...)£
dbg_color(dbgRefOrArrayOfDbgRef,[label],...)$
dbg_button(label,dbgRef,[width],[height]...)
dbg_sprite_button(dbgRef,dbgRefSprite,dbgRefSpriteIndex,[width],[height],[xoffset],[yoffset],[widthSprite],[heightSprite]...)
dbg_same_line()
dbg_add_font_glyphs( filenameTTF,[size],[fontRange]... )
ref_create(dbgrefOrStruct,dbgrefOrName,[index],...)


font_texture_page_size

//////////////
// Chapter 404
//////////////

// section 4.1

keyboard_key
keyboard_lastkey
keyboard_lastchar
keyboard_string
keyboard_set_map(key1,key2)
keyboard_get_map(key)
keyboard_unset_map()
keyboard_check(key)
keyboard_check_pressed(key)
keyboard_check_released(key)
keyboard_check_direct(key)
keyboard_get_numlock()
keyboard_set_numlock(on)
keyboard_key_press(key)
keyboard_key_release(key)
vk_nokey#
vk_anykey#
vk_enter#
vk_return#
vk_shift#
vk_control#
vk_alt#
vk_escape#
vk_space#
vk_backspace#
vk_tab#
vk_pause#
vk_printscreen#
vk_left#
vk_right#
vk_up#
vk_down#
vk_home#
vk_end#
vk_delete#
vk_insert#
vk_pageup#
vk_pagedown#
vk_f1#
vk_f2#
vk_f3#
vk_f4#
vk_f5#
vk_f6#
vk_f7#
vk_f8#
vk_f9#
vk_f10#
vk_f11#
vk_f12#
vk_numpad0#
vk_numpad1#
vk_numpad2#
vk_numpad3#
vk_numpad4#
vk_numpad5#
vk_numpad6#
vk_numpad7#
vk_numpad8#
vk_numpad9#
vk_divide#
vk_multiply#
vk_subtract#
vk_add#
vk_decimal#
vk_lshift#
vk_lcontrol#
vk_lalt#
vk_rshift#
vk_rcontrol#
vk_ralt#
keyboard_clear(key)
io_clear()

// section 4.2

mouse_x*
mouse_y*
mouse_button
mouse_lastbutton
mb_any#
mb_none#
mb_left#
mb_right#
mb_middle#
mb_side1#
mb_side2#
m_axisx#
m_axisy#
m_axisx_gui#
m_axisy_gui#
m_scroll_up#
m_scroll_down#
mouse_check_button(button)
mouse_check_button_pressed(button)
mouse_check_button_released(button)
mouse_wheel_up()
mouse_wheel_down()
mouse_clear(button)
cursor_sprite

//////////////
// Chapter 405
//////////////

// section 5.1

visible@
sprite_index@
sprite_width*@
sprite_height*@
sprite_xoffset*@
sprite_yoffset*@
image_number*@
image_index@
image_speed@
depth@
image_xscale@
image_yscale@
image_angle@
image_alpha@
image_blend@
bbox_left*@
bbox_right*@
bbox_top*@
bbox_bottom*@

bboxmode_automatic#
bboxmode_fullimage#
bboxmode_manual#

bboxkind_precise#
bboxkind_rectangular#
bboxkind_ellipse#
bboxkind_diamond#
bboxkind_spine#

// exception structure entries
message*@
longMessage*@
script*@
stacktrace*@


// Layer-related built-in variables
layer@

// Sequence-related built-ins
in_sequence@
sequence_instance@
drawn_by_sequence@

// section 5.2

background_colour£
background_showcolour£
background_color$
background_showcolor$

// section 5.3

draw_self()
draw_sprite(sprite,subimg,x,y)
draw_sprite_pos(sprite,subimg,x1,y1,x2,y2,x3,y3,x4,y4,alpha)
draw_sprite_ext(sprite,subimg,x,y,xscale,yscale,rot,col,alpha)
draw_sprite_stretched(sprite,subimg,x,y,w,h)
draw_sprite_stretched_ext(sprite,subimg,x,y,w,h,col,alpha)
draw_sprite_tiled(sprite,subimg,x,y)
draw_sprite_tiled_ext(sprite,subimg,x,y,xscale,yscale,col,alpha)
draw_sprite_part(sprite,subimg,left,top,width,height,x,y)
draw_sprite_part_ext(sprite,subimg,left,top,width,height,x,y,xscale,yscale,col,alpha)
draw_sprite_general(sprite,subimg,left,top,width,height,x,y,xscale,yscale,rot,c1,c2,c3,c4,alpha)

// section 5.4

draw_clear(col)
draw_clear_alpha(col,alpha)
draw_clear_depth(depth)
draw_clear_stencil(stencil)
draw_clear_ext([col],[alpha],[depth],[stencil])
draw_point(x,y)
draw_line(x1,y1,x2,y2)
draw_line_width(x1,y1,x2,y2,w)
draw_rectangle(x1,y1,x2,y2,outline)
draw_roundrect(x1,y1,x2,y2,outline)
draw_roundrect_ext(x1,y1,x2,y2,radiusx,radiusy,outline)
draw_triangle(x1,y1,x2,y2,x3,y3,outline)
draw_circle(x,y,r,outline)
draw_ellipse(x1,y1,x2,y2,outline)
draw_set_circle_precision(precision)
draw_arrow(x1,y1,x2,y2,size)
draw_button(x1,y1,x2,y2,up)
draw_path(path,x,y,absolute)
draw_healthbar(x1,y1,x2,y2,amount,backcol,mincol,maxcol,direction,showback,showborder)
draw_getpixel(x,y)
draw_getpixel_ext(x,y)
draw_set_colour(col)£
draw_set_color(col)$
draw_set_alpha(alpha)
draw_get_colour()£
draw_get_color() $
draw_get_alpha()
c_aqua#
c_black#
c_blue#
c_dkgray#
c_dkgrey#
c_fuchsia#
c_gray#
c_grey#
c_green#
c_lime#
c_ltgray#
c_ltgrey#
c_maroon#
c_navy#
c_olive#
c_purple#
c_red#
c_silver#
c_teal#
c_white#
c_yellow#
c_orange#
merge_colour(col1,col2,amount)£
make_colour_rgb(red,green,blue)£
make_colour_hsv(hue,saturation,value)£
colour_get_red(col)£
colour_get_green(col)£
colour_get_blue(col)£
colour_get_hue(col)£
colour_get_saturation(col)£
colour_get_value(col)£
merge_color(col1,col2,amount)$
make_color_rgb(red,green,blue)$
make_color_hsv(hue,saturation,value)$
color_get_red(col)$
color_get_green(col)$
color_get_blue(col)$
color_get_hue(col)$
color_get_saturation(col)$
color_get_value(col)$
screen_save(fname)
screen_save_part(fname,x,y,w,h)
gif_open(width,height,...)
gif_add_surface(gifindex,surfaceindex,delaytime,...)
gif_save(gif, filename)
gif_save_buffer(gif)

// section 5.5

draw_set_font(font)
draw_get_font()
draw_set_halign(halign)
draw_get_halign()
fa_left#
fa_center#
fa_right#
draw_set_valign(valign)
draw_get_valign()
fa_top#
fa_middle#
fa_bottom#
draw_text(x,y,string)
draw_text_ext(x,y,string,sep,w)
string_width(string)
string_height(string)
string_width_ext(string,sep,w)
string_height_ext(string,sep,w)
draw_text_transformed(x,y,string,xscale,yscale,angle)
draw_text_ext_transformed(x,y,string,sep,w,xscale,yscale,angle)
draw_text_colour(x,y,string,c1,c2,c3,c4,alpha)£
draw_text_ext_colour(x,y,string,sep,w,c1,c2,c3,c4,alpha)£
draw_text_transformed_colour(x,y,string,xscale,yscale,angle,c1,c2,c3,c4,alpha)£
draw_text_ext_transformed_colour(x,y,string,sep,w,xscale,yscale,angle,c1,c2,c3,c4,alpha)£
draw_text_color(x,y,string,c1,c2,c3,c4,alpha)$
draw_text_ext_color(x,y,string,sep,w,c1,c2,c3,c4,alpha)$
draw_text_transformed_color(x,y,string,xscale,yscale,angle,c1,c2,c3,c4,alpha)$
draw_text_ext_transformed_color(x,y,string,sep,w,xscale,yscale,angle,c1,c2,c3,c4,alpha)$

// section 5.6

draw_point_colour(x,y,col1)£
draw_line_colour(x1,y1,x2,y2,col1,col2)£
draw_line_width_colour(x1,y1,x2,y2,w,col1,col2)£
draw_rectangle_colour(x1,y1,x2,y2,col1,col2,col3,col4,outline)£
draw_roundrect_colour(x1,y1,x2,y2,col1,col2,outline)£
draw_roundrect_colour_ext(x1,y1,x2,y2,radiusx,radiusy,col1,col2,outline)£
draw_triangle_colour(x1,y1,x2,y2,x3,y3,col1,col2,col3,outline)£
draw_circle_colour(x,y,r,col1,col2,outline)£
draw_ellipse_colour(x1,y1,x2,y2,col1,col2,outline)£
draw_point_color(x,y,col1)$
draw_line_color(x1,y1,x2,y2,col1,col2)$
draw_line_width_color(x1,y1,x2,y2,w,col1,col2)$
draw_rectangle_color(x1,y1,x2,y2,col1,col2,col3,col4,outline)$
draw_roundrect_color(x1,y1,x2,y2,col1,col2,outline)$
draw_roundrect_color_ext(x1,y1,x2,y2,radiusx,radiusy,col1,col2,outline)$
draw_triangle_color(x1,y1,x2,y2,x3,y3,col1,col2,col3,outline)$
draw_circle_color(x,y,r,col1,col2,outline)$
draw_ellipse_color(x1,y1,x2,y2,col1,col2,outline)$
pr_pointlist#
pr_linelist#
pr_linestrip#
pr_trianglelist#
pr_trianglestrip#
pr_trianglefan#
draw_primitive_begin(kind)
draw_vertex(x,y)
draw_vertex_colour(x,y,col,alpha)£
draw_vertex_color(x,y,col,alpha)$
draw_primitive_end()
sprite_get_uvs(spr,subimg)
font_get_uvs(font)
font_get_info(font)
font_cache_glyph(font,glyphIndex)
sprite_get_texture(spr,subimg)
font_get_texture(font)
texture_get_width(texid)
texture_get_height(texid)
texture_get_uvs(texid)
draw_primitive_begin_texture(kind,texid)
draw_vertex_texture(x,y,xtex,ytex)
draw_vertex_texture_colour(x,y,xtex,ytex,col,alpha)£
draw_vertex_texture_color(x,y,xtex,ytex,col,alpha)$
texture_global_scale(pow2integer)
bm_complex&
bm_normal#
bm_add#
bm_max#
bm_subtract#
bm_min#
bm_reverse_subtract#
bm_zero#
bm_one#
bm_src_colour#£
bm_inv_src_colour#£
bm_src_color#$
bm_inv_src_color#$
bm_src_alpha#
bm_inv_src_alpha#
bm_dest_alpha#
bm_inv_dest_alpha#
bm_dest_colour#£
bm_inv_dest_colour#£
bm_dest_color#$
bm_inv_dest_color#$
bm_src_alpha_sat#
bm_eq_add#
bm_eq_max#
bm_eq_subtract#
bm_eq_min#
bm_eq_reverse_subtract#

tf_point#
tf_linear#
tf_anisotropic#

mip_off#
mip_on#
mip_markedonly#

audio_falloff_none#
audio_falloff_inverse_distance#
audio_falloff_inverse_distance_clamped#
audio_falloff_inverse_distance_scaled#
audio_falloff_linear_distance#
audio_falloff_linear_distance_clamped#
audio_falloff_exponent_distance#
audio_falloff_exponent_distance_clamped#
audio_falloff_exponent_distance_scaled#

audio_old_system#&
audio_new_system#&

audio_mono#
audio_stereo#
audio_3d#

// section 5.7_1

surface_create(w,h,[format])
surface_create_ext(name,w,h)
surface_resize(id,width,height)
surface_free(id)
surface_exists(id)
surface_get_width(id)
surface_get_height(id)
surface_get_texture(id)
surface_get_texture_depth(id)
surface_get_format(id)
surface_set_target(id)
surface_set_target(id,[depth_id])
surface_set_target_ext(index,id)
surface_get_target()
surface_get_target_depth()
surface_get_target_ext(index)
surface_reset_target()
surface_depth_disable(disable)
surface_get_depth_disable()
surface_has_depth(id)
surface_format_is_supported(format)
draw_surface(id,x,y)
draw_surface_stretched(id,x,y,w,h)
draw_surface_tiled(id,x,y)
draw_surface_part(id,left,top,width,height,x,y)
draw_surface_ext(id,x,y,xscale,yscale,rot,col,alpha)
draw_surface_stretched_ext(id,x,y,w,h,col,alpha)
draw_surface_tiled_ext(id,x,y,xscale,yscale,col,alpha)
draw_surface_part_ext(id,left,top,width,height,x,y,xscale,yscale,col,alpha)
draw_surface_general(id,left,top,width,height,x,y,xscale,yscale,rot,c1,c2,c3,c4,alpha)
surface_getpixel(id,x,y)
surface_getpixel_ext(id,x,y)
surface_save(id,fname)
surface_save_part(id,fname,x,y,w,h)
surface_copy(destination,x,y,source)
surface_copy_part(destination,x,y,source,xs,ys,ws,hs)

surface_rgba8unorm#
surface_r16float#
surface_r32float#
surface_rgba4unorm#
surface_r8unorm#
surface_rg8unorm#
surface_rgba16float#
surface_rgba32float#

application_surface_draw_enable(on_off)
application_get_position()
application_surface_enable(enable)
application_surface_is_enabled()


video_open(path)
video_close()
video_set_volume(vol)
video_draw()
video_pause()
video_resume()
video_enable_loop(enable)
video_seek_to(milliseconds)
video_get_duration()
video_get_position()
video_get_status()
video_get_format()
video_is_looping()
video_get_volume()
video_format_rgba#
video_format_yuv#
video_status_closed#
video_status_preparing#
video_status_playing#
video_status_paused#

// section 5.8

display_get_width()
display_get_height()
display_get_orientation()
display_get_gui_width()
display_get_gui_height()
display_get_frequency()

display_reset(aa_level, vsync)
display_mouse_get_x()
display_mouse_get_y()
display_mouse_set(x,y)

display_set_ui_visibility(flags)

// section 5.9

window_set_showborder(show)
window_get_showborder()
window_set_fullscreen(full)
window_get_fullscreen()
window_set_caption(caption)
window_set_min_width(minwidth)
window_set_max_width(maxwidth)
window_set_min_height(minheight)
window_set_max_height(maxheight)
window_get_visible_rects(startx,starty,endx,endy)
window_get_caption()
window_set_cursor(curs)
window_enable_borderless_fullscreen(enable)
window_get_borderless_fullscreen()
window_minimise()£
window_minimize()$
window_restore()
cr_default#
cr_none#
cr_arrow#
cr_cross#
cr_beam#
cr_size_nesw#
cr_size_ns#
cr_size_nwse#
cr_size_we#
cr_uparrow#
cr_hourglass#
cr_drag#
cr_appstart#
cr_handpoint#
cr_size_all#
window_get_cursor()
window_set_colour(colour)£
window_get_colour()£
window_set_color(color)$
window_get_color()$
window_set_position(x,y)
window_set_size(w,h)
window_set_rectangle(x,y,w,h)
window_center()
window_get_x()
window_get_y()
window_get_width()
window_get_height()
window_mouse_get_x()
window_mouse_get_y()
window_mouse_set(x,y)
window_mouse_set_locked(enable)
window_mouse_get_locked()
window_mouse_get_delta_x()
window_mouse_get_delta_y()

// section 5.10

view_enabled
view_current*
view_visible[0..7]
// view_xview[0..7]
// view_yview[0..7]
// view_wview[0..7]
// view_hview[0..7]
view_xport[0..7]
view_yport[0..7]
view_wport[0..7]
view_hport[0..7]
// view_angle[0..7]
// view_hborder[0..7]
// view_vborder[0..7]
// view_hspeed[0..7]
// view_vspeed[0..7]
// view_object[0..7]
view_surface_id[0..7]
view_camera[0..7]
window_view_mouse_get_x(id)
window_view_mouse_get_y(id)
window_views_mouse_get_x()
window_views_mouse_get_y()


//////////////
// Chapter 406
//////////////

// section 6.3

audio_listener_position(x,y,z)
audio_listener_velocity(vx,vy,vz)
audio_listener_orientation(lookat_x,lookat_y,lookat_z,up_x,up_y,up_z)
audio_emitter_position(emitterid,x,y,z)
audio_emitter_create()
audio_emitter_free(emitterid)
audio_emitter_exists(emitterid)
audio_emitter_pitch(emitterid,pitch)
audio_emitter_velocity(emitterid,vx,vy,vz)
audio_emitter_falloff(emitterid, falloff_ref_dist,falloff_max_dist,falloff_factor)
audio_emitter_gain(emitterid,gain)
audio_play_sound(soundid,priority,loops,[gain],[offset],[pitch],[listener_mask])
audio_play_sound_on(emitterid,soundid,loops,priority,[gain],[offset],[pitch],[listener_mask])
audio_play_sound_at(soundid,x,y,z,falloff_ref_dist,falloff_max_dist,falloff_factor,loops,priority,[gain],[offset],[pitch],[listener_mask])
audio_play_sound_ext(params)
audio_stop_sound(soundid)
audio_resume_music()&
audio_music_is_playing()&
audio_resume_sound(soundid)
audio_pause_sound(soundid)
audio_pause_music()&
audio_channel_num(numchannels)
audio_sound_length(soundid)
audio_get_type(soundid)
audio_falloff_set_model(falloffmode)
audio_play_music(soundid,loops)&
audio_stop_music()&
audio_master_gain(gain)
audio_music_gain(value,time)&
audio_sound_gain(index,level,time)
audio_sound_pitch(index,pitch)
audio_stop_all()
audio_resume_all()
audio_pause_all()
audio_is_playing(soundid)
audio_is_paused(soundid)
audio_exists(soundid)
audio_system_is_available()
audio_system_is_initialised()
audio_sound_is_playable(soundid)

//audio revision-getters
//audio_sound_set_track_position(soundid,time)
//audio_sound_get_track_position(soundid)
audio_emitter_get_gain(emitterid)
audio_emitter_get_pitch(emitterid)
audio_emitter_get_x(emitterid)
audio_emitter_get_y(emitterid)
audio_emitter_get_z(emitterid)
audio_emitter_get_vx(emitterid)
audio_emitter_get_vy(emitterid)
audio_emitter_get_vz(emitterid)
audio_listener_set_position(index, x,y,z)
audio_listener_set_velocity(index, vx,vy,vz)
audio_listener_set_orientation(index, lookat_x,lookat_y,lookat_z,up_x,up_y,up_z)
audio_listener_get_data(index)
audio_set_master_gain(listenerIndex, gain)
audio_get_master_gain(listenerIndex)
audio_sound_get_gain(index)
audio_sound_get_pitch(index)
audio_get_name(index)
audio_sound_get_asset(voiceIndex)
audio_sound_set_track_position(index, time)
audio_sound_get_track_position(index)
audio_sound_loop(voiceIndex, loopState)
audio_sound_get_loop(voiceIndex)
audio_sound_loop_start(index, time)
audio_sound_get_loop_start(index)
audio_sound_loop_end(index, time)
audio_sound_get_loop_end(index)
audio_create_stream(filename)!
audio_destroy_stream(stream_sound_id)!
audio_create_sync_group(looping)
audio_destroy_sync_group(sync_group_id)
audio_play_in_sync_group(sync_group_id,soundid)
audio_start_sync_group(sync_group_id)
audio_stop_sync_group(sync_group_id)
audio_pause_sync_group(sync_group_id)
audio_resume_sync_group(sync_group_id)
audio_sync_group_get_track_pos(sync_group_id)
audio_sync_group_debug(sync_group_id)
audio_sync_group_is_playing(sync_group_id)
audio_sync_group_is_paused(sync_group_id)
audio_debug(enable)
audio_throw_on_error(enable)

audio_group_load( groupId )
audio_group_unload( groupId )
audio_group_is_loaded( groupId )
audio_group_load_progress( groupId )
audio_group_name( groupId )
audio_group_stop_all( groupId )
audio_group_set_gain( groupId, volume, time )
audio_group_get_gain(groupId)
audio_group_get_assets(groupId)
audio_sound_get_audio_group(index)

audio_create_buffer_sound( bufferId, format, rate, offset, length, channels )!
audio_free_buffer_sound( soundId )!
audio_create_play_queue(bufferFormat, sampleRate, channels)!
audio_free_play_queue(queueId)!
audio_queue_sound(queueId, buffer_id, offset, length)!

audio_get_recorder_count()
audio_get_recorder_info(recorder_num)
audio_start_recording(recorder_num)
audio_stop_recording(channel_index)

audio_sound_get_listener_mask(soundid)
audio_emitter_get_listener_mask(emitterid)
audio_get_listener_mask()
audio_sound_set_listener_mask(soundid,mask)
audio_emitter_set_listener_mask(emitterid,mask)
audio_set_listener_mask(mask)
audio_get_listener_count()
audio_get_listener_info(index)

audio_system()&


//////////////
// Chapter 407
//////////////

// section 7.2

show_message(str)
show_message_async(str)
clickable_add(x,y,spritetpe,URL,target,params)
clickable_add_ext(x,y,spritetpe,URL,target,params,scale,alpha)
clickable_change(buttonid,spritetpe,x,y)
clickable_change_ext(buttonid,spritetpe,x,y,scale,alpha)
clickable_delete(buttonid)
clickable_exists(index)
clickable_set_style(buttonid,map)

show_question(str)
show_question_async(str)
get_integer(str,def)&
get_string(str,def)&
get_integer_async(str,def)
get_string_async(str,def)
get_login_async(username,password)
get_open_filename(filter,fname)
get_save_filename(filter,fname)
get_open_filename_ext(filter,fname,dir,title)
get_save_filename_ext(filter,fname,dir,title)
show_error(str,abort)

// section 7.3

highscore_clear()
highscore_add(str,numb)
highscore_value(place)
highscore_name(place)
draw_highscore(x1,y1,x2,y2)


//////////////
// Chapter 408
//////////////

// section 8.1

sprite_exists(ind)
sprite_get_name(ind)
sprite_get_number(ind)
sprite_get_width(ind)
sprite_get_height(ind)
sprite_get_xoffset(ind)
sprite_get_yoffset(ind)
sprite_get_bbox_mode(ind)
sprite_get_bbox_left(ind)
sprite_get_bbox_right(ind)
sprite_get_bbox_top(ind)
sprite_get_bbox_bottom(ind)

sprite_set_bbox_mode(ind,mode)
sprite_set_bbox(ind,left,top,right,bottom)

sprite_save(ind,subimg,fname)
sprite_save_strip(ind,fname)

sprite_set_cache_size(ind, max)
sprite_set_cache_size_ext(ind, image, max)
sprite_get_tpe(index,subindex)

sprite_prefetch(ind)
sprite_prefetch_multi(indarray)

sprite_flush(ind)
sprite_flush_multi(indarray)

sprite_set_speed(ind,speed,type)
sprite_get_speed_type(ind)
sprite_get_speed(ind)

sprite_get_info(ind)
sprite_get_nineslice(ind)
sprite_set_nineslice(ind,nineslice)
sprite_nineslice_create()

texture_is_ready(tex_id)
texture_prefetch(tex_id_or_groupname)
texture_flush(tex_id_or_groupname)

texturegroup_get_textures(groupname)
texturegroup_get_sprites(groupname)
texturegroup_get_fonts(groupname)
texturegroup_get_tilesets(groupname)
texturegroup_get_names()

texturegroup_load(groupname,[prefetch])
texturegroup_unload(groupname)
texturegroup_get_status(groupname)
texturegroup_set_mode(explicit,debug,default_sprite)

texture_debug_messages(debug_level)

spritespeed_framespersecond#
spritespeed_framespergameframe#

// section 8.4

font_exists(ind)
font_get_name(ind)
font_get_fontname(ind)
font_get_bold(ind)
font_get_italic(ind)
font_get_first(ind)
font_get_last(ind)
font_get_size(ind)
font_set_cache_size(font,max)

// section 8.5

path_exists(ind)
path_get_name(ind)
path_get_length(ind)
path_get_kind(ind)
path_get_closed(ind)
path_get_precision(ind)
path_get_number(ind)
path_get_point_x(ind,n)
path_get_point_y(ind,n)
path_get_point_speed(ind,n)
path_get_x(ind,pos)
path_get_y(ind,pos)
path_get_speed(ind,pos)

// section 8.6

script_exists(ind)
script_get_name(ind)


timeline_add()!
timeline_delete(ind)!
timeline_clear(ind)
timeline_exists(ind)
timeline_get_name(ind)
timeline_moment_clear(ind,step)
timeline_moment_add_script(ind,step,script)
timeline_size(ind)
timeline_max_moment(ind)

// section 8.8

object_exists(ind)
object_get_name(ind)
object_get_sprite(ind)
object_get_solid(ind)
object_get_visible(ind)
object_get_persistent(ind)
object_get_mask(ind)
object_get_parent(ind)
object_get_physics(ind)
object_is_ancestor(ind_child,ind_parent)

// section 8.9

room_exists(ind)
room_get_name(ind)
room_get_info(ind,[views],[instances],[layers],[layer_elements],[tilemap_data])

//////////////
// Chapter 409
//////////////

// section 9.1

sprite_set_offset(ind,xoff,yoff)
sprite_duplicate(ind)!
sprite_assign(ind,source)
sprite_merge(ind1,ind2)
sprite_add(fname,imgnumb,removeback,smooth,xorig,yorig)!
sprite_add_ext(fname,imgnumb,xorig,yorig,prefetch)!
sprite_replace(ind,fname,imgnumb,removeback,smooth,xorig,yorig)!
sprite_create_from_surface(id,x,y,w,h,removeback,smooth,xorig,yorig)!
sprite_add_from_surface(ind,id,x,y,w,h,removeback,smooth)!
sprite_delete(ind)!
sprite_set_alpha_from_sprite(ind,spr)
sprite_collision_mask(ind,sepmasks,bboxmode,bbleft,bbtop,bbright,bbbottom,kind,tolerance)

sprite_add_ext_error_unknown#
sprite_add_ext_error_cancelled#
sprite_add_ext_error_spritenotfound#
sprite_add_ext_error_loadfailed#
sprite_add_ext_error_decompressfailed#
sprite_add_ext_error_setupfailed#

// section 9.4

font_add_enable_aa(enable)
font_add_get_enable_aa()
font_add(name,size,bold,italic,first,last)!
font_add_sprite(spr,first,prop,sep)!
font_add_sprite_ext(spr,mapstring,prop,sep)!

font_replace_sprite(ind,spr,first,prop,sep)!
font_replace_sprite_ext(font,spr,string_map,prop,sep)!
font_delete(ind)!

font_enable_sdf(ind,enable)!
font_get_sdf_enabled(ind)!
font_sdf_spread(ind,spread)!
font_get_sdf_spread(ind)!

font_enable_effects(ind,enable, [params])!

// section 9.5

path_set_kind(ind,kind)
path_set_closed(ind,closed)
path_set_precision(ind,prec)
path_add()!
path_assign(ind,path)
path_duplicate(ind)!
path_append(ind,path)
path_delete(ind)
path_add_point(ind,x,y,speed)
path_insert_point(ind,n,x,y,speed)
path_change_point(ind,n,x,y,speed)
path_delete_point(ind,n)!
path_clear_points(ind)
path_reverse(ind)
path_mirror(ind)
path_flip(ind)
path_rotate(ind,angle)
path_rescale(ind,xscale,yscale)
path_shift(ind,xshift,yshift)

// section 9.6

script_execute(ind,arg0,arg1,...)
script_execute_ext(ind,[array],[offset=0],[num_args=array_length(array)-offset],...)
method_call(method,[array],[offset=0],[num_args=array_length(array)-offset],...)

// section 9.8

object_set_sprite(ind,spr)
object_set_solid(ind,solid)
object_set_visible(ind,vis)
object_set_persistent(ind,pers)
object_set_mask(ind,spr)

// section 9.9

room_set_width(ind,w)
room_set_height(ind,h)
room_set_persistent(ind,pers)
room_set_background_colour(ind,col,show)£&
room_set_background_color(ind,col,show)$&
// room_set_view(ind,vind,vis,xview,yview,wview,hview,xport,yport,wport,hport,hborder,vborder,hspeed,vspeed,obj)
room_set_viewport(ind,vind,vis,xport,yport,wport,hport)
room_get_viewport(ind,vind)
room_set_view_enabled(ind,val)
room_add()!
room_duplicate(ind)!
room_assign(ind,source)
room_instance_add(ind,x,y,obj)
room_instance_clear(ind)

room_get_camera(ind,vind)
room_set_camera(ind,vind,camera)

asset_get_index(name)
asset_get_type(name)
asset_get_ids(asset_type)

asset_object#
asset_unknown#
asset_sprite#
asset_sound#
asset_room#
asset_path#
asset_script#
asset_font#
asset_timeline#
asset_tiles#
asset_shader#
asset_sequence#
asset_animationcurve#
asset_particlesystem#

//////////////
// Chapter 410
//////////////

// section 10.1

file_text_open_from_string(content)
file_text_open_read(fname)
file_text_open_write(fname)
file_text_open_append(fname)
file_text_close(file)
file_text_write_string(file,str)
file_text_write_real(file,val)
file_text_writeln(file)
file_text_read_string(file)
file_text_read_real(file)
file_text_readln(file)
file_text_eof(file)
file_text_eoln(file)
file_exists(fname)
file_delete(fname)
file_rename(oldname,newname)
file_copy(fname,newname)
directory_exists(dname)
directory_create(dname)
directory_destroy(dname)
file_find_first(mask,attr)
file_find_next()
file_find_close()
file_attributes(fname,attr)
filename_name(fname)
filename_path(fname)
filename_dir(fname)
filename_drive(fname)
filename_ext(fname)
filename_change_ext(fname,newext)
file_bin_open(fname,mode)
file_bin_rewrite(file)
file_bin_close(file)
file_bin_position(file)
file_bin_size(file)
file_bin_seek(file,pos)
file_bin_write_byte(file,byte)
file_bin_read_byte(file)
parameter_count()
parameter_string(n)
environment_get_variable(name)
fa_none#
fa_readonly#
fa_hidden#
fa_sysfile#
fa_volumeid#
fa_directory#
fa_archive#
game_id*
game_display_name*
game_project_name*
game_save_id*
working_directory*
temp_directory*
cache_directory*
program_directory*

// section 10.3

ini_open_from_string(content)
ini_open(fname)
ini_close()
ini_read_string(section,key,default)
ini_read_real(section,key,default)
ini_write_string(section,key,str)
ini_write_real(section,key,value)
ini_key_exists(section,key)
ini_section_exists(section)
ini_key_delete(section,key)
ini_section_delete(section)


//////////////
// Chapter 411
//////////////

// section 11.0

ds_set_precision(prec)
ds_exists(id, type)

ds_type_map#
ds_type_list#
ds_type_stack#
ds_type_queue#
ds_type_grid#
ds_type_priority#

// section 11.1

ds_stack_create()
ds_stack_destroy(id)
ds_stack_clear(id)
ds_stack_copy(destination,source)
ds_stack_size(id)
ds_stack_empty(id)
ds_stack_push(id,value,...)
ds_stack_pop(id)
ds_stack_top(id)
ds_stack_write(id)
ds_stack_read(id,str,...)

// section 11.2

ds_queue_create()
ds_queue_destroy(id)
ds_queue_clear(id)
ds_queue_copy(destination,source)
ds_queue_size(id)
ds_queue_empty(id)
ds_queue_enqueue(id,value,...)
ds_queue_dequeue(id)
ds_queue_head(id)
ds_queue_tail(id)
ds_queue_write(id)
ds_queue_read(id,str,...)

// section 11.3

ds_list_create()
ds_list_destroy(id)
ds_list_clear(id)
ds_list_copy(destination,source)
ds_list_size(id)
ds_list_empty(id)
ds_list_add(id,value,...)
ds_list_insert(id,pos,value)
ds_list_replace(id,pos,value)
ds_list_delete(id,pos)
ds_list_find_index(id,value)
ds_list_find_value(id,pos)
ds_list_is_map(id,pos)
ds_list_is_list(id,pos)
ds_list_mark_as_list(id,pos)
ds_list_mark_as_map(id,pos)
ds_list_sort(id,ascending)
ds_list_shuffle(id)
ds_list_write(id)
ds_list_read(id,str,...)
ds_list_set(id,pos,value)


// section 11.4

ds_map_create()
ds_map_destroy(id)
ds_map_clear(id)
ds_map_copy(destination,source)
ds_map_size(id)
ds_map_empty(id)
ds_map_add(id,key,value)
ds_map_add_list(id,key,value)
ds_map_add_map(id,key,value)
ds_map_replace(id,key,value)
ds_map_replace_map(id,key,value)
ds_map_replace_list(id,key,value)
ds_map_delete(id,key)
ds_map_exists(id,key)
ds_map_values_to_array(id,array*,...)
ds_map_keys_to_array(id,array*,...)
ds_map_find_value(id,key)
ds_map_is_map(id,key)
ds_map_is_list(id,key)
ds_map_find_previous(id,key)
ds_map_find_next(id,key)
ds_map_find_first(id)
ds_map_find_last(id)
ds_map_write(id)
ds_map_read(id,str,...)
ds_map_secure_save(id, filename)
ds_map_secure_load(filename)
ds_map_secure_load_buffer(buffer)
ds_map_secure_save_buffer(id,buffer)
ds_map_set(id,key,value)


// section 11.5

ds_priority_create()
ds_priority_destroy(id)
ds_priority_clear(id)
ds_priority_copy(destination,source)
ds_priority_size(id)
ds_priority_empty(id)
ds_priority_add(id,value,priority)
ds_priority_change_priority(id,value,priority)
ds_priority_find_priority(id,value)
ds_priority_delete_value(id,value)
ds_priority_delete_min(id)
ds_priority_find_min(id)
ds_priority_delete_max(id)
ds_priority_find_max(id)
ds_priority_write(id)
ds_priority_read(id,str,...)

// section 11.6

ds_grid_create(w,h)
ds_grid_destroy(id)
ds_grid_copy(destination,source)
ds_grid_resize(id,w,h)
ds_grid_width(id)
ds_grid_height(id)
ds_grid_clear(id,val)
ds_grid_add(id,x,y,val)
ds_grid_multiply(id,x,y,val)
ds_grid_set_region(id,x1,y1,x2,y2,val)
ds_grid_add_region(id,x1,y1,x2,y2,val)
ds_grid_multiply_region(id,x1,y1,x2,y2,val)
ds_grid_set_disk(id,xm,ym,r,val)
ds_grid_add_disk(id,xm,ym,r,val)
ds_grid_multiply_disk(id,xm,ym,r,val)
ds_grid_set_grid_region(id,source,x1,y1,x2,y2,xpos,ypos)
ds_grid_add_grid_region(id,source,x1,y1,x2,y2,xpos,ypos)
ds_grid_multiply_grid_region(id,source,x1,y1,x2,y2,xpos,ypos)
ds_grid_get_sum(id,x1,y1,x2,y2)
ds_grid_get_max(id,x1,y1,x2,y2)
ds_grid_get_min(id,x1,y1,x2,y2)
ds_grid_get_mean(id,x1,y1,x2,y2)
ds_grid_get_disk_sum(id,xm,ym,r)
ds_grid_get_disk_min(id,xm,ym,r)
ds_grid_get_disk_max(id,xm,ym,r)
ds_grid_get_disk_mean(id,xm,ym,r)
ds_grid_value_exists(id,x1,y1,x2,y2,val)
ds_grid_value_x(id,x1,y1,x2,y2,val)
ds_grid_value_y(id,x1,y1,x2,y2,val)
ds_grid_value_disk_exists(id,xm,ym,r,val)
ds_grid_value_disk_x(id,xm,ym,r,val)
ds_grid_value_disk_y(id,xm,ym,r,val)
ds_grid_shuffle(id)
ds_grid_write(id)
ds_grid_read(id,str,...)
ds_grid_sort(id,column,ascending)
ds_grid_set(id,x,y,value)
ds_grid_get(id,x,y)
ds_grid_to_mp_grid(src,dest,[func])

//////////////
// Chapter 412
//////////////

// section 12.1a

effect_create_below(kind,x,y,size,col)
effect_create_above(kind,x,y,size,col)
effect_create_layer(layer_id_or_name,kind,x,y,size,col)
effect_create_depth(depth,kind,x,y,size,col)
effect_clear()
ef_explosion#
ef_ring#
ef_ellipse#
ef_firework#
ef_smoke#
ef_smokeup#
ef_star#
ef_spark#
ef_flare#
ef_cloud#
ef_rain#
ef_snow#

// section 12.1

part_type_create()
part_type_destroy(ind)
part_type_exists(ind)
part_type_clear(ind)
part_type_shape(ind,shape)
part_type_sprite(ind,sprite,animat,stretch,random)
part_type_subimage(ind,subimg)
part_type_size(ind,size_min,size_max,size_incr,size_wiggle)
part_type_size_x(ind,size_min_x,size_max_x,size_incr_x,size_wiggle_y)
part_type_size_y(ind,size_min_y,size_max_y,size_incr_y,size_wiggle_y)
part_type_scale(ind,xscale,yscale)
part_type_orientation(ind,ang_min,ang_max,ang_incr,ang_wiggle,ang_relative)
part_type_life(ind,life_min,life_max)
part_type_step(ind,step_number,step_type)
part_type_death(ind,death_number,death_type)
part_type_speed(ind,speed_min,speed_max,speed_incr,speed_wiggle)
part_type_direction(ind,dir_min,dir_max,dir_incr,dir_wiggle)
part_type_gravity(ind,grav_amount,grav_dir)
part_type_colour1(ind,colour1)£
part_type_colour2(ind,colour1,colour2)£
part_type_colour3(ind,colour1,colour2,colour3)£
part_type_colour_mix(ind,colour1,colour2)£
part_type_colour_rgb(ind,rmin,rmax,gmin,gmax,bmin,bmax)£
part_type_colour_hsv(ind,hmin,hmax,smin,smax,vmin,vmax)£
part_type_color1(ind,color1)$
part_type_color2(ind,color1,color2)$
part_type_color3(ind,color1,color2,color3)$
part_type_color_mix(ind,color1,color2)$
part_type_color_rgb(ind,rmin,rmax,gmin,gmax,bmin,bmax)$
part_type_color_hsv(ind,hmin,hmax,smin,smax,vmin,vmax)$
part_type_alpha1(ind,alpha1)
part_type_alpha2(ind,alpha1,alpha2)
part_type_alpha3(ind,alpha1,alpha2,alpha3)
part_type_blend(ind,additive)
pt_shape_pixel#
pt_shape_disk#
pt_shape_square#
pt_shape_line#
pt_shape_star#
pt_shape_circle#
pt_shape_ring#
pt_shape_sphere#
pt_shape_flare#
pt_shape_spark#
pt_shape_explosion#
pt_shape_cloud#
pt_shape_smoke#
pt_shape_snow#

// section 12.2
particle_get_info(ind)
particle_exists(ind)

part_system_create([partsys])
part_system_create_layer(layer,persistent,[partsys])
part_system_destroy(ind)
part_system_exists(ind)
part_system_clear(ind)
part_system_draw_order(ind,oldtonew)
part_system_depth(ind,depth)
part_system_color(ind,color,alpha)$
part_system_colour(ind,colour,alpha)£
part_system_position(ind,x,y)
part_system_angle(ind,angle)
part_system_automatic_update(ind,automatic)
part_system_automatic_draw(ind,draw)
part_system_update(ind)
part_system_drawit(ind)
part_system_get_layer(ind)
part_system_layer(ind,layer)
part_system_global_space(ind,enable)
part_system_get_info(ind)

part_particles_create(ind,x,y,parttype,number)
part_particles_create_colour(ind,x,y,parttype,colour,number)£
part_particles_create_color(ind,x,y,parttype,color,number)$
part_particles_burst(ind,x,y,partsys)
part_particles_clear(ind)
part_particles_count(ind)

// section 12.3

part_emitter_create(ps)
part_emitter_destroy(ps,ind)
part_emitter_destroy_all(ps)
part_emitter_enable(ps,ind,enable)
part_emitter_exists(ps,ind)
part_emitter_clear(ps,ind)
part_emitter_region(ps,ind,xmin,xmax,ymin,ymax,shape,distribution)
part_emitter_burst(ps,ind,parttype,number)
part_emitter_stream(ps,ind,parttype,number)
part_emitter_delay(ps,ind,delay_min,delay_max,delay_unit)
part_emitter_interval(ps,ind,interval_min,interval_max,inerval_unit)
part_emitter_relative(ps,ind,enable)
ps_distr_linear#
ps_distr_gaussian#
ps_distr_invgaussian#
ps_shape_rectangle#
ps_shape_ellipse#
ps_shape_diamond#
ps_shape_line#
ps_mode_stream#
ps_mode_burst#

//////////////
// Chapter 414
//////////////

external_call(id,arg1,arg2,...)!
external_define(dll,name,calltype,restype,argnumb,arg1type,arg2type,...)!
external_free(dllname)!
window_handle()
window_device()
ty_real#
ty_string#
dll_cdecl#
dll_stdcall#
//////////////
// Chapter 415
//////////////

matrix_view#
matrix_projection#
matrix_world#
matrix_get(type)
matrix_set(type,matrix)
matrix_build_identity()
matrix_build(x,y,z,xrotation,yrotation,zrotation,xscale,yscale,zscale)
matrix_build_lookat(xfrom,yfrom,zfrom,xto,yto,zto,xup,yup,zup)
matrix_build_projection_ortho(width,height,znear,zfar)
matrix_build_projection_perspective(width,height,znear,zfar)
matrix_build_projection_perspective_fov(fov_y,aspect,znear,zfar)
matrix_multiply(matrix,matrix)
matrix_transform_vertex(matrix, x, y, z, [w])
matrix_inverse(matrix)

matrix_stack_push(...)
matrix_stack_pop()
//matrix_stack_multiply(matrix)
matrix_stack_set(matrix)
matrix_stack_clear()
matrix_stack_top()
matrix_stack_is_empty()


// YoYo extension stuff
os_win32#&
os_windows#
os_macosx#
os_ios#
os_android#
//os_symbian#
os_linux#
os_unknown#
os_winphone#
//os_tizen#
os_win8native#
//os_wiiu#
//os_3ds#
os_psvita#
//os_bb10#
os_ps4#
os_xboxone#
os_ps3#
//os_xbox360#
os_uwp#
os_tvos#
os_switch#
os_ps5#
os_xboxseriesxs#
os_gdk#
os_operagx#
os_gxgames#

browser_not_a_browser#
browser_unknown#
browser_ie#
browser_firefox#
browser_chrome#
browser_safari#
browser_safari_mobile#
browser_opera#
browser_tizen#
browser_edge#
browser_windows_store#
browser_ie_mobile#
browser_width*
browser_height*
browser_input_capture(enable)

device_ios_unknown#
device_ios_iphone#
device_ios_iphone_retina#
device_ios_ipad#
device_ios_ipad_retina#
device_ios_iphone5#
device_ios_iphone6#
device_ios_iphone6plus#

device_emulator#
device_tablet#

display_landscape#
display_landscape_flipped#
display_portrait#
display_portrait_flipped#

os_type*
os_device*
os_browser*
os_version*
os_get_config()
os_get_info()
os_get_language()
os_get_region()
os_check_permission(permission)
os_request_permission(permission,..)
os_lock_orientation(flag)
os_set_orientation_lock(landscape_enable,portrait_enable)
display_get_dpi_x()
display_get_dpi_y()
display_set_gui_size(width,height)
display_set_gui_maximise(xscale,yscale,xoffset,yoffset,...)£
display_set_gui_maximize(xscale,yscale,xoffset,yoffset,...)$
device_mouse_dbclick_enable(enable)
display_aa*
async_load*
delta_time*
webgl_enabled*
event_data*

display_set_timing_method(method)
display_get_timing_method()
tm_sleep#
tm_countvsyncs#
tm_systemtiming#

display_set_sleep_margin(milliseconds)
display_get_sleep_margin()

of_challenge_win#
of_challenge_lose#
of_challenge_tie#

leaderboard_type_number#
leaderboard_type_time_mins_secs#


virtual_key_add(x,y,w,h,keycode)
virtual_key_hide(id)
virtual_key_delete(id)
virtual_key_show(id)
draw_enable_drawevent(enable)
draw_enable_swf_aa(enable)!
draw_set_swf_aa_level(aa_level)!
draw_get_swf_aa_level()!
draw_enable_svg_aa(enable)!
draw_set_svg_aa_level(aa_level)!
draw_get_svg_aa_level()!
draw_texture_flush()
draw_flush()

// GPU state setting

// Constants
cmpfunc_never#
cmpfunc_less#
cmpfunc_equal#
cmpfunc_lessequal#
cmpfunc_greater#
cmpfunc_notequal#
cmpfunc_greaterequal#
cmpfunc_always#

stencilop_keep#
stencilop_zero#
stencilop_replace#
stencilop_incr_wrap#
stencilop_decr_wrap#
stencilop_invert#
stencilop_incr#
stencilop_decr#

cull_noculling#
cull_clockwise#
cull_counterclockwise#

lighttype_dir#
lighttype_point#


gpu_set_stencil_depth_fail(stencil_op)
gpu_set_stencil_enable(enable)
gpu_set_stencil_fail(stencil_op)
gpu_set_stencil_func(cmp_func)
gpu_set_stencil_pass(stencil_op)
gpu_set_stencil_read_mask(mask)
gpu_set_stencil_ref(ref)
gpu_set_stencil_write_mask(mask)
gpu_set_sprite_cull(enable)
gpu_set_blendenable(enable)
gpu_set_ztestenable(enable)
gpu_set_zfunc(cmp_func)
gpu_set_zwriteenable(enable)
gpu_set_depth(depth)
//gpu_set_lightingenable(enable)
gpu_set_fog(enable,col,start,end,...)
gpu_set_cullmode(cullmode)
gpu_set_blendmode(mode)
gpu_set_blendmode_ext(src,dest)
gpu_set_blendmode_ext_sepalpha(src,dest,srcalpha,destalpha)
gpu_set_blendequation(equation)
gpu_set_blendequation_sepalpha(equation, equation_alpha)
gpu_set_colorwriteenable(red_or_array,green*,blue*,alpha*,...)$
gpu_set_colourwriteenable(red_or_arry,green*,blue*,alpha*,...)£
gpu_set_alphatestenable(enable)
gpu_set_alphatestref(value)
gpu_set_texfilter(linear)
gpu_set_texfilter_ext(sampler_id,linear)
gpu_set_texrepeat(repeat)
gpu_set_texrepeat_ext(sampler_id,repeat)
gpu_set_tex_filter(linear)
gpu_set_tex_filter_ext(sampler_id,linear)
gpu_set_tex_repeat(repeat)
gpu_set_tex_repeat_ext(sampler_id,repeat)

gpu_set_tex_mip_filter(filter)
gpu_set_tex_mip_filter_ext(sampler_id,filter)
gpu_set_tex_mip_bias(bias)
gpu_set_tex_mip_bias_ext(sampler_id,bias)
gpu_set_tex_min_mip(minmip)
gpu_set_tex_min_mip_ext(sampler_id,minmip)
gpu_set_tex_max_mip(maxmip)
gpu_set_tex_max_mip_ext(sampler_id,maxmip)
gpu_set_tex_max_aniso(maxaniso)
gpu_set_tex_max_aniso_ext(sampler_id,maxaniso)
gpu_set_tex_mip_enable(setting)
gpu_set_tex_mip_enable_ext(sampler_id,setting)

gpu_get_stencil_enable()
gpu_get_stencil_func()
gpu_get_stencil_ref()
gpu_get_stencil_read_mask()
gpu_get_stencil_write_mask()
gpu_get_stencil_fail()
gpu_get_stencil_depth_fail()
gpu_get_stencil_pass()
gpu_get_sprite_cull()
gpu_get_blendenable()
gpu_get_ztestenable()
gpu_get_zfunc()
gpu_get_zwriteenable()
gpu_get_depth()
//gpu_get_lightingenable()
gpu_get_fog()
gpu_get_cullmode()
gpu_get_blendmode()
gpu_get_blendmode_ext()
gpu_get_blendmode_ext_sepalpha()
gpu_get_blendmode_src()
gpu_get_blendmode_dest()
gpu_get_blendmode_srcalpha()
gpu_get_blendmode_destalpha()
gpu_get_blendequation()
gpu_get_blendequation_sepalpha()
gpu_get_colorwriteenable()$
gpu_get_colourwriteenable()£
gpu_get_alphatestenable()
gpu_get_alphatestref()
gpu_get_texfilter()
gpu_get_texfilter_ext(sampler_id)
gpu_get_texrepeat()
gpu_get_texrepeat_ext(sampler_id)
gpu_get_tex_filter()
gpu_get_tex_filter_ext(sampler_id)
gpu_get_tex_repeat()
gpu_get_tex_repeat_ext(sampler_id)

gpu_get_tex_mip_filter()
gpu_get_tex_mip_filter_ext(sampler_id)
gpu_get_tex_mip_bias()
gpu_get_tex_mip_bias_ext(sampler_id)
gpu_get_tex_min_mip()
gpu_get_tex_min_mip_ext(sampler_id)
gpu_get_tex_max_mip()
gpu_get_tex_max_mip_ext(sampler_id)
gpu_get_tex_max_aniso()
gpu_get_tex_max_aniso_ext(sampler_id)
gpu_get_tex_mip_enable()
gpu_get_tex_mip_enable_ext(sampler_id)

gpu_push_state()
gpu_pop_state()

gpu_get_state()
gpu_set_state(map)

gpu_get_scissor()
gpu_set_scissor(xOrStruct, [y], [w], [h])

draw_light_define_ambient(col)
draw_light_define_direction(ind,dx,dy,dz,col)
draw_light_define_point(ind,x,y,z,range,col)
draw_light_enable(ind,enable)
draw_set_lighting(enable)

draw_light_get_ambient()
draw_light_get(ind)
draw_get_lighting()


shop_leave_rating(text_string,yes_string,no_string,url)


url_get_domain()
url_open(url)
url_open_ext(url,target)
url_open_full(url,target,options)
get_timer()

achievement_login()&
achievement_logout()&
achievement_post(achievement_name,value)&
achievement_increment(achievement_name,value)&
achievement_post_score(score_name,value)&
achievement_available()&
achievement_show_achievements()&
achievement_show_leaderboards()&
achievement_load_friends()&
achievement_load_leaderboard(ident,minindex,maxindex,filter)&
achievement_send_challenge(to,challengeid,score,type,msg)&
achievement_load_progress()&
achievement_reset()&
achievement_login_status()&
achievement_get_pic(char)&

achievement_show_challenge_notifications(receive_challenge,local_complete,remote_complete)&
achievement_get_challenges()&
achievement_event(stringid)&
achievement_show(type,val)&
achievement_get_info(userid)&


cloud_file_save(filename, description)&
cloud_string_save(data, description)&
cloud_synchronise()&


device_get_tilt_x()
device_get_tilt_y()
device_get_tilt_z()
device_is_keypad_open()


// Multi-touch functionality
device_mouse_check_button(device,button)
device_mouse_check_button_pressed(device,button)
device_mouse_check_button_released(device,button)
device_mouse_x(device)
device_mouse_y(device)
device_mouse_raw_x(device)
device_mouse_raw_y(device)
device_mouse_x_to_gui(device)
device_mouse_y_to_gui(device)


// In-app purchases functionality
iap_activate(ds_list)&
iap_status()&
iap_enumerate_products(ds_list)&
iap_restore_all()&
iap_acquire(product_id, payload)&
iap_consume(product_id)&
iap_product_details(product_id, ds_map)&
iap_purchase_details(purchase_id, ds_map)&

iap_data*
iap_ev_storeload#
iap_ev_product#
iap_ev_purchase#
iap_ev_consume#
iap_ev_restore#

iap_storeload_ok#
iap_storeload_failed#

iap_status_uninitialised#
iap_status_unavailable#
iap_status_loading#
iap_status_available#
iap_status_processing#
iap_status_restoring#

iap_failed#
iap_unavailable#
iap_available#
iap_purchased#
iap_canceled#
iap_refunded#

// Gamepad API
gamepad_is_supported()
gamepad_get_device_count()
gamepad_is_connected(device)
gamepad_get_description(device)
gamepad_get_button_threshold(device)
gamepad_set_button_threshold(device, threshold)
gamepad_get_axis_deadzone(device)
gamepad_set_axis_deadzone(device, deadzone)
gamepad_button_count(device)
gamepad_button_check(device, buttonIndex)
gamepad_button_check_pressed(device, buttonIndex)
gamepad_button_check_released(device, buttonIndex)
gamepad_button_value(device, buttonIndex)
gamepad_axis_count(axis)
gamepad_axis_value(device, axisIndex)
gamepad_set_vibration(device, leftMotorSpeed, rightMotorSpeed)
gamepad_set_colour(index,colour)£
gamepad_set_color(index,color)$
gamepad_hat_count(axis)
gamepad_hat_value(device, axisIndex)
gamepad_remove_mapping(device)
gamepad_test_mapping(device, mapping_string)
gamepad_get_mapping(device)
gamepad_get_guid(device)
gamepad_set_option(gamepad_id, option_key, option_value)
gamepad_get_option(gamepad_id, option_key)
gamepad_enumerate()

// Check to see if a pause event has come from an OS activity this frame
os_is_paused()
window_has_focus()
code_is_compiled()

// general async commands and related functionality
http_get(url)
http_get_file(url, dest)
http_post_string(url, string)
http_request(url, method, header_map, body)
http_get_request_crossorigin()
http_set_request_crossorigin(crossorigin_type)
http_get_connect_timeout()
http_set_connect_timeout(connect_timeout_ms)
json_encode(ds_map, [prettify])
json_decode(string)
json_stringify(val, [prettify], [filter_func])
json_parse(json, [filter_func], [inhibit_string_convert])
zip_unzip(file, destPath)
zip_unzip_async(file, destPath)
zip_create()
zip_add_file(zip_object, dest, src)
zip_save(zip_object, path)

load_csv(filename)

base64_encode(string)
base64_decode(string)
md5_string_unicode(string)
md5_string_utf8(string)
md5_file(fname)
os_is_network_connected(attempt_connection,...)
sha1_string_unicode(string)
sha1_string_utf8(string)
sha1_file(fname)
os_powersave_enable(enable)
analytics_event(string)&
analytics_event_ext(string, string_param_name1, number_value1, ...)&

// Metro live tile commands
win8_livetile_tile_notification(template, ds_map, expiry, tag)&
win8_livetile_tile_clear()&
win8_livetile_badge_notification(id)&
win8_livetile_badge_clear()&
win8_livetile_queue_enable(flag)&

// Metro secondary tiles
win8_secondarytile_pin(id, shortName, displayName, cmdLineArgs, dsListOptions, tileImg, wideTileImg, textCol)&
win8_secondarytile_badge_notification(id, tileId)&
win8_secondarytile_delete(id)&

// Metro live tile command list
win8_livetile_notification_begin(template)&
win8_livetile_notification_secondary_begin(template, tileId)&
win8_livetile_notification_expiry(expiryTime)&
win8_livetile_notification_tag(tag)&
win8_livetile_notification_text_add(text)&
win8_livetile_notification_image_add(image)&
win8_livetile_notification_end()&

// Metro appbar commands
win8_appbar_enable(flag)&
win8_appbar_add_element(type, icon, label, section, toolTip, callback)&
win8_appbar_remove_element(id)&

// Metro charms
win8_settingscharm_add_entry(name, callback)&
win8_settingscharm_add_html_entry(id, name, htmlPath)&
win8_settingscharm_add_xaml_entry(name, xamlPath, headerRGB, callback, wideFlyout)&
win8_settingscharm_set_xaml_property(entryName, elementName, propertyName, newValue )&
win8_settingscharm_get_xaml_property(entryName, elementName, propertyName)&
win8_settingscharm_remove_entry(name)&

// Metro share
win8_share_image(image_filename, title, description, immediate)&
win8_share_screenshot(title, description, immediate)&
win8_share_file(filename, title, description, immediate)&
win8_share_url(url, title, description, immediate)&
win8_share_text(text, title, description, immediate)&

// Metro search
win8_search_enable(_selectionCallback)&
win8_search_disable()&
win8_search_add_suggestions(_dslist)&

// Metro device presence
win8_device_touchscreen_available()&

// Metro licensing (Yank spelling)
win8_license_initialize_sandbox(_licenseString)&
win8_license_trial_version()&

//uwp win8 mirror functions --------
uwp_livetile_tile_clear()&
uwp_livetile_badge_notification(id)&
uwp_livetile_badge_clear()&
uwp_livetile_queue_enable(flag)&

//uwp secondary tiles
uwp_secondarytile_pin(tileId, displayName, cmdLineArgs, tileImage, wideTileImage, largeTileImage, textCol, tileSize)&
uwp_secondarytile_badge_notification(id, tileId)&
uwp_secondarytile_delete(tileId)&
uwp_secondarytile_badge_clear(tileId)&
uwp_secondarytile_tile_clear(tileId)&

//uwp livetile notifications
uwp_livetile_notification_begin(template)&
uwp_livetile_notification_secondary_begin(template, tileId)&
uwp_livetile_notification_expiry(expiryTime)&
uwp_livetile_notification_tag(tag)&
uwp_livetile_notification_text_add(text)&
uwp_livetile_notification_image_add(image)&
uwp_livetile_notification_end()&
uwp_livetile_notification_template_add(template)&

//uwp appbar commands
uwp_appbar_enable(flag)&
uwp_appbar_add_element(id, type, icon, label, section, toolTip, callback)&
uwp_appbar_remove_element(id)&

uwp_device_touchscreen_available()&
//-------------------

// windows phone
winphone_license_trial_version()&
winphone_tile_title(title)&
winphone_tile_count(count)&

winphone_tile_back_title(title)&
winphone_tile_back_content(content)&
winphone_tile_back_content_wide(content)&
winphone_tile_front_image(included_filename)&
winphone_tile_front_image_small(included_filename)&
winphone_tile_front_image_wide(included_filename)&
winphone_tile_back_image(included_filename)&
winphone_tile_back_image_wide(included_filename)&

winphone_tile_background_colour(colour)£&
winphone_tile_background_color(color)$&
winphone_tile_icon_image(included_filename)&
winphone_tile_small_icon_image(included_filename)&
winphone_tile_wide_content(content, index)&

winphone_tile_cycle_images(included_filename_1, included_filename_2, ...)&
winphone_tile_small_background_image(included_filename)&

// Physics functions
// World level functions
physics_world_create(PixelToMetreScale)
physics_world_gravity(gx, gy)
physics_world_update_speed(speed)
physics_world_update_iterations(iterations)
physics_world_draw_debug(draw_flags)
physics_raycast(xStart,yStart,xEnd,yEnd,ids,[all_hits],[max_fraction],...)

// Pause
physics_pause_enable(pause)

// Fixture related functions
physics_fixture_create()
physics_fixture_set_kinematic(fixture)
physics_fixture_set_density(fixture, density)
physics_fixture_set_awake(fixture, flag)
physics_fixture_set_restitution(fixture, restitution)
physics_fixture_set_friction(fixture,friction)
physics_fixture_set_collision_group(fixture, group)
physics_fixture_set_sensor(fixture, sensorState)
physics_fixture_set_linear_damping(fixture, damping)
physics_fixture_set_angular_damping(fixture, damping)
physics_fixture_set_circle_shape(fixture, circleRadius)
physics_fixture_set_box_shape(fixture, halfWidth, halfHeight)
physics_fixture_set_edge_shape(fixture, x1,y1,x2,y2)
physics_fixture_set_polygon_shape(fixture)
physics_fixture_set_chain_shape(fixture, loop)
physics_fixture_add_point(fixture, local_x, local_y)
physics_fixture_bind(fixture, obj)
physics_fixture_bind_ext(fixture, obj, xo, yo)
physics_fixture_delete(fixture)

// Physics instance manipulation functions
physics_apply_force(xpos, ypos, xforce, yforce)
physics_apply_impulse(xpos, ypos, ximpulse, yimpulse)
physics_apply_angular_impulse(impulse)
physics_apply_local_force(xlocal, ylocal, xforce_local, yforce_local)
physics_apply_local_impulse(xlocal, ylocal, ximpulse_local, yimpulse_local)
physics_apply_torque(torque)
physics_mass_properties(mass, local_centre_of_mass_x, local_centre_of_mass_y, inertia)
physics_draw_debug()
physics_test_overlap(x, y, angle, obj)
physics_remove_fixture(inst, id)
physics_set_friction(fixture, friction)
physics_set_density(fixture, density)
physics_set_restitution(fixture, restitution)
physics_get_friction(fixture)
physics_get_density(fixture)
physics_get_restitution(fixture)

// Joints
physics_joint_distance_create(inst1, inst2, anchor_1_x, anchor_1_y, anchor_2_x, anchor_2_y, collideInstances)
physics_joint_rope_create(inst1, inst2, anchor_1_x, anchor_1_y, anchor_2_x, anchor_2_y, maxLength, collideInstances)
physics_joint_revolute_create(inst1, inst2, anchor_x, anchor_y, lower_angle_limit, upper_angle_limit, enable_limit, max_motor_torque, motor_speed, enable_motor, collideInstances)
physics_joint_prismatic_create(inst1, inst2, anchor_x, anchor_y, axis_x, axis_y, lower_translation_limit, upper_translation_limit, enable_limit, max_motor_force, motor_speed, enable_motor, collideInstances)
physics_joint_pulley_create(inst1, inst2, anchor_1_x, anchor_1_y, anchor_2_x, anchor_2_y, local_anchor_1_x, local_anchor_1_y, local_anchor_2_x, local_anchor_2_y, ratio, collideInstances)
physics_joint_wheel_create(inst1, inst2, anchor_x, anchor_y, axis_x, axis_y, enableMotor, max_motor_torque, motor_speed, freq_hz, damping_ratio, collideInstances)
physics_joint_weld_create(inst1, inst2, anchor_x, anchor_y, ref_angle, freq_hz, damping_ratio, collideInstances)
physics_joint_friction_create(inst1, inst2, anchor_x, anchor_y, max_force, max_torque, collideInstances)
physics_joint_gear_create(inst1, inst2, revoluteJoint, prismaticJoint, ratio)
physics_joint_enable_motor(joint, motorState)
physics_joint_get_value(joint, field)
physics_joint_set_value(joint, field, value)
physics_joint_delete(joint)

// Physics particles
physics_particle_create(typeflags, x, y, xv, yv, col, alpha, category)
physics_particle_delete(ind)
physics_particle_delete_region_circle(x, y, radius)
physics_particle_delete_region_box(x, y, halfWidth, halfHeight)
physics_particle_delete_region_poly(pointList)
physics_particle_set_flags(ind, typeflags)
physics_particle_set_category_flags(category, typeflags)
physics_particle_draw(typemask, category, sprite, subimg)
physics_particle_draw_ext(typemask, category, sprite, subimg, xscale, yscale, angle, col, alpha)
physics_particle_count()
physics_particle_get_data(buffer, dataFlags)
physics_particle_get_data_particle(ind, buffer, dataFlags)

physics_particle_group_begin(typeflags, groupflags, x, y, ang, xv, yv, angVelocity, col, alpha, strength, category)
physics_particle_group_circle(radius)
physics_particle_group_box(halfWidth, halfHeight)
physics_particle_group_polygon()
physics_particle_group_add_point(x, y)
physics_particle_group_end()
physics_particle_group_join(to, from)
physics_particle_group_delete(ind)
physics_particle_group_count(group)
physics_particle_group_get_data(group, buffer, dataFlags)
physics_particle_group_get_mass(group)
physics_particle_group_get_inertia(group)
physics_particle_group_get_centre_x(group)
physics_particle_group_get_centre_y(group)
physics_particle_group_get_vel_x(group)
physics_particle_group_get_vel_y(group)
physics_particle_group_get_ang_vel(group)
physics_particle_group_get_x(group)
physics_particle_group_get_y(group)
physics_particle_group_get_angle(group)
physics_particle_set_group_flags(group, groupflags)
physics_particle_get_group_flags(group)

physics_particle_get_max_count()
physics_particle_get_radius()
physics_particle_get_density()
physics_particle_get_damping()
physics_particle_get_gravity_scale()
physics_particle_set_max_count(count)
physics_particle_set_radius(radius)
physics_particle_set_density(density)
physics_particle_set_damping(damping)
physics_particle_set_gravity_scale(scale)


// Physics related built in variables (not all can be set)
phy_rotation@
phy_position_x@
phy_position_y@
phy_angular_velocity@
phy_linear_velocity_x@
phy_linear_velocity_y@
phy_speed_x@
phy_speed_y@
phy_speed*@
phy_angular_damping@
phy_linear_damping@
phy_bullet@
phy_fixed_rotation@
phy_active@
phy_mass*@
phy_inertia*@
phy_com_x*@
phy_com_y*@
phy_dynamic*@
phy_kinematic*@
phy_sleeping*@
phy_collision_points*@
phy_collision_x*@
phy_collision_y*@
phy_col_normal_x*@
phy_col_normal_y*@
phy_position_xprevious*@
phy_position_yprevious*@

phy_joint_anchor_1_x#
phy_joint_anchor_1_y#
phy_joint_anchor_2_x#
phy_joint_anchor_2_y#
phy_joint_reaction_force_x#
phy_joint_reaction_force_y#
phy_joint_reaction_torque#
phy_joint_motor_speed#
phy_joint_angle#
phy_joint_motor_torque#
phy_joint_max_motor_torque#
phy_joint_translation#
phy_joint_speed#
phy_joint_motor_force#
phy_joint_max_motor_force#
phy_joint_length_1#
phy_joint_length_2#
phy_joint_damping_ratio#
phy_joint_frequency#
phy_joint_lower_angle_limit#
phy_joint_upper_angle_limit#
phy_joint_angle_limits#
phy_joint_max_length#
phy_joint_max_torque#
phy_joint_max_force#

phy_debug_render_aabb#
phy_debug_render_collision_pairs#
phy_debug_render_coms#
phy_debug_render_core_shapes#
phy_debug_render_joints#
phy_debug_render_obb#
phy_debug_render_shapes#


phy_particle_flag_water#
phy_particle_flag_zombie#
phy_particle_flag_wall#
phy_particle_flag_spring#
phy_particle_flag_elastic#
phy_particle_flag_viscous#
phy_particle_flag_powder#
phy_particle_flag_tensile#
phy_particle_flag_colourmixing#£
phy_particle_flag_colormixing#$

phy_particle_group_flag_solid#
phy_particle_group_flag_rigid#

phy_particle_data_flag_typeflags#
phy_particle_data_flag_position#
phy_particle_data_flag_velocity#
phy_particle_data_flag_colour#£
phy_particle_data_flag_color#$
phy_particle_data_flag_category#


achievement_our_info&
achievement_friends_info&
achievement_leaderboard_info&
achievement_achievement_info&
achievement_filter_all_players&
achievement_filter_friends_only&
achievement_filter_favorites_only&
achievement_type_achievement_challenge&
achievement_type_score_challenge&
achievement_pic_loaded&


achievement_show_ui&
achievement_show_profile&
achievement_show_leaderboard&
achievement_show_achievement&
achievement_show_bank&
achievement_show_friend_picker&
achievement_show_purchase_prompt&

network_create_socket(type)
network_create_socket_ext(type, port)
network_create_server(type, port, maxclients)
network_create_server_raw(type, port, maxclients)
network_connect(socket, url, port)
network_connect_raw(socket, url, port)
network_connect_async(socket, url, port)
network_connect_raw_async(socket, url, port)
network_send_packet(socket, bufferid, size)
network_send_raw(socket, bufferid, size, options*)
network_send_broadcast(socket, port, bufferid, size)
network_send_udp(socket, URL, port, bufferid, size)
network_send_udp_raw(socket, URL, port, bufferid, size)
network_set_timeout(socket, read, write)
network_set_config(parameter, value)
network_resolve(url)
network_destroy(socket)
network_socket_tcp#
network_socket_udp#
network_socket_ws#
network_socket_wss#
network_socket_bluetooth#
network_type_connect#
network_type_disconnect#
network_type_data#
network_type_non_blocking_connect#
network_type_up#
network_type_up_failed#
network_type_down#
network_send_binary#
network_send_text#

network_config_connect_timeout#
network_config_use_non_blocking_socket#
network_config_enable_reliable_udp#
network_config_disable_reliable_udp#
network_config_avoid_time_wait#
network_config_websocket_protocol#
network_config_enable_multicast#
network_config_disable_multicast#

network_connect_none#
network_connect_blocking#
network_connect_nonblocking#
network_connect_active#
network_connect_passive#

buffer_create(size, buffer_type, alignment)
buffer_write(buffer, type, value)
buffer_read(buffer, type)
buffer_seek(buffer, base, offset)
buffer_get_surface(buffer, surface,offset)
buffer_get_surface_depth(buffer, surface,offset)
buffer_set_surface(buffer, surface,offset)
buffer_set_surface_depth(buffer, surface,offset)
buffer_set_used_size(buffer,size)
buffer_delete(buffer)
buffer_exists(buffer)
buffer_get_type(buffer)
buffer_get_alignment(buffer)
buffer_poke(buffer, offset, type, value)
buffer_peek(buffer, offset, type)
buffer_save(buffer, filename)
buffer_save_ext(buffer, filename, offset, size)
buffer_load(filename)
buffer_load_ext(buffer, filename, offset)
buffer_load_partial(buffer, filename, src_offset, src_len, dest_offset)
buffer_copy(src_buffer, src_offset, size, dest_buffer, dest_offset)
buffer_copy_stride(src_buffer, src_offset, src_size, src_stride, src_count, dest_buffer, dest_offset, dest_stride)
buffer_fill(buffer, offset, type, value, size)
buffer_get_size(buffer)
buffer_tell(buffer)
buffer_resize(buffer, newsize)
buffer_md5(buffer, offset, size)
buffer_sha1(buffer, offset, size)
buffer_crc32(buffer, offset, size)
buffer_base64_encode(buffer, offset, size)
buffer_base64_decode(string)
buffer_base64_decode_ext(buffer, string, offset)
buffer_sizeof(type)
buffer_get_address(buffer)
buffer_create_from_vertex_buffer(vertex_buffer, type, alignment)
buffer_create_from_vertex_buffer_ext(vertex_buffer, type, alignment, start_vertex, num_vertices)
buffer_copy_from_vertex_buffer(vertex_buffer, start_vertex, num_vertices, dest_buffer, dest_offset)
buffer_async_group_begin(groupname)
buffer_async_group_option(optionname,optionvalue)
buffer_async_group_end()
buffer_load_async(bufferid,filename,offset,size)
buffer_save_async(bufferid,filename,offset,size)
buffer_compress(bufferid,offset,size)
buffer_decompress(bufferId)
buffer_fixed#
buffer_grow#
buffer_wrap#
buffer_fast#
buffer_vbuffer#
buffer_u8#
buffer_s8#
buffer_u16#
buffer_s16#
buffer_u32#
buffer_s32#
buffer_u64#
buffer_f16#
buffer_f32#
buffer_f64#
buffer_bool#
buffer_text#
buffer_string#
buffer_surface_copy&
buffer_seek_start#
buffer_seek_relative#
buffer_seek_end#
buffer_error_general#
buffer_error_out_of_space#
buffer_error_invalid_type#



text_type&
button_type&
input_type&

ANSI_CHARSET&
DEFAULT_CHARSET&
EASTEUROPE_CHARSET&
RUSSIAN_CHARSET&
SYMBOL_CHARSET&
SHIFTJIS_CHARSET&
HANGEUL_CHARSET&
GB2312_CHARSET&
CHINESEBIG5_CHARSET&
JOHAB_CHARSET&
HEBREW_CHARSET&
ARABIC_CHARSET&
GREEK_CHARSET&
TURKISH_CHARSET&
VIETNAMESE_CHARSET&
THAI_CHARSET&
MAC_CHARSET&
BALTIC_CHARSET&
OEM_CHARSET&



gp_face1#
gp_face2#
gp_face3#
gp_face4#
gp_shoulderl#
gp_shoulderr#
gp_shoulderlb#
gp_shoulderrb#
gp_select#
gp_start#
gp_stickl#
gp_stickr#
gp_padu#
gp_padd#
gp_padl#
gp_padr#
gp_axislh#
gp_axislv#
gp_axisrh#
gp_axisrv#

gp_axis_acceleration_x#
gp_axis_acceleration_y#
gp_axis_acceleration_z#

gp_axis_angular_velocity_x#
gp_axis_angular_velocity_y#
gp_axis_angular_velocity_z#

gp_axis_orientation_x#
gp_axis_orientation_y#
gp_axis_orientation_z#
gp_axis_orientation_w#

gp_home#
gp_extra1#
gp_extra2#
gp_extra3#
gp_extra4#
gp_paddler#
gp_paddlel#
gp_paddlerb#
gp_paddlelb#
gp_touchpadbutton#
gp_extra5#
gp_extra6#


gml_release_mode(enable)
gml_pragma(setting,....)


shader_set(shader)
shader_get_name(shader)
shader_reset()
shader_current()
shader_is_compiled(shader)
shader_get_sampler_index(shader,uniform_name)
shader_get_uniform(shader,uniform_name)
shader_set_uniform_i(uniform_id,val,....)
shader_set_uniform_i_array(uniform_id,array)
shader_set_uniform_f(uniform_id,val,....)
shader_set_uniform_f_array(uniform_id,array)
shader_set_uniform_f_buffer(uniform_id,buffer,offset,count)
shader_set_uniform_matrix(uniform_id)
shader_set_uniform_matrix_array(uniform_id,array)
shader_enable_corner_id(enable)
texture_set_stage(sampled_id, texture_id)
texture_get_texel_width(texture_id)
texture_get_texel_height(texture_id)
shaders_are_supported()

vertex_format_begin()
vertex_format_end()
vertex_format_delete(format_id)
vertex_format_add_position()
vertex_format_add_position_3d()
vertex_format_add_colour()£
vertex_format_add_color()$
vertex_format_add_normal()
vertex_format_add_texcoord()
vertex_format_add_textcoord()&
vertex_format_add_custom(type,usage)
vertex_format_get_info(format_id)

vertex_usage_position#
vertex_usage_colour#£
vertex_usage_color#$
vertex_usage_normal#
vertex_usage_texcoord#
vertex_usage_textcoord#&
vertex_usage_blendweight#
vertex_usage_blendindices#
vertex_usage_psize#
vertex_usage_tangent#
vertex_usage_binormal#
vertex_usage_fog#
vertex_usage_depth#
vertex_usage_sample#

vertex_type_float1#
vertex_type_float2#
vertex_type_float3#
vertex_type_float4#
vertex_type_colour#£
vertex_type_color#$
vertex_type_ubyte4#


vertex_create_buffer()
vertex_create_buffer_ext(size)
vertex_delete_buffer(vbuff)
vertex_begin(vbuff,format)
vertex_end(vbuff)
vertex_position(vbuff,x,y)
vertex_position_3d(vbuff,x,y,z)
vertex_colour(vbuff,colour,alpha)£
vertex_color(vbuff,color,alpha)$
vertex_argb(vbuff,argb)
vertex_texcoord(vbuff,u,v)
vertex_normal(vbuff,nx,ny,nz)
vertex_float1(vbuff,f1)
vertex_float2(vbuff,f1,f2)
vertex_float3(vbuff,f1,f2,f3)
vertex_float4(vbuff,f1,f2,f3,f4)
vertex_ubyte4(vbuff,b1,b2,b3,b4)
vertex_submit(vbuff,prim,texture)
vertex_submit_ext(vbuff,prim,texture,offset,num)
vertex_freeze(vbuff)
vertex_get_number(vbuff)
vertex_get_buffer_size(vbuff)
vertex_create_buffer_from_buffer(src_buffer,format)
vertex_create_buffer_from_buffer_ext(src_buffer,format,src_offset,num_vertices)
vertex_update_buffer_from_buffer(dest_vbuff,dest_offset,src_buffer,[src_offset],[src_size])
vertex_update_buffer_from_vertex(dest_vbuff,dest_vert,src_vbuff,[src_vert],[src_vert_num])

push_local_notification(fire_time, title, message, data)&
push_get_first_local_notification( ds_map )&
push_get_next_local_notification( ds_map )&
push_cancel_local_notification( id )&
push_get_application_badge_number()&
push_set_application_badge_number( num )&


// Instance specific
skeleton_animation_set(anim_name, [loop])!
skeleton_animation_get()!
skeleton_animation_mix(anim_from,anim_to,duration)!
skeleton_animation_set_ext(anim_name, track, [loop])!
skeleton_animation_get_ext(track)!
skeleton_animation_get_duration(anim_name)!
skeleton_animation_get_frames(anim_name)!
skeleton_animation_clear(track,[reset],[duration])!
skeleton_skin_set(skin_name)!
skeleton_skin_get()!
skeleton_skin_create(skin_name, base_skins)!
skeleton_attachment_set(slot, attachment)!
skeleton_attachment_get(slot)!
skeleton_attachment_create(name,sprite,ind,xo,yo,xs,ys,rot)!
skeleton_attachment_create_colour(name,sprite,ind,xo,yo,xs,ys,rot,col,alpha)!£
skeleton_attachment_create_color(name,sprite,ind,xo,yo,xs,ys,rot,col,alpha)!$
skeleton_attachment_exists(name)!
skeleton_attachment_replace(name,sprite,ind,xo,yo,xs,ys,rot)!
skeleton_attachment_replace_colour(name,sprite,ind,xo,yo,xs,ys,rot,col,alpha)!£
skeleton_attachment_replace_color(name,sprite,ind,xo,yo,xs,ys,rot,col,alpha)!$
skeleton_attachment_destroy(name)!
skeleton_collision_draw_set(val)!
skeleton_bone_data_get(bone, map)!
skeleton_bone_data_set(bone, map)!
skeleton_bone_state_get(bone, map)!
skeleton_bone_state_set(bone, map)!
skeleton_slot_colour_set(slot,col,alpha)!£
skeleton_slot_color_set(slot,col,alpha)!$
skeleton_slot_colour_get(slot)!£
skeleton_slot_color_get(slot)!$
skeleton_slot_alpha_get(slot)!
skeleton_find_slot(x,y,list)!

skeleton_get_minmax()!
skeleton_get_num_bounds()!
skeleton_get_bounds(index)!
skeleton_animation_get_frame(track)!
skeleton_animation_set_frame(track,index)!
skeleton_animation_get_position(track)!
skeleton_animation_set_position(track,position)!
skeleton_animation_get_event_frames(anim_name,event_name)!
skeleton_animation_is_looping(track)!
skeleton_animation_is_finished(track)!

// Instance independent!
draw_skeleton(sprite,animname,skinname,frame,x,y,xscale,yscale,rot,col,alpha)!
draw_skeleton_time(sprite, animname,skinname, time, x,y, xscale,yscale, rot, col,alpha)!
draw_skeleton_instance(instance, animname,skinname,frame,x,y,xscale,yscale,rot,col,alpha)!
draw_skeleton_collision(sprite,animname,frame,x,y,xscale,yscale,rot,col)!
draw_enable_skeleton_blendmodes(enable)!
draw_get_enable_skeleton_blendmodes()!
skeleton_animation_list(sprite, list)!
skeleton_skin_list(sprite, list)!
skeleton_bone_list(sprite, list)!
skeleton_slot_list(sprite, list)!
skeleton_slot_data(sprite, list)!
skeleton_slot_data_instance(list)!

// Layer functions!
layer_get_id(layer_name)
layer_get_id_at_depth(depth)
layer_get_depth(layer_id)
layer_create(depth,name*,...)
layer_destroy(layer_id)
layer_destroy_instances(layer_id)
layer_add_instance(layer_id,instance)
layer_has_instance(layer_id,instance)
layer_set_visible(layer_id,visible)
layer_get_visible(layer_id)
layer_exists(layer_id)
layer_x(layer_id,x)
layer_y(layer_id,y)
layer_get_x(layer_id)
layer_get_y(layer_id)
layer_hspeed(layer_id,speed)
layer_vspeed(layer_id,speed)
layer_get_hspeed(layer_id)
layer_get_vspeed(layer_id)

layer_script_begin(layer_id,script)
layer_script_end(layer_id,script)

layer_shader(layer_id,shader)

layer_get_script_begin(layer_id)
layer_get_script_end(layer_id)

layer_get_shader(layer_id)

layer_set_target_room(room)
layer_get_target_room()
layer_reset_target_room()

layer_get_all()
layer_get_all_elements(layer_id)
layer_get_name(layer_id)
layer_depth(layer_id, depth)

layer_get_element_layer(element_id)
layer_get_element_type(element_id)

layer_element_move(element_id,layer_id)

layer_force_draw_depth(force,depth)
layer_is_draw_depth_forced()
layer_get_forced_depth()

// Layer constants
layerelementtype_undefined#
layerelementtype_background#
layerelementtype_instance#
layerelementtype_oldtilemap#
layerelementtype_sprite#
layerelementtype_tilemap#
layerelementtype_particlesystem#
layerelementtype_tile#
layerelementtype_sequence#
layerelementtype_text#

// Background element
layer_background_get_id(layer_id)
layer_background_exists(layer_id,background_element_id)

layer_background_create(layer_id,sprite)
layer_background_destroy(background_element_id)

layer_background_visible(background_element_id,visible)
layer_background_change(background_element_id,sprite)
layer_background_sprite(background_element_id,sprite)
layer_background_htiled(background_element_id,tiled)
layer_background_vtiled(background_element_id,tiled)
layer_background_stretch(background_element_id,stretch)
layer_background_yscale(background_element_id,yscale)
layer_background_xscale(background_element_id,xscale)
layer_background_blend(background_element_id,col)
layer_background_alpha(background_element_id,alpha)
layer_background_index(background_element_id,image_index)
layer_background_speed(background_element_id,image_speed)

layer_background_get_visible(background_element_id)
layer_background_get_sprite(background_element_id)
layer_background_get_htiled(background_element_id)
layer_background_get_vtiled(background_element_id)
layer_background_get_stretch(background_element_id)
layer_background_get_yscale(background_element_id)
layer_background_get_xscale(background_element_id)
layer_background_get_blend(background_element_id)
layer_background_get_alpha(background_element_id)
layer_background_get_index(background_element_id)
layer_background_get_speed(background_element_id)

// Sprite element
layer_sprite_get_id(layer_id,sprite_element_name)
layer_sprite_exists(layer_id,sprite_element_id)

layer_sprite_create(layer_id,x,y,sprite)
layer_sprite_destroy(sprite_element_id)

layer_sprite_change(sprite_element_id,sprite)
layer_sprite_index(sprite_element_id,image_index)
layer_sprite_speed(sprite_element_id,image_speed)
layer_sprite_xscale(sprite_element_id,scale)
layer_sprite_yscale(sprite_element_id,scale)
layer_sprite_angle(sprite_element_id,angle)
layer_sprite_blend(sprite_element_id,col)
layer_sprite_alpha(sprite_element_id,alpha)
layer_sprite_x(sprite_element_id,x)
layer_sprite_y(sprite_element_id,y)

layer_sprite_get_sprite(sprite_element_id)
layer_sprite_get_index(sprite_element_id)
layer_sprite_get_speed(sprite_element_id)
layer_sprite_get_xscale(sprite_element_id)
layer_sprite_get_yscale(sprite_element_id)
layer_sprite_get_angle(sprite_element_id)
layer_sprite_get_blend(sprite_element_id)
layer_sprite_get_alpha(sprite_element_id)
layer_sprite_get_x(sprite_element_id)
layer_sprite_get_y(sprite_element_id)

// Tilemap element
layer_tilemap_get_id(layer_id)
layer_tilemap_exists(layer_id,tilemap_element_id)

layer_tilemap_create(layer_id,x,y,tileset,width,height)
layer_tilemap_destroy(tilemap_element_id)

tilemap_tileset(tilemap_element_id,tileset)
tilemap_x(tilemap_element_id,x)
tilemap_y(tilemap_element_id,y)

tilemap_set(tilemap_element_id,tiledata,cell_x,cell_y)
tilemap_set_at_pixel(tilemap_element_id,tiledata,x,y)

tileset_get_texture(tileset_id)
tileset_get_uvs(tileset_id)
tileset_get_name(tileset_id)
tileset_get_info(tileset_id)

tilemap_get_tileset(tilemap_element_id)
tilemap_get_tile_width(tilemap_element_id)
tilemap_get_tile_height(tilemap_element_id)
tilemap_get_width(tilemap_element_id)
tilemap_get_height(tilemap_element_id)
tilemap_set_width(tilemap_element_id, width)
tilemap_set_height(tilemap_element_id, height)

tilemap_get_x(tilemap_element_id)
tilemap_get_y(tilemap_element_id)

tilemap_get(tilemap_element_id,cell_x,cell_y)
tilemap_get_at_pixel(tilemap_element_id,x,y)
tilemap_get_cell_x_at_pixel(tilemap_element_id,x,y)
tilemap_get_cell_y_at_pixel(tilemap_element_id,x,y)

tilemap_clear(tilemap_element_id,tiledata)

draw_tilemap(tilemap_element_id,x,y)
draw_tile(tileset,tiledata,frame,x,y)

tilemap_set_global_mask(mask)
tilemap_get_global_mask()

tilemap_set_mask(tilemap_element_id, mask)
tilemap_get_mask(tilemap_element_id)

tilemap_get_frame(tilemap_element_id)

// Tile functions
tile_set_empty(tiledata)
tile_set_index(tiledata,tileindex)
tile_set_flip(tiledata,flip)
tile_set_mirror(tiledata,mirror)
tile_set_rotate(tiledata,rotate)

tile_get_empty(tiledata)
tile_get_index(tiledata)
tile_get_flip(tiledata)
tile_get_mirror(tiledata)
tile_get_rotate(tiledata)

// Tile constants
tile_rotate#
tile_flip#
tile_mirror#
tile_index_mask#

// Tile element functions
layer_tile_exists(layer_id,tile_element_id,...)^&

layer_tile_create(layer_id,x,y,tileset,left,top,width,height)^&
layer_tile_destroy(tile_element_id)^&

layer_tile_change(tile_element_id,sprite)^&
layer_tile_xscale(tile_element_id,scale)^&
layer_tile_yscale(tile_element_id,scale)^&
layer_tile_blend(tile_element_id,col)^&
layer_tile_alpha(tile_element_id,alpha)^&
layer_tile_x(tile_element_id,x)^&
layer_tile_y(tile_element_id,y)^&
layer_tile_region(tile_element_id,left,top,width,height)^&
layer_tile_visible(tile_element_id,visible)^&

layer_tile_get_sprite(tile_element_id)^&
layer_tile_get_xscale(tile_element_id)^&
layer_tile_get_yscale(tile_element_id)^&
layer_tile_get_blend(tile_element_id)^&
layer_tile_get_alpha(tile_element_id)^&
layer_tile_get_x(tile_element_id)^&
layer_tile_get_y(tile_element_id)^&
layer_tile_get_region(tile_element_id)^&
layer_tile_get_visible(tile_element_id)^&

// Instance element functions
layer_instance_get_instance(instance_element_id)

instance_activate_layer(layer_id)
instance_deactivate_layer(layer_id)

// Camera functions
camera_create()
camera_create_view(room_x,room_y,width,height,[angle,object,x_speed,y_speed,x_border,y_border])
camera_destroy(camera)
camera_apply(camera)
camera_copy_transforms(dest_camera,src_camera)

camera_get_active()
camera_get_default()
camera_set_default(camera)

// Setters
camera_set_view_mat(camera,matrix)
camera_set_proj_mat(camera,matrix)
camera_set_update_script(camera,script)
camera_set_begin_script(camera,script)
camera_set_end_script(camera,script)
camera_set_view_pos(camera,x,y)
camera_set_view_size(camera,width,height)
camera_set_view_speed(camera,x_speed,y_speed)
camera_set_view_border(camera,x_border,y_border)
camera_set_view_angle(camera,angle)
camera_set_view_target(camera,object)

// Getters
camera_get_view_mat(camera)
camera_get_proj_mat(camera)
camera_get_update_script(camera)
camera_get_begin_script(camera)
camera_get_end_script(camera)

camera_get_view_x(camera)
camera_get_view_y(camera)
camera_get_view_width(camera)
camera_get_view_height(camera)
camera_get_view_speed_x(camera)
camera_get_view_speed_y(camera)
camera_get_view_border_x(camera)
camera_get_view_border_y(camera)
camera_get_view_angle(camera)
camera_get_view_target(camera)


// View accessors
view_get_camera(view)
view_get_visible(view)
view_get_xport(view)
view_get_yport(view)
view_get_wport(view)
view_get_hport(view)
view_get_surface_id(view)

view_set_camera(view,camera)
view_set_visible(view,visible)
view_set_xport(view,xport)
view_set_yport(view,yport)
view_set_wport(view,wport)
view_set_hport(view,hport)
view_set_surface_id(view,surface_id)


// Gesture stuff
gesture_drag_time(time)
gesture_drag_distance(distance)
gesture_flick_speed(speed)
gesture_double_tap_time(time)
gesture_double_tap_distance(distance)

gesture_pinch_distance(distance)
gesture_pinch_angle_towards(angle)
gesture_pinch_angle_away(angle)
gesture_rotate_time(time)
gesture_rotate_angle(angle)

gesture_tap_count(enable)

gesture_get_drag_time()
gesture_get_drag_distance()
gesture_get_flick_speed()
gesture_get_double_tap_time()
gesture_get_double_tap_distance()

gesture_get_pinch_distance()
gesture_get_pinch_angle_towards()
gesture_get_pinch_angle_away()
gesture_get_rotate_time()
gesture_get_rotate_angle()

gesture_get_tap_count()

// Virtual keyboard
keyboard_virtual_show(virtual_keyboard_type, virtual_return_key_type, auto_capitalization_type, predictive_text_enabled)
keyboard_virtual_hide()
keyboard_virtual_status()
keyboard_virtual_height()

kbv_type_default#
kbv_type_ascii#
kbv_type_url#
kbv_type_email#
kbv_type_numbers#
kbv_type_phone#
kbv_type_phone_name#

kbv_returnkey_default#
kbv_returnkey_go#
kbv_returnkey_google#
kbv_returnkey_join#
kbv_returnkey_next#
kbv_returnkey_route#
kbv_returnkey_search#
kbv_returnkey_send#
kbv_returnkey_yahoo#
kbv_returnkey_done#
kbv_returnkey_continue#
kbv_returnkey_emergency#

kbv_autocapitalize_none#
kbv_autocapitalize_words#
kbv_autocapitalize_sentences#
kbv_autocapitalize_characters#

os_permission_denied_dont_request#
os_permission_denied#
os_permission_granted#

nineslice_left#
nineslice_top#
nineslice_right#
nineslice_bottom#
nineslice_centre#
nineslice_center#

nineslice_stretch#
nineslice_repeat#
nineslice_mirror#
nineslice_blank#
nineslice_hide#

texturegroup_status_unloaded#
texturegroup_status_loading#
texturegroup_status_loaded#
texturegroup_status_fetched#

//tags
tag_get_asset_ids(tags,asset_type)
tag_get_assets(tags)
asset_get_tags(asset_name_or_id,[asset_type])
asset_add_tags(asset_name_or_id,tags,[asset_type])
asset_remove_tags(asset_name_or_id,tags,[asset_type])
asset_has_tags(asset_name_or_id,tags,[asset_type])
asset_has_any_tag(asset_name_or_id,tags,[asset_type])
asset_clear_tags(asset_name_or_id,[asset_type])

//extension options
extension_exists(ext_name)
extension_get_version(ext_name)
extension_get_option_count(ext_name)
extension_get_option_names(ext_name)
extension_get_option_value(ext_name, option_name)
extension_get_options(ext_name)

//sequences
layer_sequence_get_instance(sequence_element_id)
layer_sequence_create(layer_id,x,y,sequence_id)
layer_sequence_destroy(sequence_element_id)
layer_sequence_exists(layer_id,sequence_element_id)
layer_sequence_x(sequence_element_id,pos_x)
layer_sequence_y(sequence_element_id,pos_y)
layer_sequence_angle(sequence_element_id,angle)
layer_sequence_xscale(sequence_element_id,xscale)
layer_sequence_yscale(sequence_element_id,yscale)
layer_sequence_headpos(sequence_element_id,position)
layer_sequence_headdir(sequence_element_id,direction)
layer_sequence_pause(sequence_element_id)
layer_sequence_play(sequence_element_id)
layer_sequence_speedscale(sequence_element_id,speedscale)

layer_sequence_get_x(sequence_element_id)
layer_sequence_get_y(sequence_element_id)
layer_sequence_get_angle(sequence_element_id)
layer_sequence_get_xscale(sequence_element_id)
layer_sequence_get_yscale(sequence_element_id)
layer_sequence_get_headpos(sequence_element_id)
layer_sequence_get_headdir(sequence_element_id)
layer_sequence_get_sequence(sequence_element_id)
layer_sequence_is_paused(sequence_element_id)
layer_sequence_is_finished(sequence_element_id)
layer_sequence_get_speedscale(sequence_element_id)

layer_sequence_get_length(sequence_element_id)

// text items
layer_text_get_id(layer_id,text_element_name)
layer_text_exists(layer_id,text_element_id)

layer_text_create(layer_id,x,y,font,text)
layer_text_destroy(text_element_id)
layer_text_x(text_element_id,x)
layer_text_y(text_element_id,y)
layer_text_angle(text_element_id,angle)
layer_text_xscale(text_element_id,scale)
layer_text_yscale(text_element_id,scale)
layer_text_blend(text_element_id,col)
layer_text_alpha(text_element_id,alpha)
layer_text_font(text_element_id,font)
layer_text_xorigin(text_element_id,xorigin)
layer_text_yorigin(text_element_id,yorigin)
layer_text_text(text_element_id,text)
layer_text_halign(text_element_id,alignment)
layer_text_valign(text_element_id,alignment)
layer_text_charspacing(text_element_id,charspacing)
layer_text_linespacing(text_element_id,linespacing)
layer_text_framew(text_element_id,width)
layer_text_frameh(text_element_id,height)
layer_text_wrap(text_element_id,wrap)

layer_text_get_x(text_element_id)
layer_text_get_y(text_element_id)
layer_text_get_xscale(text_element_id)
layer_text_get_yscale(text_element_id)
layer_text_get_angle(text_element_id)
layer_text_get_blend(text_element_id)
layer_text_get_alpha(text_element_id)
layer_text_get_font(text_element_id)
layer_text_get_xorigin(text_element_id)
layer_text_get_yorigin(text_element_id)
layer_text_get_text(text_element_id)
layer_text_get_halign(text_element_id)
layer_text_get_valign(text_element_id)
layer_text_get_charspacing(text_element_id)
layer_text_get_linespacing(text_element_id)
layer_text_get_framew(text_element_id)
layer_text_get_frameh(text_element_id)
layer_text_get_wrap(text_element_id)

// Text element alignment
textalign_left#
textalign_center#
textalign_right#
textalign_justify#
textalign_top#
textalign_middle#
textalign_bottom#

// Animation Curves
animcurve_get(curve_id)
animcurve_get_channel(curve_struct_or_id,channel_name_or_index)
animcurve_get_channel_index(curve_struct_or_id,channel_name)
animcurve_channel_evaluate(channel,posx)

// Sequence resource creation functions
sequence_create()
sequence_destroy(sequence_struct_or_id)
sequence_exists(sequence_struct_or_id)
sequence_get(sequence_id)
sequence_keyframe_new(type)
sequence_keyframedata_new(type)
sequence_track_new(type)

sequence_get_objects(sequence_struct_or_id)
sequence_instance_override_object(sequence_instance_struct,object_id,instance_or_object_id)

// Animation curve resource creation functions
animcurve_create()
animcurve_destroy(curve_struct_or_id)
animcurve_exists(curve_struct_or_id)
animcurve_channel_new()
animcurve_point_new()

// Effects functions
fx_create(filter_or_effect_name)
fx_get_name(filter_or_effect)
fx_get_parameter_names(filter_or_effect)
fx_get_parameter(filter_or_effect,parameter_name)
fx_get_parameters(filter_or_effect)
fx_get_single_layer(filter_or_effect)
fx_set_parameter(filter_or_effect,parameter_name,val,...)
fx_set_parameters(filter_or_effect,parameter_struct)
fx_set_single_layer(filter_or_effect,enable)

layer_set_fx(layer_name_or_id,filter_or_effect)
layer_get_fx(layer_name_or_id)
layer_clear_fx(layer_name_or_id)
layer_enable_fx(layer_name_or_id,enable)
layer_fx_is_enabled(layer_name_or_id)


// SequenceInstance properties
??SequenceInstance
sequence?
headPosition?
headDirection?
speedScale?
volume?
paused?
finished?
activeTracks?
elementID?

// Sequence properties
??Sequence
name?
loopmode?
playbackSpeed?
playbackSpeedType?
length?
volume?
xorigin?
yorigin?
tracks?
messageEventKeyframes?
momentKeyframes?
event_create?
event_destroy?
event_clean_up?
event_step?
event_step_begin?
event_step_end?
event_async_system?
event_broadcast_message?

// Track properties
??Track
name?
type?
subType?
traits?
tracks?
interpolation?
enabled?
visible?
linked?
linkedTrack?
keyframes?

// Keyframe properties
??Keyframe
frame?
length?
stretch?
disabled?
channels?

// Common key channel properties
??KeyChannel
channel?

// Graphic track key
??GraphicTrack
spriteIndex?

// Sequence track key
??SequenceTrack
sequence?

// Audio track key
??AudioTrack
soundIndex?
emitterIndex?
playbackMode?

// Sprite frames track
??SpriteTrack
imageIndex?

// Bool track
??BoolTrack
value?

// String track
??StringTrack
value?

// Colour track
??ColourTrack
colour?ColourTrack

??ColorTrack
color?$

// Real track
??RealTrack
value?
curve?

// Instance track
??InstanceTrack
objectIndex?

// Text track
??TextTrack
text?
wrap?
alignmentV?
alignmentH?
effectsEnabled?
glowEnabled?
outlineEnabled?
dropShadowEnabled?

// Message event
??MessageEvent
events?

// Moment key
??Moment
event?

// AnimCurve properties
??AnimCurve
name?
graphType?
channels?

// AnimCurveChannel properties
??AnimCurveChannel
type?
iterations?
points?

// AnimCurvePoint properties
??AnimCurvePoint
posx?
value?

// TrackEvalNode properties
??TrackEvalNode
activeTracks?
matrix?
posx?
posy?
rotation?
scalex?
scaley?
xorigin?
yorigin?
gain?
pitch?
falloffRef?
falloffMax?
falloffFactor?
width?
height?
imageindex?
imagespeed?
colormultiply?$
colourmultiply?£
coloradd?$
colouradd?£
spriteIndex?
emitterIndex?
soundIndex?
instanceID?
sequenceID?
sequence?
frameSizeX?
frameSizeY?
characterSpacing?
lineSpacing?
paragraphSpacing?
thickness?
coreColor?$
coreColour?£
glowStart?
glowEnd?
glowColor?$
glowColour?£
outlineDist?
outlineColor?$
outlineColour?£
shadowSoftness?
shadowOffsetX?
shadowOffsetY?
shadowColor?$
shadowColour?£
effectsEnabled?
glowEnabled?
outlineEnabled?
dropShadowEnabled?
track?
parent?
activeTracks?

// Sequence track types
seqtracktype_graphic#
seqtracktype_audio#
seqtracktype_real#
seqtracktype_color#
seqtracktype_colour#
seqtracktype_bool#
seqtracktype_string#
seqtracktype_sequence#
seqtracktype_clipmask#
seqtracktype_clipmask_mask#
seqtracktype_clipmask_subject#
seqtracktype_group#
seqtracktype_empty#
seqtracktype_spriteframes#
seqtracktype_instance#
seqtracktype_message#
seqtracktype_moment#
seqtracktype_text#
seqtracktype_particlesystem#
seqtracktype_audioeffect#

// Sequence playback mode constants
seqplay_oneshot#
seqplay_loop#
seqplay_pingpong#

// Sequence playback direction constants
seqdir_right#
seqdir_left#

// Sequence real track interpolation modes
seqinterpolation_assign#
seqinterpolation_lerp#

// Sequence audio key play mode
seqaudiokey_loop#
seqaudiokey_oneshot#

// Text track alignment
seqtextkey_left#
seqtextkey_center#
seqtextkey_right#
seqtextkey_justify#
seqtextkey_top#
seqtextkey_middle#
seqtextkey_bottom#

// Anim curve channel type
animcurvetype_linear#
animcurvetype_catmullrom#
animcurvetype_bezier#

// Garbage collection functions
gc_collect()
gc_enable(enable)
gc_is_enabled()
gc_get_stats()
gc_target_frame_time(time)
gc_get_target_frame_time()

// Garbage collection stats structure members
??GCStats
objects_touched?
objects_collected?
traversal_time?
collection_time?
gc_frame?
generation_collected?
num_generations?
num_objects_in_generation?

// weak reference functions
weak_ref_create(thing_to_track)
weak_ref_alive(weak_ref)
weak_ref_any_alive(array,[index],[length])

// weak reference structure
??WeakRef
ref?

// Time Sources
time_source_global#
time_source_game#
time_source_units_seconds#
time_source_units_frames#
time_source_expire_nearest#
time_source_expire_after#
time_source_state_initial#
time_source_state_active#
time_source_state_paused#
time_source_state_stopped#

time_source_create(parent,period,units,callback,[args],[reps],[expiryType])
time_source_destroy(id, [destroyTree])
time_source_start(id)
time_source_stop(id)
time_source_pause(id)
time_source_resume(id)
time_source_reset(id)
time_source_reconfigure(id,period,units,callback,[args],[reps],[expiryType])
time_source_get_period(id)
time_source_get_reps_completed(id)
time_source_get_reps_remaining(id)
time_source_get_units(id)
time_source_get_time_remaining(id)
time_source_get_state(id)
time_source_get_parent(id)
time_source_get_children(id)
time_source_exists(id)

time_seconds_to_bpm(seconds)
time_bpm_to_seconds(bpm)

call_later(period, units, callback, [repeat])
call_cancel(handle)

// rollback multiplayer
rollback_use_manual_start()^rollback
rollback_use_late_join()^rollback
rollback_define_player(player_obj,...)^rollback
rollback_define_input(input)^rollback
rollback_define_mock_input(player_id,input)^rollback
rollback_define_input_frame_delay(frames)^rollback
rollback_define_extra_network_latency(latency)^rollback
rollback_create_game(num_players,...)^rollback
rollback_join_game(...)^rollback
rollback_start_game()^rollback
rollback_leave_game()^rollback
rollback_get_input(...)^rollback
rollback_chat(message,...)^rollback
rollback_use_player_prefs(...)^rollback
rollback_set_player_prefs(preferences)^rollback
rollback_get_player_prefs(...)^rollback
rollback_get_info(...)^rollback
rollback_use_random_input(enabled)^rollback
rollback_display_events(enabled)^rollback
rollback_sync_on_frame()^rollback
rollback_current_frame^rollback
rollback_confirmed_frame^rollback
rollback_event_id^rollback
rollback_event_param^rollback
rollback_game_running^rollback
rollback_api_server^rollback

rollback_connected_to_peer#^rollback
rollback_synchronizing_with_peer#^rollback
rollback_synchronized_with_peer#^rollback
rollback_disconnected_from_peer#^rollback
rollback_game_interrupted#^rollback
rollback_game_resumed#^rollback
rollback_game_full#^rollback
rollback_game_info#^rollback
rollback_connection_rejected#^rollback
rollback_protocol_rejected#^rollback
rollback_end_game#^rollback
rollback_chat_message#^rollback
rollback_player_prefs#^rollback
rollback_high_latency#^rollback
rollback_connect_info#^rollback
rollback_connect_error#^rollback

player_id*@^rollback
player_local*@^rollback
player_avatar_url*@^rollback
player_avatar_sprite*@^rollback
player_type*@^rollback
player_user_id*@^rollback

wallpaper_set_config(config)^rollback
wallpaper_set_subscriptions(subscriptions)^live_wallpaper_subscription
wallpaper_config^rollback
wallpaper_subscription_data^live_wallpaper_subscription

audio_bus_main#

??AudioBus
bypass?
gain?
effects?

??AudioEffect
attack?
bypass?
cutoff?
damp?
eq1?#*
eq2?#*
eq3?#*
eq4?#*
factor?
feedback?
freq?
gain?
hicut?#*
hishelf?#*
ingain?
intensity?
locut?#*
loshelf?#*
mix?
offset?
outgain?
q?
rate?
ratio?
release?
resolution?
shape?
size?
threshold?
time?
type?#*

AudioEffectType#*

??AudioEffectType
Bitcrusher?#*
Delay?#*
Gain?#*
HPF2?#*
LPF2?#*
Reverb1?#*
Tremolo?#*
PeakEQ?#*
HiShelf?#*
LoShelf?#*
EQ?#*
Compressor?#*

AudioLFOType#*

??AudioLFOType
InvSawtooth?#*
Sawtooth?#*
Sine?#*
Square?#*
Triangle?#*

audio_bus_create()
audio_effect_create(type, [params])
audio_emitter_bus(emitter_idx, bus)
audio_emitter_get_bus(emitter_idx)
audio_bus_get_emitters(bus)
audio_bus_clear_emitters(bus)

lin_to_db(x)
db_to_lin(x)

flexpanel_create_node([struct])
flexpanel_delete_node(node)
flexpanel_node_insert_child(node,child,index)
flexpanel_node_remove_child(node,child)
flexpanel_node_remove_all_children(node)
flexpanel_node_get_num_children(node)
flexpanel_node_get_child(node,indexOrName)
flexpanel_node_get_child_hash(node,hashOrName)
flexpanel_node_get_parent(node)
flexpanel_node_get_name(node)
flexpanel_node_get_data(node)
flexpanel_node_set_name(node,name)
flexpanel_node_set_data(node,dataStruct)
flexpanel_node_get_struct(node)
flexpanel_calculate_layout(node,width,height,direction)
flexpanel_node_layout_get_position(node,[relative])
flexpanel_node_style_get_align_content(node)
flexpanel_node_style_get_align_items(node)
flexpanel_node_style_get_align_self(node)
flexpanel_node_style_get_aspect_ratio(node)
flexpanel_node_style_get_display(node)
flexpanel_node_style_get_flex(node)
flexpanel_node_style_get_flex_grow(node)
flexpanel_node_style_get_flex_shrink(node)
flexpanel_node_style_get_flex_basis(node)
flexpanel_node_style_get_flex_direction(node)
flexpanel_node_style_get_flex_wrap(node)
flexpanel_node_style_get_gap(node,gutter)
flexpanel_node_style_get_position(node,edge)
flexpanel_node_style_get_justify_content(node)
flexpanel_node_style_get_direction(node)
flexpanel_node_style_get_margin(node,edge)
flexpanel_node_style_get_padding(node,edge)
flexpanel_node_style_get_border(node,edge)
flexpanel_node_style_get_position_type(node)
flexpanel_node_style_get_min_width(node)
flexpanel_node_style_get_max_width(node)
flexpanel_node_style_get_min_height(node)
flexpanel_node_style_get_max_height(node)
flexpanel_node_style_get_width(node)
flexpanel_node_style_get_height(node)
flexpanel_node_style_set_align_content(node,align)
flexpanel_node_style_set_align_items(node,align)
flexpanel_node_style_set_align_self(node,align)
flexpanel_node_style_set_aspect_ratio(node,aspect_ratio)
flexpanel_node_style_set_display(node,display)
flexpanel_node_style_set_flex(node,value)
flexpanel_node_style_set_flex_grow(node,grow)
flexpanel_node_style_set_flex_shrink(node,shrink)
flexpanel_node_style_set_flex_basis(node,value,unit)
flexpanel_node_style_set_flex_direction(node,direction)
flexpanel_node_style_set_flex_wrap(node,wrap)
flexpanel_node_style_set_gap(node,gutter,size)
flexpanel_node_style_set_position(node,edge,value,unit)
flexpanel_node_style_set_justify_content(node,justify)
flexpanel_node_style_set_direction(node,flexpanel_direction)
flexpanel_node_style_set_margin(node,edge,value)
flexpanel_node_style_set_padding(node,edge,value)
flexpanel_node_style_set_border(node,edge,value)
flexpanel_node_style_set_position_type(node,type)
flexpanel_node_style_set_min_width(node,value,unit)
flexpanel_node_style_set_max_width(node,value,unit)
flexpanel_node_style_set_min_height(node,value,unit)
flexpanel_node_style_set_max_height(node,value,unit)
flexpanel_node_style_set_width(node,width,unit)
flexpanel_node_style_set_height(node,height,unit)
`
);

function highlightCodeBlocks() {
    for (let el of document.querySelectorAll(".lang-gml")) {
        var tks = [];
        gml_string.parse(el.innerText, tks);
        gml_string.hintLocals(tks);

        // Transform each line into a list item, tidy things up,
        // make sure empty lines are included, and then wrap the
        // whole thing as an ordered list.
        var lines = gml_string.renderToHTML(tks, "gml").split("\n");
        inner = lines.join("</li><li>");
        inner = "<li>" + inner.substring(0, inner.length - 4);
        inner = inner.replace(/<li><\/li>/g, "<li>&nbsp;</li>");
        inner = "<ol class=\"linenums dark\">" + inner + "</ol>";
        el.innerHTML = inner;
    }
}
if (document.readyState == "loading") {
    document.addEventListener('DOMContentLoaded', highlightCodeBlocks);
} else highlightCodeBlocks();