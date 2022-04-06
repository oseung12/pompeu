package com.pompeu.user.party.service.Impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.pompeu.domain.Party;
import com.pompeu.user.party.dao.UserPartyDao;
import com.pompeu.user.party.service.UserPartyService;

@Service
public class DefaultUserPartyService implements UserPartyService{

  @Autowired
  UserPartyDao userPartyDao;

  /**
   * 게시판 목록
   */
  @Override
  public List<Party> list() {
    return userPartyDao.findAll();
  }

  /**
   * 게시판 등록
   */
  @Override
  @Transactional
  public int add(Party party) {
    return userPartyDao.insert(party);
  }

  /**
   * 게시판 상세
   */
  @Override
  public Party get(int no) {
    return userPartyDao.findByNo(no);
  }

  /**
   * 게시판 수정
   */
  @Override
  @Transactional
  public int update(Party party) {
    return userPartyDao.update(party);
  }

  /**
   * 게시판 삭제
   */
  @Override
  @Transactional
  public int delete(int no) {
    return userPartyDao.delete(no);
  }

}