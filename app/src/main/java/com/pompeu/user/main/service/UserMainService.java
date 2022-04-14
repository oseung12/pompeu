package com.pompeu.user.main.service;

import java.util.List;
import java.util.Map;
import com.pompeu.domain.LectureLike;
import com.pompeu.domain.Member;

public interface UserMainService {

  List<Member> list();

  int add(Member member);

  Member get(int no);

  int update(Member member);

  int delete(int no);

  List<Map<Object, Object>> findTopLecture();

  int didICount(LectureLike lectureLike);

  List<Map<Object, Object>> findTopLecture2(int no);

  //  Object memberStatus();
  //
  //  Object lectureStatus();
  //
  //  Object undoStatusApply();
  //
  //  Object undoStatusClaim();
  //
  //  Object memberSummary(int month);

}